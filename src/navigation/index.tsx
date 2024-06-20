import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomHeader from '../components/commons/CustomHeader';
import {RootStackParamList} from '../hooks/useCustomNavigation';
import ProductCreateScreen from '../screens/ProductCreateScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductUpdateScreen from '../screens/ProductUpdateScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const renderHeader = () => <CustomHeader />;

const MainNavigator = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ProductListScreen"
          screenOptions={{
            header: renderHeader,
          }}>
          <Stack.Screen
            name="ProductListScreen"
            component={ProductListScreen}
          />
          <Stack.Screen
            name="ProductCreateScreen"
            component={ProductCreateScreen}
          />
          <Stack.Screen
            name="ProductDetailScreen"
            component={ProductDetailScreen}
          />
          <Stack.Screen
            name="ProductUpdateScreen"
            component={ProductUpdateScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
});
