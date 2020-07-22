import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import FoodTextView from '../../components/FoodTextView';
import ArrowDownIcon from '../../assets/images/icons-arrow-down.png';
import {Colors, Dimension, Constant} from '../../styles';
import createStyles from '../../styles/style';
import DateTimePicker from '@react-native-community/datetimepicker';
import FoodButtonView from '../../components/FoodButtonView';
import moment from 'moment';
import {Card} from 'native-base';

const baseStyle = createStyles();

const DateSelectorView = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [mode, setMode] = useState('date');
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('Today');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
    if (Platform.OS === 'android') {
      changeDateText(currentDate);
    }
  };

  const changeDateText = (selectedDate) => {
    const currentDate = selectedDate || date;
    setSelectedDate(moment(currentDate).format('MMMM DD, yyyy'));
    setShowPicker(false);
  };

  return (
    <Card style={viewStyle.cardView}>
      <TouchableOpacity
        style={viewStyle.parentView}
        onPress={() => setShowPicker(!showPicker)}>
        <FoodTextView
          text={selectedDate}
          style={[baseStyle.textSubTitleStyle, viewStyle.textView]}
        />
        <Image source={ArrowDownIcon} style={viewStyle.arrowIcon} />
      </TouchableOpacity>

      {showPicker && (
        <View style={Platform.OS === 'ios' ? viewStyle.dateView : null}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={(event, date) => onChange(event, date)}
          />
          {Platform.OS === 'ios' && (
            <FoodButtonView
              text={Constant.SELECT}
              style={viewStyle.btnView}
              titleStyle={viewStyle.btnTextView}
              onPress={() => changeDateText()}
            />
          )}
        </View>
      )}
    </Card>
  );
};

export default DateSelectorView;

const viewStyle = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '3%',
    borderRadius: 10,
    backgroundColor: Colors.FADE_GREEN,
    height: Dimension.BUTTON_HEIGHT,
  },
  arrowIcon: {
    tintColor: Colors.APP_COLOR,
    width: 30,
    height: 30,
    position: 'absolute',
    right: 15,
    top: 10,
  },
  textView: {
    color: Colors.APP_COLOR,
    fontSize: 20,
  },
  dateView: {
    borderWidth: 2,
    borderColor: Colors.GREY,
    // marginTop: '5%',
    paddingBottom: '5%',
  },
  btnView: {
    backgroundColor: Colors.FADE_GREEN,
  },
  btnTextView: {
    color: Colors.APP_COLOR,
    fontSize: 20,
  },
  cardView: {
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: Dimension.BORDER_RADIUS,
  },
});
