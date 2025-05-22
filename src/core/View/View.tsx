import {Theme} from '@src/constants/colors';
import React from 'react';
import {
  StyleSheet,
  View as CoreView,
  ViewProps,
  TouchableOpacity,
} from 'react-native';

export interface MyViewProps extends ViewProps {
  flex?: boolean;
  row?: boolean;
  border?: boolean;
  transparent?: boolean;
  fullWidth?: boolean;
}

export const View = (props: MyViewProps) => {
  const {
    children,
    flex = false,
    row = false,
    border = false,
    transparent = false,
    fullWidth = false,
    style,
    ...rest
  } = props;

  const content = (
    <CoreView
      {...rest}
      style={[
        styles.main,
        flex && styles.flex,
        row && styles.row,
        border && styles.border,
        transparent && styles.transparent,
        fullWidth && styles.fullWidth,
        style,
      ]}>
      {children}
    </CoreView>
  );

  return content;
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
  },
  border: {
    borderWidth: 1,
    borderColor: Theme.black,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  fullWidth: {
    width: '100%',
  },
});
