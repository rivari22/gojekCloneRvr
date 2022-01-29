/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Dimensions} from 'react-native';
import {Text} from '../../components/Text';
import {ContainerSection} from '../../layout/Container';
import {MarginEnum} from '../../styles/Spacer';
import Carousel from 'react-native-snap-carousel';

interface PromotionHome {
  id: number;
  image: string;
}

const promotionList: Array<PromotionHome> = [
  {id: 1, image: ''},
  {id: 2, image: ''},
];

const screenWidth = Dimensions.get('screen').width;

const PromotionHome = () => {
  const renderItemCarousel = ({item}: {item: PromotionHome}) => {
    return (
      <View
        style={{
          marginLeft: 16,
          borderRadius: 12,
        }}
        key={item.id}>
        <Image
          source={require('../../assets/images/blankContent.png')}
          width={screenWidth - 60}
          resizeMode="cover"
          style={{
            width: screenWidth - 60,
            height: 150,
            borderRadius: 12,
          }}
          height={150}
        />
      </View>
    );
  };

  return (
    <View style={{paddingTop: 32}}>
      <ContainerSection style={{marginBottom: 14}}>
        <Text
          label="Belanja makin hemat"
          bold
          variant="large"
          marginBottom={MarginEnum['1x']}
        />
        <Text label="Dapetin diskon dan harga spesialny di Tokopedia sekarang sebelum kehabisan!" />
      </ContainerSection>
      <Carousel
        data={promotionList}
        renderItem={renderItemCarousel}
        sliderWidth={screenWidth - 32}
        itemWidth={screenWidth - 32}
      />
    </View>
  );
};

export default PromotionHome;
