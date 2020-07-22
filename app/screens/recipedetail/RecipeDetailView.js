import React, {useEffect, useState} from 'react';
import {Text, View, Button, StyleSheet, ScrollView} from 'react-native';
import {Colors, Helper, Constant, Dimension} from '../../styles';
import createStyles from '../../styles/style';
import CustomImageView from '../../components/CustomImageView';
import FoodTextView from '../../components/FoodTextView';
import MoreInfoView from './MoreInfoView';
import DetailImageView from './DetailImageView';
import FoodButtonView from '../../components/FoodButtonView';
import RecipeStepsView from './RecipeStepsView';
import IngredientsModalView from '../../screens/recipedetail/IngredientsModalView';
import FlatListSliderView from '../../components/FlatListSliderView';

const baseStyle = createStyles();

const RecipeDetailView = ({navigation, route}) => {
  const [isModalShow, setModalShow] = useState(false);
  const recipe = route.params.data;

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
    <View style={[baseStyle.container, [{backgroundColor: Colors.GREY}]]}>
      {/* <DetailImageView recipe={recipe} /> */}
      <FlatListSliderView recipe={recipe} />
      <ScrollView bounces={false}>
        <MoreInfoView recipe={recipe} />
        <View style={viewStyle.bottomContainer}>
          <FoodButtonView
            text={Constant.SEE_INGREDIENTS}
            onPress={() => setModalShow(true)}
          />
          <RecipeStepsView />
        </View>
        <IngredientsModalView
          visible={isModalShow}
          onClose={() => onSheetClose()}
        />
      </ScrollView>
    </View>
  );
};

export default RecipeDetailView;

const viewStyle = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'column',
    paddingTop: '4%',
    backgroundColor: Colors.GREY,
    flex: 1,
  },
});
