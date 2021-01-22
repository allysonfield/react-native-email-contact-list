import React from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';

import { Overlay } from 'react-native-elements';
import { ContainerBorder, ContainerRow } from '../../pages/styles';

export default function FormMail({
  email,
  visible,
  setVisible,
  sendEmail,
  body,
  setBody,
  setSubject,
  subject,
  name,
}) {
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
        <ContainerRow>
          <ContainerBorder>
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>to</Text>
          </ContainerBorder>
          <Text
            style={{
              paddingVertical: 10,
              color: '#FFF',
              fontWeight: 'bold',
              width: 260,
              alignSelf: 'center',
              backgroundColor: '#1DB954',
              textAlign: 'center',
              borderRadius: 2,
            }}
          >
            {email}
          </Text>
        </ContainerRow>
        <ContainerRow>
          <ContainerBorder>
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>subject</Text>
          </ContainerBorder>

          <TextInput
            value={subject}
            onChangeText={setSubject}
            style={{
              height: 40,
              color: '#FFF',
              width: 230,
              alignSelf: 'center',
              backgroundColor: 'transparent',
              textAlign: 'center',
              borderWidth: 1,
              borderColor: '#1DB954',
              borderRadius: 2,
            }}
          />
        </ContainerRow>
        <TextInput
          value={body}
          onChangeText={setBody}
          multiline
          style={{
            height: 200,
            color: '#FFF',
            width: '100%',
            alignSelf: 'center',
            backgroundColor: 'transparent',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#1DB954',
          }}
        />
        <TouchableOpacity
          onPress={() => sendEmail(email, name)}
          style={{
            width: '100%',
            backgroundColor: '#1DB954',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 10,
            padding: 15,
          }}
        >
          <Text style={{ color: '#FFF', fontSize: 15 }}>SEND</Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
}
