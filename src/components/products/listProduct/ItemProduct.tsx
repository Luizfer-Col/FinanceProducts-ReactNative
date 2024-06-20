import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import SvgIconArrowRight from '../../../assets/icons/SvgIconArrowRight';
import {Product} from '../../../types';
import useCustomNavigation from '../../../hooks/useCustomNavigation';

interface ItemProductProps {
  product: Product;
}

const ItemProduct: FC<ItemProductProps> = ({product}) => {
  const navigation = useCustomNavigation();

  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && styles.pressed]}
      onPress={() => {
        navigation.navigate('ProductDetailScreen', {product: product});
      }}
      testID={`itemProduct-${product.id}`}>
      <View>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.id}>ID {product.id}</Text>
      </View>
      <View>
        <SvgIconArrowRight />
      </View>
    </Pressable>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: '#EAEAEA',
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
  },
  id: {
    color: 'black',
  },
});
