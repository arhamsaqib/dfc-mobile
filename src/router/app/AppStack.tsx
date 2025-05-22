import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Screens} from '@src/constants/screens';
import {AuthStack} from '../auth/AuthStack';
import {DriverMainTabs} from '../driver/DriverMainTabs';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name={Screens.splash} component={SplashScreen} /> */}
        <Stack.Screen
          name={Screens.navigators.authStack}
          component={AuthStack}
        />
        <Stack.Screen
          name={Screens.navigators.driverMainTabs}
          component={DriverMainTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
