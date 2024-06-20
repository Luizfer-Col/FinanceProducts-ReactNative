import React from 'react';
import {TextInput} from 'react-native';

type DateField = 'day' | 'month' | 'year';

interface DateState {
  day: string;
  month: string;
  year: string;
}

const handleBackspacePress = (
  field: DateField,
  date: DateState,
  setDate: (value: DateState) => void,
  dayRef: React.RefObject<TextInput>,
  monthRef: React.RefObject<TextInput>,
) => {
  if (
    (date.day && field === 'month' && date.month && date.month.length === 0) ||
    (date.day && !date.month)
  ) {
    dayRef.current?.focus();
    setDate({...date, day: date.day[0]});
  } else if (
    (date.month && field === 'year' && date.year && date.year.length === 0) ||
    (date.month && !date.year)
  ) {
    monthRef.current?.focus();
    setDate({...date, month: date.month[0]});
  }
};

export default handleBackspacePress;
