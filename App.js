/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Platform,
} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import StatusBarView from './app/components/StatusBarView';
import createStyles from './app/styles/style';

const baseStyle = createStyles()

const App = () => {
  return (
    <View style={baseStyle.container}>
      {/* <StatusBarView /> */}
      <AppNavigator />
    </View>
  );
}; 

export default App;
