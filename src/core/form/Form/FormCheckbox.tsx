import {Checkbox} from '@src/core/Checkbox';
import {Text} from '@src/core/Text';
import {MyTIProps, TextInput} from '@src/core/TextInput';
import {View} from '@src/core/View';
import {FormControl} from '@src/core/form';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';

interface FormCheckboxProps<T> {
  control: FormControl<T>;
  customText?: React.ReactElement;
}

export const FormCheckbox = <T,>({control, ...props}: FormCheckboxProps<T>) => {
  const isRequired = control.config.isRequired;
  const {customText} = props;
  const onChangeInput = useCallback(
    (text: boolean) => {
      control.control.patchValue(text as unknown as T);
    },
    [control],
  );

  const label = control.config.placeholder;

  return (
    <View style={styles.main}>
      <Checkbox onValueChange={onChangeInput} />
      {!customText && (
        <Text white style={{fontSize: 13}}>
          {label}
        </Text>
      )}
      {customText && customText}
    </View>
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
