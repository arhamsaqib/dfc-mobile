import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@src/modules/auth/LoginScreen';
import {RegisterScreen} from '@src/modules/auth/RegisterScreen';
import {Screens} from '@src/constants/screens';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.login} component={LoginScreen} />
      <Stack.Screen name={Screens.register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
