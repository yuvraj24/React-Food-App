import React from 'react';
import {StyleSheet, StatusBar, View, Platform} from 'react-native';
import {Colors, Styles} from '../styles';

const StatusBarView = () => (
  <View>
    {Platform.OS === 'ios' && (
      // To set the background color in IOS Status Bar
      <View style={viewStyle.statusView}>
        <StatusBar
          barStyle="dark-content"
          animated={true}
          backgroundColor={Colors.APP_COLOR}
        />
      </View>
    )}
    {Platform.OS === 'android' && (
      <StatusBar barStyle="dark-content" backgroundColor={Colors.APP_COLOR} />
    )}
  </View>
);

const viewStyle = StyleSheet.create({
  statusView: {
    backgroundColor: Colors.APP_COLOR,
    height: 50,
  },
});

export default StatusBarView;
