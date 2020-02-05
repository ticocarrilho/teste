import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
      backgroundColor: '#23d2a8',
      paddingHorizontal: 10,
      paddingTop: 10,
      flex:1
    },
  
    text: {
      fontSize: 18,
      color: '#ffffff',
      marginLeft: 5,
    },
  
    input: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      fontSize: 20,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      marginVertical: 10,
    },
    button:{
        flexDirection:'row', 
        justifyContent:'space-around',
        marginBottom:10
    }
  });
  