//
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SvgIconNoImage from '../assets/icons/SvgIconNoImage';
import CustomButton from '../components/commons/CustomButton';
import useImageValidation from '../hooks/useImageValidation';
import {Product} from '../types';
import ModalDeleteProduct from '../components/products/deleteProduct/ModalDeleteProduct';
import useCustomNavigation from '../hooks/useCustomNavigation';

interface ProductDetailScreenProps {
  route: {
    params: {
      product: Product;
    };
  };
}

const ProductDetailScreen = ({route}: ProductDetailScreenProps) => {
  const {id, name, description, logo, date_release, date_revision} =
    route.params.product;

  const isImageValid = useImageValidation(logo);
  const navigation = useCustomNavigation();

  const dateReleaseString = date_release.toString().split('T')[0];
  const dateRevisionString = date_revision.toString().split('T')[0];

  const [modalDeleteProduct, setModalDeleteProduct] = useState(false);
  const handleCloseModal = () => setModalDeleteProduct(false);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.id}>ID: {id}</Text>
        <Text style={styles.text}>Información extra</Text>
      </View>

      <View style={styles.dataContainer}>
        <View style={styles.itemText}>
          <Text style={styles.itemLabel}>Nombre</Text>
          <Text style={styles.itemContent}>{name}</Text>
        </View>
        <View style={styles.itemText}>
          <Text style={styles.itemLabel}>Descripción</Text>
          <Text style={styles.itemContent}>{description}</Text>
        </View>
        <View style={styles.itemImage}>
          <Text style={styles.itemLabelImage}>Logo</Text>
          {isImageValid ? (
            <Image source={{uri: logo}} style={styles.image} />
          ) : (
            <View style={styles.image}>
              <SvgIconNoImage />
            </View>
          )}
        </View>
        <View style={styles.itemText}>
          <Text style={styles.itemLabel}>Fecha liberación</Text>
          <Text style={styles.itemDate}>{dateReleaseString}</Text>
        </View>
        <View style={styles.itemText}>
          <Text style={styles.itemLabel}>Fecha revisión</Text>
          <Text style={styles.itemDate}>{dateRevisionString}</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <CustomButton
          variant="secondary"
          onPress={() =>
            navigation.navigate('ProductUpdateScreen', {
              product: route.params.product,
              update: true,
            })
          }
          text="Editar"
        />
        <CustomButton
          variant="danger"
          onPress={() => setModalDeleteProduct(true)}
          text="Eliminar"
        />
      </View>

      <ModalDeleteProduct
        visible={modalDeleteProduct}
        setVisible={handleCloseModal}
        nameProduct={name}
        idProduct={id}
      />
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  text: {
    color: 'black',
  },
  id: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  dataContainer: {
    marginTop: 40,
    padding: 10,
  },
  itemText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  itemLabel: {
    color: 'black',
    flex: 1,
  },
  itemContent: {
    color: 'black',
    fontWeight: 'bold',
    flex: 2,
    marginHorizontal: 10,
    textAlign: 'right',
  },
  itemDate: {
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
    marginHorizontal: 10,
    textAlign: 'right',
  },
  itemImage: {
    marginVertical: 10,
  },
  itemLabelImage: {
    color: 'black',
  },
  image: {
    width: 280,
    height: 140,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  actionsContainer: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
  },
});
