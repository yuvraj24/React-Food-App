import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Constant, Dimension} from '../styles';

const FoodButtonView = ({text, style, titleStyle, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[viewStyle.btnStyle, style]}
      onPress={onPress}>
      <Text style={[viewStyle.titleStyle, titleStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FoodButtonView;

const viewStyle = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: '300',
    color: Colors.WHITE,
    fontFamily: Constant.SF_PROTEXT_SEMIBOLD,
  },
  btnStyle: {
    backgroundColor: Colors.APP_COLOR,
    alignItems: 'center',
    color: Colors.WHITE,
    height: Dimension.BUTTON_HEIGHT,
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
