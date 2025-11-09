import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const Contact: React.FC = () => (
  <View style={styles.section}>
  <Text style={styles.title}>Contact</Text>
  <Text style={styles.desc}>Do you have questions or want to integrate Interledger payments into your business? Email us at <Text style={styles.email}>contact@varoco.com</Text> and our team will provide expert guidance to help you unlock the full potential of global payments.</Text>
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
