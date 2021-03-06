import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Title1, ContainerCol, ContainerRow } from './styles';

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  llistItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default function ContactList({ data, clk, Bt, Tp, deleteContact }) {
  const renderItem = ({ item, index }) => (
    <View>
      <ContainerRow>
        <ContainerCol style={{ width: 250 }}>
          <Title1 style={{ marginBottom: 20 }}>{item.name}</Title1>
          <Title1>{item.email}</Title1>
        </ContainerCol>
        <ContainerCol>
          <TouchableOpacity onPress={() => clk(item.name, item.email)}>
            <Icon
              style={{ marginBottom: 20 }}
              name="send"
              size={30}
              color="blue"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteContact(index)}>
            <Icon testID="cell-delete" name="delete" size={30} color="red" />
          </TouchableOpacity>
        </ContainerCol>
      </ContainerRow>
    </View>
  );
  return (
    <View style={{ marginBottom: Bt, marginTop: Tp, width: '100%' }}>
      <FlatList
        testID="list"
        style={{ marginTop: 30, zIndex: 30 }}
        contentContainerStyle={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
}
