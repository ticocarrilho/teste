import React from 'react';
import { View,TextInput,StyleSheet,Button,Text } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';

export default function SignupScreen({ navigation }) {

  function navigateToHomeScreen() {
    navigation.navigate('HomeScreen');
  }

    return (
        <View 
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      
      <TextInput
        style={styles.signupinput}
        placeholder="Nome do usuário"
        placeholderTextColor="#000000"
        underlineColorAndroid= "#000000"
      />
      
      <TextInput
        style={styles.signupinput}
        placeholder="Data de nascimento"
        placeholderTextColor="#000000"
        underlineColorAndroid= "#000000"
      />

      <TextInput
        style={styles.signupinput}
        placeholder="CPF"
        placeholderTextColor="#000000"
        underlineColorAndroid= "#000000"
      />

      <TextInput
        style={styles.signupinput}
        placeholder="Número do cartão Vem"
        placeholderTextColor="#000000"
        underlineColorAndroid= "#000000"
      />

      <TextInput
        style={styles.signupinput}
        placeholder="Senha"
        placeholderTextColor="#000000"
        underlineColorAndroid= "#000000"
      />

      <View style={styles.button}>
      <Button 
        title="Cadastrar" onPress={navigateToHomeScreen}
          
          
        />
      </View>

        

       </View>
    );
}

const styles= StyleSheet.create({ 
    signupinput : {
      width: "90%",
      marginVertical: 10,
      fontSize: 15
      
    },

    button: {
      marginVertical: 50
    }
    
    


});