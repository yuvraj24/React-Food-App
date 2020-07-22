import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import SearchIcon from '../assets/images/icons-search.png';
import BookmarkIcon from '../assets/images/icons-bookmark.png';
import {Colors, Helper, Constant} from '../styles';
import createStyles from '../styles/style';

const baseStyle = createStyles();

const CustomImageView = ({search, bookmark}) => (
  <TouchableOpacity>
    {search && <Image source={SearchIcon} style={baseStyle.searchIcon} />}
    {bookmark && <Image source={BookmarkIcon} style={baseStyle.searchIcon} />}
  </TouchableOpacity>
);

export default CustomImageView;
