import React, {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
} from 'react';
import {Modal, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '../Icon';

import {Text} from '../Text';
import {Theme} from '@src/constants/colors';

type ModalContent = ReactNode;

interface OptionsProps {
  title?: string;
}

interface ModalContextType {
  openModal: (content: ModalContent, options?: OptionsProps) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC = ({children}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalContentRef = useRef<ModalContent | null>(null);
  const modalOptionsRef = useRef<OptionsProps | null>(null);

  const openModal = (content: ModalContent, options?: OptionsProps) => {
    modalContentRef.current = content;
    if (options) {
      modalOptionsRef.current = options;
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    modalContentRef.current = null;
  };

  const ModalComponent = (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={closeModal}>
      <View style={styles.main}>
        <View style={styles.inner}>
          <View style={styles.top}>
            <View style={{width: '20%'}} />
            <View style={styles.titleContainer}>
              {modalOptionsRef.current?.title && (
                <Text black>{modalOptionsRef?.current?.title}</Text>
              )}
            </View>
            <View style={styles.closeCont}>
              <TouchableOpacity onPress={closeModal} style={styles.closeIcon}>
                <Icon
                  name="close-outline"
                  type="ion"
                  size={24}
                  color={Theme.white}
                />
              </TouchableOpacity>
            </View>
          </View>
          {modalContentRef.current}
        </View>
      </View>
    </Modal>
  );

  return (
    <ModalContext.Provider value={{openModal, closeModal}}>
      {children}
      {modalVisible && ModalComponent}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.black + '80', // 80% opacity
  },
  inner: {
    backgroundColor: 'white',
    elevation: 5,
    width: '90%',
    borderRadius: 10,
    marginBottom: 30,
  },
  top: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  titleContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeCont: {
    width: '20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  closeIcon: {
    height: 28,
    width: 28,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.primary,
  },
});
