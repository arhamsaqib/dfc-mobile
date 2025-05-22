import {IMAGES} from '@src/constants/images';
import React from 'react';
import {Image, useWindowDimensions} from 'react-native';

export const Logo = () => {
  const dimensions = useWindowDimensions();
  return (
    <Image
      source={IMAGES.logoFull}
      style={{
        width: dimensions.width * 0.8,
        height: 95,
      }}
      resizeMode="contain"
    />
  );
};
