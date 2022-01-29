import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { ColorBaseGrayEnum } from 'styles/Colors';

import { TitleProps } from './Title.type';

const StyledTitle = styled(Text)`
  font-size: ${(props: TitleProps) =>
    props.variant === 'title1'
      ? '36px'
      : props.variant === 'title2'
      ? '24px'
      : props.variant === 'title3'
      ? '20px'
      : props.variant === 'subtitle'
      ? '18px'
      : '36px'};
  line-height: ${(props: TitleProps) =>
    props.variant === 'title1'
      ? '52px'
      : props.variant === 'title2'
      ? '36px'
      : props.variant === 'title3'
      ? '32px'
      : props.variant === 'subtitle'
      ? '26px'
      : '52px'};
  /* props.fontStyle will be overide props.bold */
  font-family: ${(props: TitleProps) =>
    props.fontStyle ? props.fontStyle : props.bold ? 'Inter-SemiBold' : 'Inter-Medium'};
  color: ${(props: TitleProps) => props.color || ColorBaseGrayEnum.gray600};
  padding: ${(props: TitleProps) => (props.padding ? `${props.padding}px` : 0)};
  text-align: ${({ textAlign }: TitleProps) => textAlign || 'left'};
  text-transform: ${({ textTransform }: TitleProps) => textTransform || 'capitalize'};
`;

const Title = (props: TitleProps) => {
  return <StyledTitle {...props}>{props.label}</StyledTitle>;
};

export default Title;
