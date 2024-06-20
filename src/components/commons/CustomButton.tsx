import React, {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {CustomButtonProps} from '../../types';

const CustomButton: FC<CustomButtonProps> = ({
  variant,
  text,
  onPress,
  ...props
}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        styles[variant],
        pressed && styles.pressed,
      ]}
      onPress={onPress}
      {...props}>
      <Text
        style={[
          styles.text,
          variant === 'danger' ? styles.textDanger : styles.textDefault,
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  primary: {
    backgroundColor: '#ffdd00',
  },
  secondary: {
    backgroundColor: '#e9ecf3',
  },
  danger: {
    backgroundColor: '#d50707',
  },
  pressed: {
    opacity: 0.65,
  },
  text: {
    fontWeight: '600',
    fontSize: 13,
  },
  textDefault: {
    color: '#000',
  },
  textDanger: {
    color: '#fff',
  },
});

export default CustomButton;
