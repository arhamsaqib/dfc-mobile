import moment, {now} from 'moment';
import React, {useMemo} from 'react';
import DP from 'react-native-date-picker';

import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '@src/core/Text';
import {DateTimeFormats} from '@src/services/formatter/Formatter';
import Formatter from '@src/services/formatter';

interface DatePicker {
  value: Date;
  onDateChange?(date: Date): void;
  mode?: 'date' | 'time';
}

export const DatePicker = (props: DatePicker) => {
  const {value, onDateChange, mode = 'date'} = props;
  const [isOpened, setIsOpened] = React.useState(false);

  const timeForamt = useMemo(
    () =>
      mode === 'date'
        ? DateTimeFormats.DAY_DATE_MONTH_YEAR
        : DateTimeFormats.TIME_AM_PM,
    [mode],
  );

  return (
    <>
      <DP
        mode={mode}
        date={value}
        modal
        open={isOpened}
        onCancel={() => setIsOpened(false)}
        onConfirm={date => {
          onDateChange && onDateChange(date);
          setIsOpened(false);
        }}
      />
      <TouchableOpacity onPress={() => setIsOpened(true)} style={styles.main}>
        <Text>{Formatter.formatTime(value.getTime() / 1000, timeForamt)}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 50,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderColor: '#E2E2E2',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
});
