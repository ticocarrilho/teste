import React, {useState, useRef, useEffect} from 'react';
import {Alert, View, TextInput, Button, Text, ScrollView} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import styles from './style';
import cpf from 'cpf';
import sigaBemAPI from '../../api/sigaBemAPI';

export default function SignupScreen({navigation}) {
  const [dados, setDados] = useState({
    nome: '',
    data: '',
    cpf: '',
    vem: '',
    senha: '',
    confirmaSenha: '',
  });

  const dataRef = useRef(null);
  const cpfRef = useRef(null);
  const vemRef = useRef(null);
  const senhaRef = useRef(null);
  const confirmaSenhaRef = useRef(null);

  const [senhaPreenchida,setSenhaPreenchida] = useState(false)
  const [senhasIguais,setSenhasIguais] = useState(false)
  useEffect(()=>{
    if(dados.senha.length>=8){
      setSenhaPreenchida(true)
    }
  },[dados.senha])

  useEffect(()=>{
    setSenhasIguais(dados.senha===dados.confirmaSenha)

  },[dados.confirmaSenha])

  const isAnyEmpty = objeto => {
    const empty = element => element === '';
    return Object.values(objeto).some(empty);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Nome do Usuário</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.nome}
          onChangeText={nome => setDados({...dados, nome})}
          returnKeyType="next"
          onSubmitEditing={() => dataRef.current.focus()}
        />

        <Text style={styles.text}>Data de Nascimento</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.data}
          onChangeText={data => setDados({...dados, data})}
          returnKeyType="next"
          onSubmitEditing={() => cpfRef.current.input.focus()}
          ref={dataRef}
          keyboardType="numeric"
        />

        <Text style={styles.text}>CPF</Text>

        <TextInputMask
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.cpf}
          maxLength={14}
          onChangeText={(formatted, extracted) => {
            setDados({...dados, cpf:extracted})
            console.log(extracted + ' ' + formatted)
          }}
          returnKeyType="next"
          onSubmitEditing={() => vemRef.current.focus()}
          onEndEditing={() => {
            if (dados.cpf.length !== 0 && !cpf.isValid(dados.cpf)) {
              Alert.alert('Erro', 'CPF Invalido.');
              cpfRef.current.input.focus();
            }
          }}
          ref={cpfRef}
          mask={'[000].[000].[000]-[00]'}
          keyboardType="numeric"
        />

        <Text style={styles.text}>Numero do Cartão VEM</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.vem}
          onChangeText={vem => setDados({...dados, vem})}
          returnKeyType="next"
          onSubmitEditing={() => senhaRef.current.focus()}
          ref={vemRef}
          keyboardType="numeric"
        />

        <Text style={styles.text}>Senha</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.senha}
          onChangeText={senha => setDados({...dados, senha})}
          returnKeyType="next"
          onSubmitEditing={() => confirmaSenhaRef.current.focus()}
          ref={senhaRef}
          secureTextEntry={true}
        />

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.text}>Confirmar Senha</Text>
          <Text style={styles.senhaInvalida}>{senhasIguais ?'' :'Senhas não iguais'}</Text>
        </View>

        <TextInput
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.confirmaSenha}
          onChangeText={confirmaSenha => setDados({...dados, confirmaSenha})}
          ref={confirmaSenhaRef}
          secureTextEntry={true}
          editable={senhaPreenchida}
        />
        <View style={styles.button}>
          <Button
            title="Limpar Tudo"
            onPress={() => {
              setDados({
                nome: '',
                data: '',
                cpf: '',
                vem: '',
                senha: '',
                confirmaSenha: '',
              });
            }}
          />
          <Button
            title="Proximo"
            onPress={() => {
              if (isAnyEmpty(dados)) {
                Alert.alert('Erro', 'Você deve preencher todos os campos.');
              } else if (!cpf.isValid(dados.cpf)) {
                Alert.alert('Erro', 'CPF Invalido.');
                cpfRef.current.focus();
              } else {
                console.log(dados)
                sigaBemAPI
                  .post('/users/', {
                    body: {
                      cpf: dados.cpf,
                      dt: dados.data,
                    },
                  })
                  .then(resultado => {
                    console.log(resultado);
                    navigation.navigate('EnderecoScreen');
                  })
                  .catch(error => {
                    Alert.alert('Erro', 'Erro');
                    console.log(error);
                  });
              }
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
