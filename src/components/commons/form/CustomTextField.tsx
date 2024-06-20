import React, {FC} from 'react';
import CustomFieldForm from './CustomFieldForm';
import CustomTextInput from '../input/CustomTextInput';

interface CustomTexInputProps {
  label: string;
  value: string;
  setValue: (text: string) => void;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
}

const CustomTextField: FC<CustomTexInputProps> = ({
  label,
  value,
  error,
  disabled = false,
  setValue,
  placeholder,
}) => {
  return (
    <CustomFieldForm label={label} disabled={disabled} error={error}>
      <CustomTextInput
        value={value}
        onChangeText={setValue}
        editable={!disabled}
        error={!!error && !disabled}
        placeholder={placeholder}
      />
    </CustomFieldForm>
  );
};

export default CustomTextField;
