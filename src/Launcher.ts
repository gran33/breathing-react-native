import { Navigation } from 'react-native-navigation';
import {getString} from './strings';


export function launch() {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: 'breathing.HomeScreen',
              options: {
                topBar: {
                  title: {
                    text: getString('')
                  }
                }
              }
            }
          }]
        }
      },

    });
  });
}
