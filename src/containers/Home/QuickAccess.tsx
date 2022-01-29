/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {View} from 'react-native';
import {Text} from '../../components/Text';
import {ContainerSection} from '../../layout/Container';
import {FlexRow} from '../../layout/Flex';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {MarginEnum} from '../../styles/Spacer';

const QuickAccess = () => {
  const menuQuickAccess = useMemo(
    () => [
      {
        id: 1,
        label: 'Ada voucher nganggur, nih',
        icon: (
          <IconMaterialComunity
            name="brightness-percent"
            color={'green'}
            size={22}
          />
        ),
        onClick: () => undefined,
      },
      {
        id: 2,
        label: 'Restoran terdekat',
        icon: <IconMaterial name="restaurant" size={20} color={'red'} />,
        onClick: () => undefined,
      },
    ],
    [],
  );
  return (
    <ContainerSection paddingTop={14}>
      <View>
        <Text
          label="Akses cepat"
          bold
          variant="x-large"
          marginBottom={MarginEnum['1x']}
        />
        {menuQuickAccess.map((item, index) => (
          <FlexRow
            style={{
              padding: 14,
              borderWidth: 1,
              borderBottomWidth: index === 0 ? 0 : 1,
              borderColor: 'gray',
              borderTopLeftRadius: index === 0 ? 12 : 0,
              borderTopRightRadius: index === 0 ? 12 : 0,
              borderBottomLeftRadius:
                index === menuQuickAccess.length - 1 ? 12 : 0,
              borderBottomRightRadius:
                index === menuQuickAccess.length - 1 ? 12 : 0,
            }}
            key={item.id}>
            <View style={{flex: 1}}>{item.icon}</View>
            <View
              style={{
                flex: 4,
                marginLeft: -16,
              }}>
              <Text label={item.label} />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <IconAnt name="right" size={16} />
            </View>
          </FlexRow>
        ))}
      </View>
    </ContainerSection>
  );
};

export default QuickAccess;
