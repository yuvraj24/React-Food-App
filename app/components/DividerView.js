import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../styles';

const DividerView = ({style}) => <View style={[styles.divider, style]} />;

export default DividerView;

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'center',
    borderBottomColor: Colors.DIVIDER_GREY,
    borderBottomWidth: 0.8,
    width: '100%',
  },
});
