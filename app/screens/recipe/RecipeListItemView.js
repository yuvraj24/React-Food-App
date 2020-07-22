import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors, Constant, Dimension} from '../../styles';
import FoodTextView from '../../components/FoodTextView';
import createStyles from '../../styles/style';

const baseStyle = createStyles();

const RecipeListItemView = ({params, onClick}) => (
  <TouchableOpacity onPress={onClick}>
    <View style={viewStyle.containerView}>
      <Image source={params.image} style={viewStyle.imageStyle} />
      <View style={viewStyle.headerView}>
        <FoodTextView
          style={baseStyle.textBigTitleStyle}
          text={params && params.title}
        />
        <View style={{flexDirection: 'row'}}>
          <FoodTextView
            style={viewStyle.textTitleStyle}
            text={params && params.count}
          />
          <FoodTextView
            style={viewStyle.textTitleStyle}
            text={params && ' • ' + params.time}
          />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default RecipeListItemView;

const viewStyle = StyleSheet.create({
  containerView: {
    height: Dimensions.get('window').height / 4.5,
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '1.5%',
    marginBottom: '1.5%',
  },
  headerView: {
    padding: '4%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  imageStyle: {
    height: Dimensions.get('window').height / 4.5,
    width: Dimensions.get('window').width - 25,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  textTitleStyle: {
    fontSize: 16,
    color: 'rgba(255,255,255,1)',
    fontWeight: 'bold',
    fontFamily: Constant.SF_PROTEXT_REGULAR,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
