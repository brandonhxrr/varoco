import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import Text from './Text';

const Footer: React.FC = () => (
  <View style={styles.footer}>
    <Text style={styles.brand}>VaroCo</Text>
    <Text style={styles.copyright}>© 2025 VaroCo. Todos los derechos reservados.</Text>
    <Text style={styles.link} onPress={() => Linking.openURL('https://interledger.org/')}>¿Quieres saber más sobre Interledger?</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    backgroundColor: '#111',
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
    marginTop: 48,
  },
  brand: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  copyright: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 8,
  },
  link: {
    fontSize: 15,
    color: '#4E61D3',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
});

export default Footer;
