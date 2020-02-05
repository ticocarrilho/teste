import React, {useState, useRef, useEffect} from 'react';
import {Alert,View, TextInput, Button, Text, ScrollView} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import styles from './style';

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

  const isAnyEmpty = (objeto)=>{
    const empty = (element) => element==='';
    return Object.values(objeto).some(empty);
  }

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
          onSubmitEditing={() => cpfRef.current.focus()}
          ref={dataRef}
        />

        <Text style={styles.text}>CPF</Text>

        <TextInputMask
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.cpf}
          maxLength={14}
          onChangeText={cpf => setDados({...dados, cpf})}
          returnKeyType="next"
          onSubmitEditing={() => vemRef.current.focus()}
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

        <Text style={styles.text}>Confirmar Senha</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="#c3c3c3"
          value={dados.confirmaSenha}
          onChangeText={confirmaSenha => setDados({...dados, confirmaSenha})}
          ref={confirmaSenhaRef}
          secureTextEntry={true}
        />
        <View style={styles.button}>
          <Button
            title="Limpar Tudo"
            onPress={() =>{
              setDados({
                nome: '',
                data: '',
                cpf: '',
                vem: '',
                senha: '',
                confirmaSenha: '',
            })}}
          />
          <Button
            title="Proximo"
            onPress={() => {
              if(isAnyEmpty(dados)){
                Alert.alert("Erro","Você deve preencher todos os campos.")
              }
              else{
                navigation.navigate('EnderecoScreen')
              }
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
