import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStackScreenProps } from '../../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  firstCard: {
    marginBottom: 10,
  },
});

export const TabTwoScreen = ({ navigation }: RootStackScreenProps<'TabTwo'>): JSX.Element => {
  console.log(navigation);
  return <View style={styles.container}></View>;
};
