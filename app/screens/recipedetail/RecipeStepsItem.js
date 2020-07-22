import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors, Constant, Dimension} from '../../styles';
import FoodTextView from '../../components/FoodTextView';
import createStyles from '../../styles/style';

const baseStyle = createStyles();

const RecipeStepsItem = ({steps}) => (
  <View style={viewStyle.containerView}>
    <FoodTextView text={steps.number} style={viewStyle.numberStyle} />
    <FoodTextView text={steps.step} style={viewStyle.textTitleStyle} />
  </View>
);

export default RecipeStepsItem;

const viewStyle = StyleSheet.create({
  containerView: {
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '4%',
    marginBottom: '4%',
    flexDirection: 'row', 
  },
  numberStyle: {
    fontSize: 16,
    fontFamily: Constant.SF_PROTEXT_REGULAR,
    color: '#999999',
    marginRight: '4%',
    marginLeft: '3%', 
  },
  textTitleStyle: {
    fontSize: 16,
    fontFamily: Constant.SF_PROTEXT_REGULAR,
    alignSelf: 'center',
  },
});
