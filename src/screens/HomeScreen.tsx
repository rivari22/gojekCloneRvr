import React from 'react';
import {View} from 'react-native';
import MenuHome from '../containers/Home/MenuHome';
import WalletHome from '../containers/Home/WalletHome';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <WalletHome />
      <MenuHome />
    </View>
  );
};

export default HomeScreen;
