import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';


const NotificacionScreen = ({ navigation }) => {
  return (
    <View
      style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../Images/icon.png')}
      />
      <Button title="teste" onPress={()=>{
        navigation.openDrawer()
      }} />
      <Text>Aqui é outra tela 123</Text>
    </View>
  );
}
NotificacionScreen.navigationOptions = ({ navigation }) => {
  return {
    drawerLabel: 'Home'
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
    marginVertical: 30

  },
  input: {
    width: 300,
    borderRadius: 15,
    backgroundColor: "#28D8A1",
    color: '#ffffff',
    marginVertical: 5,
    padding: 10


  }
});
export default NotificacionScreen;