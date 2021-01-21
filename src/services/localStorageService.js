import AsyncStorage from "@react-native-community/async-storage";

/* eslint-disable no-underscore-dangle */

  
  function setLocal(name, data) {
    AsyncStorage.setItem(name, data);
  }

  function setLocalArray(name, data) {
    const array = JSON.stringify(data)
    AsyncStorage.setItem(name, array);
  }
  async function getLocal(name) {
    return await AsyncStorage.getItem(name);
  }

  async function getLocalArray(name) {
    const data = await AsyncStorage.getItem(name);
    const array = JSON.parse(data)
    return await array;
  }
  
  function clearLocal(name) {
    AsyncStorage.removeItem(name);
  }
  


export {
  setLocal,
  getLocal,
  clearLocal,
  setLocalArray,
  getLocalArray
};
