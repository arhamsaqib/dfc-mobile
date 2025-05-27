import {Theme} from '@src/constants/colors';
import {Text} from '@src/core/Text';
import {View} from '@src/core/View';
import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';

interface BadgeProps {
  intent?: 'primary' | 'success' | 'danger' | 'info';
  text: string;
}

export const Badge = (props: BadgeProps) => {
  const {intent = 'primary', text} = props;

  const backgroundColor = useMemo(() => {
    switch (intent) {
      case 'primary':
        return Theme.primary; // Blue
      case 'success':
        return Theme.badge_bg_success; // Green
      case 'danger':
        return Theme.danger; // Red
      case 'info':
        return Theme.badge_info; // Teal
      default:
        return Theme.primary; // Default to blue
    }
  }, [intent]);

  const textColor = useMemo(() => {
    if (intent === 'info') {
      return Theme.dark_button;
    }
    return Theme.black;
  }, [intent]);

  const maxWidth = text.length * 10; // Adjust the multiplier as needed for your text length

  return (
    <View style={[styles.main, {backgroundColor, maxWidth}]}>
      <Text style={{color: textColor, fontSize: 10}}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    minHeight: 21,
    // maxWidth: 100,
    minWidth: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
