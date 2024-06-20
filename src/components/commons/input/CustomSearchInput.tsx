import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import CustomTextInput from './CustomTextInput';

interface CustomSearchInputProps {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  searchUnavailable?: boolean;
}

const CustomSearchInput: React.FC<CustomSearchInputProps> = ({
  value,
  placeholder = 'Search..',
  onChangeText,
  searchUnavailable = false,
}) => {
  return (
    <View style={styles.container}>
      <CustomTextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />

      {value && (
        <Pressable
          style={({pressed}) => [styles.resetButton, pressed && styles.pressed]}
          onPress={() => onChangeText('')}>
          <Text style={[styles.resetButtonText]}>Limpiar búsqueda</Text>
        </Pressable>
      )}

      <Text style={styles.errorText}>
        {searchUnavailable && 'No hay coincidencias con tu búsqueda'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  resetButton: {
    alignSelf: 'flex-end',
    width: '30%',
  },
  pressed: {
    opacity: 0.6,
  },

  resetButtonText: {
    color: 'black',
    textAlign: 'right',
    marginVertical: 3,
    fontSize: 12,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default CustomSearchInput;
