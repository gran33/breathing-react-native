import {Navigation} from 'react-native-navigation';
import ELEMENTS from './Names';
import HomeScreen from './home.screen';

export function registerScreens() {
  Navigation.registerComponent(ELEMENTS.SCREENS.HOME_SCREEN, () => HomeScreen);
}
