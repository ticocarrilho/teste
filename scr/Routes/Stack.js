import HomeScreen from '../Pages/HomeScreen';
import SignupScreen from '../Pages/Cadastro/SignupScreen';
import MainScreen from '../Pages/MainScreen';
import EnderecoScreen from '../Pages/Cadastro/EnderecoScreen'
import {createStackNavigator} from 'react-navigation-stack';
const stack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Main: {
      screen: MainScreen,
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions:{
        title:'Cadastro'
      }
    },
    EnderecoScreen: {
      screen: EnderecoScreen,
      navigationOptions:{
        title:'Cadastro'
      }
    },
  },
  {
    initialRouteName: 'Home',
  },
);
export default stack;
