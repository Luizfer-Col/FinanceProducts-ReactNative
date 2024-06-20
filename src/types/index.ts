import {PressableProps} from 'react-native';
export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export interface CustomButtonProps extends PressableProps {
  variant: ButtonVariant;
  text: string;
  onPress: () => void;
}

export interface FormProductData {
  id: string;
  name: string;
  description: string;
  logo: string;
  releaseDate: DateState;
  revisionDate: DateState;
}

export interface DateState {
  day: string;
  month: string;
  year: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: Date;
  date_revision: Date;
}
