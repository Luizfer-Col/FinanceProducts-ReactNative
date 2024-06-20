import {Product} from '../types';

const API_URL = 'http://192.168.1.3:3002/bp';

const ProductService = {
  getAllProducts: async (): Promise<Product[]> => {
    try {
      const response = await fetch(`${API_URL}/products`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: {data: Product[]} = await response.json();

      return data.data;
    } catch (error) {
      console.error('error', error);
      throw error;
    }
  },

  createProduct: async (productItem: Product): Promise<Product[]> => {
    try {
      const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productItem),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: {data: Product[]} = await response.json();
      console.log(data);

      return data.data;
    } catch (error) {
      throw error;
    }
  },

  updateProduct: async (id: string, productItem: Product): Promise<Product> => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productItem),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: Product = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },

  deleteProduct: async (id: string): Promise<void> => {
    console.log(id, 'id');

    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE',
      });

      console.log('response delete', response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  },
  verifyProductExists: async (id: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URL}/products/verification/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al verificar la existencia del producto:', error);
      return false;
    }
  },
};

export default ProductService;
