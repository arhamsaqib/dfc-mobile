import React, {useState} from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {View} from '../View';
import {Icon} from '../Icon';

import {Text} from '../Text';
import {Theme} from '@src/constants/colors';

interface CheckboxProps {
  text?: string;
  onValueChange?: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
}

export const Checkbox = (props: CheckboxProps) => {
  const {text, onValueChange, style} = props;

  const [checked, setChecked] = useState(false);
  return (
    <View row style={[styles.container, style]}>
      <TouchableOpacity
        onPress={() => {
          setChecked(!checked);
          onValueChange && onValueChange(!checked);
        }}>
        <>
          {checked && (
            <Icon
              name="check-square"
              color={Theme.primary}
              type="fa"
              size={20}
            />
          )}
          {!checked && <View style={styles.empty} />}
        </>
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    height: 40,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
  },
  empty: {
    height: 16,
    width: 16,
    borderRadius: 3,
    backgroundColor: Theme.field_bg,
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
  },
});
