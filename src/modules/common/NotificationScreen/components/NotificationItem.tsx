import {Theme} from '@src/constants/colors';
import {Icon} from '@src/core/Icon';
import {Text} from '@src/core/Text';
import {View} from '@src/core/View';
import React from 'react';
import {StyleSheet} from 'react-native';

interface NotificationProps {
  item: any;
  isUnread?: boolean;
}

export const NotificationItem = (props: NotificationProps) => {
  const {item, isUnread} = props;
  return (
    <View style={[styles.main, isUnread && styles.unread]}>
      <View style={styles.cont1}>
        <Icon type="fa" name="folder" color={Theme.primary} />
      </View>
      <View style={styles.cont2}>
        <Text style={{fontSize: 14}} bold>
          {item.title}
        </Text>
        <Text style={{fontSize: 11, color: Theme.seconday_text}}>
          {item.description}
        </Text>
      </View>
      <View style={styles.cont3}>
        <Text
          style={{
            fontSize: 9,
            color: Theme.seconday_text,
            marginBottom: 5,
            marginRight: 2,
          }}>
          {item.time}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.white,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  cont1: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '13%',
  },
  cont2: {
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '70%',
  },
  cont3: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '15%',
  },
  unread: {
    backgroundColor: Theme.light_primary,
  },
});
