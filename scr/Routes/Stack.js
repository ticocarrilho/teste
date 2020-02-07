import HomeScreen from '../Pages/HomeScreen';
import SignupScreen from '../Pages/Cadastro/SignupScreen';
import MainScreen from '../Pages/MainScreen';
import EnderecoScreen from '../Pages/Cadastro/EnderecoScreen'
import {createStackNavigator} from 'react-navigation-stack';
const stack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Main',
  },
);
export default stack;
