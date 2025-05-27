import {Badge} from '@src/components/Badge';
import {Margin} from '@src/components/Margin';
import {Theme} from '@src/constants/colors';
import {Button} from '@src/core/Button';
import {CustomIconProps, Icon} from '@src/core/Icon';
import {Text} from '@src/core/Text';
import {View} from '@src/core/View';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface RowItemProps {
  text?: string;
  title: string;
  icon?: CustomIconProps;
}

const RowItem = (props: RowItemProps) => {
  return (
    <View style={{width: '100%', marginBottom: 10, alignItems: 'flex-start'}}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
        row>
        {props.icon && <Icon {...props.icon} />}
        <Text
          style={{fontSize: 13, color: Theme.seconday_text, marginLeft: 15}}>
          {props.title}
        </Text>
      </View>
      <Text style={{marginLeft: 30, marginTop: 5}}>{props.text}</Text>
    </View>
  );
};

interface Props {
  onPress?: () => void;
  isCompleted?: boolean;
}

export const DriverOrderItem = (props: Props) => {
  const {onPress, isCompleted} = props;
  return (
    <TouchableOpacity onPress={onPress} disabled style={styles.main}>
      <View row>
        <Text style={{fontSize: 18}}>#ORD-2025</Text>
        <Badge
          text={isCompleted ? 'Completed' : 'Pending'}
          intent={isCompleted ? 'success' : 'primary'}
        />
      </View>
      <Margin top={5} />
      <RowItem
        title="Pickup Location"
        text="123 Pickup Street, Munich, Germany"
        icon={{name: 'location', type: 'ion', color: Theme.button_success}}
      />
      <RowItem
        title="Delivery Location"
        text="456 Delivery Ave, Berlin, Germany"
        icon={{name: 'location', type: 'ion', color: Theme.danger}}
      />
      <RowItem
        title="Vehicle"
        text=" Car - BMW M5 Competition"
        icon={{name: 'car', type: 'ion', color: Theme.inactive_text}}
      />

      <Margin top={20} />
      <View style={{alignItems: 'center'}}>
        {!isCompleted && (
          <Button
            title="View Details"
            style={{height: 35, width: '50%'}}
            onPress={onPress}
          />
        )}
        {isCompleted && (
          <Text
            onPress={onPress}
            style={{color: Theme.primary, textDecorationLine: 'underline'}}>
            View Details
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    borderRadius: 12,
    backgroundColor: Theme.white,
    padding: 15,
    marginBottom: 10,
    width: '100%',
  },
});
