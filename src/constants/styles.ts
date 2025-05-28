import {StyleProp, ViewStyle} from 'react-native';
import {Theme} from './colors';

export const appStyle = {
  defaultBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: Theme.inactive_text,
  },
  defaultFullBorder: {
    borderWidth: 0.5,
    borderColor: Theme.inactive_text,
  },
  contentView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  } as StyleProp<ViewStyle>,
};
