import {useState, useEffect, useCallback} from 'react';
import {Product} from '../types';

const useProductSearch = (initialData: Product[]) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState<Product[]>(initialData);
  const [searchUnavailable, setSearchUnavailable] = useState(false);

  const removeAccents = (text: string): string => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
  const filterProducts = useCallback(
    (input: string, products: Product[]): Product[] => {
      const inputWithoutAccents = removeAccents(input.toLowerCase());
      return products.filter(product =>
        removeAccents(product.name.toLowerCase()).includes(inputWithoutAccents),
      );
    },
    [],
  );

  useEffect(() => {
    setFilteredData(
      searchValue ? filterProducts(searchValue, initialData) : initialData,
    );
  }, [searchValue, initialData, filterProducts]);
  useEffect(() => {
    setSearchUnavailable(!!searchValue && filteredData.length < 1);
  }, [searchValue, filteredData]);

  return {
    searchValue,
    setSearchValue,
    filteredData,
    searchUnavailable,
  };
};

export default useProductSearch;
