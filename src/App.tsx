/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import MainNavigator from './navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <MainNavigator />
    </SafeAreaView>
  );
}

export default App;
