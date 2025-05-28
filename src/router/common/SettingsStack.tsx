import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '@src/constants/screens';
import {SettingsScreen} from '@src/modules/common/Settings/SettingsScreen';
import {ProfileScreen} from '@src/modules/common/Settings/ProfileScreen';
import {SecurityScreen} from '@src/modules/common/Settings/SecurityScreen';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.settingScreen} component={SettingsScreen} />
      <Stack.Screen name={Screens.profileScreen} component={ProfileScreen} />
      <Stack.Screen name={Screens.securityScreen} component={SecurityScreen} />
    </Stack.Navigator>
  );
};
