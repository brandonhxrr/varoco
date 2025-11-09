import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const Features: React.FC = () => (
  <View style={styles.section}>
  <Text style={styles.title}>Key Features</Text>
    <View style={styles.list}>
  <View style={styles.item}><Text style={styles.itemTitle}>Instant Payments</Text><Text style={styles.itemDesc}>Send and receive money instantly using Interledger technology, ensuring rapid transactions for your business and clients.</Text></View>
  <View style={styles.item}><Text style={styles.itemTitle}>Advanced Security</Text><Text style={styles.itemDesc}>Your transactions are protected with end-to-end encryption, guaranteeing privacy and safety for every payment.</Text></View>
  <View style={styles.item}><Text style={styles.itemTitle}>Global & Borderless</Text><Text style={styles.itemDesc}>Make international payments effortlessly, with no hidden fees or complications. Expand your reach worldwide.</Text></View>
    </View>
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
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 32,
    textAlign: 'center',
  },
  list: {
    width: '100%',
    maxWidth: 900,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 32,
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 16,
    padding: 24,
    minWidth: 220,
    maxWidth: 280,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  itemDesc: {
    fontSize: 15,
    color: '#e0e0e0',
    textAlign: 'center',
  },
});

export default Features;
