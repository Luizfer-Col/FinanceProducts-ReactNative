import {renderHook, act} from '@testing-library/react-hooks';
import {Product} from '../src/types';
import useProductSearch from '../src/hooks/useSearchProduct';

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Product A',
    description: 'Description A',
    logo: 'logoA.png',
    date_release: new Date(),
    date_revision: new Date(),
  },
  {
    id: '2',
    name: 'Product B',
    description: 'Description B',
    logo: 'logoB.png',
    date_release: new Date(),
    date_revision: new Date(),
  },
];

test('should initialize with correct initial values', () => {
  const {result} = renderHook(() => useProductSearch(initialProducts));

  expect(result.current.searchValue).toBe('');
  expect(result.current.filteredData).toEqual(initialProducts);
  expect(result.current.searchUnavailable).toBeFalsy();
});

test('should update searchValue correctly', () => {
  const {result} = renderHook(() => useProductSearch(initialProducts));
  const newSearchValue = 'Product';

  act(() => {
    result.current.setSearchValue(newSearchValue);
  });

  expect(result.current.searchValue).toBe(newSearchValue);
  expect(result.current.filteredData.length).toBe(2); // Assuming both Product A and Product B match the search
});

test('should handle search with no results', () => {
  const {result} = renderHook(() => useProductSearch(initialProducts));
  const newSearchValue = 'XYZ'; // Assuming no product matches this search value

  act(() => {
    result.current.setSearchValue(newSearchValue);
  });

  expect(result.current.searchValue).toBe(newSearchValue);
  expect(result.current.filteredData.length).toBe(0);
  expect(result.current.searchUnavailable).toBeTruthy();
});
