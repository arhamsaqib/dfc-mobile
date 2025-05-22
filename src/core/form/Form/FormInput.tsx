import {MyTIProps, TextInput} from '@src/core/TextInput';
import {FormControl} from '@src/core/form';
import {Validators} from '@src/services/Validators';

import React, {useCallback} from 'react';

interface FormInputProps<T> extends MyTIProps {
  control: FormControl<T>;
  inputType?: 'text' | 'number';
}

export const FormInput = <T,>({control, ...props}: FormInputProps<T>) => {
  const {onChangeText, validators = [], inputType, ...rest} = props;
  const isRequired = control.config.isRequired;
  let formValidators = isRequired
    ? [Validators.required, ...validators]
    : [...validators];
  const onChangeInput = useCallback(
    (text: string) => {
      if (inputType === 'number') {
        text = text.replace(/[^0-9]/g, '');
      }
      control.control.patchValue(text as unknown as T);
      onChangeText && onChangeText(text);
    },
    [control, onChangeText],
  );

  return (
    <TextInput
      placeholder={control.config.placeholder}
      onChangeText={onChangeInput}
      value={control.value as string}
      id={control.id}
      validators={formValidators}
      {...rest}
    />
  );
};
