import Stack from './Stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import NotificationScreen from '../Pages/NotificacionScreen';

const drawer = createDrawerNavigator({
  Stack: Stack,
  Notification: NotificationScreen,
});

export default drawer;
