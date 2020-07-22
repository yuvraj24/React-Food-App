import React from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {Colors, Helper, Constant} from '../../styles';
import createStyles from '../../styles/style';
import CustomImageView from '../../components/CustomImageView';
import RecipeListItemView from './RecipeListItemView';

const baseStyle = createStyles();

const RecipeListView = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <CustomImageView search />,
      headerStyle: baseStyle.baseHeader,
      headerTitle: route && route.params && route.params.title,
      headerTitleStyle: baseStyle.baseHeaderTitle,
      headerBackTitleStyle: baseStyle.baseHeaderTitle,
      headerTintColor: Colors.WHITE,
    });
  }, [navigation]);

  const onRecipeClick = (position) => {
    navigation.navigate(Constant.RECIPE_DETAIL, {
      data: Helper.HomeRecipesList[position],
    });
  };

  return (
    <FlatList
      data={Helper.HomeRecipesList}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <RecipeListItemView
            params={item}
            onClick={() => onRecipeClick(index)}
          />
        );
      }}
    />
  );
};

export default RecipeListView;
