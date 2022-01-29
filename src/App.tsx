import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import PromoScreen from './screens/PromoScreen';
import OrderScreen from './screens/OrderScreen';
import ChatScreen from './screens/ChatScreen';
import {NavigationContainer} from '@react-navigation/native';
import IconFoundation from 'react-native-vector-icons/Foundation';

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
        <TabBottom.Screen name="Promo" component={PromoScreen} />
        <TabBottom.Screen name="Order" component={OrderScreen} />
        <TabBottom.Screen name="Chat" component={ChatScreen} />
      </TabBottom.Navigator>
    </NavigationContainer>
  );
};
export default App;
