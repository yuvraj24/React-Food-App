import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import MoneyIcon from '../../assets/images/icons-money.png';
import TimeIcon from '../../assets/images/icons-time.png';
import FoodTextView from '../../components/FoodTextView';
import createStyles from '../../styles/style';
import {Colors} from '../../styles';
import {Card, CardItem, Content} from 'native-base';
import RatingView from '../../components/RatingView';

const baseStyle = createStyles();

const MoreRestaurantInfoView = ({item}) => (
  <Card style={{marginLeft: 0, marginRight: 0, marginTop: 0}}>
    <View style={viewStyle.parentView}>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <Image source={MoneyIcon} style={baseStyle.iconStyle} />
        <FoodTextView style={viewStyle.textStyle} text={'€€'} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <RatingView count={item.rating} size={2} />
        <FoodTextView
          text={item.review + ' reviews'}
          style={viewStyle.textStyle}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image source={TimeIcon} style={baseStyle.iconStyle} />
        <FoodTextView style={viewStyle.textStyle} text={'18:00 . 22:00'} />
      </View>
    </View>
  </Card>
);

export default MoreRestaurantInfoView;

const viewStyle = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '3%',
    paddingBottom: '3%',
  },
  textStyle: {
    fontSize: 14,
    color: Colors.APP_COLOR,
  },
});
