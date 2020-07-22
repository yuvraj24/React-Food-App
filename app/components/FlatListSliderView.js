import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {Helper} from '../styles';
import DetailImageView from '../screens/recipedetail/DetailImageView';
import createStyles from '../styles/style';
import FoodTextView from './FoodTextView';
import IndicatorView from './IndicatorView';

const baseStyle = createStyles();

const FlatListSliderView = ({recipe, isRestaurant = false}) => {
  const [position, setPosition] = useState(0);

  // const handleScroll = (event) => {
  //   let yOffset = event.nativeEvent.contentOffset.y;
  //   let contentHeight = event.nativeEvent.contentSize.height;
  //   let value = yOffset / contentHeight;
  //   console.log(event);
  //   setPosition(value);
  // };

  // const updateIndex = ({viewableItems}) => {
  //   // getting the first element visible index
  //   const currentIndex = viewableItems[0].index;
  //   console.log(currentIndex);
  //   setPosition(currentIndex);
  // };

  const onViewRef = React.useRef(({viewableItems}) => {
    if (viewableItems) {
      const currentIndex = viewableItems[0].index;
      console.log(currentIndex);
      setPosition(currentIndex);
    }
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        // onScroll={(event) => handleScroll(event)}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        data={isRestaurant ? Helper.RestaurantList : Helper.HomeRecipesList}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <DetailImageView item={item} />;
        }}
      />
      <IndicatorView
        list={isRestaurant ? Helper.RestaurantList : Helper.HomeRecipesList}
        position={position}
      />
      <FoodTextView
        style={[baseStyle.textBigTitleStyle, viewStyle.positionStyle]}
        text={recipe && recipe.title}
      />
    </View>
  );
};

export default FlatListSliderView;

const viewStyle = StyleSheet.create({
  positionStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '4%',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.31,
    lineHeight: 41,
    marginBottom: 5,
  },
});
