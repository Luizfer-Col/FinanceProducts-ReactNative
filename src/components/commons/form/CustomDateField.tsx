import React from 'react';
import CustomDateInput from '../input/CustomDateInput';
import CustomFieldForm from './CustomFieldForm';
import {DateState} from '../../../types';

interface CustomDateFieldProps {
  label: string;
  error?: string;
  disabled?: boolean;
  date: DateState;
  setDate: (date: DateState) => void;
}

const CustomDateField = ({
  date,
  label,
  error,
  disabled,
  setDate,
}: CustomDateFieldProps) => {
  const showError = !!error && !disabled;

  return (
    <CustomFieldForm label={label} disabled={disabled} error={error}>
      <CustomDateInput
        date={date}
        error={showError}
        setDate={setDate}
        editable={!disabled}
      />
    </CustomFieldForm>
  );
};

export default CustomDateField;
