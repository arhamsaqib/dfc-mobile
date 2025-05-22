import {Theme} from '@src/constants/colors';
import {Icon} from '@src/core/Icon';
import {useModal} from '@src/core/ModalContext';
import {Text} from '@src/core/Text';
import {View} from '@src/core/View';
import React, {useCallback, useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export interface FormSelectItem {
  label: string;
  value: string;
}

interface ItemProps {
  item: FormSelectItem;
  onPress?(): void;
  isSelected?: boolean;
}

const Item = (props: ItemProps) => {
  const {item, onPress, isSelected} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={{marginRight: 5}}>{item.label}</Text>
      {isSelected && <Icon name="checkmark" type="ion" size={20} />}
    </TouchableOpacity>
  );
};

interface FormSingleValuePickerProps {
  items: FormSelectItem[];
  onSelect?(item: string | string[], index: number): void;
  autoClose?: boolean;
}

export const FormSingleValuePicker = (props: FormSingleValuePickerProps) => {
  const {items, onSelect, autoClose} = props;
  const {closeModal} = useModal();

  const renderItems = useCallback(
    (item: FormSelectItem, index: number) => {
      return (
        <Item
          key={index}
          item={item}
          onPress={() => {
            onSelect && onSelect(item.value, index);
            autoClose && closeModal();
          }}
        />
      );
    },
    [onSelect, autoClose, closeModal],
  );
  return (
    <View style={styles.main}>
      <>{items.map(renderItems)}</>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginVertical: 10,
    padding: 15,
  },
  item: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: Theme.button_light,

    marginBottom: 5,
    borderRadius: 5,
    flexDirection: 'row',
  },
});
