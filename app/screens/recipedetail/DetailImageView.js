import React from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import createStyles from '../../styles/style';
import {Dimension} from '../../styles';
import FoodTextView from '../../components/FoodTextView';

const baseStyle = createStyles();

const DetailImageView = ({item}) => (
  <View>
    <Image source={item && item.image} style={viewStyle.imgHeader} />
    <View style={viewStyle.headerView} />
  </View>
);

export default DetailImageView;

const viewStyle = StyleSheet.create({
  imgHeader: {
    height: Dimension.DETAIL_HEADER_HEIGHT,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
  },
  barStyle: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  headerView: {
    height: Dimension.DETAIL_HEADER_HEIGHT,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,0.3)',
    flexDirection: 'column',
    position: 'absolute',
  },
});
