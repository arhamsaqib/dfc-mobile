import {Theme} from '@src/constants/colors';
import {Text} from '@src/core/Text';
import React from 'react';
import {StyleSheet} from 'react-native';

interface MultiColorTextProps {
  text1: string;
  text2: string;
}

export const MultiColorText = (props: MultiColorTextProps) => {
  const {text1, text2} = props;
  return (
    <Text style={styles.main}>
      <Text style={{color: Theme.primary, fontSize: 30}}>{text1}</Text>{' '}
      <Text style={{color: Theme.black, fontSize: 30}}>{text2}.</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  main: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
