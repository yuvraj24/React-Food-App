import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Platform,
} from 'react-native';
import FoodButtonView from '../../components/FoodButtonView';
import {Constant, Colors, Helper} from '../../styles';
import FoodTextView from '../../components/FoodTextView';
import IngredientItemView from './IngredientItemView';
import DividerView from '../../components/DividerView';
import ArrowDownIcon from '../../assets/images/icons-arrow-down.png';
import createStyles from '../../styles/style';
import ModalHeaderView from '../../components/ModalHeaderView';

const baseStyle = createStyles();

const IngredientsModalView = ({visible, onClose}) => {
  const [ingredientList, setIngriedientList] = useState(Helper.InredientsList);

  const onOptionSelect = (index, value) => {
    // alert(index + ' : ' + value);
  };

  return (
    <Modal animated transparent={true} animationType="slide" visible={visible}>
      <View>
        {visible && <View style={viewStyle.dimView} />}
        <View style={viewStyle.btnViewSheet}>
          <View>
            <ModalHeaderView onClose={onClose} title={Constant.INGREDIENTS} />
            <DividerView />
            <FlatList
              data={ingredientList}
              scrollEnabled={false}
              ItemSeparatorComponent={() => <DividerView />}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              renderItem={({item, index}) => {
                return (
                  <IngredientItemView
                    item={item}
                    onSelect={onOptionSelect}
                    index={index}
                  />
                );
              }}
            />
            <DividerView />
          </View>
          <FoodButtonView
            style={viewStyle.btnView}
            text={Constant.ADD_REMINDERS}
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
};

export default IngredientsModalView;

const viewStyle = StyleSheet.create({
  btnViewSheet: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
    paddingBottom: 40,
    backgroundColor: Colors.WHITE,
  },
  dimView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  btnView: {
    marginTop: '5%',
    marginBottom: Platform.OS === 'ios' ? -10 : -20,
  },
});
