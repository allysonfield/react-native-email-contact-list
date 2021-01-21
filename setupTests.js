import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
// import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
