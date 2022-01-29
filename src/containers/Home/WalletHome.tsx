/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {Text} from '../../components/Text';
import {ContainerSection} from '../../layout/Container';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconIon from 'react-native-vector-icons/Ionicons';
import {FlexCol, FlexRow} from '../../layout/Flex';

const CardWallet = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #5292ce;
  border-radius: 14px;
  padding: 16px;
`;

const CardMiniWallet = styled(View)`
  background-color: white;
  border-radius: 12px;
  flex: 2;
  padding: 8px;
`;

const WalletHome = () => {
  return (
    <ContainerSection paddingTop={20}>
      <CardWallet>
        <CardMiniWallet>
          <FlexRow>
            <IconEntypo name="wallet" size={14} />
            <Text
              label="gopay"
              style={{marginLeft: 2}}
              bold
              variant="regular"
            />
          </FlexRow>
          <Text label="Rp521.043" variant="micro" bold />
          <TouchableOpacity>
            <Text
              label="Klik & cek riwayat"
              variant="super-small"
              color="green"
            />
          </TouchableOpacity>
        </CardMiniWallet>
        <FlexRow style={{flex: 3}}>
          <FlexCol>
            <IconEntypo name="squared-plus" size={24} color="white" />
            <Text label="Isi Saldo" color="white" bold />
          </FlexCol>
          <FlexCol>
            <IconFA5 name="caret-square-up" color="white" size={24} />
            <Text label="Bayar" color="white" bold />
          </FlexCol>
          <FlexCol>
            <View
              style={{backgroundColor: 'white', padding: 2, borderRadius: 4}}>
              <IconIon name="md-rocket-sharp" color={'#5292ce'} size={16} />
            </View>
            <Text label="Eksplor" color="white" bold />
          </FlexCol>
        </FlexRow>
      </CardWallet>
    </ContainerSection>
  );
};

export default WalletHome;
