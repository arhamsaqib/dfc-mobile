import {Theme} from '@src/constants';
import {Icon, Text, View} from '@src/core';
import FilePicker from '@src/services/file_picker';
import React, {use, useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FlashMessage} from '../FlashMessage';
import {DocumentPickerResponse} from '@react-native-documents/picker';
import {PickerType} from '@src/services/file_picker/file_picker';
import {PickerFileItem} from './components/PickerFileItem';
interface UploadButtonProps {
  title?: string;
  onSelect?: (file: DocumentPickerResponse) => void;
  type?: PickerType;
}

const UploadButton = (props: UploadButtonProps) => {
  const {title, onSelect, type = 'document'} = props;

  const onPress = useCallback(async () => {
    try {
      const [pickResult] = await FilePicker.open({type}); // equivalent
      onSelect?.(pickResult);
    } catch (err: unknown) {
      FlashMessage.danger('Error', 'Failed to open file picker');
    }
  }, [onSelect]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.upload}>
      <Icon
        type="ion"
        name="cloud-upload-outline"
        size={40}
        color={Theme.grey1}
      />
      <Text style={{fontSize: 15}}>{title}</Text>
      <Text style={{fontSize: 12, color: Theme.inactive_text}}>
        PDF, JPG, PNG (max 10MB)
      </Text>
    </TouchableOpacity>
  );
};

interface UploadContainerProps {
  title?: string;
  onSelect?: (file: DocumentPickerResponse) => void;
  type?: PickerType;
}

export const UploadContainer = (props: UploadContainerProps) => {
  const {title, onSelect, type} = props;
  const [file, setFile] = useState<DocumentPickerResponse | null>(null);

  const onSelectFile = useCallback(
    (file: DocumentPickerResponse) => {
      setFile(file);
      onSelect?.(file);
    },
    [onSelect],
  );

  return (
    <View style={styles.main}>
      {file && <PickerFileItem file={file} onDelete={() => setFile(null)} />}
      {!file && <UploadButton title={title} onSelect={onSelectFile} />}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    minHeight: 100,
    width: '100%',
    borderRadius: 8,
    borderColor: Theme.grey1,
    borderWidth: 1,
    borderStyle: 'dotted',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upload: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 100,
    alignItems: 'center',
  },
});
