import React from 'react';
import {View} from 'react-native';

interface MarginProps {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  vertical?: number;
  horizontal?: number;
}

export const Margin = (props: MarginProps) => {
  const {
    left = 2,
    right = 2,
    top = 2,
    bottom = 2,
    vertical = 2,
    horizontal = 2,
  } = props;
  return (
    <View
      style={[
        !!left && {marginLeft: left},
        !!right && {marginRight: right},
        !!top && {marginTop: top},
        !!bottom && {marginBottom: bottom},
        !!vertical && {marginVertical: vertical},
        !!horizontal && {marginHorizontal: horizontal},
      ]}
    />
  );
};
