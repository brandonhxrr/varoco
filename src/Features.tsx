import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const Features: React.FC = () => (
  <View style={styles.section}>
    <Text style={styles.title}>Características principales</Text>
    <View style={styles.list}>
      <View style={styles.item}><Text style={styles.itemTitle}>Pagos instantáneos</Text><Text style={styles.itemDesc}>Envía y recibe dinero al instante usando Interledger.</Text></View>
      <View style={styles.item}><Text style={styles.itemTitle}>Seguridad avanzada</Text><Text style={styles.itemDesc}>Tus transacciones están protegidas con cifrado de extremo a extremo.</Text></View>
      <View style={styles.item}><Text style={styles.itemTitle}>Global y sin fronteras</Text><Text style={styles.itemDesc}>Realiza pagos internacionales sin complicaciones ni comisiones ocultas.</Text></View>
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
