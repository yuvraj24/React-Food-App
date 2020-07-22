import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Constant, Colors} from '../../styles';
import RadioButtonView from '../../components/RadioButtonView';
import createStyles from '../../styles/style'

const baseStyle = createStyles()

const IngredientItemView = ({item, onSelect, index}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <RadioButtonView
        selected={item.checked}
        onSelect={(value) => onSelect(index, value)}
      />
      <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={viewStyle.textTitleStyle}>{item.title}</Text>
        <Text style={[viewStyle.textTitleStyle, viewStyle.textSubTitle]}>
          {item.subtitle}
        </Text>
      </View>
    </View>
  );
};

export default IngredientItemView;

const viewStyle = StyleSheet.create({
  textTitleStyle: {
    fontSize: 20, 
    fontFamily: Constant.SF_PROTEXT_REGULAR,
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: -0.24,
    lineHeight: 20,
  },
  textSubTitle: {
    fontSize: 16,
    marginTop: '5%',
    color: '#999999',
  },
});
