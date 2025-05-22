import {CustomIconProps, Icon} from '@src/core/Icon';
import {useModal} from '@src/core/ModalContext';
import {Text} from '@src/core/Text';
import {MyTIProps, TextInput} from '@src/core/TextInput';
import {View} from '@src/core/View';
import {FormControl} from '@src/core/form';
import React, {useCallback, useEffect, useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  FormSelectItem,
  FormSingleValuePicker,
} from './components/FormSingleValuePicker';
import {FormMultiValuePicker} from './components/FormMultiValuePicker';
import {R} from '@src/services/R';
import {Theme} from '@src/constants/colors';

interface FormSelect<T> {
  control: FormControl<T>;
  type?: 'single' | 'multiple';
  items: FormSelectItem[];
  clearable?: boolean;
  disabled?: boolean;
  light?: boolean;
  icon?: CustomIconProps;
}

export const FormSelect = <T,>({control, ...props}: FormSelect<T>) => {
  const {type, items, clearable, disabled, icon} = props;

  const isMultiple = type === 'multiple';
  const isRequired = control.config.isRequired;
  const title = control.config.placeholder;
  const hasValue =
    !control.control.isEmpty &&
    !control.control.isNull &&
    control.value !== undefined;
  const {openModal} = useModal();

  const selected = useMemo(
    () => items.find(item => item.value === control.value),
    [items, control.value],
  );

  const getLabel = useCallback(() => {
    if (!isMultiple) {
      return selected?.label || '';
    }
    const values = (control.value as string[]) || [];
    const selectedItems = R.filter(items, item => values.includes(item.value));
    return selectedItems.map(item => item.label).join(', ');
  }, [isMultiple, selected, items, control]);

  const onSelect = useCallback(
    (item: any) => {
      control.control.patchValue(item as unknown as T);
    },
    [control],
  );

  const onSingleValue = useCallback(() => {
    openModal(
      <FormSingleValuePicker items={items} autoClose onSelect={onSelect} />,
      {title},
    );
  }, [items, onSelect, title]);

  const onMultiValue = useCallback(() => {
    openModal(
      <FormMultiValuePicker
        items={items}
        onSelect={onSelect}
        selectedItems={(control.value as string[]) || []}
      />,
      {title},
    );
  }, [items, onSelect, title, control]);

  const onClear = useCallback(() => {
    control.control.resetValue();
  }, [control]);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        !isMultiple && onSingleValue();
        isMultiple && onMultiValue();
      }}
      style={[styles.main, props.light && styles.light]}>
      <>
        {icon && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
              marginLeft: 5,
            }}>
            <Icon {...icon} />
            <View
              style={{
                height: '40%',
                alignSelf: 'center',
                width: 2,
                backgroundColor: Theme.black,
                marginLeft: 12,
              }}
            />
          </View>
        )}
        {!hasValue && (
          <Text
            numberOfLines={1}
            style={[styles.placeholder, icon && {marginLeft: 10}]}>
            {title}
            {isRequired ? '*' : ''}
          </Text>
        )}
        {hasValue && (
          <Text
            numberOfLines={1}
            style={[styles.value, icon && {marginLeft: 10}]}>
            {getLabel()}
          </Text>
        )}
      </>
      {hasValue && clearable && (
        <View style={{marginRight: 15}}>
          <Icon
            type="ion"
            name={'close'}
            color={Theme.primary}
            onPress={onClear}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 48,
    width: '100%',
    backgroundColor: Theme.field_bg,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
  },
  placeholder: {
    color: Theme.inactive_text,
    maxWidth: '60%',
  },
  value: {
    color: Theme.black,
    maxWidth: '60%',
  },
  light: {
    backgroundColor: '#f5f5f5',
    borderColor: '#E2E2E2',
    borderWidth: 1,
  },
});
