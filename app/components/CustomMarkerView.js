import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../styles';

const CustomMarkerView = ({selected, onSelect}) => {
  let [check, setChecked] = useState(selected ? selected : false);

  const onOptionClick = () => {
    // check = !check;
    // setChecked(check);
    // onSelect(check);
  };

  return (
    <View style={viewStyle.maxStyle}>
      <TouchableOpacity
        activeOpacity
        style={viewStyle.radioStyle}
        onPress={onOptionClick}>
        <View style={viewStyle.activeRadioStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomMarkerView;

const viewStyle = StyleSheet.create({
  radioStyle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    // borderWidth: 2,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    // margin: '5%',
  },
  activeRadioStyle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: Colors.APP_COLOR,
  },
  maxStyle: {
    height: 100,
    width: 100,
    borderRadius: 60,
    // borderWidth: 2,
    backgroundColor: 'rgba(115,199,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: '5%',
  },
});
