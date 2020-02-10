import React, { useState, useEffect } from 'react';
import { View, StyleSheet,Text, Modal, ActivityIndicator } from 'react-native';

const loading = ({ visible }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(visible);
  }, [visible])
  return (
    <View>
      <Modal
        visible={loading}
        transparent={true}
      >
        <View style={style.backgroundModal}>
          <View style={style.containerIndicator}>
            <ActivityIndicator animating={true}/>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const style = StyleSheet.create({
  backgroundModal:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  containerIndicator:{
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 50,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})
export default loading