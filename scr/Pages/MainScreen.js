import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {NavigationNativeContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MainScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../Images/icon.png')} />
      <Button
        title="teste"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};
MainScreen.navigationOptions = ({navigation}) => {
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
