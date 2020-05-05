import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import BoxScreen from './screens/BoxScreen';
import Coments from './screens/Coments';
import Graphic from './screens/Graphic';
import HomeScreen from './screens/HomeScreen';
import ImageSlide from './screens/ImagesSlide';
import Profile from './screens/Profile';
import RatingScreen from './screens/RatingScreen';
import Profile2 from './screens/profile2';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Rating: RatingScreen,
    Graphics: Graphic,
    Perfil: Profile,
    Coment: Coments,
    Islide: ImageSlide,
    Profile: Profile2,
    Box: BoxScreen

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);