import React, {useState, useEffect, useRef} from 'react';
import {View, TextInput, Button, Text, ScrollView,Alert} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import styles from './style';
import correiosAPI from '../../api/correiosAPI';
import sigaBemAPI from '../../api/sigaBemAPI';
import Loading from '../../components/Loading'

export default EnderecoScreen = ({navigation}) => {
  const [dados, setDados] = useState({
    ...navigation.getParam('dados'),
    cep: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [loading,setLoading] = useState(false)

  const enderecoRef = useRef(null);
  const bairroRef = useRef(null);
  const cidadeRef = useRef(null);
  const estadoRef = useRef(null);

  useEffect(() => {
    if (dados.cep.length >= 8) {
      correiosAPI
        .get(dados.cep + '/json')
        .then(resultado => {
          setDados({
            ...dados,
            endereco: resultado.data.logradouro,
            bairro: resultado.data.bairro,
            cidade: resultado.data.localidade,
            estado: resultado.data.uf,
          });
        })
        .catch(error => console.log(error));
    }
  }, [dados.cep]);

  return (
    <ScrollView style={{backgroundColor:'#23d2a8'}}>
      <View style={styles.container}>
        <Text style={styles.text}>CEP</Text>

        <TextInputMask
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.cep}
          onChangeText={cep => setDados({...dados, cep})}
          maxLength={9}
          returnKeyType="next"
          onSubmitEditing={() => enderecoRef.current.focus()}
          mask={'[00000]-[000]'}
          keyboardType="numeric"
        />

        <Text style={styles.text}>Endereço</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.endereco}
          onChangeText={endereco => setDados({...dados, endereco})}
          returnKeyType="next"
          ref={enderecoRef}
          onSubmitEditing={() => bairroRef.current.focus()}
        />

        <Text style={styles.text}>Bairro</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.bairro}
          onChangeText={bairro => setDados({...dados, bairro})}
          returnKeyType="next"
          ref={bairroRef}
          onSubmitEditing={() => cidadeRef.current.focus()}
        />

        <Text style={styles.text}>Cidade</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.cidade}
          onChangeText={cidade => setDados({...dados, cidade})}
          returnKeyType="next"
          ref={cidadeRef}
          onSubmitEditing={() => estadoRef.current.focus()}
        />

        <Text style={styles.text}>Estado</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.estado}
          onChangeText={estado => setDados({...dados, estado})}
          ref={estadoRef}
        />
        <View style={styles.button}>
          <Button
            title="Limpar Tudo"
            onPress={() => {
              setDados({
                cep: '',
                endereco: '',
                bairro: '',
                cidade: '',
                estado: '',
              });
            }}
          />
          <Button title="Cadastrar" onPress={()=>{
            setLoading(true)
            sigaBemAPI
            .post('/users/', 
              {
                cpf:dados.cpf+'',
                dt:dados.data+''
              },
              {
              "headers":{
                'Content-Type': 'application/json',
              }
            })
            .then(resultado => {
              console.log(resultado);
              Alert.alert('Sucesso',resultado.data.message )  
              // navigation.navigate('EnderecoScreen');
            })
            .catch(error => {
              Alert.alert('Erro', 'Erro');
              console.log(error);
            })
            .finally(()=>setLoading(false));
            
          }}/>
          <Loading visible={loading}/>
        </View>
      </View>
    </ScrollView>
  );
};
