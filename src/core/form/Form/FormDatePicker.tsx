import {DatePicker} from '@src/core/DatePicker';
import {FormControl} from '@src/core/form';
import React, {useCallback, useMemo} from 'react';
import {StyleSheet} from 'react-native';

interface FormCheckboxProps<T> {
  control: FormControl<T>;
  mode?: 'date' | 'time';
}

export const FormDatePicker = <T,>({
  control,
  ...props
}: FormCheckboxProps<T>) => {
  const isRequired = control.config.isRequired;
  const {mode} = props;

  const value = useMemo(() => control.value as number, [control]);

  const valueDate = useMemo(() => {
    if (value === undefined || value === null) {
      return new Date();
    }
    return new Date(value * 1000);
  }, [value]);

  const label = control.config.placeholder;

  const onChangeDate = useCallback(
    (date: Date) => {
      console.log('date', date);
      const dateUnix = date.getTime() / 1000;
      control.control.patchValue(dateUnix as unknown as T);
    },
    [control],
  );

  return (
    <>
      <DatePicker mode={mode} onDateChange={onChangeDate} value={valueDate} />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
