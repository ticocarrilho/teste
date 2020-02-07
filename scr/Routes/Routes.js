import Stack from './Stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import NotificationScreen from '../Pages/NotificacionScreen';
import { createSwitchNavigator } from 'react-navigation';
import Stack2 from '../Routes/Stack2'

const drawer = createDrawerNavigator({
  Stack:Stack,
  Notification: NotificationScreen,
},
{
  initialRouteName:'Stack'
});
const switcher = createSwitchNavigator({
  Home:Stack2,
  Drawer:drawer
},
{
  initialRouteName:'Home'
})

export default switcher;
