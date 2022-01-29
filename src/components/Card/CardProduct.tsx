/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {Text} from '../Text';

const ContainerCardProduct = styled(TouchableOpacity)`
  border: 1px solid gray;
  border-radius: 16px;
`;

interface ICardProductProps {
  image: string;
  title: string;
  desc?: string;
}

const screenWidth = Dimensions.get('screen').width;

const CardProduct = ({title, image}: ICardProductProps) => {
  return (
    <ContainerCardProduct>
      <View style={{flex: 5}}>
        <Image
          source={image || require('../../assets/images/blankContent.png')}
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
      <View style={{flex: 1}}>
        <Text label={title} bold variant="large" />
      </View>
    </ContainerCardProduct>
  );
};

export default CardProduct;
