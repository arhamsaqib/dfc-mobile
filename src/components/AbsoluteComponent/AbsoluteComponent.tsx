import {View} from '@src/core/View';
import React, {PropsWithChildren, useMemo, useState} from 'react';
import {Keyboard, StyleSheet} from 'react-native';

interface AbsoluteComponentProps extends PropsWithChildren {
  bottom?: number;
}

export const AbsoluteComponent = (props: AbsoluteComponentProps) => {
  const {bottom = 20, children} = props;
  const [isShow, setIsShow] = useState(false);
  Keyboard.addListener('keyboardDidShow', () => {
    setIsShow(true);
  });
  Keyboard.addListener('keyboardDidHide', () => {
    setIsShow(false);
  });
  if (isShow) {
    return <></>;
  }
  return <View style={[styles.main, {bottom}]}>{children}</View>;
};

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
