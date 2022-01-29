/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {ContainerSection} from '../../layout/Container';
import {FlexRow} from '../../layout/Flex';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {ProgressView} from '@react-native-community/progress-view';
import {Text} from '../../components/Text';
import {MarginEnum} from '../../styles/Spacer';

const LevelHome = () => {
  return (
    <ContainerSection paddingTop={14}>
      <FlexRow
        style={{
          padding: 14,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: 'gray',
        }}>
        <View style={{flex: 1}}>
          <IconAnt name="star" size={28} color={'orange'} />
        </View>
        <View
          style={{
            flex: 4,
            alignSelf: 'flex-start',
            marginBottom: 10,
          }}>
          <Text
            label="76 XP lagi ada Harta Karun"
            bold
            variant="small"
            marginBottom={MarginEnum['0.5x']}
          />
          <ProgressView progressTintColor="green" progress={0.7} />
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <IconAnt name="right" size={16} />
        </View>
      </FlexRow>
    </ContainerSection>
  );
};

export default LevelHome;
