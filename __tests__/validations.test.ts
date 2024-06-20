import {validateForm} from '../src/components/products/form/validations';

describe('validateForm', () => {
  it('devuelve un objeto vacío si los datos son válidos', () => {
    const formData = {
      id: '123',
      name: 'Producto de prueba',
      description: 'Descripción del producto',
      logo: 'logo.png',
      releaseDate: {day: '01', month: '01', year: '2026'},
      revisionDate: {day: '01', month: '01', year: '2027'},
    };

    const errors = validateForm(formData);
    expect(errors).toEqual({});
  });

  it('devuelve un objeto con errores si los datos son inválidos', () => {
    const formData = {
      id: '',
      name: 'Producto de prueba',
      description: '',
      logo: '',
      releaseDate: {day: '', month: '', year: ''},
      revisionDate: {day: '', month: '', year: ''},
    };

    const errors = validateForm(formData);
    expect(errors).toEqual({
      id: 'Este campo es requerido',
      description: 'Este campo es requerido',
      logo: 'Este campo es requerido',
      releaseDate: 'Este campo es requerido',
    });
  });

  it('devuelve un objeto con errores si algunos campos están vacíos', () => {
    const formData = {
      id: '123',
      name: '',
      description: 'Descripción del producto',
      logo: 'logo.png',
      releaseDate: {day: '01', month: '', year: '2023'},
      revisionDate: {day: '01', month: '01', year: '2027'},
    };

    const errors = validateForm(formData);
    expect(errors).toEqual({
      name: 'Este campo es requerido',
      releaseDate: 'Este campo es requerido',
    });
  });

  it('valida que a fecha esté correcta y sea mayor o igual que la fecha de hoy', () => {
    const formData = {
      id: '123',
      name: 'Nombre Correcto',
      description: 'Descripción del producto',
      logo: 'logo.png',
      releaseDate: {day: '01', month: '05', year: '2023'},
      revisionDate: {day: '01', month: '05', year: '2024'},
    };

    const errors = validateForm(formData);
    expect(errors).toEqual({
      releaseDate: 'La fecha debe ser igual o mayor a la fecha actual',
    });
  });
});
