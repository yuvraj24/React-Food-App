import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors, Constant} from '../../styles';
import FoodTextView from '../../components/FoodTextView';
import createStyles from '../../styles/style';

const baseStyle = createStyles();

const RecipeItemView = ({params, onClick}) => (
  <TouchableOpacity onPress={onClick}>
    <View style={viewStyle.containerView}>
      <Image source={params.image} style={viewStyle.imageStyle} />
      <View style={viewStyle.headerView}>
        <FoodTextView
          style={viewStyle.textTitleStyle}
          text={params && params.title}
        />
        <FoodTextView
          style={baseStyle.textBigTitleStyle}
          text={params && params.subtitle}
        />
      </View>
    </View>
  </TouchableOpacity>
);

export default RecipeItemView;

const viewStyle = StyleSheet.create({
  containerView: {
    height: Dimensions.get('window').height / 3,
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: '2%',
    marginBottom: '2%',
  },
  headerView: {
    padding: '4%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    borderRadius: 20,
  },
  imageStyle: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width - 30,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  textTitleStyle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    // fontWeight: 'bold',
    lineHeight: 16,
    letterSpacing: -0.24,
    fontWeight: '600',
    fontFamily: Constant.SF_PROTEXT_SEMIBOLD,
  },
});
