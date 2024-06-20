import React, {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ItemProduct from './ItemProduct';
import {Product} from '../../../types';

interface ListProductProps {
  products: Product[];
}

const ListProduct: FC<ListProductProps> = ({products}) => {
  const renderItemSeparator = () => <View style={styles.separator} />;
  return (
    <View testID="listProductContainer">
      <FlatList
        data={products}
        renderItem={({item}) => <ItemProduct product={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderItemSeparator}
        style={styles.container}
      />
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    borderColor: '#c4c4c4',
    borderWidth: 0.5,
    borderRadius: 5,
    marginVertical: 20,
  },
  separator: {height: 0.5, backgroundColor: '#c4c4c4'},
});
