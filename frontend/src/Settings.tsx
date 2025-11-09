declare global {
  interface Window {
    onLogout?: () => void;
  }
}
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const mockUser = {
  name: 'Carlos Ramirez',
  email: 'carlos.ramirez@email.com',
  phone: '+1 555 123 4567',
  notifications: true,
};

const Settings: React.FC = () => (
  <View style={styles.container}>
  <Text style={styles.title}>Settings</Text>
  <View style={{ width: '100%', marginTop: 16 }}>
      <View style={{ marginBottom: 18 }}>
        <Text style={{ color: '#bbb', fontWeight: 'bold', fontSize: 17 }}>Name</Text>
        <Text style={{ color: '#fff', fontSize: 19, paddingVertical: 4 }}>{mockUser.name}</Text>
      </View>
      <View style={{ marginBottom: 18 }}>
        <Text style={{ color: '#bbb', fontWeight: 'bold', fontSize: 17 }}>Email</Text>
        <Text style={{ color: '#fff', fontSize: 19, paddingVertical: 4 }}>{mockUser.email}</Text>
      </View>
      <View style={{ marginBottom: 18 }}>
        <Text style={{ color: '#bbb', fontWeight: 'bold', fontSize: 17 }}>Phone</Text>
        <Text style={{ color: '#fff', fontSize: 19, paddingVertical: 4 }}>{mockUser.phone}</Text>
      </View>
      <View style={{ marginBottom: 18 }}>
        <Text style={{ color: '#bbb', fontWeight: 'bold', fontSize: 17 }}>Notifications</Text>
        <Text style={{ color: '#fff', fontSize: 19, paddingVertical: 4 }}>{mockUser.notifications ? 'Enabled' : 'Disabled'}</Text>
      </View>
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

export default Settings;
