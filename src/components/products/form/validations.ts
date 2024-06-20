import {FormProductData} from '../../../types';

export interface ValidationErrors {
  id?: string;
  name?: string;
  description?: string;
  logo?: string;
  releaseDate?: string;
  revisionDate?: string;
}

type FieldFormType = keyof FormProductData;

const isValidDate = (day: string, month: string, year: string): boolean => {
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return (
    date.getFullYear() === Number(year) &&
    date.getMonth() === Number(month) - 1 &&
    date.getDate() === Number(day)
  );
};

const isFutureOrPresentDate = (
  day: string,
  month: string,
  year: string,
): boolean => {
  const inputDate = new Date(Number(year), Number(month) - 1, Number(day));
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  return inputDate >= currentDate;
};

const validateField = (field: FieldFormType, value: any): string => {
  switch (field) {
    case 'id':
      if (!value) {
        return 'Este campo es requerido';
      } else if (
        typeof value === 'string' &&
        (value.length < 3 || value.length > 10)
      ) {
        return 'ID no válido';
      }
      return '';
    case 'name':
      if (!value) {
        return 'Este campo es requerido';
      } else if (
        typeof value === 'string' &&
        (value.length < 5 || value.length > 100)
      ) {
        return 'Nombre no válido';
      }
      return '';
    case 'description':
      if (!value) {
        return 'Este campo es requerido';
      } else if (
        typeof value === 'string' &&
        (value.length < 10 || value.length > 200)
      ) {
        return 'Descripción no válida';
      }
      return '';
    case 'logo':
      if (!value) {
        return 'Este campo es requerido';
      }
      return '';
    case 'releaseDate':
      const {day, month, year} = value as FormProductData['releaseDate'];
      if (!day || !month || !year) {
        return 'Este campo es requerido';
      }
      if (!isValidDate(day, month, year)) {
        return 'Fecha no válida';
      }
      if (!isFutureOrPresentDate(day, month, year)) {
        return 'La fecha debe ser igual o mayor a la fecha actual';
      }
      return '';
    default:
      return '';
  }
};

export const validateForm = (form: FormProductData): ValidationErrors => {
  const validationErrors: ValidationErrors = {};

  (Object.keys(form) as Array<keyof FormProductData>).forEach(field => {
    const value = form[field];
    const error = validateField(field, value);
    if (error) {
      validationErrors[field] = error;
    }
  });

  return validationErrors;
};
