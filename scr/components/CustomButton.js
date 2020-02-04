import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

const CustomButton = ({text,onPress}) =>{
    return(<View><TouchableOpacity style={styles.botao} onPress={onPress}>
        <Text>{text}</Text>
  </TouchableOpacity></View>)
}

const styles = StyleSheet.create({
    botao:{
      backgroundColor:'#28D8A1',
      borderRadius: 5,
      padding:10
    }
})

export default CustomButton