import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../styles';

const RadioButtonView = ({selected, onSelect}) => {
  let [check, setChecked] = useState(selected ? selected : false);

  const onOptionClick = () => {
    check = !check;
    setChecked(check);
    onSelect(check);
  };

  return (
    <TouchableOpacity activeOpacity style={viewStyle.radioStyle} onPress={onOptionClick}>
      {check ? <View style={viewStyle.activeRadioStyle} /> : null}
    </TouchableOpacity>
  );
};

export default RadioButtonView;

const viewStyle = StyleSheet.create({
  radioStyle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Colors.APP_COLOR,
    alignItems: 'center',
    justifyContent: 'center', 
    margin: '5%',
  },
  activeRadioStyle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor: Colors.APP_COLOR,
  },
});
