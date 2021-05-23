import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const TabOneScreen: React.FC = () => {
  return <ScrollView style={styles.container}></ScrollView>;
};
export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
