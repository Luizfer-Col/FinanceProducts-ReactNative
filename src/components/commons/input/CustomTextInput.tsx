import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface CustomTextInputProps {
  value: string;
  error?: boolean;
  editable?: boolean;
  placeholder?: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput: FC<CustomTextInputProps> = ({
  value,
  error,
  editable = true,
  placeholder,
  onChangeText,
}) => {
  const showError = error && editable;

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          !editable && styles.inputDisabled,
          showError && styles.inputError,
        ]}
        value={value}
        editable={editable}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={'gray'}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 5,
    borderStyle: 'solid',
    color: 'black',
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  inputDisabled: {
    backgroundColor: '#f6f6f6',
  },
});
