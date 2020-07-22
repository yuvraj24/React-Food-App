import {StyleSheet, Platform} from 'react-native';
import {Colors, Constant, Dimension} from '.';
import {HEADER_HEIGHT} from './dimen';
import {
  SF_PROTEXT_SEMIBOLD,
  SF_PRODISPLAY_BOLD,
  SF_PRODISPLAY_REGULAR,
  SF_PROTEXT_REGULAR,
} from './constants';

const baseStyles = {
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  homeHeader: {
    height: HEADER_HEIGHT,
    backgroundColor: Colors.APP_COLOR,
  },
  homeHeaderTitle: {
    fontSize: 34,
    color: Colors.WHITE,
    bottom: Platform.OS === 'ios' ? -45 : -65,
    position: 'absolute',
    fontFamily: SF_PROTEXT_SEMIBOLD,
  },
  baseHeader: {
    backgroundColor: Colors.APP_COLOR,
  },
  baseHeaderTitle: {
    fontSize: 18,
    color: Colors.WHITE,
    fontFamily: SF_PROTEXT_SEMIBOLD,
  },
  searchIcon: {
    width: 32,
    height: 32,
    tintColor: Colors.WHITE,
    top: Platform.OS === 'ios' ? 5 : 15,
    position: 'absolute',
    right: 15, 
  },
  textBigTitleStyle: {
    fontSize: 28,
    color: Colors.WHITE,
    marginTop: '1%',
    lineHeight: 34,
    letterSpacing: 0.36,
    fontWeight: 'bold',
    fontFamily: SF_PROTEXT_REGULAR,
  },
  textSubTitleStyle: {
    fontSize: 18,
    letterSpacing: -0.24,
    fontFamily: SF_PROTEXT_REGULAR,
    fontWeight: 'normal',
    color: Colors.BLACK,
  },
  iconStyle: {
    tintColor: Colors.APP_COLOR,
    width: 36,
    height: 36,
  },
};

export default function createStyles() {
  return StyleSheet.create({...baseStyles});
}
