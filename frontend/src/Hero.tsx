import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const Hero: React.FC = () => (
  <View style={styles.hero}>
  <Text style={styles.title}>Modern Financial Payments</Text>
  <Text style={styles.subtitle}>Connect your app to the Interledger API and enable secure, fast, and borderless global payments for your users. Empower your business with seamless transactions and advanced financial technology designed for the future.</Text>
    <View style={styles.ctaWrapper}>
      <View style={styles.ctaGlass}>
  <Text style={styles.ctaText}>Get Started</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    backgroundColor: '#1C1C1C',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 0,
    textAlign: 'center',
    padding: 0,
  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#e0e0e0',
    textAlign: 'center',
    marginBottom: 32,
    maxWidth: 600,
  },
  ctaWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaGlass: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 18,
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    shadowColor: '#fff',
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  ctaText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default Hero;
