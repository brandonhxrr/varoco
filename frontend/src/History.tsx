import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const mockPayments = [
  { id: 1, date: '2025-11-01', amount: '$250', to: 'Juan Pérez', type: 'Enviado' },
  { id: 2, date: '2025-10-28', amount: '$100', to: 'Tienda ABC', type: 'Enviado' },
  { id: 3, date: '2025-10-20', amount: '$500', to: 'María López', type: 'Recibido' },
];

const History: React.FC = () => (
  <View style={styles.container}>
  <Text style={styles.title}>Payment History</Text>
    <View style={{ width: '100%', marginTop: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
        <Text style={{ color: '#bbb', fontWeight: 'bold', width: 120, fontSize: 16 }}>Date</Text>
        <Text style={{ color: '#bbb', fontWeight: 'bold', width: 120, fontSize: 16 }}>Amount</Text>
        <Text style={{ color: '#bbb', fontWeight: 'bold', width: 180, fontSize: 16 }}>To/From</Text>
        <Text style={{ color: '#bbb', fontWeight: 'bold', width: 120, fontSize: 16 }}>Type</Text>
      </View>
      {mockPayments.map(p => (
        <View key={p.id} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: 14 }}>
          <Text style={{ color: '#fff', width: 120, fontSize: 15 }}>{p.date}</Text>
          <Text style={{ color: '#fff', width: 120, fontSize: 15 }}>{p.amount}</Text>
          <Text style={{ color: '#fff', width: 180, fontSize: 15 }}>{p.to}</Text>
          <Text style={{ color: p.type === 'Enviado' ? '#d32f2f' : '#4E61D3', width: 120, fontSize: 15 }}>{p.type === 'Enviado' ? 'Sent' : p.type === 'Recibido' ? 'Received' : p.type}</Text>
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 900,
    marginTop: 32,
    alignSelf: 'center',
    backgroundColor: 'rgba(30,30,30,0.95)',
    borderRadius: 24,
    padding: 48,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 18,
    textAlign: 'center',
  },
  desc: {
    color: '#bbb',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default History;
