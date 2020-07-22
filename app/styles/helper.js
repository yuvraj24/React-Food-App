import IMG_1 from '../assets/images/recipe1.jpg';
import IMG_2 from '../assets/images/recipe3.jpg';
import IMG_3 from '../assets/images/recipe2.jpg';

import LIST_IMG_1 from '../assets/images/recipelist1.jpg';
import LIST_IMG_2 from '../assets/images/recipelist2.jpg';
import LIST_IMG_3 from '../assets/images/recipelist4.jpg';
import LIST_IMG_4 from '../assets/images/recipelist5.jpg';

import REST_1 from '../assets/images/restaurant1.jpg';
import REST_2 from '../assets/images/restaurant2.jpg';
import REST_3 from '../assets/images/restaurant3.jpg';
import REST_4 from '../assets/images/restaurant4.jpg';
import REST_5 from '../assets/images/restaurant5.jpg';

export const HomeRecipes = [
  {
    title: 'START YOUR DAY RIGHT',
    subtitle: 'Breakfast',
    image: IMG_1,
  },
  {
    title: 'POWER VEGETABLES',
    subtitle: 'Vegetarian',
    image: IMG_2,
  },
  {
    title: 'STAY FIT, EAT HEALTHY',
    subtitle: 'Breakfast',
    image: IMG_3,
  },
];

export const HomeRecipesList = [
  {
    title: 'Belgian Waffles',
    count: '6 people',
    time: '45 minutes',
    image: LIST_IMG_3,
  },
  {
    title: 'Fruity Oatmeal',
    count: '2 people',
    time: '15 minutes',
    image: LIST_IMG_2,
  },
  {
    title: 'French Toast',
    count: '20 people',
    time: '60 minutes',
    image: LIST_IMG_4,
  },
  {
    title: 'Morning Smoothies',
    count: '2 people',
    time: '10 minutes',
    image: LIST_IMG_1,
  },
];

export const RecipeStepsList = [
  {
    number: 1,
    step: 'Oil the waffle maker.',
  },
  {
    number: 2,
    step: 'Sift the dry ingredients together in a large bowl.',
  },
  {
    number: 3,
    step:
      'In separate bowl, separate egg whites and beat until stiff peaks form.',
  },
  {
    number: 4,
    step: 'Mix together the egg yolks, milk, oil, and vanilla, stir slightly.',
  },
];

export const InredientsList = [
  {
    title: 'Flour',
    subtitle: '2 cups',
    checked: true,
  },
  {
    title: 'Baking powder',
    subtitle: '4 teaspoons',
    checked: true,
  },
  {
    title: 'Salt',
    subtitle: '½ teaspoon',
    checked: false,
  },
  {
    title: 'Sugar',
    subtitle: '¼ cup',
    checked: false,
  },
  {
    title: 'Eggs',
    subtitle: '2',
    checked: false,
  },
  {
    title: 'Milk',
    subtitle: '2 cups',
    checked: false,
  },
  {
    title: 'Vegetable oil',
    subtitle: '½ cup',
    checked: false,
  },
];

export const RestaurantList = [
  {
    title: 'Gusteau’s',
    type: 'French',
    rating: 4,
    review: 129,
    image: REST_1,
  },
  {
    title: 'Flo’s V8 Cafe',
    type: 'American',
    rating: 3,
    review: 167,
    image: REST_2,
  },
  {
    title: 'Pizza Planet',
    type: 'American',
    rating: 4,
    review: 89,
    image: REST_3,
  },
  {
    title: 'Hayyhausen’s',
    type: 'Sushi',
    rating: 5,
    review: 156,
    image: REST_4,
  },
  {
    title: 'Gusteau’s',
    type: 'French',
    rating: 2,
    review: 200,
    image: REST_5,
  },
];

export const RestDetailInfo =
  'The restaurant was degraded to a 4-star rating after feared food critic Anton Ego (possibly deliberately) wrote a scathing review regarding Gusteau’s cooking.';

export const DUMMY_DATA =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

export const TimeSlots = [
  {
    slot: '19:00',
    active: true,
  },
  {
    slot: '19:30',
    active: false,
  },
  {
    slot: '20:00',
    active: false,
  },
  {
    slot: '20:30',
    active: false,
  },
];
