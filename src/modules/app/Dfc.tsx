import {AppStack} from '@src/router/app/AppStack';
import React from 'react';
import Toast from 'react-native-toast-message';

export const DFC = () => {
  return (
    <>
      <AppStack />
      <Toast position="top" />
    </>
  );
};
