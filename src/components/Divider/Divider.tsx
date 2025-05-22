import {Theme} from '@src/constants/colors';
import React from 'react';
import {View} from 'react-native';

interface MarginProps {
  position?: 'horizontal' | 'vertical';
  width?: any;
  height?: any;
}

export const Divider = (props: MarginProps) => {
  const {position = 'horizontal', width = 1, height = 1} = props;
  return <View style={[{height, width, backgroundColor: Theme.black}]} />;
};
