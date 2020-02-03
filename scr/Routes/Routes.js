import { createDrawerNavigator } from 'react-navigation-drawer'

import NotificacionScreen from '../Pages/NotificacionScreen'
import HomeScreen from '../Pages/HomeScreen';
import SignupScreen from '../Pages/SignupScreen';
import MainScreen from '../Pages/MainScreen';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator(
    {
      Home:{
        screen:HomeScreen,
        navigationOptions:{
          headerShown:false
        }
      },
      Main:{
        screen:MainScreen
      },
      Signup:{
          screen:SignupScreen
      }
    },
    {
      initialRouteName:'Home'
    }
  )
const drawer = createDrawerNavigator(
{
    Notification:NotificacionScreen,
    Teste:stack
}
  )
export default drawer