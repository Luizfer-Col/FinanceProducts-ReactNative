// useFetchProducts.ts
import useProductStore from '../store/productStore';

const useFetchProducts = () => {
  const {products, loading, error, fetchProducts} = useProductStore();

  return {
    products,
    loading,
    error,
    fetchProducts,
  };
};

export default useFetchProducts;
