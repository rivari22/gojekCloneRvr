import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import PromoScreen from './screens/PromoScreen';
import OrderScreen from './screens/OrderScreen';
import ChatScreen from './screens/ChatScreen';
import {NavigationContainer} from '@react-navigation/native';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const TabBottom = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TabBottom.Navigator initialRouteName="Home">
        <TabBottom.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconFoundation name="home" color={color} size={size} />
            ),
            tabBarActiveTintColor: 'green',
          }}
        />
        <TabBottom.Screen
          name="Promo"
          component={PromoScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconMaterialComunity
                name="brightness-percent"
                color={color}
                size={size}
              />
            ),
            tabBarActiveTintColor: 'green',
          }}
        />
        <TabBottom.Screen
          name="Order"
          component={OrderScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconEntypo
                name="text-document-inverted"
                color={color}
                size={size}
              />
            ),
            tabBarActiveTintColor: 'green',
            title: 'Pesanan',
          }}
        />
        <TabBottom.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconMaterial name="chat" color={color} size={size} />
            ),
            tabBarActiveTintColor: 'green',
          }}
        />
      </TabBottom.Navigator>
    </NavigationContainer>
  );
};
export default App;
