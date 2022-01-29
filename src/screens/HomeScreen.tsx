/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card} from '../components/Card';
import LevelHome from '../containers/Home/LevelHome';
import MenuHome from '../containers/Home/MenuHome';
import PromotionHome from '../containers/Home/PromotionHome';
import QuickAccess from '../containers/Home/QuickAccess';
import WalletHome from '../containers/Home/WalletHome';
import {ContainerSection} from '../layout/Container';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import ProductContent from '../containers/Home/ProductContent';
import {advertistmentList, ProductList} from '../mocks/Home';

const screenWidth = Dimensions.get('screen').width;

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    return navigation.setOptions({
      headerLeft: () => (
        <View
          style={{
            backgroundColor: 'white',
            width: screenWidth * 0.81,
            marginLeft: 12,
            borderRadius: 12,
            height: 32,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 12,
          }}>
          <IconAnt name="search1" size={18} />
          <TextInput
            placeholder="Cari layanan, makanan, & tujuan"
            style={{padding: 8}}
          />
        </View>
      ),
      headerTitle: '',
      headerRight: () => (
        <TouchableOpacity
          style={{
            borderRadius: 16,
            backgroundColor: 'white',
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12,
            marginBottom: 10,
          }}>
          <IconFA5 name="user-alt" color={'green'} size={18} />
        </TouchableOpacity>
      ),
      headerStyle: {backgroundColor: 'green'},
    });
  });

  return (
    <ScrollView style={{flex: 1, marginBottom: 40}}>
      <WalletHome />
      <MenuHome />
      <LevelHome />
      <QuickAccess />
      <ContainerSection paddingTop={24}>
        <Card.Advertisment
          desc={{
            title: advertistmentList[0].desc.title,
            value: advertistmentList[0].desc.value,
          }}
        />
      </ContainerSection>
      <PromotionHome />
      <ContainerSection paddingTop={24}>
        <Card.Advertisment
          desc={{
            title: advertistmentList[1].desc.title,
            value: advertistmentList[1].desc.value,
          }}
        />
      </ContainerSection>
      <ProductContent product={ProductList.gomart} />
      <ProductContent product={ProductList.gojek1} />
      <ContainerSection paddingTop={24}>
        <Card.Advertisment
          desc={{
            title: advertistmentList[2].desc.title,
            value: advertistmentList[2].desc.value,
          }}
        />
      </ContainerSection>
      <ProductContent product={ProductList.gojek2} />
    </ScrollView>
  );
};

export default HomeScreen;
