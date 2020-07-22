import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CustomImageView from '../../components/CustomImageView';
import createStyles from '../../styles/style';
import {Colors, Constant, Dimension, Helper} from '../../styles';
import DetailImageView from '../recipedetail/DetailImageView';
import FoodButtonView from '../../components/FoodButtonView';
import MoreRestaurantInfoView from './MoreRestaurantInfoView';
import MapMarkerView from '../../components/MapMarkerView';
import {Card, CardItem, Content} from 'native-base';
import FoodTextView from '../../components/FoodTextView';
import MakeReservationView from './MakeReservationView';
import FlatListSliderView from '../../components/FlatListSliderView';

const baseStyle = createStyles();

const RestaurantDetailView = ({navigation, route}) => {
  const [isModalShow, setModalShow] = useState(false);
  const restaurant = route.params.data;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <CustomImageView bookmark />,
      headerStyle: baseStyle.baseHeader,
      headerTitle: null,
      headerTintColor: Colors.WHITE,
      headerTransparent: true,
    });
  }, [navigation]);

  const onSheetClose = () => {
    setModalShow(false);
  };

  return (
    <ScrollView bounces={false}>
      <View style={[baseStyle.container, [{backgroundColor: Colors.GREY}]]}>
        {/* <DetailImageView item={restaurant} /> */}
        <FlatListSliderView recipe={restaurant} isRestaurant/>
        <View style={viewStyle.bottomContainer}>
          <MoreRestaurantInfoView item={restaurant} />
          <View>
            <MapMarkerView />
            <FoodButtonView
              text={Constant.MAKE_RESERVATION}
              style={viewStyle.btnView}
              onPress={() => setModalShow(!isModalShow)}
            />
          </View>
          <MakeReservationView
            visible={isModalShow}
            item={restaurant}
            onClose={() => onSheetClose()}
          />
          <Card style={viewStyle.cardView}>
            <FoodTextView
              text={Helper.RestDetailInfo}
              style={viewStyle.infoView}
            />
          </Card>
          <Card style={viewStyle.cardView}>
            <FoodTextView
              text={Constant.Entres}
              style={[viewStyle.titleView, viewStyle.extraStyle]}
            />
            <FoodTextView text={Helper.DUMMY_DATA} style={viewStyle.infoView} />
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantDetailView;

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
    fontSize: 22,
    letterSpacing: -0.41,
    fontFamily: Constant.SF_PRODISPLAY_REGULAR,
    fontWeight: '400',
  },
  subTitleView: {
    fontSize: 16,
    letterSpacing: -0.21,
    fontFamily: Constant.SF_PROTEXT_REGULAR,
    fontWeight: 'normal',
    color: '#8c8c8c',
    marginTop: '1%',
  },
  ratingView: {
    marginTop: '8%',
    flexDirection: 'row',
  },
  imageView: {
    height: 80,
    width: 120,
    flexDirection: 'row',
    resizeMode: 'cover',
  },
  bottomContainer: {
    flexDirection: 'column',
    // paddingTop: '4%',
    backgroundColor: Colors.GREY,
    flex: 1,
  },
  btnView: {
    position: 'absolute',
    bottom: 5,
    right: 0,
    left: 0,
  },
  infoView: {
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.41,
    fontFamily: Constant.SF_PROTEXT_REGULAR,
    color: Colors.BLACK,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%',
    paddingTop: '5%',
  },
  cardView: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '3%',
  },
  extraStyle: {
    color: Colors.BLACK,
    marginLeft: '5%',
    marginTop: '5%',
    fontSize: 28,
  },
});
