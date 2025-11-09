declare global {
  interface Window {
    onLogout?: () => void;
  }
}
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Text from './Text';

const mockUser = {
  name: 'Carlos Ramirez',
  email: 'carlos.ramirez@email.com',
  phone: '+1 555 123 4567',
  notifications: true,
};

const pencil = (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.85 2.85a2.5 2.5 0 013.54 3.54l-1.1 1.1-3.54-3.54 1.1-1.1zm-2.18 2.18l3.54 3.54-9.19 9.19a2 2 0 01-.88.51l-3.07.77a.5.5 0 01-.61-.61l.77-3.07a2 2 0 01.51-.88l9.19-9.19z" fill="#bbb"/>
  </svg>
);

const Settings: React.FC = () => {
  const [fields, setFields] = useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: mockUser.phone,
    notifications: mockUser.notifications,
  });
  const [edit, setEdit] = useState<{ [key: string]: boolean }>({});
  const [pending, setPending] = useState(false);

  const handleEdit = (key: string) => setEdit(e => ({ ...e, [key]: true }));
  const handleChange = (key: string, value: string | boolean) => setFields(f => ({ ...f, [key]: value }));
  const handleSave = () => {
    setPending(true);
    setTimeout(() => {
      setEdit({});
      setPending(false);
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Settings</Text>
      <View style={styles.sectionWrap}>
        {/* Name */}
        <View style={styles.cardField}>
          <Text style={styles.label}>Name</Text>
          {edit.name ? (
            <TextInput
              style={styles.input}
              value={fields.name}
              onChangeText={v => handleChange('name', v)}
              placeholder="Name"
              placeholderTextColor="#888"
            />
          ) : (
            <View style={styles.valueRow}>
              <Text style={styles.value}>{fields.name}</Text>
              <TouchableOpacity style={styles.iconBtn} onPress={() => handleEdit('name')}>{pencil}</TouchableOpacity>
            </View>
          )}
        </View>
        {/* Email */}
        <View style={styles.cardField}>
          <Text style={styles.label}>Email</Text>
          {edit.email ? (
            <TextInput
              style={styles.input}
              value={fields.email}
              onChangeText={v => handleChange('email', v)}
              placeholder="Email"
              placeholderTextColor="#888"
              keyboardType="email-address"
            />
          ) : (
            <View style={styles.valueRow}>
              <Text style={styles.value}>{fields.email}</Text>
              <TouchableOpacity style={styles.iconBtn} onPress={() => handleEdit('email')}>{pencil}</TouchableOpacity>
            </View>
          )}
        </View>
        {/* Phone */}
        <View style={styles.cardField}>
          <Text style={styles.label}>Phone</Text>
          {edit.phone ? (
            <TextInput
              style={styles.input}
              value={fields.phone}
              onChangeText={v => handleChange('phone', v)}
              placeholder="Phone"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
            />
          ) : (
            <View style={styles.valueRow}>
              <Text style={styles.value}>{fields.phone}</Text>
              <TouchableOpacity style={styles.iconBtn} onPress={() => handleEdit('phone')}>{pencil}</TouchableOpacity>
            </View>
          )}
        </View>
        {/* Notifications */}
        <View style={styles.cardField}>
          <Text style={styles.label}>Notifications</Text>
          <TouchableOpacity
            style={[styles.switch, fields.notifications && styles.switchActive]}
            onPress={() => handleChange('notifications', !fields.notifications)}
          >
            <View style={[styles.switchKnob, fields.notifications && styles.switchKnobActive]} />
          </TouchableOpacity>
          <Text style={styles.value}>{fields.notifications ? 'Enabled' : 'Disabled'}</Text>
        </View>
        {/* Botón actualizar */}
        {Object.values(edit).some(Boolean) && (
          <TouchableOpacity style={styles.saveBtn} onPress={handleSave} disabled={pending}>
            <Text style={styles.saveText}>{pending ? 'Saving...' : 'Update Settings'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 700,
    marginTop: 24,
    alignSelf: 'center',
    backgroundColor: 'rgba(30,30,30,0.98)',
    borderRadius: 18,
    padding: 32,
    alignItems: 'flex-start',
  // boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'left',
  },
  sectionWrap: {
    width: '100%',
    flexDirection: 'column',
    gap: 24,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  cardField: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    flexDirection: 'column',
    gap: 8,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  label: {
    color: '#bbb',
    fontSize: 15,
    fontWeight: '500',
  },
  value: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    color: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
    width: '100%',
  },
  iconBtn: {
    marginLeft: 8,
    padding: 4,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.04)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    width: 38,
    height: 22,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.10)',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
    padding: 2,
  },
  switchActive: {
    backgroundColor: '#4E61D3',
  },
  switchKnob: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#bbb',
    marginLeft: 2,
  // transition: 'margin-left 0.2s',
  },
  switchKnobActive: {
    backgroundColor: '#fff',
    marginLeft: 16,
  },
  saveBtn: {
    backgroundColor: '#4E61D3',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 18,
    alignItems: 'center',
    opacity: 1,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default Settings;
