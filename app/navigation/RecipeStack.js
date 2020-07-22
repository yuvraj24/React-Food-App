import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Constant, Colors} from '../styles';
import RecipeView from '../screens/recipe/RecipeView';
import createStyles from '../styles/style';
import RecipeListView from '../screens/recipe/RecipeListView';
import RecipeDetailView from '../screens/recipedetail/RecipeDetailView';

const baseStyle = createStyles();

const RecipeStack = () => {
  const RecipeStack = createStackNavigator();
  return (
    <RecipeStack.Navigator>
      <RecipeStack.Screen name={Constant.RECIPE} component={RecipeView} />
      <RecipeStack.Screen
        name={Constant.RECIPE_LIST}
        component={RecipeListView}
      />
      <RecipeStack.Screen
        name={Constant.RECIPE_DETAIL}
        component={RecipeDetailView} 
      />
    </RecipeStack.Navigator>
  );
};

export default RecipeStack;
