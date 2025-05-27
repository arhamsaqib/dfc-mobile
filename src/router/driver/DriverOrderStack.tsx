import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@src/modules/auth/LoginScreen';
import {RegisterScreen} from '@src/modules/auth/RegisterScreen';
import {Screens} from '@src/constants/screens';
import {DriverOrdersScreen} from '@src/modules/driver/Orders/DriverOrdersScreen';

const Stack = createNativeStackNavigator();

export const DriverOrderStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={Screens.driverOrdersScreen}
        component={DriverOrdersScreen}
      />
    </Stack.Navigator>
  );
};
