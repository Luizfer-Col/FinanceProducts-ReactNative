import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Product} from '../types';
import ProductForm from '../components/products/form/ProductForm';

interface ProductUpdateScreenProps {
  route: {
    params: {
      product: Product;
      update: boolean;
    };
  };
}
const ProductUpdateScreen = ({route}: ProductUpdateScreenProps) => {
  const {product, update} = route.params;

  return (
    <ScrollView style={styles.container}>
      <ProductForm product={product} update={update} />
    </ScrollView>
  );
};

export default ProductUpdateScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: 'white',
  },
});
