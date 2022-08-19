import * as React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const ModalScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
    </View>
  );
};
