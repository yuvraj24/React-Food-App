import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import SearchIcon from '../../assets/images/icons-search.png';
import {Colors, Constant, Helper} from '../../styles';
import CustomImageView from '../../components/CustomImageView';
import createStyles from '../../styles/style';
import MapView from '../../components/MapView';
import MapMarkerView from '../../components/MapMarkerView';
import RestaurantItemView from './RestaurantItemView';
import {Content} from 'native-base';

const baseStyle = createStyles();

const RestaurantView = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <CustomImageView search />,
      headerStyle: baseStyle.homeHeader,
      headerTitle: Constant.RESTAURANT,
      headerTitleStyle: baseStyle.homeHeaderTitle,
      headerTitleAlign: 'left',
    });
  }, [navigation]);

  const onPress = (index) => {
    const restaurant = Helper.RestaurantList[index];
    navigation.navigate(Constant.RESTAURANT_DETAIL, {data: restaurant});
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={[baseStyle.container, [{backgroundColor: Colors.GREY}]]}>
      {/* <MapView /> */}
      <MapMarkerView />
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{marginTop: -80}}
        data={Helper.RestaurantList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <RestaurantItemView item={item} onPress={() => onPress(index)} />
          );
        }}
      />
    </ScrollView>
  );
};

export default RestaurantView;

const viewStyle = StyleSheet.create({
  searchIcon: {
    width: 34,
    height: 34,
    tintColor: Colors.WHITE,
    top: 5,
    position: 'absolute',
    right: 15,
  },
});
