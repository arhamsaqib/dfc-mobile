import {appStyle, ScreenProps, Screens, Theme} from '@src/constants';
import React, {useCallback, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {SettingItem} from './components/SettingItem';
import {Avatar, Card, Margin, ScreenWrapper} from '@src/components';
import {Button, Text, View} from '@src/core';

export const SettingsScreen = (props: ScreenProps) => {
  const {navigation} = props;

  const items = useMemo(
    () => [
      {
        title: 'Profile Management',
        icon: {type: 'ion', name: 'person-outline'},
        onPress: () => navigation.push(Screens.profileScreen),
      },
      {
        title: 'Notifications',
        icon: {type: 'fa', name: 'bell'},
        // onPress: () => navigation.push(Screens.securityScreen),
      },
      {
        title: 'Language & Locale',
        icon: {type: 'fa', name: 'globe'},
        // onPress: () => navigation.push(Screens.securityScreen),
      },
      {
        title: 'Account Security',
        icon: {type: 'fa', name: 'shield'},
        onPress: () => navigation.push(Screens.securityScreen),
      },
      {
        title: 'Privacy Settings',
        icon: {type: 'fa', name: 'lock'},
        // onPress: () => navigation.push(Screens.securityScreen),
      },
      {
        title: 'Support & Help',
        icon: {type: 'fa', name: 'info-circle'},
        // onPress: () => navigation.push(Screens.securityScreen),
      },
    ],
    [navigation],
  );

  const renderItem = useCallback((item: any, index: number) => {
    return (
      <SettingItem
        title={item.title}
        onPress={item.onPress}
        icon={item.icon}
        key={index}
      />
    );
  }, []);

  return (
    <ScreenWrapper headerProps={{title: 'Settings'}}>
      <View style={appStyle.contentView}>
        <Card style={{width: '100%'}}>
          <Avatar size={84} />
          <Text style={styles.name}>Arham Saqib</Text>
          <Text>arhamsaqib@outlook.com</Text>
          <Text style={{color: Theme.inactive_text}}>Driver</Text>
        </Card>
        <Card style={{width: '100%', marginTop: 10}}>
          <Margin top={30} />
          {items.map(renderItem)}
          <Margin top={20} />
          <Button
            title="Logout"
            type="rounded"
            icon={{type: 'fa', name: 'sign-out', color: 'white'}}
          />
        </Card>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: '600',
    fontSize: 15,
  },
});
