import {useState, useEffect} from 'react';
import {DateState, FormProductData, Product} from '../types';
import {
  ValidationErrors,
  validateForm,
} from '../components/products/form/validations';
import useCustomNavigation from './useCustomNavigation';
import useProductStore from '../store/productStore';

const useProductForm = (initialValues: FormProductData) => {
  const navigation = useCustomNavigation();
  const {createProduct, updateProduct} = useProductStore();

  const [formData, setFormData] = useState<FormProductData>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [autoFixError, setAutoFixError] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAutoFixError(true);
    }
  }, [errors]);

  useEffect(() => {
    if (autoFixError) {
      const validateFields = validateForm(formData);
      setErrors(validateFields);
    }
  }, [autoFixError, formData]);

  useEffect(() => {
    const {day, month, year} = formData.releaseDate;
    if (day?.length === 2 && month?.length === 2 && year?.length === 4) {
      const newRevisionDate = handleGetRevisionDate(formData.releaseDate);
      handleUpdateFormData('revisionDate', newRevisionDate);
    }
  }, [formData.releaseDate]);

  const handleUpdateFormData = (field: string, value: string | DateState) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleReset = () => {
    setFormData(initialValues);
    setErrors({});
    setAutoFixError(false);
  };

  const handleGetRevisionDate = (date: DateState) => {
    const {day, month, year} = date;
    const parsedDay = parseInt(day, 10);
    const parsedMonth = parseInt(month, 10) - 1;
    const parsedYear = parseInt(year, 10);

    const initialDate = new Date(parsedYear, parsedMonth, parsedDay);

    const newDate = new Date(initialDate);
    newDate.setFullYear(initialDate.getFullYear() + 1);

    const newDateData: DateState = {
      day: newDate.getDate().toString().padStart(2, '0'),
      month: (newDate.getMonth() + 1).toString().padStart(2, '0'),
      year: newDate.getFullYear().toString(),
    };

    return newDateData;
  };

  const handleSubmit = () => {
    setErrors({});
    const validateFields = validateForm(formData);

    if (Object.keys(validateFields).length > 0) {
      setErrors(validateFields);
    } else {
      const newProduct: Product = {
        id: formData.id.trim(),
        name: formData.name.trim(),
        description: formData.description.trim(),
        logo: formData.logo.trim(),
        date_release: new Date(
          Number(formData.releaseDate.year),
          Number(formData.releaseDate.month) - 1,
          Number(formData.releaseDate.day),
        ),
        date_revision: new Date(
          Number(formData.revisionDate.year),
          Number(formData.revisionDate.month) - 1,
          Number(formData.revisionDate.day),
        ),
      };
      createProduct(newProduct);
      navigation.navigate('ProductListScreen');
    }
  };
  const handleUpdate = () => {
    setErrors({});
    const validateFields = validateForm(formData);

    if (Object.keys(validateFields).length > 0) {
      setErrors(validateFields);
    } else {
      const newProduct: Product = {
        id: formData.id.trim(),
        name: formData.name.trim(),
        description: formData.description.trim(),
        logo: formData.logo.trim(),
        date_release: new Date(
          Number(formData.releaseDate.year),
          Number(formData.releaseDate.month) - 1,
          Number(formData.releaseDate.day),
        ),
        date_revision: new Date(
          Number(formData.revisionDate.year),
          Number(formData.revisionDate.month) - 1,
          Number(formData.revisionDate.day),
        ),
      };
      updateProduct(newProduct.id, newProduct);
      navigation.navigate('ProductListScreen');
    }
  };

  return {
    formData,
    errors,
    handleUpdateFormData,
    handleReset,
    handleSubmit,
    handleUpdate,
  };
};

export default useProductForm;
