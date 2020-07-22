import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {Helper, Colors} from '../../styles';
import FoodTextView from '../../components/FoodTextView';
import RecipeStepsItem from './RecipeStepsItem';
import DividerView from '../../components/DividerView';
import {Card, CardItem, Content} from 'native-base';

const RecipeStepsView = ({params}) => (
  <View style={viewStyle.stepsView} scrollEnabled={true}>
    <Card style={{borderRadius: 10}}>
      <FlatList
        data={Helper.RecipeStepsList}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <DividerView />}
        keyExtractor={(item, index) => {
          return item.number.toString();
        }}
        renderItem={({item, index}) => {
          return <RecipeStepsItem steps={item} />;
        }}
      />
    </Card>
  </View>
);

export default RecipeStepsView;

const viewStyle = StyleSheet.create({
  stepsView: {
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 20,
    paddingRight: 20,
  },
});
