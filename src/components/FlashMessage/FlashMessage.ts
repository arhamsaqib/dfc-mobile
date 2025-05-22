import Toast from 'react-native-toast-message';

export const success = (text1: string, text2: string) => {
  Toast.show({
    type: 'success',
    text1,
    text2,
  });
};

export const danger = (text1: string, text2: string) => {
  return Toast.show({
    type: 'error',
    text1,
    text2,
  });
};

export const info = (text1: string, text2: string) => {
  Toast.show({
    type: 'info',
    text1,
    text2,
  });
};
