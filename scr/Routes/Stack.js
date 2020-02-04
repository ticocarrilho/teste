import HomeScreen from '../Pages/HomeScreen';
import SignupScreen from '../Pages/SignupScreen';
import MainScreen from '../Pages/MainScreen';
import {createStackNavigator} from 'react-navigation-stack';
import teste from '../Pages/PaginaTeste';
const stack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Teste123:teste,
    Main: {
      screen: MainScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);
export default stack;
