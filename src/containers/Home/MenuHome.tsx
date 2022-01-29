/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../../components/Text';
import {ContainerSection} from '../../layout/Container';
import {FlexRow} from '../../layout/Flex';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {MarginEnum} from '../../styles/Spacer';

const MenuHome = () => {
  const menuList = useMemo(
    () => [
      {
        id: 1,
        label: 'GoRide',
        onClick: () => undefined,
        Icon: () => (
          <IconFontisto name="motorcycle" size={24} color={'green'} />
        ),
      },
      {
        id: 2,
        label: 'GoCar',
        onClick: () => undefined,
        Icon: () => <IconIon name="car" size={24} color={'green'} />,
      },
      {
        id: 3,
        label: 'GoFood',
        onClick: () => undefined,
        Icon: () => <IconIon name="fast-food" size={24} color={'red'} />,
      },
      {
        id: 4,
        label: 'GoSend',
        onClick: () => undefined,
        Icon: () => <IconFA5 name="box" size={24} color={'green'} />,
      },
      {
        id: 5,
        label: 'GoMart',
        onClick: () => undefined,
        Icon: () => <IconFA5 name="shopping-basket" size={24} color={'red'} />,
      },
      {
        id: 6,
        label: 'GoPulsa',
        onClick: () => undefined,
        Icon: () => (
          <IconSimpleLine name="screen-smartphone" size={24} color={'blue'} />
        ),
      },
      {
        id: 7,
        label: 'GoClub',
        onClick: () => undefined,
        Icon: () => <IconAnt name="star" size={24} color={'purple'} />,
      },
      {
        id: 8,
        label: 'Lainnya',
        onClick: () => undefined,
        Icon: () => <FlexRow />,
      },
    ],
    [],
  );
  return (
    <ContainerSection paddingTop={4}>
      <FlexRow flexWrap="wrap" style={{justifyContent: 'space-between'}}>
        {menuList.map(menu => (
          <TouchableOpacity
            key={menu.id}
            style={{
              flexBasis: '20%',
              height: 60,
              margin: 2,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: menu.label === 'GoSend' ? 4 : 0,
            }}>
            <menu.Icon />
            <Text label={menu.label} marginTop={MarginEnum['0.5x']} />
          </TouchableOpacity>
        ))}
      </FlexRow>
    </ContainerSection>
  );
};

export default MenuHome;
