import {Theme} from '@src/constants/colors';
import {MyViewProps, View} from '@src/core/View';
import React from 'react';
import {StyleSheet} from 'react-native';

interface CardProps extends MyViewProps {
  noPadding?: boolean;
}

export const Card = (props: CardProps) => {
  const {children, noPadding, style, ...rest} = props;
  return (
    <View style={[styles.main, noPadding && {padding: 0}, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: Theme.white,
  },
});
