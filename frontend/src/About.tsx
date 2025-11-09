import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const About: React.FC = () => (
  <View style={styles.section}>
    <Text style={styles.title}>About VaroCo</Text>
    <Text style={styles.desc}>VaroCo is a cutting-edge platform that integrates global payments and advanced financial technology for modern businesses. Our mission is to simplify international transactions and empower companies to grow beyond borders with confidence and security.</Text>
  </View>
);

const styles = StyleSheet.create({
  section: {
    width: '100%',
    backgroundColor: '#151515',
    paddingVertical: 48,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 18,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    color: '#e0e0e0',
    textAlign: 'center',
    maxWidth: 700,
  },
});

export default About;
