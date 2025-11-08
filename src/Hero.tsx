import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const Hero: React.FC = () => (
  <View style={styles.hero}>
    <Text style={styles.title}>Pagos Financieros Modernos</Text>
    <Text style={styles.subtitle}>Conecta tu app a la API de Interledger y realiza pagos globales de forma segura y rápida.</Text>
    <View style={styles.ctaWrapper}>
      <View style={styles.ctaGlass}>
        <Text style={styles.ctaText}>Comenzar ahora</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    minHeight: 320,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 64,
    paddingHorizontal: 24,
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
