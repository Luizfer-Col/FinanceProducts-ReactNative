import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import ProductService from '../services/apiService';
import {Product} from '../types';

interface ProductStoreState {
  products: Product[];
  loading: boolean;
  error: string | null;
  operationResult: string | null;
  fetchProducts: () => Promise<void>;
  createProduct: (productItem: Product) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  updateProduct: (id: string, productItem: Product) => Promise<void>;
  clearOperationResult: () => void;
}

const useProductStore = create<ProductStoreState>()(
  devtools(set => ({
    products: [],
    loading: false,
    error: null,
    operationResult: null,

    fetchProducts: async () => {
      set({loading: true});
      try {
        const products = await ProductService.getAllProducts();
        set({products, loading: false});
      } catch (error) {
        set({error: 'Error al obtener productos', loading: false});
      }
    },

    createProduct: async productItem => {
      try {
        const productExists = await ProductService.verifyProductExists(
          productItem.id,
        );
        if (productExists) {
          set({operationResult: 'El producto con este ID ya existe.'});
          return;
        }

        await ProductService.createProduct(productItem);
        await useProductStore.getState().fetchProducts();
        set({operationResult: 'Producto creado exitosamente.'});
      } catch (error) {
        console.error('Error al crear producto:', error);
        set({operationResult: 'Error al crear producto.'});
        throw error;
      }
    },

    deleteProduct: async id => {
      try {
        await ProductService.deleteProduct(id);
        set(state => ({
          products: state.products.filter(product => product.id !== id),
          operationResult: 'Producto eliminado exitosamente.',
        }));
      } catch (error) {
        console.error('Error al eliminar producto desde zustand:', error);
        set({operationResult: 'Error al eliminar producto.'});
        throw error;
      }
    },

    updateProduct: async (id, productItem) => {
      try {
        await ProductService.updateProduct(id, productItem);
        await useProductStore.getState().fetchProducts();
        set({operationResult: 'Producto actualizado correctamente.'});
      } catch (error) {
        console.error('Error al actualizar producto:', error);
        set({operationResult: 'Error al actualizar producto.'});
        throw error;
      }
    },

    clearOperationResult: () => set({operationResult: null}),
  })),
);

export default useProductStore;
