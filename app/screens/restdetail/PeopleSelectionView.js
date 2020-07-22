import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import FoodTextView from '../../components/FoodTextView';
import PlusIcon from '../../assets/images/icons-plus.png';
import MinusIcon from '../../assets/images/icons-minus.png';
import {Colors, Dimension} from '../../styles';
import createStyles from '../../styles/style';
import {Card} from 'native-base';

const baseStyle = createStyles();

const PeopleSelectionView = () => {
  const [people, setPeople] = useState(0);

  const setPeopleCount = (type) => {
    switch (type) {
      case 1:
        people >= 1 && setPeople(people - 1);
        break;

      case 2:
        setPeople(people + 1);
        break;

      default:
        break;
    }
  };

  return (
    <Card style={viewStyle.parentView}>
      <TouchableOpacity
        style={viewStyle.minusIcon}
        onPress={() => setPeopleCount(1)}>
        <Image source={MinusIcon} style={viewStyle.iconStyle} />
      </TouchableOpacity>
      <FoodTextView
        text={people === 0 ? 'Add People' : people + ' people'}
        style={[baseStyle.textSubTitleStyle, viewStyle.textView]}
      />
      <TouchableOpacity
        style={viewStyle.plusIcon}
        onPress={() => setPeopleCount(2)}>
        <Image source={PlusIcon} style={viewStyle.iconStyle} />
      </TouchableOpacity>
    </Card>
  );
};

export default PeopleSelectionView;

const viewStyle = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    borderRadius: Dimension.BORDER_RADIUS,
    backgroundColor: Colors.FADE_GREEN,
    height: Dimension.BUTTON_HEIGHT,
  },
  plusIcon: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  minusIcon: {
    position: 'absolute',
    left: 15,
    top: 10,
  },
  textView: {
    color: Colors.APP_COLOR,
    fontSize: 20,
  },
  iconStyle: {
    width: 30,
    height: 30,
    tintColor: Colors.APP_COLOR,
  },
});
