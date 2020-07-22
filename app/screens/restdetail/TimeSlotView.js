import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {Helper, Colors, Dimension} from '../../styles';
import FoodTextView from '../../components/FoodTextView';
import createStyles from '../../styles/style';
import {Card} from 'native-base';

const baseStyle = createStyles();
const slots = Helper.TimeSlots;

const TimeSlotView = () => {
  const [position, setPosition] = useState(0);

  return (
    <View style={viewStyle.parentStyle}>
      {slots.map((item, index) => {
        return (
          <Card
            style={
              position == index
                ? viewStyle.cardStyle
                : viewStyle.cardStyleInActive
            }>
            <TouchableHighlight onPress={() => setPosition(index)}>
              <FoodTextView
                text={item.slot}
                style={[
                  baseStyle.textSubTitleStyle,
                  position == index
                    ? viewStyle.textStyle
                    : [viewStyle.textStyle, viewStyle.textStyleInActive],
                ]}
              />
            </TouchableHighlight>
          </Card>
        );
      })}
    </View>
  );
};

export default TimeSlotView;

const viewStyle = StyleSheet.create({
  parentStyle: {
    width: '100%',
    flexDirection: 'row',
    marginTop: '5%',
    marginBottom: '5%',
    justifyContent: 'center',
    // backgroundColor:'blue'
  },
  textStyle: {
    width: 80,
    height: Dimension.BUTTON_HEIGHT,
    padding: '3.5%',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.WHITE,
    fontSize: 18
  },
  textStyleInActive: {
    color: Colors.APP_COLOR,
  },
  cardStyle: {
    marginLeft: '2%',
    marginRight: '2%',
    borderRadius: 10,
    backgroundColor: Colors.APP_COLOR,
  },
  cardStyleInActive: {
    marginLeft: '2%',
    marginRight: '2%',
    borderRadius: 10,
    backgroundColor: Colors.FADE_GREEN,
  },
});
