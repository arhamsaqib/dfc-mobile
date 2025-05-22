import {MyTextProps, Text} from '@src/core/Text';
import React from 'react';
import {StyleSheet} from 'react-native';

export const FormLabel = (props: MyTextProps & {heading?: boolean}) => {
  const {children, style, heading, ...rest} = props;
  return (
    <Text style={[styles.main, heading && styles.heading, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  main: {
    fontSize: 12,
    color: 'black',
    textAlign: 'left',
    marginBottom: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
  },
});
