import React from 'react';
import {Text, View} from 'react-native';
import {Constant} from '../styles';
import {createStackNavigator} from '@react-navigation/stack';
import RestaurantView from '../screens/restaurant/RestaurantView';
import createStyles from '../styles/style';
import RestaurantDetailView from '../screens/restdetail/RestaurantDetailView';

const baseStyle = createStyles();

const RestaurantStack = () => {
  const RestaurantStack = createStackNavigator();

  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerStyle: baseStyle.homeHeader,
        headerTitle: 'Restaurant',
        headerTitleStyle: baseStyle.homeHeaderTitle,
        headerTitleAlign: 'left',
      }}>
      <RestaurantStack.Screen
        name={Constant.RESTAURANT}
        component={RestaurantView}
      />
      <RestaurantStack.Screen
        name={Constant.RESTAURANT_DETAIL}
        component={RestaurantDetailView}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantStack;
