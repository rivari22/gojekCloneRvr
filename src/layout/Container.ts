import {View} from 'react-native';
import styled from 'styled-components';

export const ContainerSection = styled(View)`
  padding: ${({paddingTop}: {paddingTop?: number}) => paddingTop ?? 0}px 16px 0
    16px;
`;
