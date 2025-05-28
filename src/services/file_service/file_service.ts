import {DocumentPickerResponse} from '@react-native-documents/picker';
import {CustomIconProps} from '@src/core';

export function getFileIcon(file: DocumentPickerResponse): CustomIconProps {
  switch (file.type) {
    case 'application/pdf':
      return {
        type: 'ion',
        name: 'document',
        size: 20,
        color: 'black',
      };
    case 'image/jpeg':
    case 'image/png':
      return {type: 'ion', name: 'image', size: 20, color: 'black'};
    default:
      return {
        type: 'ion',
        name: 'document',
        size: 20,
        color: 'black',
      };
  }
}
