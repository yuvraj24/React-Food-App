import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../styles';

const FoodTextView = ({
  text,
  style,
  numberOfLines,
  onPress,
  title,
  subtitle,
  description,
}) => {
  return (
    <Text
      allowFontScaling
      style={style}
      numberOfLines={numberOfLines}
      onPress={onPress}>
      {text}
    </Text>
  );
};

export default FoodTextView;

const viewStyle = StyleSheet.create({});
