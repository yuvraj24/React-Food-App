import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';
import {Colors} from '../styles';

const RatingView = ({count, size = 1}) => {
  const [slotList, setSlotList] = useState([]);

  useEffect(() => {
    let list = [];
    for (let i = 0; i < count; i++) {
      list.push('');
    }
    if (list.length < 5) {
      for (let m = 0; m < 5 - count; m++) {
        list.push('');
      }
    } 
    setSlotList(list);
  }, []);

  return (
    <View style={{justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', paddingTop: '3%'}}>
        {slotList.map((item, index) => {
          return (
            <Icon
              type="MaterialIcons"
              name="star"
              style={
                size === 2
                  ? count > index
                    ? viewStyle.starBigView
                    : viewStyle.starBigViewInActive
                  : count > index
                  ? viewStyle.starView
                  : viewStyle.starViewInActive
              }
            />
          );
        })}
      </View>
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
