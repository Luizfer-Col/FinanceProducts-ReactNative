import ProductService from '../src/services/apiService';
import {Product} from '../src/types';

describe('ProductService', () => {
  const mockProduct: Product = {
    id: '123',
    name: 'Product A',
    description: 'Description of Product A',
    logo: 'logo.png',
    date_release: new Date(),
    date_revision: new Date(),
  };

  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation((url: string) => {
      if (url.endsWith('/products')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({data: [mockProduct]}),
        });
      } else if (url.includes('/products/123')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([mockProduct]),
        });
      } else if (url.endsWith('/products/verification/123')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(true),
        });
      } else if (url.includes('/products/123')) {
        return Promise.resolve({
          ok: true,
        });
      } else {
        return Promise.reject(new Error('Unhandled fetch'));
      }
    });
  });

  // Prueba para getAllProducts
  it('should fetch all products', async () => {
    const products = await ProductService.getAllProducts();
    expect(products).toEqual([mockProduct]);
  });

  // Prueba para createProduct
  it('should create a new product', async () => {
    const createdProduct = await ProductService.createProduct(mockProduct);
    expect(createdProduct).toEqual([mockProduct]);
  });

  // Prueba para updateProduct
  it('should update an existing product', async () => {
    const updatedProduct = await ProductService.updateProduct(
      '123',
      mockProduct,
    );
    expect(updatedProduct).toEqual([mockProduct]);
  });

  // Prueba para deleteProduct
  it('should delete a product', async () => {
    await expect(ProductService.deleteProduct('123')).resolves.not.toThrow();
  });

  // Prueba para verifyProductExists
  it('should verify if product exists', async () => {
    const exists = await ProductService.verifyProductExists('123');
    expect(exists).toBe(true);
  });
});
