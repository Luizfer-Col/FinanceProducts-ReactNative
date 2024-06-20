import React, {ReactNode} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import SvgIconCLose from '../../assets/icons/SvgIconClose';
import CustomButton from './CustomButton';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  showIconClose?: boolean;
  title: string;
  content?: string;
  showMainButton?: boolean;
  showSecondarybutton?: boolean;
  mainAction?: () => void;
  secondAction?: () => void;
  children?: ReactNode;
  position?: 'center' | 'bottom';
}

const CustomModal = ({
  visible,
  onClose,
  showIconClose = true,
  position = 'center',
  title,
  showMainButton = true,
  showSecondarybutton = false,
  mainAction,
  secondAction,
  children,
}: CustomModalProps) => {
  const showFooter = showMainButton || showSecondarybutton;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={mainAction}>
      <View
        style={[
          styles.modalContainer,
          position === 'bottom' && styles.modalContainerBottom,
        ]}>
        <View
          style={[
            styles.modalContent,
            position === 'bottom' && styles.modalContentBottom,
          ]}>
          {showIconClose && (
            <View style={styles.header}>
              <Pressable onPress={onClose}>
                <SvgIconCLose />
              </Pressable>
            </View>
          )}

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          {children}

          {showFooter && (
            <View style={styles.footer}>
              <CustomButton
                variant="primary"
                text="Confirmar"
                onPress={() => {
                  onClose();
                  mainAction && mainAction();
                  console.log();
                }}
              />
              <CustomButton
                variant="secondary"
                text="Cancelar"
                onPress={() => {
                  onClose();
                  secondAction && secondAction();
                }}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
  },
  modalContainerBottom: {
    justifyContent: 'flex-end',
    padding: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 20,
    elevation: 5,
  },
  modalContentBottom: {
    backgroundColor: 'white',
    width: '100%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 5,
  },
  header: {
    alignItems: 'flex-end',
    padding: 15,
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },

  titleContainer: {
    padding: 20,
    marginBottom: 10,
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  footer: {
    padding: 15,
  },
});
