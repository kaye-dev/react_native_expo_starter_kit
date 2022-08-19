import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackScreenProps } from '@types';
import { styles } from './styles';

export const TabThreeScreen = ({ navigation }: RootStackScreenProps<'TabThree'>): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>TabOne</Text>
      </TouchableOpacity>
    </View>
  );
};
