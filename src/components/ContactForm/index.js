import React, { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';

import { Overlay } from 'react-native-elements';
import { ContainerBorder } from '../../pages/styles';

export default function ContactForm({ visible, setVisible, save }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <Overlay
      overlayStyle={{ alignItems: 'center', backgroundColor: '#191414' }}
      fullScreen
      isVisible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View
        style={{
          justifyContent: 'center',
          width: '95%',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <ContainerBorder
          style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}
        >
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Name</Text>
        </ContainerBorder>
        <TextInput
          testID="name"
          value={name}
          onChangeText={setName}
          style={{
            height: 40,
            color: '#fff',
            width: '100%',
            alignSelf: 'center',
            backgroundColor: 'transparent',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#1DB954',
            borderRadius: 2,
            marginBottom: 50,
          }}
        />

        <ContainerBorder
          style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}
        >
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Email</Text>
        </ContainerBorder>
        <TextInput
          testID="email"
          value={email}
          onChangeText={setEmail}
          style={{
            height: 40,
            color: '#fff',
            width: '100%',
            alignSelf: 'center',
            backgroundColor: 'transparent',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#1DB954',
            borderRadius: 2,
          }}
        />

        <TouchableOpacity
          onPress={() => save(name, email)}
          style={{
            width: '100%',
            backgroundColor: '#1DB954',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 10,
            padding: 15,
          }}
        >
          <Text style={{ color: '#FFF', fontSize: 15 }}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
}
