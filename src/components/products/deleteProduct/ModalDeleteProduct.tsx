import React from 'react';
import CustomModal from '../../commons/CustomModal';
import useProductStore from '../../../store/productStore';
import useCustomNavigation from '../../../hooks/useCustomNavigation';

interface ModalDeleteProductProps {
  visible: boolean;
  setVisible: () => void;
  nameProduct: string;
  idProduct: string;
}

const ModalDeleteProduct = ({
  visible,
  setVisible,
  nameProduct,
  idProduct,
}: ModalDeleteProductProps) => {
  const {deleteProduct} = useProductStore();
  const navigation = useCustomNavigation();

  return (
    <CustomModal
      title={`¿Estas seguro de que deseas eliminar el producto ${nameProduct}?`}
      visible={visible}
      onClose={setVisible}
      position="bottom"
      mainAction={() => {
        deleteProduct(idProduct);
        navigation.navigate('ProductListScreen');
      }}
    />
  );
};

export default ModalDeleteProduct;
