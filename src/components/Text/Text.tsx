import React, {useMemo} from 'react';
import {Text as RNText} from 'react-native';
import styled from 'styled-components';

import {TextProps} from './Text.type';

const StyledText = styled(RNText)`
  font-size: ${(props: TextProps) =>
    props.variant === 'extra-large'
      ? '20px'
      : props.variant === 'x-large'
      ? '18px'
      : props.variant === 'large'
      ? '16px'
      : props.variant === 'regular'
      ? '14px'
      : props.variant === 'small'
      ? '13px'
      : props.variant === 'super-small'
      ? '12px'
      : props.variant === 'micro'
      ? '10px'
      : '14px'};
  line-height: ${(props: TextProps) =>
    props.variant === 'extra-large'
      ? '30px'
      : props.variant === 'x-large'
      ? '26px'
      : props.variant === 'large'
      ? '22px'
      : props.variant === 'regular'
      ? '20px'
      : props.variant === 'small'
      ? '18px'
      : props.variant === 'super-small'
      ? '16px'
      : props.variant === 'micro'
      ? '14px'
      : '20px'};
  text-transform: ${({textTransform}: TextProps) => textTransform || 'none'};
  text-decoration: ${({textDecoration}: TextProps) => textDecoration || 'none'};
  color: ${(props: TextProps) =>
    props.isError ? 'red' : props.color || 'black'};
  text-align: ${({textAlign}: TextProps) => textAlign || 'left'};
  margin-top: ${(props: TextProps) => props.marginTop || 0};
  margin-bottom: ${(props: TextProps) => props.marginBottom || 0};
  margin-left: ${(props: TextProps) => props.marginLeft || 0};
  margin-right: ${(props: TextProps) => props.marginRight || 0};
  font-weight: ${(props: TextProps) => (props.bold ? 'bold' : 'normal')};
  /* props.fontStyle will be overide props.bold */
`;

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Text = (props: TextProps) => {
  const labelText = useMemo(() => {
    let text = props.label;

    if (props.textTransformCustom) {
      const funcTransformCustom = {
        capitalizeFirstLetter,
      };
      text = funcTransformCustom[props.textTransformCustom](props.label || '');
    }

    return text;
  }, [props.label, props.textTransformCustom]);

  return <StyledText {...props}>{labelText}</StyledText>;
};

export default Text;
