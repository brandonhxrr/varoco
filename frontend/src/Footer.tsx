import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import Text from './Text';
import Logo from './Logo';

const Footer: React.FC = () => (
  <View style={styles.footer}>
    <View style={styles.logoRow}>
      <Logo width={38} height={38} />
      <Text style={styles.brand}>VaroCo</Text>
    </View>
    <Text style={styles.slogan}>Empowering global payments for the future. Built for scale, security, and innovation.</Text>
    <View style={styles.linksRow}>
      <Text style={styles.link} onPress={() => Linking.openURL('https://interledger.org/')}>Learn about Interledger</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('mailto:contact@varoco.com')}>Contact Us</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://varoco.com/privacy')}>Privacy Policy</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://varoco.com/terms')}>Terms of Service</Text>
    </View>
    <Text style={styles.copyright}>© 2025 VaroCo. All rights reserved. Trusted by innovators worldwide.</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    backgroundColor: '#181A1B',
    paddingVertical: 40,
    paddingHorizontal: 32,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.10)',
    marginTop: 64,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  brand: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
    marginLeft: 16,
    letterSpacing: 1.2,
  },
  slogan: {
    fontSize: 18,
    color: '#e0e0e0',
    fontStyle: 'italic',
    letterSpacing: 0.5,
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 4,
    maxWidth: 600,
  },
  linksRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    flexWrap: 'wrap',
    paddingTop: 8,
    paddingBottom: 8,
  },
  link: {
    fontSize: 18,
    color: '#3A4D8F',
    textDecorationLine: 'underline',
    marginTop: 0,
    marginHorizontal: 24,
    fontWeight: '500',
    letterSpacing: 0.2,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  copyright: {
    fontSize: 15,
    color: '#bbb',
    marginTop: 16,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
});

export default Footer;
