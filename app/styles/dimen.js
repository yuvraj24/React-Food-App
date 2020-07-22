import {Platform} from 'react-native';

export const RECIPE_CELL_HEIGHT = 140,
  RESTAURANT_CELL_HEIGHT = 120,
  RECIPE_LIST_CELL_HEIGHT = RECIPE_CELL_HEIGHT / 2,
  HEADER_HEIGHT = Platform.OS === 'ios' ? 160 : 160,
  DETAIL_HEADER_HEIGHT = Platform.OS === 'ios' ? 240 : 200,
  MAP_HEIGHT = Platform.OS === 'ios' ? 280 : 260,
  BUTTON_HEIGHT = 50,
  BORDER_RADIUS = 10;
