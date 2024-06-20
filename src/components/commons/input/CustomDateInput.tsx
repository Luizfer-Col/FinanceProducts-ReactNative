import React, {useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {DateState} from '../../../types';
import handleBackspacePress from './helper/dateHelper';

interface Props {
  date: DateState;
  error?: boolean;
  editable?: boolean;
  setDate: (date: DateState) => void;
}

const CustomDateInput = ({date, error, editable, setDate}: Props) => {
  const dayRef = useRef<TextInput>(null);
  const monthRef = useRef<TextInput>(null);
  const yearRef = useRef<TextInput>(null);

  const handleSetDate = (value: string, field: string) => {
    const newValue = value.replace(/\D/g, '');
    if (field === 'day') {
      if (newValue.length === 2) {
        monthRef.current?.focus();
      }
    } else if (field === 'month') {
      if (newValue.length === 2) {
        yearRef.current?.focus();
      }
    }
    setDate({...date, [field]: newValue});
  };

  const handleDatePress = () => {
    const isYear = yearRef.current;
    const isMonth = monthRef.current;
    const isDay = dayRef.current;
    console.log('isDay', isDay?.props);

    if (isDay && (!date.day || (date.day && date.day.length < 2))) {
      dayRef.current?.focus();
      dayRef.current.setNativeProps({
        selection: {
          start: date.day.length,
          end: date.day.length,
        },
      });
    } else if (
      isMonth &&
      (!date.month || (date.month && date.month.length < 2))
    ) {
      monthRef.current.focus();
    } else if (isYear) {
      yearRef.current.focus();
    }
  };

  const showError = error && editable;

  return (
    <View
      style={[
        styles.inputContainer,
        !editable && styles.inputContainerDisabled,
        showError && styles.inputContainerError,
      ]}>
      <TextInput
        ref={dayRef}
        style={styles.input}
        value={date.day}
        onChangeText={value => handleSetDate(value, 'day')}
        maxLength={2}
        keyboardType="numeric"
        placeholder="DD"
        placeholderTextColor={'gray'}
        textAlign="left"
        onFocus={handleDatePress}
        selection={{
          start: 2,
          end: 2,
        }}
        editable={editable}
      />
      <Text style={styles.text}>{'/ '}</Text>
      <TextInput
        ref={monthRef}
        style={styles.input}
        value={date.month}
        onChangeText={value => handleSetDate(value, 'month')}
        maxLength={2}
        keyboardType="numeric"
        placeholder="MM"
        placeholderTextColor={'gray'}
        textAlign="left"
        onFocus={handleDatePress}
        editable={editable}
        selection={{
          start: 2,
          end: 2,
        }}
        onKeyPress={({nativeEvent}) => {
          if (nativeEvent.key === 'Backspace') {
            handleBackspacePress('month', date, setDate, dayRef, monthRef);
          }
        }}
      />
      <Text style={styles.text}>{'/ '}</Text>

      <TextInput
        ref={yearRef}
        style={[styles.input, styles.inputEnd]}
        value={date.year}
        onChangeText={value => handleSetDate(value, 'year')}
        maxLength={4}
        keyboardType="numeric"
        placeholder="YYYY"
        placeholderTextColor={'gray'}
        textAlign="left"
        onFocus={handleDatePress}
        editable={editable}
        onKeyPress={({nativeEvent}) => {
          if (nativeEvent.key === 'Backspace' && !date.year) {
            handleBackspacePress('year', date, setDate, dayRef, monthRef);
          }
        }}
      />
    </View>
  );
};

export default CustomDateInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    borderColor: 'gray',
    borderWidth: 0.7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputContainerError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  inputContainerDisabled: {
    backgroundColor: '#f6f6f6',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    color: 'black',
    padding: 0,
    letterSpacing: 0,
  },
  inputEnd: {
    flex: 1,
  },
  text: {color: 'black'},
  label: {
    color: 'black',
    fontWeight: 'bold',
  },
  textError: {
    color: 'red',
    fontWeight: 'bold',
  },
});
