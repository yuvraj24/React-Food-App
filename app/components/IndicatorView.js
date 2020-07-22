import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../styles';

const IndicatorView = ({position, list}) => {
  return (
    <View style={viewStyle.indicatorView}>
      {list.map((item, index) => {
        return index === position ? (
          <View style={viewStyle.activeRadioStyle} />
        ) : (
          <View style={viewStyle.radioStyle} />
        );
      })}
    </View>
  );
};

export default IndicatorView;

const viewStyle = StyleSheet.create({
  radioStyle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.GREY,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5%',
    marginLeft: 10
  },
  activeRadioStyle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: Colors.WHITE,
    marginLeft: 10
  },
  indicatorView: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    flex: 1, 
    flexDirection: 'row',
  },
});
