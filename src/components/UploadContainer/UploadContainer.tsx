import {Theme} from '@src/constants';
import {Icon, Text, View} from '@src/core';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface UploadButtonProps {
  title?: string;
}

const UploadButton = (props: UploadButtonProps) => {
  const {title} = props;
  return (
    <TouchableOpacity style={styles.upload}>
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
}

export const UploadContainer = (props: UploadContainerProps) => {
  const {title} = props;
  return (
    <View style={styles.main}>
      <UploadButton title={title} />
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
