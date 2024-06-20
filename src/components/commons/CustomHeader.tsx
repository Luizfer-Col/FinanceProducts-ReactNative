import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SvgIconLogo from '../../assets/icons/SvgIconLogo';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <SvgIconLogo />
      <Text style={styles.title}>BANCO</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#c4c4c4',
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#455781',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
