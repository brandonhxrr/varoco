import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const mockUser = {
  name: 'Carlos Ramírez',
  email: 'carlos.ramirez@email.com',
  phone: '+52 555 123 4567',
  notifications: true,
};

const Settings: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Configuración</Text>
    <View style={{ width: '100%', marginTop: 16 }}>
      <View style={{ marginBottom: 18 }}>
        <Text style={{ color: '#bbb', fontWeight: 'bold', fontSize: 17 }}>Nombre</Text>
        <Text style={{ color: '#fff', fontSize: 19, paddingVertical: 4 }}>{mockUser.name}</Text>
      </View>
      <View style={{ marginBottom: 18 }}>
        <Text style={{ color: '#bbb', fontWeight: 'bold', fontSize: 17 }}>Correo electrónico</Text>
        <Text style={{ color: '#fff', fontSize: 19, paddingVertical: 4 }}>{mockUser.email}</Text>
      </View>
      <View style={{ marginBottom: 18 }}>
        <Text style={{ color: '#bbb', fontWeight: 'bold', fontSize: 17 }}>Teléfono</Text>
        <Text style={{ color: '#fff', fontSize: 19, paddingVertical: 4 }}>{mockUser.phone}</Text>
      </View>
      <View style={{ marginBottom: 18 }}>
        <Text style={{ color: '#bbb', fontWeight: 'bold', fontSize: 17 }}>Notificaciones</Text>
        <Text style={{ color: '#fff', fontSize: 19, paddingVertical: 4 }}>{mockUser.notifications ? 'Activadas' : 'Desactivadas'}</Text>
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
