import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import FoodTextView from './FoodTextView';
import {Constant, Colors} from '../styles';
import ArrowDownIcon from '../assets/images/icons-arrow-down.png';

const ModalHeaderView = ({onClose, title}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <TouchableOpacity onPress={onClose} style={viewStyle.arrowView}>
        <Image source={ArrowDownIcon} style={viewStyle.arrowIcon} />
      </TouchableOpacity>
      <FoodTextView text={title} style={viewStyle.headerView} />
    </View>
  );
};

export default ModalHeaderView;

const viewStyle = StyleSheet.create({
  headerView: {
    alignSelf: 'center',
    color: Colors.APP_COLOR,
    fontSize: 22,
    padding: '3%',
    fontFamily: Constant.SF_PRODISPLAY_REGULAR,
  },
  dimView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  arrowView: {
    position: 'absolute',
    top: '20%',
    left: '4%',
  },
  arrowIcon: {
    tintColor: Colors.APP_COLOR,
    width: 30,
    height: 30,
  },
});
