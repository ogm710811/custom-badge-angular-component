import {BadgeTemplates} from '../enums/badge-templates.enum';
import {BadgeColors} from '../enums/badge-colors.enum';
import {BadgeIconPositions} from '../enums/badge-icon-positions.enum';
import {BadgeTextDescriptions} from '../enums/badge-text-descriptions.enum';
import {BadgeIcons} from '../enums/badge-icons.enum';

export interface BadgeSettings {
  templateType: BadgeTemplates;
  backgroundColor?: BadgeColors;
  badgeClasses?: string[];
  text?: BadgeTextDescriptions;
  iconClasses?: BadgeIcons[];
  iconPosition?: BadgeIconPositions;
  dynamicText?(): string;
}
