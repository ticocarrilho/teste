import React from 'react';
import { View,TextInput,StyleSheet,Button,Text, ScrollView } from 'react-native';


export default function SignupScreen({ navigation }) {

  function navigateToHomeScreen() {
    navigation.navigate('HomeScreen');
  }

    return (
      <View style={styles.container}>
    

      <ScrollView>
      
      <View style={styles.containertext}>
      <Text style={styles.text}>
      Nome do usuário
      </Text>
      </View>

      <View style={styles.containerinput}>
      <TextInput
        style={styles.input}
        underlineColorAndroid= "#c3c3c3"
      />
      </View>

      <View style={styles.containertext}>
      <Text style={styles.text}>
      Data de nascimento
      </Text>
      </View>

      <View style={styles.containerinput}>
      <TextInput
        style={styles.input}
        underlineColorAndroid= "#c3c3c3"
      />
      </View>

      <View style={styles.containertext}>
      <Text style={styles.text}>
      CPF
      </Text>
      </View>

      <View style={styles.containerinput}>
      <TextInput
        style={styles.input}
        underlineColorAndroid= "#c3c3c3"
      />
      </View>

      <View style={styles.containertext}>
      <Text style={styles.text}>
      Numero cartão vem
      </Text>
      </View>

      <View style={styles.containerinput}>
      <TextInput
        style={styles.input}
        underlineColorAndroid= "#c3c3c3"
      />
      </View>

      <View style={styles.containertext}>
      <Text style={styles.text}>
      Senha
      </Text>
      </View>

      <View style={styles.containerinput}>
      <TextInput
        style={styles.input}
        underlineColorAndroid= "#c3c3c3"
      />
      </View>

      <View style={styles.containertext}>
      <Text style={styles.text}>
      Confirmar senha
      </Text>
      </View>

      <View style={styles.containerinput}>
      <TextInput
        style={styles.input}
        underlineColorAndroid= "#c3c3c3"
      />
      </View>

      <View style={{flexDirection:'row',borderColor:'black',borderWidth:1,padding:50}}>
      <View style={styles.containertext}>
      <Text style={styles.text1}>
      CEP
      </Text>
      </View>

      <View style={styles.containerinput}>
      <TextInput
        style={styles.inputadress1}
        underlineColorAndroid= "#c3c3c3"
      />
      </View>

      <View style={styles.containertext}>
      <Text style={styles.text2}>
      Endereço
      </Text>
      </View>
      


      <View style={styles.containerinput}>

      </View>
      <TextInput
        style={styles.inputadress2}
        underlineColorAndroid= "#c3c3c3"
      />
      </View>

      <View style={styles.containertext}>
      <Text style={styles.text3}>
      Bairro
      </Text>
      </View>

      <View style={styles.containerinput}>
      <TextInput
        style={styles.inputadress3}
        underlineColorAndroid= "#c3c3c3"
      />
      </View>

      <View style={styles.containertext}>
      <Text style={styles.text4}>
      Cidade
      </Text>
      </View>

      <View style={styles.containerinput}>
      <TextInput
        style={styles.inputadress4}
        underlineColorAndroid= "#c3c3c3"
      />
      </View>

      <View style={styles.containertext}>
      <Text style={styles.text5}>
      Estado
      </Text>
      </View>

      <View style={styles.containerinput}>
      <TextInput
        style={styles.inputadress5}
        underlineColorAndroid= "#c3c3c3"
      />
      </View>

      </ScrollView>
      
      <View style={styles.containerbutton}>
      <Button style={styles.button}
        title="Cadastrar" onPress={navigateToHomeScreen} 
      />  
      </View>

      

        

       </View>
    );
}

const styles= StyleSheet.create({

  container: {
    
    backgroundColor: '#23d2a8',
    height:"100%",
    width: "100%"


  },

  text: {
    
    fontSize: 18,
    color: '#ffffff'
     

  },

  text1: {
    fontSize: 18,
    color: '#ffffff'

  },

  text2: {
    fontSize: 18,
    color: '#ffffff'

  },

  text3: {
    fontSize: 18,
    color: '#ffffff'

  },

  text4: {
    fontSize: 18,
    color: '#ffffff'

  },

  text5: {
    fontSize: 18,
    color: '#ffffff'

  },

  input : {
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    fontSize: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 10

    
    
    
  },

  inputadress1: {
    width: "50%",
    
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 10

  },

  inputadress2: {
    width: "60%",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 10

  },

  inputadress3: {
    width: "50%",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 10

  },


  inputadress4: {
    width: "20%",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 10

  },

  inputadress5: {
    width: "20%",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 10

  },

  button: {
    display: 'flex',

    


  },

  containertext: {
    alignSelf:'flex-start'

  },
  
  containerinput: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    

  },

  containerbutton: {
    
    
    
  }

});