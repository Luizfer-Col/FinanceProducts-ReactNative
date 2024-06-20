import React, {useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import CustomButton from '../components/commons/CustomButton';
import CustomSearchInput from '../components/commons/input/CustomSearchInput';
import ListProduct from '../components/products/listProduct/ListProduct';
import useCustomNavigation from '../hooks/useCustomNavigation';
import useProductSearch from '../hooks/useSearchProduct';
import useFetchProducts from '../hooks/useFecthProducts';
import useProductStore from '../store/productStore';

const ProductListScreen = () => {
  const navigation = useCustomNavigation();
  const {products, fetchProducts} = useFetchProducts();
  const {searchValue, setSearchValue, filteredData, searchUnavailable} =
    useProductSearch(products);

  const {operationResult, clearOperationResult, error} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (operationResult) {
      Alert.alert('Información', operationResult, [
        {text: 'OK', onPress: clearOperationResult},
      ]);
    }
  }, [clearOperationResult, operationResult]);

  return (
    <View style={styles.container}>
      <CustomSearchInput
        value={searchValue}
        onChangeText={setSearchValue}
        searchUnavailable={searchUnavailable}
      />
      <View style={styles.listContainer}>
        <ListProduct products={filteredData} />
      </View>

      <CustomButton
        variant={'primary'}
        text={'Agregar'}
        onPress={() => navigation.navigate('ProductCreateScreen')}
      />
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    padding: 15,
    backgroundColor: 'white',
  },
  listContainer: {
    flex: 1,
  },
});
