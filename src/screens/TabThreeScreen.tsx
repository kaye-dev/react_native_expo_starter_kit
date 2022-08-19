import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../../types';

export const TabThreeScreen = ({ navigation }: RootStackScreenProps<'TabThree'>): JSX.Element => {
  console.log(navigation);
  return <View style={styles.container}></View>;
};

export default TabThreeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
