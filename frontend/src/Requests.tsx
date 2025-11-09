import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const mockRequests = [
  { id: 1, name: 'Apoyo escolar', status: 'Pendiente', amount: '$300', date: '2025-10-30' },
  { id: 2, name: 'Pago renta', status: 'Aprobada', amount: '$800', date: '2025-10-15' },
  { id: 3, name: 'Donación campaña', status: 'Rechazada', amount: '$150', date: '2025-09-28' },
];

const Requests: React.FC = () => (
  <View style={styles.container}>
  <Text style={styles.title}>My Requests</Text>
    <View style={{ width: '100%', marginTop: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
        <Text style={{ color: '#bbb', fontWeight: 'bold', width: 180, fontSize: 16 }}>Name</Text>
        <Text style={{ color: '#bbb', fontWeight: 'bold', width: 120, fontSize: 16 }}>Amount</Text>
        <Text style={{ color: '#bbb', fontWeight: 'bold', width: 120, fontSize: 16 }}>Date</Text>
        <Text style={{ color: '#bbb', fontWeight: 'bold', width: 120, fontSize: 16 }}>Status</Text>
      </View>
      {mockRequests.map(r => (
        <View key={r.id} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: 14 }}>
          <Text style={{ color: '#fff', width: 180, fontSize: 15 }}>{r.name === 'Apoyo escolar' ? 'School Support' : r.name === 'Pago renta' ? 'Rent Payment' : r.name === 'Donación campaña' ? 'Campaign Donation' : r.name}</Text>
          <Text style={{ color: '#fff', width: 120, fontSize: 15 }}>{r.amount}</Text>
          <Text style={{ color: '#fff', width: 120, fontSize: 15 }}>{r.date}</Text>
          <Text style={{ color: r.status === 'Aprobada' ? '#4E61D3' : r.status === 'Pendiente' ? '#fbc02d' : '#d32f2f', width: 120, fontSize: 15 }}>{r.status === 'Aprobada' ? 'Approved' : r.status === 'Pendiente' ? 'Pending' : r.status === 'Rechazada' ? 'Rejected' : r.status}</Text>
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

export default Requests;
