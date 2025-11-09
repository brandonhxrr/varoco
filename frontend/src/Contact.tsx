import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const Contact: React.FC = () => (
  <View style={styles.section}>
    <Text style={styles.title}>Contacto</Text>
    <Text style={styles.desc}>¿Tienes dudas o quieres integrar pagos Interledger en tu negocio? Escríbenos a <Text style={styles.email}>contacto@varoco.com</Text></Text>
  </View>
);

const styles = StyleSheet.create({
  section: {
    width: '100%',
    backgroundColor: '#181818',
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
  email: {
    color: '#4E61D3',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default Contact;
