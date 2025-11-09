import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const About: React.FC = () => (
  <View style={styles.section}>
    <Text style={styles.title}>¿Qué es Interledger?</Text>
    <Text style={styles.desc}>Interledger es un protocolo abierto para pagos globales, permitiendo transferencias de valor entre diferentes sistemas de pago y monedas de manera rápida y segura.</Text>
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
