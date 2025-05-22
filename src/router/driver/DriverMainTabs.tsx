import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Screens} from '@src/constants/screens';
import {Theme} from '@src/constants/colors';
import {Icon} from '@src/core/Icon';
import {Test} from '@src/modules/driver/Test';

const Tabs = createBottomTabNavigator();
interface TabBarOptionsProps {
  title?: string;
  iconName: string;
  iconType?: 'ion' | 'fa' | 'feather' | 'ant' | 'ent' | 'mat';
  size?: number;
}

export const DriverMainTabs = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarLabelStyle: {
      fontWeight: 'bold',
    },
    tabBarActiveTintColor: Theme.primary,
    tabBarInactiveTintColor: Theme.inactive_text,
    tabBarStyle: {
      backgroundColor: Theme.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabBarShowLabel: false,
    tabBarItemStyle: {marginTop: 12},
  };

  function tabBarOptions({iconName, iconType, size = 35}: TabBarOptionsProps) {
    const options: BottomTabNavigationOptions = {
      tabBarIcon: ({color, focused}: any) => {
        return (
          <>
            <Icon
              name={iconName}
              color={color}
              type={iconType || 'mat'}
              size={25}
            />
          </>
        );
      },
    };

    return options;
  }
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name={Screens.driverDashboard}
        component={Test}
        options={tabBarOptions({iconName: 'bar-chart'})}
        initialParams={{open: true}}
      />
      <Tabs.Screen
        name={'1'}
        component={Test}
        options={tabBarOptions({iconName: 'content-paste', size: 30})}
        initialParams={{open: true}}
      />
      <Tabs.Screen
        name={'12'}
        component={Test}
        options={tabBarOptions({iconName: 'insert-drive-file', size: 25})}
        initialParams={{open: true}}
      />
      <Tabs.Screen
        name={'13'}
        component={Test}
        options={tabBarOptions({iconName: 'notifications'})}
        initialParams={{open: true}}
      />
      <Tabs.Screen
        name={'14'}
        component={Test}
        options={tabBarOptions({iconName: 'settings', size: 25})}
        initialParams={{open: true}}
      />
    </Tabs.Navigator>
  );
};
