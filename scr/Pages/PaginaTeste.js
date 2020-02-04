import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import busApi from '../api/busApi'

const PaginaTeste = () => {
  const [cep,setCep] = useState('asds')
  const [endereco,setEndereco] = useState('')
  const getEnd = async (cepe) => {
    try {
      const result= await busApi.get(cep+'/json')
      return result
    } catch (error) {
      
    }
  }
  
  return (
    <View>
        <Text>
            CEP
        </Text>
        <TextInput style={styles.input} maxLength={9} value={cep} onChangeText={(text)=>{
            setCep(text)
            console.log(text + ' ' + cep)
            if(text.length===8){
              getEnd(text).then((resu)=>{
                
                setEndereco(resu.data.logradouro)
              }).catch()
            }
            
            
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