import React from 'react'
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { Modal } from 'react-native';

export default function Sending({loading}){
  return (
    <Modal visible={loading} transparent animated>
        <View
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#191414',
                    opacity: 1,
                    justifyContent: 'center',
                }}
            />
      <LottieView style={{zIndex: 10}} source={require('../../assets/LottieFiles/lf30_editor_pqnbto1z.json')} autoPlay loop />
    </Modal>
    
  );
}