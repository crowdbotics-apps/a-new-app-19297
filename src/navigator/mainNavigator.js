import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile90535Navigator from '../features/UserProfile90535/navigator';
import Maps90516Navigator from '../features/Maps90516/navigator';
import Settings90494Navigator from '../features/Settings90494/navigator';
import Settings90479Navigator from '../features/Settings90479/navigator';
import NotificationList90478Navigator from '../features/NotificationList90478/navigator';
import Maps90477Navigator from '../features/Maps90477/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile90535: { screen: UserProfile90535Navigator },
Maps90516: { screen: Maps90516Navigator },
Settings90494: { screen: Settings90494Navigator },
Settings90479: { screen: Settings90479Navigator },
NotificationList90478: { screen: NotificationList90478Navigator },
Maps90477: { screen: Maps90477Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
