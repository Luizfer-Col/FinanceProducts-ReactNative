import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../commons/CustomButton';
import CustomDateField from '../../commons/form/CustomDateField';
import CustomTextField from '../../commons/form/CustomTextField';
import useProductForm from '../../../hooks/useProductForm';
import {DateState, FormProductData, Product} from '../../../types';
import useCustomNavigation from '../../../hooks/useCustomNavigation';

interface ProductFormProps {
  product?: Product;
  update?: boolean;
}
const initialFormValues: FormProductData = {
  id: '',
  name: '',
  description: '',
  logo: '',
  releaseDate: {day: '', month: '', year: ''},
  revisionDate: {day: '', month: '', year: ''},
};

const ProductForm = ({product, update}: ProductFormProps) => {
  const navigation = useCustomNavigation();

  const formatDateObject = (date: Date): DateState => {
    const [datePart] = date.toString().split('T');

    const [year, month, day] = datePart.split('-');

    return {day, month, year};
  };
  const initialValues = product
    ? {
        id: product.id,
        name: product.name,
        description: product.description,
        logo: product.logo,
        releaseDate: formatDateObject(product.date_release),
        revisionDate: formatDateObject(product.date_revision),
      }
    : initialFormValues;

  const {
    formData,
    errors,
    handleUpdateFormData,
    handleReset,
    handleSubmit,
    handleUpdate,
  } = useProductForm(initialValues);

  const title = update
    ? 'Formulario de actualización'
    : 'Formulario de Registro';

  const handleCancel = () => navigation.goBack();

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <Text style={styles.title}>{title}</Text>

      <CustomTextField
        label={'ID'}
        value={formData.id}
        error={errors.id}
        setValue={value => handleUpdateFormData('id', value)}
        disabled={update}
      />
      <CustomTextField
        label={'Nombre'}
        value={formData.name}
        error={errors.name}
        setValue={value => handleUpdateFormData('name', value)}
      />
      <CustomTextField
        label={'Descripción'}
        value={formData.description}
        error={errors.description}
        setValue={value => handleUpdateFormData('description', value)}
      />
      <CustomTextField
        label={'Logo'}
        value={formData.logo}
        error={errors.logo}
        setValue={value => handleUpdateFormData('logo', value)}
      />

      <CustomDateField
        date={formData.releaseDate}
        setDate={value => handleUpdateFormData('releaseDate', value)}
        label="Fecha Liberación"
        error={errors.releaseDate}
      />
      <CustomDateField
        date={formData.revisionDate}
        setDate={value => handleUpdateFormData('releaseDate', value)}
        label="Fecha Revisión"
        disabled
      />

      <View>
        <CustomButton
          variant={'primary'}
          text={update ? 'Guardar' : 'Crear'}
          onPress={update ? handleUpdate : handleSubmit}
        />
        <CustomButton
          variant={'secondary'}
          text={update ? 'Cancelar' : 'Reiniciar'}
          onPress={update ? handleCancel : handleReset}
        />
      </View>
    </ScrollView>
  );
};

export default ProductForm;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
