import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  BackHandler
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AndroidBackHandler } from 'react-navigation-backhandler';

const MainScreen = ({ navigation }) => {
  const onBackPress = () => {
    Alert.alert(
      'Sair',
      'Deseja sair do aplicativo?',
      [
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Sim', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: true },
    );
    return true;
  }
  return (
    <AndroidBackHandler onBackPress={onBackPress}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../Images/icon.png')} />
        <Button
          title="teste"
          onPress={() => {
            navigation.navigate('Teste123');
          }}
        />
      </View>
    </AndroidBackHandler>
  );
};
MainScreen.navigationOptions = ({ navigation }) => {
  return {
    drawerLabel: 'Home',
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Icone Aqui</Text>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  input: {
    width: 300,
    borderRadius: 15,
    backgroundColor: '#28D8A1',
    color: '#ffffff',
    marginVertical: 5,
    padding: 10,
  },
});
export default MainScreen;
