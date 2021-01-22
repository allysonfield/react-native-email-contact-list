import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Alert } from 'react-native';

import RNSmtpMailer from 'react-native-smtp-mailer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactList from '../components/ContactList';
import { Title1 } from './styles';
import FormMail from '../components/MailForm';
import ContactForm from '../components/ContactForm';
import { getLocalArray, setLocalArray } from '../services/localStorageService';

import Sending from '../components/Sending';

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [visible, setVisible] = useState(false);
  const [visiblectt, setVisiblectt] = useState(false);
  const [obj, setObj] = useState([]);
  const [sending, setSending] = useState(false);
  const sendEmail = (mail, nm) => {
    console.log({ mail, nm });
    setSending(true);
    RNSmtpMailer.sendMail({
      mailhost: 'in-v3.mailjet.com',
      port: '587',
      ssl: false, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
      username: '362333185cbb929daa17552cf871bbee',
      password: 'b7e41b1ebf2b20274b29ed29b4c810cb',
      fromName: 'Allyson Monteiro', // optional
      // replyTo: nm, // optional
      recipients: mail,
      // bcc: ["bccEmail1", "bccEmail2"], // optional
      subject,
      htmlBody: `<h1>REACT NATIVE TESTE</h1><p>${body}</p>`,
    })
      .then((success) => {
        console.log(success);
        setSending(false);
        setVisible(false);
        setBody('');
        setName('');
        setSubject('');
        Alert.alert('Email', 'Message sent');
      })
      .catch((err) => {
        setSending(false);
        Alert.alert('erro');
        console.log(err);
      });
  };

  const choice = (nm, em) => {
    setVisible(true);
    setName(nm);
    setEmail(em);
  };

  const deleteContact = async (i) => {
    const array = await getLocalArray('data');
    const index = array.indexOf(i);
    array.splice(index, 1);
    setLocalArray('data', array);
    setObj(array);
  };

  const question = (i) => {
    Alert.alert(
      'Delete Contact',
      'Are you sure you want to delete this contact?',
      [
        {
          text: 'Sim',
          onPress: () => {
            deleteContact(i);
          },
        },
        {
          text: 'Não',
        },
      ],
      { cancelable: true }
    );
  };
  useEffect(() => {
    async function init() {
      const data = await getLocalArray('data');
      data && setObj(data);
    }
    init();
  }, [setObj]);

  const save = async (nm, em) => {
    const data = { name: nm, email: em.replace(/\s/g, '') };
    const array = [];
    const exist = await getLocalArray('data');
    if (exist) {
      if (exist.length > 0) {
        exist.push(data);
        console.log(data);
        setObj(exist);
        setLocalArray('data', exist);
        setVisiblectt(false);
      } else {
        array.push(data);
        console.log(data);
        setObj(array);
        setLocalArray('data', array);
        setVisiblectt(false);
      }
    } else {
      array.push(data);
      console.log(data);
      setObj(array);
      setLocalArray('data', array);
      setVisiblectt(false);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#191414',
        paddingTop: 40,
      }}
    >
      <Sending loading={sending} />
      <TouchableOpacity
        onPress={() => setVisiblectt(true)}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
        <Title1>NEW CONTACT</Title1>
        <Icon name="add" color="#FFF" size={23} />
      </TouchableOpacity>
      <ContactForm
        visible={visiblectt}
        setVisible={setVisiblectt}
        save={save}
      />
      <FormMail
        name={name}
        email={email}
        body={body}
        setBody={setBody}
        visible={visible}
        setVisible={setVisible}
        sendEmail={sendEmail}
        subject={subject}
        setSubject={setSubject}
      />
      {obj.length > 0 && (
        <ContactList deleteContact={question} clk={choice} data={obj} />
      )}
    </View>
  );
}
