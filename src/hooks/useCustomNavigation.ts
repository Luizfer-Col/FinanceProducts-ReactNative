import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Product} from '../types';

export type RootStackParamList = {
  ProductCreateScreen: undefined;
  ProductDetailScreen: {product: Product};
  ProductListScreen: undefined;
  ProductUpdateScreen: {product: Product; update: boolean};
};

const useCustomNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  if (!navigation) {
    throw new Error(
      'useCustomNavigation must be used within a NavigationContainer',
    );
  }
  return navigation;
};

export default useCustomNavigation;
