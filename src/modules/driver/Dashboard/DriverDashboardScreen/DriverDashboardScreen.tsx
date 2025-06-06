import {Card} from '@src/components/Card';
import {Divider} from '@src/components/Divider';
import {Margin} from '@src/components/Margin';
import {ScreenWrapper} from '@src/components/ScreenWrapper';
import {Theme} from '@src/constants/colors';
import {Icon} from '@src/core/Icon';
import {Text} from '@src/core/Text';
import {TextInput} from '@src/core/TextInput';
import {View} from '@src/core/View';

import React from 'react';
import {StyleSheet} from 'react-native';

export const DriverDashboardScreen = () => {
  return (
    <ScreenWrapper headerProps={{title: 'Dashboard'}}>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Margin top={10} />
        <Card style={styles.notifCard}>
          <Icon name="folder" type="mat" size={25} color={Theme.primary} />
          <Text>Total Orders</Text>
          <Text bold style={{fontSize: 23}}>
            3
          </Text>
          <Text>Active: 2 | Completed: 1</Text>
        </Card>
        <Margin top={10} />
        <Card style={styles.notifCard}>
          <Icon
            name="notifications"
            type="mat"
            size={25}
            color={Theme.primary}
          />
          <Text>Notifications</Text>
          <Text bold style={{fontSize: 23}}>
            3 New
          </Text>
          <Text>Click to view</Text>
        </Card>
        <Margin top={10} />
        <Card style={[styles.notifCard, {minHeight: 150}]}>
          <Text bold style={{fontSize: 23}}>
            Recent Activity
          </Text>

          <Text
            style={{
              alignSelf: 'center',
              color: Theme.primary,
              textDecorationLine: 'underline',
            }}>
            View all Activities
          </Text>
        </Card>
        <Margin top={10} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 140,
    width: '47%',
    alignItems: 'flex-start',
  },
  notifCard: {
    height: 130,
    width: '100%',
    alignItems: 'flex-start',
  },
});
