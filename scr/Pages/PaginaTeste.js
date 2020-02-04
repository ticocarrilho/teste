import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import busApi from '../api/busApi'

const PaginaTeste = () => {
  const [cep,setCep] = useState('')
  const [endereco,setEndereco] = useState('')

  useEffect(() => {
    if(cep.length>=8){
      busApi.get(cep+'/json').then((resultado)=>{
        setEndereco(resultado.data.logradouro)
      }).catch(error => console.log(error))
    }
  }, [cep])
  
  return (
    <View>
        <Text>
            CEP
        </Text>
        <TextInput style={styles.input} maxLength={8} value={cep} onChangeText={(text)=>{
            setCep(text) 
          }} />
        <Text>
            Endereco
        </Text>
        <TextInput style={styles.input} value={endereco} onChangeText={(text)=>{setEndereco(text)
        console.log(endereco)
        }}/>
        <Button title="Enviar" onPress={()=>{
          console.log(cep)
        }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderColor:'black'
  }
});

export default PaginaTeste;