/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Dimensions} from 'react-native';
import styled from 'styled-components';
import {MarginEnum} from '../../styles/Spacer';
import {Text} from '../Text';

const Container = styled(View)`
  min-height: 200px;
  width: 100%;
  border-radius: 12px;
  border-width: 1px;
  border-color: gray;
`;

interface ICardAdvertismentProps {
  desc: {
    title: string;
    value: string;
  };
}

const screenWidth = Dimensions.get('screen').width;

const CardAdvertisment = (props: ICardAdvertismentProps) => {
  return (
    <Container>
      <View style={{flex: 4.5}}>
        <Image
          source={require('../../assets/images/blankContent.png')}
          width={screenWidth - 34}
          resizeMode="cover"
          style={{
            width: screenWidth - 34,
            height: 180,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
          height={180}
        />
      </View>
      <View style={{flex: 1.5, padding: 14}}>
        <Text
          label={props.desc.title}
          marginBottom={MarginEnum['0.5x']}
          bold
          variant="large"
        />
        <Text label={props.desc.value} />
      </View>
    </Container>
  );
};

export default CardAdvertisment;
