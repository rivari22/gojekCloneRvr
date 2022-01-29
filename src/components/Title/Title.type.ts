import { FontStyle, TextAlign, TextTransform } from 'components/Text/Text.type';
import {
  ColorBaseEnum,
  ColorBaseGrayEnum,
  ColorPrimaryEnum,
  ColorSemanticDangerEnum,
  ColorSemanticInfoEnum,
  ColorSemanticPositiveEnum,
  ColorSemanticWarningEnum
} from 'styles/Colors';
import { PaddingEnum } from 'styles/Spacer';

export type TitleVariant = 'title1' | 'title2' | 'title3' | 'subtitle' | 'caption';

export interface TitleProps {
  label: string;
  variant?: TitleVariant;
  bold?: boolean;
  fontStyle?: FontStyle;
  padding?: PaddingEnum;
  textAlign?: TextAlign;
  textTransform?: TextTransform;
  color?:
    | ColorBaseEnum
    | ColorPrimaryEnum
    | ColorBaseGrayEnum
    | ColorSemanticInfoEnum
    | ColorSemanticDangerEnum
    | ColorSemanticPositiveEnum
    | ColorSemanticWarningEnum;
}
