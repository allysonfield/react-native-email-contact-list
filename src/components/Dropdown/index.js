import React, {useState} from 'react';
import {FlatList, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Title1, IconGenre1, ContainerRow1} from './styles';

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

export default function Scroll({data, selected, press, Bt, Tp}) {
  const [clicked, setClicked] = useState(false);
  const clk = (id, name) => {
    setClicked(false);
    press(id, name);
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => clk(item.id, item.name)}
      style={styles.listItem}>
      <ContainerRow1>
        <Title1>{item.name}</Title1>
        {item.icons && (
          <IconGenre1
            style={{height: 50, width: 50, backgroundColor: '#888'}}
            source={{uri: item.icons[0].url}}
          />
        )}
        {item.images && (
          <IconGenre1
            style={{height: 50, width: 50, backgroundColor: '#888'}}
            source={{uri: item.images[0].url}}
          />
        )}
      </ContainerRow1>
    </TouchableOpacity>
  );
  return (
    <View style={{marginBottom: Bt, marginTop: Tp}}>
      <TouchableOpacity onPress={() => setClicked(!clicked)}>
        <Title1>{selected}</Title1>
        <Icon
          name={clicked ? 'sort-up' : 'sort-down'}
          size={25}
          color="#fff"
          style={{marginLeft: 20, alignSelf: 'baseline'}}
        />
      </TouchableOpacity>

      <FlatList
        style={{marginTop: 30, zIndex: 30, display: clicked ? 'flex' : 'none'}}
        contentContainerStyle={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
