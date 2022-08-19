import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackScreenProps } from '@types';
import { styles } from './styles';

export const TabTwoScreen = ({ navigation }: RootStackScreenProps<'TabTwo'>): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>TabThree</Text>
      </TouchableOpacity>
    </View>
  );
};
