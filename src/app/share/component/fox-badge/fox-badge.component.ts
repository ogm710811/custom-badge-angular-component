import {Component, Input, OnInit} from '@angular/core';
import {BadgeSettings} from '../../models/badge-settings';
import {BadgeTemplates} from '../../enums/badge-templates.enum';
import {BadgeColors} from '../../enums/badge-colors.enum';
import {BadgeIconPositions} from '../../enums/badge-icon-positions.enum';
import {BadgeTextDescriptions} from '../../enums/badge-text-descriptions.enum';
import {BadgeIcons} from '../../enums/badge-icons.enum';

@Component({
  selector: 'fox-badge',
  templateUrl: './fox-badge.component.html',
  styleUrls: ['./fox-badge.component.scss']
})
export class FoxBadgeComponent implements OnInit {
  public static readonly badgeSettingsDefault: BadgeSettings = {
    templateType: BadgeTemplates.iconText,
    backgroundColor: BadgeColors.requestApproved,
    badgeClasses: ['bd-chip-icon-text', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.requestApproved,
    iconClasses: [BadgeIcons.requestApproved],
    iconPosition: BadgeIconPositions.before
  };

  badgeTemplates = BadgeTemplates;
  badgeClasses: string[];

  @Input()
  set badgeParams(badgeParams: BadgeSettings) {
    this._badgeParams = {
      ...FoxBadgeComponent.badgeSettingsDefault,
      ...badgeParams
    };
  }

  get badgeParams(): BadgeSettings {
    console.log('BadgeSettings:::::', this._badgeParams);
    return this._badgeParams;
  }

  get showIconBefore(): boolean {
    return this.badgeParams.iconPosition === BadgeIconPositions.before;
  }

  get showIconAfter(): boolean {
    return this.badgeParams.iconPosition === BadgeIconPositions.after;
  }

  get displayText(): string {
    if (typeof this.badgeParams.dynamicText === 'function') {
      return this.badgeParams.dynamicText();
    }
    return this.badgeParams.text;
  }

  private _badgeParams: BadgeSettings;

  constructor() {}

  ngOnInit() {
    this.badgeClasses = this.badgeParams.badgeClasses
        .concat(this.badgeParams.backgroundColor);
  }

  currentTemplate(template: BadgeTemplates): boolean {
    return this.badgeParams.templateType === template;
  }

}
