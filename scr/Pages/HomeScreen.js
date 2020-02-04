import React from 'react';
import {StyleSheet, View, TextInput, Image, Button} from 'react-native';
import CustomButton from '../components/CustomButton'

export default function HomeScreen({navigation}) {
  function navigateToSignupScreen() {
    navigation.navigate('Signup');
  }
  function navigateToMainScreen() {
    navigation.navigate('Main');
  }

  return (<View style={{borderWidth:1,borderColor:'red',flex:1}}>
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../Images/icon.png')} />

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

      
    </View>
    <View style={styles.button}>
    <CustomButton text="Entrar" onPress={navigateToMainScreen} />
    <CustomButton text="Cadsatrar" onPress={navigateToSignupScreen}/>
    
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    borderWidth:1,
    borderColor:'black',
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
  button: {
    flex:1,
    borderWidth:1,
    borderColor:'black',
    flexDirection:'row',
    justifyContent:'space-around'
  },
});
