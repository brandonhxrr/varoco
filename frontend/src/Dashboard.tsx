import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';

const Dashboard: React.FC<{ userName: string }> = ({ userName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido, {userName}!</Text>
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionTitle}>Solicitar pago</Text>
          <Text style={styles.actionDesc}>Crea una solicitud para recibir fondos fácilmente.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionTitle}>Realizar pago</Text>
          <Text style={styles.actionDesc}>Envía dinero a otros usuarios o campañas.</Text>
        </TouchableOpacity>
      </View>
      {/* Opciones de usuario ahora estarán en el menú flotante de la NavBar */}
      <Text style={styles.tip}>Tip: Puedes solicitar pagos grupales o programar pagos automáticos.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 900,
    minHeight: 520,
    marginTop: 32,
    alignSelf: 'center',
    backgroundColor: 'rgba(30,30,30,0.95)',
    borderRadius: 24,
    padding: 48,
    alignItems: 'center',
    overflow: 'visible',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 32,
    justifyContent: 'center',
  },
  actionCard: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 14,
    padding: 24,
    minWidth: 180,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
  // boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  },
  actionTitle: {
    color: '#4E61D3',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 8,
  },
  actionDesc: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  extraRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
    justifyContent: 'center',
  },
  extraCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 10,
    padding: 14,
    minWidth: 120,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  extraTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  tip: {
    color: '#bbb',
    fontSize: 13,
    marginTop: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default Dashboard;
