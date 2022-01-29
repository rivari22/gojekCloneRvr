import {StyleProp, TextStyle} from 'react-native';
import {MarginEnum} from '../../styles/Spacer';

export type TextVariant =
  | 'extra-large'
  | 'x-large'
  | 'large'
  | 'regular'
  | 'small'
  | 'super-small'
  | 'micro';
export type TextAlign = 'left' | 'center' | 'right';
export type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';
export type TextDecoration = 'underline' | 'none' | 'line-through';

export type FontStyle = 'Inter-Light' | 'Inter-Medium' | 'Inter-SemiBold';

export interface TextProps {
  label?: string;
  fontStyle?: FontStyle;
  color?: string;
  variant?: TextVariant;
  bold?: boolean;
  textAlign?: TextAlign;
  textTransform?: TextTransform;
  textDecoration?: TextDecoration;
  marginTop?: MarginEnum;
  marginRight?: MarginEnum;
  marginBottom?: MarginEnum;
  marginLeft?: MarginEnum;
  numberOfLines?: number;
  isError?: boolean;
  accessibilityLabel?: string;
  style?: StyleProp<TextStyle>;
  textTransformCustom?: 'capitalizeFirstLetter';
}
