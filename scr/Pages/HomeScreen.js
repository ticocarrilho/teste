import React from 'react';
import { StyleSheet, View, TextInput, Image, Button } from 'react-native';

export default function HomeScreen({ navigation }) {

  function navigateToSignupScreen() {
    navigation.navigate('SignupScreen');
  }
  function navigateToMainScreen() {
    navigation.navigate('Main');
  }



  return (
    <View
      style={styles.container}>

      <Image
        style={styles.logo}
        source={require('../Images/icon.png')}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#ffffff"

      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#ffffff"
        secureTextEntry


      />

      <View style={styles.button}>
        <Button
          title="Entrar" onPress={navigateToMainScreen}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Não tem uma conta? Cadastre-se" onPress={navigateToSignupScreen}
        />
      </View>


    </View>






  );

}

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


  },
  button: {
    marginVertical: 25
  }


});