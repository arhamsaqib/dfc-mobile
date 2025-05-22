import React, {useMemo} from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Text} from '../Text';
import {Theme} from '@src/constants/colors';
import {CustomIconProps, Icon} from '../Icon';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  textStyle?: StyleProp<TextStyle>;
  loader?: boolean;
  loaderColor?: string;
  intent?: 'primary' | 'dark' | 'success' | 'danger' | 'light' | 'border';
  type?: 'squared' | 'rounded';
  icon?: CustomIconProps;
}

export const Button = (props: ButtonProps) => {
  const {
    title,
    textStyle,
    style,
    loader = false,
    loaderColor = Theme.black,
    disabled = false,
    type = 'squared',
    intent = 'primary',
    icon,
    ...rest
  } = props;

  const borderRadius = useMemo(() => (type === 'rounded' ? 30 : 8), []);

  const backgroundColor = useMemo(() => {
    switch (intent) {
      case 'primary':
        return Theme.primary;
      case 'dark':
        return Theme.dark_button;
      case 'success':
        return Theme.button_success;
      case 'danger':
        return Theme.button_danger;
      case 'light':
        return Theme.button_light;
      case 'border':
        return Theme.white;
      default:
        return Theme.primary;
    }
  }, [intent]);

  const fontColor = useMemo(() => {
    switch (intent) {
      case 'border':
        return Theme.seconday_text;
      case 'light':
        return Theme.seconday_text;
      default:
        return Theme.white;
    }
  }, [intent]);

  const borderWidth = useMemo(() => (intent === 'border' ? 1 : 0), [intent]);

  return (
    <TouchableOpacity
      disabled={disabled}
      {...rest}
      style={[
        styles.main,
        {
          borderRadius,
          backgroundColor,
          borderWidth,
          borderColor: Theme.button_light,
        },
        disabled && {backgroundColor: Theme.field_bg},
        style,
      ]}>
      {icon && <Icon {...icon} />}
      <Text style={[styles.text, {color: fontColor}, icon && {marginLeft: 10}]}>
        {title}
      </Text>
      {loader && (
        <ActivityIndicator color={loaderColor} style={{marginLeft: 5}} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
  },
});
