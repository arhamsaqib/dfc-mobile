import {Icon} from '@src/core/Icon';
import {useModal} from '@src/core/ModalContext';
import {Text} from '@src/core/Text';
import {View} from '@src/core/View';
import React, {useCallback, useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FormSelectItem} from './FormSingleValuePicker';
import {Button} from '@src/core/Button';
import {Theme} from '@src/constants/colors';

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
  selectedItems: string[];
}

export const FormMultiValuePicker = (props: FormSingleValuePickerProps) => {
  const {items, onSelect, selectedItems = []} = props;
  const {closeModal} = useModal();
  const [selected, setSelected] = React.useState(selectedItems);

  const doesValueExist = useCallback(
    (value: string) => {
      return selected.includes(value);
    },
    [selected],
  );

  const onValueSelect = useCallback(
    (value: string) => {
      if (doesValueExist(value)) {
        setSelected(selected.filter(item => item !== value));
      } else {
        setSelected([...selected, value]);
      }
    },
    [selected, doesValueExist],
  );

  const renderItems = useCallback(
    (item: FormSelectItem, index: number) => {
      return (
        <Item
          key={index}
          item={item}
          isSelected={doesValueExist(item.value)}
          onPress={() => {
            onValueSelect(item.value);
          }}
        />
      );
    },
    [onValueSelect, closeModal, doesValueExist],
  );
  return (
    <View style={styles.main}>
      <>{items.map(renderItems)}</>
      <Button
        title="Save"
        onPress={() => {
          onSelect && onSelect(selected, 0);
          closeModal();
        }}
      />
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
