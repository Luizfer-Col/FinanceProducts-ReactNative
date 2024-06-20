import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ErrorBannerProps {
  message: string;
}

const CustomBannerError: React.FC<ErrorBannerProps> = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f00',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomBannerError;
