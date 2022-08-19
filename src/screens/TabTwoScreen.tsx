import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../../types';

export const TabTwoScreen = ({ navigation }: RootStackScreenProps<'TabTwo'>): JSX.Element => {
  console.log(navigation);
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  firstCard: {
    marginBottom: 10,
  },
});
