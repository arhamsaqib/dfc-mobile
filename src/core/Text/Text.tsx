import {Theme} from '@src/constants/colors';
import React from 'react';
import {StyleSheet, Text as MyText, TextProps} from 'react-native';

export interface MyTextProps extends TextProps {
  bold?: boolean;
  black?: boolean;
  white?: boolean;
  alignCenter?: boolean;
}

export const Text = (props: MyTextProps) => {
  const {
    children,
    bold = false,
    black = false,
    white = false,
    alignCenter = false,
    style,
    ...rest
  } = props;
  return (
    <MyText
      {...rest}
      style={[
        styles.main,
        bold && styles.bold,
        black && styles.black,
        white && styles.white,
        alignCenter && styles.alignCenter,
        style,
      ]}>
      {children}
    </MyText>
  );
};

const styles = StyleSheet.create({
  main: {
    fontSize: 14,
    color: Theme.black,
    fontFamily: 'poppins',
    // fontFamily: FONTS.Lato,
  },
  bold: {
    fontWeight: 'bold',
  },
  black: {
    color: Theme.black,
  },
  white: {
    color: Theme.white,
  },
  alignCenter: {
    textAlign: 'center',
  },
});
