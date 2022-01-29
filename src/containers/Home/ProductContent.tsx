/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Text} from '../../components/Text';
import {ContainerSection} from '../../layout/Container';
import {FlexRow} from '../../layout/Flex';
import {MarginEnum} from '../../styles/Spacer';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {IProductContent} from '../../interface/Home';

const screenWidth = Dimensions.get('screen').width;

const ProductContent = ({product}: {product: IProductContent}) => {
  const RenderIcon = useMemo(() => {
    return {
      gojek: (
        <IconMaterialComunity name="alpha-g-circle" size={16} color={'green'} />
      ),
      gomart: <IconFA5 name="shopping-basket" size={16} color={'red'} />,
    };
  }, []);

  const renderItemCarousel = ({item}: {item: any}) => {
    return (
      <View
        style={{
          borderRadius: 12,
          borderWidth: 1,
          borderColor: 'gray',
          height: item.rate ? 270 : 'auto',
        }}
        key={item.id}>
        <View>
          <Image
            source={require('../../assets/images/blankContent.png')}
            width={160}
            resizeMode="cover"
            style={{
              width: 160,
              height: 150,
              borderRadius: 12,
            }}
            height={150}
          />
        </View>
        <View
          style={{
            padding: 8,
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View>
            <Text label={item.title} bold numberOfLines={2} />
            {item.category && (
              <Text label={item.category} variant="small" numberOfLines={2} />
            )}
          </View>
          {item.rate && (
            <FlexRow>
              <IconAnt name="star" size={16} color={'orange'} />
              <Text label={item.rate} marginLeft={MarginEnum['1x']} />
            </FlexRow>
          )}
        </View>
      </View>
    );
  };
  return (
    <View style={{paddingTop: 32}}>
      <ContainerSection>
        <FlexRow>
          {RenderIcon[product.detail.title]}
          <Text
            label={product.detail.title}
            variant="large"
            bold
            marginLeft={MarginEnum['0.5x']}
          />
        </FlexRow>
        <FlexRow style={{marginTop: 10, justifyContent: 'space-between'}}>
          <Text
            label={product.detail.subtitle}
            marginBottom={MarginEnum['0.5x']}
            variant="large"
            bold
          />
          {product.detail.button && (
            <TouchableOpacity
              style={{
                backgroundColor: '#d8ffd4',
                borderRadius: 12,
                paddingHorizontal: 10,
                paddingVertical: 4,
              }}>
              <Text label={product.detail.button.label} color="#448a3d" bold />
            </TouchableOpacity>
          )}
        </FlexRow>
        {!!product.detail.desc && (
          <Text label={product.detail.desc} numberOfLines={2} />
        )}
      </ContainerSection>
      <Carousel
        data={product.productContentList}
        renderItem={renderItemCarousel}
        sliderWidth={500}
        itemWidth={160}
        slideStyle={{marginTop: 14, marginLeft: 14}}
        containerCustomStyle={{marginLeft: -(screenWidth * 0.4)}}
        inactiveSlideScale={1}
      />
    </View>
  );
};

export default ProductContent;
