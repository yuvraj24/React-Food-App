import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import RestaurantIcon from '../../assets/images/icons-restaurant.png';
import TimeIcon from '../../assets/images/icons-time.png';
import FoodTextView from '../../components/FoodTextView';
import createStyles from '../../styles/style';
import {Colors} from '../../styles';
import {Card, CardItem, Content} from 'native-base';

const baseStyle = createStyles();

const MoreInfoView = ({recipe}) => (
  <Card style={{marginLeft: 0, marginRight: 0, marginTop: 0}}>
    <View style={viewStyle.parentView}>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <Image source={RestaurantIcon} style={baseStyle.iconStyle} />
        <FoodTextView style={viewStyle.textStyle} text={recipe.count} />
      </View> 
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image source={TimeIcon} style={baseStyle.iconStyle} />
        <FoodTextView style={viewStyle.textStyle} text={recipe.time} />
      </View>
    </View>
  </Card>
);

export default MoreInfoView;

const viewStyle = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '3%',
    paddingBottom: '3%',
  },
  textStyle: {
    fontSize: 15,
    color: Colors.APP_COLOR,
  }, 
});
