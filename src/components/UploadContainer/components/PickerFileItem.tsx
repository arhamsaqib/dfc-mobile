import {DocumentPickerResponse} from '@react-native-documents/picker';
import {Theme} from '@src/constants';
import {Icon, Text, View} from '@src/core';
import FileService from '@src/services/file_service';
import React from 'react';
import {StyleSheet} from 'react-native';

interface Props {
  file: DocumentPickerResponse;
  onDelete?: () => void;
}

export const PickerFileItem = (props: Props) => {
  const {file, onDelete} = props;
  return (
    <View style={styles.main}>
      <View
        row
        style={{
          width: '65%',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Icon {...FileService.getFileIcon(file)} />
        <View style={{alignItems: 'flex-start', marginLeft: 10}}>
          <Text numberOfLines={1}>{file.name}</Text>
          <Text style={{fontSize: 10, color: Theme.inactive_text}}>
            {file.type}
          </Text>
        </View>
      </View>
      <View style={{width: '15%'}}>
        <Icon
          size={20}
          name="trash-outline"
          color={Theme.danger}
          onPress={onDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 50,
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dotted',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
