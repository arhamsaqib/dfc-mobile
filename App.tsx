import {ModalProvider} from '@src/core/ModalContext';
import {UserProvider} from '@src/hooks/useUser';
import {DFC} from '@src/modules/app/Dfc';

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <UserProvider>
        {
          // @ts-ignore
          <ModalProvider>
            <DFC />
          </ModalProvider>
        }
      </UserProvider>
    </GestureHandlerRootView>
  );
};

export default App;
