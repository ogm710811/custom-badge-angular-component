import {Component, OnDestroy} from '@angular/core';
import {BadgeSettings} from './share/models/badge-settings';
import {BadgeTemplates} from './share/enums/badge-templates.enum';
import {BadgeColors} from './share/enums/badge-colors.enum';
import {BadgeTextDescriptions} from './share/enums/badge-text-descriptions.enum';
import {BadgeIcons} from './share/enums/badge-icons.enum';
import {BadgeIconPositions} from './share/enums/badge-icon-positions.enum';

@Component({
  selector: 'fox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  toggle = true;

  recordLocked: BadgeSettings = {
    templateType: BadgeTemplates.iconText,
    backgroundColor: BadgeColors.recordLocked,
    badgeClasses: ['bd-chip-icon-text', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.recordLocked,
    iconClasses: [BadgeIcons.recordLocked],
    iconPosition: BadgeIconPositions.before
  };

  recordLockedIcon: BadgeSettings = {
    templateType: BadgeTemplates.icon,
    backgroundColor: BadgeColors.recordLocked,
    badgeClasses: ['bd-chip-icon', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.recordLocked,
    iconClasses: [BadgeIcons.recordLocked]
  };

  queue: BadgeSettings = {
    templateType: BadgeTemplates.iconText,
    backgroundColor: BadgeColors.queue,
    badgeClasses: ['bd-chip-icon-text', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.queue,
    iconClasses: [BadgeIcons.queue],
    iconPosition: BadgeIconPositions.before
  };

  paperClaimIcon: BadgeSettings = {
    templateType: BadgeTemplates.icon,
    backgroundColor: BadgeColors.paperClaim,
    badgeClasses: ['bd-chip-icon', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.paperClaim,
    iconClasses: [BadgeIcons.paperClaim]
  };

  specialHandlingCode: BadgeSettings = {
    templateType: BadgeTemplates.iconText,
    backgroundColor: BadgeColors.specialHC,
    badgeClasses: ['bd-chip-icon-text', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.specialHC,
    iconClasses: [BadgeIcons.specialHC],
    iconPosition: BadgeIconPositions.before
  };

  requestDenied: BadgeSettings = {
    templateType: BadgeTemplates.iconText,
    backgroundColor: BadgeColors.requestDenied,
    badgeClasses: ['bd-chip-icon-text', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.requestDenied,
    iconClasses: [BadgeIcons.requestDenied],
    iconPosition: BadgeIconPositions.before
  };

  maintPending: BadgeSettings = {
    templateType: BadgeTemplates.iconText,
    backgroundColor: BadgeColors.maintPending,
    badgeClasses: ['bd-chip-icon-text', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.maintPending,
    iconClasses: [BadgeIcons.maintPending],
    iconPosition: BadgeIconPositions.before
  };

  paperClaim: BadgeSettings = {
    templateType: BadgeTemplates.iconText,
    backgroundColor: BadgeColors.paperClaim,
    badgeClasses: ['bd-chip-icon-text', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.paperClaim,
    iconClasses: [BadgeIcons.paperClaim],
    iconPosition: BadgeIconPositions.before
  };

  pendingApproval: BadgeSettings = {
    templateType: BadgeTemplates.iconText,
    backgroundColor: BadgeColors.pendingApproval,
    badgeClasses: ['bd-chip-icon-text', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.pendingApproval,
    iconClasses: [BadgeIcons.pendingApproval],
    iconPosition: BadgeIconPositions.before
  };

  memberMigrated: BadgeSettings = {
    templateType: BadgeTemplates.iconText,
    backgroundColor: BadgeColors.memberMigrated,
    badgeClasses: ['bd-chip-icon-text', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.memberMigrated,
    iconClasses: [BadgeIcons.memberMigrated],
    iconPosition: BadgeIconPositions.before
  };

  iconAfterTextDescription: BadgeSettings = {
    templateType: BadgeTemplates.iconText,
    backgroundColor: BadgeColors.memberMigrated,
    badgeClasses: ['bd-chip-icon-text', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.memberMigrated,
    iconClasses: [BadgeIcons.memberMigrated],
    iconPosition: BadgeIconPositions.after
  };

  noIcon: BadgeSettings = {
    templateType: BadgeTemplates.iconText,
    backgroundColor: BadgeColors.queue,
    badgeClasses: ['bd-chip-icon-text', 'bd-chip-hover', 'bd-chip-clickable'],
    text: BadgeTextDescriptions.queue,
    iconClasses: [BadgeIcons.queue],
    iconPosition: BadgeIconPositions.none
  };

  dynamicText: BadgeSettings = {
    templateType: BadgeTemplates.iconText,
    backgroundColor: BadgeColors.paperClaim,
    badgeClasses: ['bd-chip-icon-text', 'bd-chip-hover', 'bd-chip-clickable'],
    dynamicText: () => {
      if (this.toggle) {
        return 'dynamic text';
      } else {
        return 'dynamic text changed';
      }
    },
    iconClasses: [BadgeIcons.paperClaim],
    iconPosition: BadgeIconPositions.before
  };

  id = setInterval(() => {
    this.setDynamicText();
  }, 1000);

  setDynamicText(): void {
    this.toggle = !this.toggle;
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
