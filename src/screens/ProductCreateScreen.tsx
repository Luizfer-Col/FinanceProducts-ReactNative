import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ProductForm from '../components/products/form/ProductForm';

const ProductCreateScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ProductForm />
    </ScrollView>
  );
};

export default ProductCreateScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: 'white',
  },
});
