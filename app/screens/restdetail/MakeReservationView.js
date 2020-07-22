import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import FoodButtonView from '../../components/FoodButtonView';
import {Constant, Colors, Helper} from '../../styles';
import FoodTextView from '../../components/FoodTextView';
import DividerView from '../../components/DividerView';
import ArrowDownIcon from '../../assets/images/icons-arrow-down.png';
import createStyles from '../../styles/style';
import IngredientItemView from '../recipedetail/IngredientItemView';
import ModalHeaderView from '../../components/ModalHeaderView';
import RestaurantItemView from '../restaurant/RestaurantItemView';
import DateSelectorView from './DateSelectorView';
import PeopleSelectionView from './PeopleSelectionView';
import TimeSlotView from './TimeSlotView';

const baseStyle = createStyles();

const MakeReservationView = ({visible, onClose, item}) => {
  const [ingredientList, setIngriedientList] = useState(Helper.InredientsList);
  item.type = '5 Avenue Anatole\nParis, France';

  useEffect(() => {}, []);

  const onOptionSelect = (index, value) => {
    // alert(index + ' : ' + value);
  };

  return (
    <Modal animated transparent={true} animationType="slide" visible={visible}>
      <View>
        {visible && <View style={viewStyle.dimView} />}
        <View style={viewStyle.btnViewSheet}>
          <ModalHeaderView onClose={onClose} title={Constant.RESERVATION} />
          <DividerView />
          <RestaurantItemView item={item} isModal />
          <DividerView />
          <DateSelectorView />
          <PeopleSelectionView />
          <TimeSlotView />
          <FoodButtonView
            text={Constant.APPLE_PAY}
            onPress={onClose}
            style={viewStyle.btnView}
            titleStyle={viewStyle.btnTextView}
          />
        </View>
      </View>
    </Modal>
  );
};

export default MakeReservationView;

const viewStyle = StyleSheet.create({
  btnViewSheet: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
    paddingBottom: 40,
    backgroundColor: Colors.WHITE,
  },
  headerView: {
    alignSelf: 'center',
    color: Colors.APP_COLOR,
    fontSize: 20,
    padding: '3%',
    fontFamily: Constant.SF_PRODISPLAY_REGULAR,
  },
  dimView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  arrowView: {
    position: 'absolute',
    top: '20%',
    left: '4%',
  },
  arrowIcon: {
    tintColor: Colors.APP_COLOR,
    width: 30,
    height: 30,
  },
  btnView: {
    backgroundColor: Colors.BLACK,
    marginBottom: Platform.OS === 'ios' ? -10 : -20,
  },
  btnTextView: {
    backgroundColor: Colors.BLACK,
    fontSize: 26,
    color: Colors.WHITE,
    fontFamily: Constant.SF_PROTEXT_REGULAR,
  },
});
