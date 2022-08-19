import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStackScreenProps } from '../../types';

export const TabOneScreen = ({ navigation }: RootStackScreenProps<'TabOne'>): JSX.Element => {
  console.log(navigation);
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
