import React from 'react';
import {Text, View, Button, Image, StyleSheet, FlatList} from 'react-native';
import SearchIcon from '../../assets/images/icons-search.png';
import {Colors, Helper, Constant} from '../../styles';
import RecipeItem from './RecipeItemView';
import createStyles from '../../styles/style';
import CustomImageView from '../../components/CustomImageView';

const baseStyle = createStyles();

const RecipeView = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <CustomImageView search />,
      headerStyle: baseStyle.homeHeader,
      headerTitle: Constant.RECIPE,
      headerTitleStyle: baseStyle.homeHeaderTitle,
      headerTitleAlign: 'left',
    });
  }, [navigation]);

  const onRecipeClick = (position) => {
    const screenTitle = Helper.HomeRecipes[position].subtitle;
    navigation.navigate(Constant.RECIPE_LIST, {title: screenTitle});
  };

  return (
    <FlatList
      data={Helper.HomeRecipes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        return (
          <RecipeItem params={item} onClick={() => onRecipeClick(index)} />
        );
      }}
    />
  );
};

export default RecipeView;
