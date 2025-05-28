import {Theme} from '@src/constants/colors';
import {appStyle} from '@src/constants/styles';
import {Button} from '@src/core/Button';
import {Icon} from '@src/core/Icon';
import {Text} from '@src/core/Text';
import {View} from '@src/core/View';
import React from 'react';
import {StyleSheet} from 'react-native';

interface OrderTaskItemProps {
  status?: 'pending' | 'completed' | 'progress';
  title: string;
  action?: {
    type: 'button' | 'link';
    title: string;
    onPress?: () => void;
  };
}

export const OrderTaskItem = (props: OrderTaskItemProps) => {
  const {status, title, action} = props;
  return (
    <View style={styles.main}>
      <View style={styles.cont1}>
        {status === 'completed' && (
          <View style={styles.checkbox}>
            <Icon type="ion" name="checkmark-outline" size={16} color="white" />
          </View>
        )}
        {status === 'progress' && (
          <Icon type="fa" name="spinner" size={20} color={Theme.primary} />
        )}
        {status === 'pending' && <View style={styles.circle} />}
      </View>
      <View style={styles.cont2}>
        <Text style={{fontSize: 13, fontWeight: '500'}}>{title}</Text>
        <Text style={{fontSize: 9, color: Theme.grey1}}>{title}</Text>
      </View>
      <View style={styles.cont3}>
        {action && action.type === 'button' && (
          <Button
            title={action.title}
            onPress={action.onPress}
            style={{height: 30, width: 80}}
          />
        )}
        {action && action.type === 'link' && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon type="fa" name="paperclip" color={Theme.badge_info} />
            <Text
              style={{
                fontSize: 9,
                color: Theme.badge_info,
                marginLeft: 4,
                width: '70%',
                textDecorationLine: 'underline',
              }}>
              {action.title}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    minHeight: 40,
    maxHeight: 60,
    width: '100%',
    marginVertical: 5,
    borderRadius: 5,
    ...appStyle.defaultFullBorder,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
    width: '52%',
  },
  cont3: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.primary,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Theme.primary,
  },
});
