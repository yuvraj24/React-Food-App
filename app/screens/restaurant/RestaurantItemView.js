import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FoodTextView from '../../components/FoodTextView';
import {Card, CardItem} from 'native-base';
import {Dimension, Constant} from '../../styles';
import {
  SF_PROTEXT_REGULAR,
  SF_PRODISPLAY_REGULAR,
} from '../../styles/constants';
import RatingView from '../../components/RatingView';
import CircleIcon from '../../assets/images/icons-circle.png';

const RestaurantItemView = ({item, onPress, isModal = false}) => {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <Card
        style={[viewStyle.parentView, [isModal && {padding: 10}]]}
        transparent={isModal}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'column'}}>
            <View style={viewStyle.modalNameView}>
              <FoodTextView
                text={item.title}
                style={isModal ? viewStyle.titleModalView : viewStyle.titleView}
              />
              <FoodTextView
                text={item.type}
                style={
                  isModal ? viewStyle.subModalTitleView : viewStyle.subTitleView
                }
              />
            </View>
            {!isModal && (
              <View style={viewStyle.ratingView}>
                <RatingView count={item.rating} size={1} />

                <FoodTextView
                  text={item.review + ' reviews'}
                  style={[
                    viewStyle.subTitleView,
                    [{marginLeft: '2%', marginTop: '3%'}],
                  ]}
                />
              </View>
            )}
          </View>
          <Image
            source={item.image}
            style={isModal ? viewStyle.imageModalView : viewStyle.imageView}
          />
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default RestaurantItemView;

const viewStyle = StyleSheet.create({
  parentView: {
    height: Dimension.RESTAURANT_CELL_HEIGHT,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 8,
    marginTop: 8,
    padding: '5%',
    justifyContent: 'space-between',
    flex: 1,
    borderRadius: 8,
  },
  titleView: {
    fontSize: 24,
    lineHeight: 31,
    letterSpacing: -0.41,
    fontFamily: Constant.SF_PRODISPLAY_REGULAR,
    fontWeight: '400',
  },
  titleModalView: {
    fontSize: 26,
    lineHeight: 31,
    letterSpacing: -0.41,
    fontFamily: Constant.SF_PRODISPLAY_REGULAR,
    fontWeight: '400',
  },
  subTitleView: {
    fontSize: 17,
    letterSpacing: -0.21,
    fontFamily: Constant.SF_PROTEXT_REGULAR,
    fontWeight: 'normal',
    color: '#8c8c8c',
    marginTop: '1%',
    lineHeight: 18,
  },
  subModalTitleView: {
    fontSize: 20,
    letterSpacing: -0.41,
    fontFamily: Constant.SF_PROTEXT_REGULAR,
    fontWeight: 'normal',
    color: '#8c8c8c',
    marginTop: '2%',
    lineHeight: 22,
  },
  ratingView: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageView: {
    height: 80,
    width: 120,
    flexDirection: 'row',
    resizeMode: 'cover',
  },
  imageModalView: {
    height: 100,
    width: 140,
    flexDirection: 'row',
    resizeMode: 'cover',
  },
  modalNameView: {
    justifyContent: 'center',
    flex: 1,
  },
});
