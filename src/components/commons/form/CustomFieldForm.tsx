import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  label: string;
  error?: string;
  children?: ReactNode;
  disabled?: boolean;
}

const CustomFieldForm = ({label, error, children, disabled}: Props) => {
  const showError = !!error && !disabled;
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      {children}
      {showError && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
};

export default CustomFieldForm;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
  },
  textError: {
    color: 'red',
    fontWeight: 'bold',
  },
});
