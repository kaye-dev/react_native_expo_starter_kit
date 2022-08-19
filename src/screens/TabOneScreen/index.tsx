import * as React from 'react';
import { View } from 'react-native';
import { RootStackScreenProps } from '@types';
import { styles } from './styles';

export const TabOneScreen = ({ navigation }: RootStackScreenProps<'TabOne'>): JSX.Element => {
  console.log(navigation);
  return <View style={styles.container}></View>;
};
