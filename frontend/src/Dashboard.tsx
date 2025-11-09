import React from 'react';
import { useNavigate } from 'react-router-dom';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';

const Dashboard: React.FC<{ userName: string }> = ({ userName }) => {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {userName}!</Text>
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionCard} onPress={() => navigate('/request')}>
          <Text style={styles.actionTitle}>Request Payment</Text>
          <Text style={styles.actionDesc}>Create a request to receive funds easily and securely.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard} onPress={() => navigate('/send')}>
          <Text style={styles.actionTitle}>Send Payment</Text>
          <Text style={styles.actionDesc}>Transfer money to other users or campaigns instantly.</Text>
        </TouchableOpacity>
      </View>
      {/* User options are now in the floating NavBar menu */}
      <Text style={styles.tip}>Tip: You can request group payments or schedule automatic payments for convenience.</Text>
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
