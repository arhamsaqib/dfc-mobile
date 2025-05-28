import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Theme} from '@src/constants/colors';
import {CustomIconProps, Icon} from '@src/core/Icon';
import {Text} from '@src/core/Text';

interface SettingItemProps {
  title?: string;
  icon?: CustomIconProps;
  onPress?: () => void;
}

export const SettingItem = (props: SettingItemProps) => {
  const {title, icon, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.main]}>
      {icon && <Icon {...icon} color={Theme.primary} size={25} />}
      <Text style={[styles.text, icon && {marginLeft: 10}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: Theme.button_light,
  },
  text: {
    fontSize: 15,
    color: Theme.black,
  },
});
