import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';
import {Colors} from '../styles';

const RatingView = ({count, size = 1}) => {
  return (
    <View style={{justifyContent:'center'}}>
      {count == 1 && (
        <View style={{flexDirection: 'row', paddingTop: '3%'}}>
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={
              size == 2
                ? viewStyle.starBigViewInActive
                : viewStyle.starViewInActive
            }
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={
              size == 2
                ? viewStyle.starBigViewInActive
                : viewStyle.starViewInActive
            }
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={
              size == 2
                ? viewStyle.starBigViewInActive
                : viewStyle.starViewInActive
            }
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={
              size == 2
                ? viewStyle.starBigViewInActive
                : viewStyle.starViewInActive
            }
          />
        </View>
      )}

      {count == 2 && (
        <View style={{flexDirection: 'row', paddingTop: '3%'}}>
          <Icon
            type="MaterialIcons"
            name="star"
            fontSize={size == 2 ? 30 : 20}
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={
              size == 2
                ? viewStyle.starBigViewInActive
                : viewStyle.starViewInActive
            }
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={
              size == 2
                ? viewStyle.starBigViewInActive
                : viewStyle.starViewInActive
            }
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={
              size == 2
                ? viewStyle.starBigViewInActive
                : viewStyle.starViewInActive
            }
          />
        </View>
      )}

      {count == 3 && (
        <View style={{flexDirection: 'row', paddingTop: '3%'}}>
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={
              size == 2
                ? viewStyle.starBigViewInActive
                : viewStyle.starViewInActive
            }
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={
              size == 2
                ? viewStyle.starBigViewInActive
                : viewStyle.starViewInActive
            }
          />
        </View>
      )}

      {count == 4 && (
        <View style={{flexDirection: 'row', paddingTop: '3%'}}>
          <Icon
            type="MaterialIcons"
            name="star"
            fontSize={size == 2 ? 130 : 15}
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={
              size == 2
                ? viewStyle.starBigViewInActive
                : viewStyle.starViewInActive
            }
          />
        </View>
      )}

      {count == 5 && (
        <View style={{flexDirection: 'row', paddingTop: '3%'}}>
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
          <Icon
            type="MaterialIcons"
            name="star"
            style={size == 2 ? viewStyle.starBigView : viewStyle.starView}
          />
        </View>
      )}
    </View>
  );
};

export default RatingView;

const viewStyle = StyleSheet.create({
  starView: {
    fontSize: 20,
    color: Colors.APP_COLOR,
  },
  starViewInActive: {
    fontSize: 20,
    color: 'rgba(115,199,0,0.4)',
  },
  starBigView: {
    fontSize: 25,
    color: Colors.APP_COLOR,
    marginTop: '2%',
  },
  starBigViewInActive: {
    fontSize: 25,
    color: 'rgba(115,199,0,0.4)',
    marginTop: '2%',
  },
});
