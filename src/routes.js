import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Welcome from './pages/welcome';
import Magazine from './pages/magazines';
import Contacts from './pages/contacts';

const Routes = createStackNavigator({
  Welcome: {
    screen: Welcome,
  },
  Magazine: {
    screen: Magazine,
  },
}, {
  initialRouteName: 'Welcome',
});

export default Routes;
