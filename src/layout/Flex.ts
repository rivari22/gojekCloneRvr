import {View} from 'react-native';
import styled from 'styled-components';

export const FlexRow = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: ${({flexWrap}: {flexWrap?: 'wrap'}) => flexWrap ?? 'nowrap'};
`;

export const FlexCol = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: auto;
`;
