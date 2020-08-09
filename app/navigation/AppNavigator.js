import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Constant, Colors} from '../styles';
import RecipeStack from './RecipeStack';
import RestaurantStack from './RestaurantStack';
import RecipeIcon from '../assets/images/icons-feed.png';
import RestaurantIcon from '../assets/images/icons-restaurant.png';

const HomeTabStack = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <HomeTabStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          if (route.name === Constant.RECIPE) {
            if (focused) {
              return (
                <Image source={RecipeIcon} style={viewStyle.tabIconActive} />
              );
            } else {
              return (
                <Image source={RecipeIcon} style={viewStyle.tabIconInActive} />
              );
            }
          } else if (route.name === Constant.RESTAURANT) {
            if (focused) {
              return (
                <Image
                  source={RestaurantIcon}
                  style={viewStyle.tabIconActive}
                />
              );
            } else {
              return (
                <Image
                  source={RestaurantIcon}
                  style={viewStyle.tabIconInActive}
                />
              );
            }
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.APP_COLOR,
        inactiveTintColor: Colors.DIVIDER_GREY,
        showLabel: false,
      }}>
      <HomeTabStack.Screen name={Constant.RECIPE} component={RecipeStack} />
      <HomeTabStack.Screen
        name={Constant.RESTAURANT}
        component={RestaurantStack}
      />
    </HomeTabStack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

const viewStyle = StyleSheet.create({
  tabIconActive: {
    width: 32,
    height: 32,
    tintColor: Colors.APP_COLOR,
  },
  tabIconInActive: {
    width: 32,
    height: 32,
    tintColor: Colors.DIVIDER_GREY,
  },
});
