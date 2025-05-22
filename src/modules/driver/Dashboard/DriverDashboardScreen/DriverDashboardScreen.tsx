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
      <View style={{marginTop: 20}} row>
        <Card style={styles.card}>
          <Icon name="inbox" type="mat" size={25} color={Theme.primary} />
          <Text>Total Orders</Text>
          <Text bold style={{fontSize: 23}}>
            25
          </Text>
          <Text style={{fontSize: 12}}>
            Available: 5 <Divider height={10} width={1} /> Active: 15{' '}
            <Divider height={10} width={1} /> Completed: 15{' '}
          </Text>
        </Card>
        <Card style={styles.card}>
          <Icon
            name="time-to-leave"
            type="mat"
            size={25}
            color={Theme.primary}
          />
          <Text>Total Drivers</Text>
          <Text bold style={{fontSize: 23}}>
            10
          </Text>
          <Text style={{fontSize: 12}}>
            Active: 7 <Divider height={10} width={1} /> Inactive: 3{' '}
          </Text>
        </Card>
      </View>
      <Margin top={10} />
      <Card style={styles.notifCard}>
        <Icon name="notifications" type="mat" size={25} color={Theme.primary} />
        <Text>Notifications</Text>
        <Text bold style={{fontSize: 23}}>
          3 New
        </Text>
        <Text>Click to vuew</Text>
      </Card>
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
