import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';

const TabThreeScreen: React.FC = () => {
  return <View style={styles.container}></View>;
};

export default TabThreeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
