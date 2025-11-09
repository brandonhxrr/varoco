import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Text from './Text';

const FundRequest: React.FC = () => {
  const [type, setType] = useState<'campaña' | 'solicitud'>('campaña');
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [showDeleteIdx, setShowDeleteIdx] = useState<number | null>(null);
  const [newOption, setNewOption] = useState('');
  const [includeOther, setIncludeOther] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear solicitud de fondos</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre de la campaña o solicitud</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Ej: Ayuda médica" placeholderTextColor="#bbb" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Tipo</Text>
        <View style={styles.typeRow}>
          <TouchableOpacity style={[styles.typeButton, type === 'campaña' && styles.typeButtonActive]} onPress={() => setType('campaña')}>
            <Text style={styles.typeText}>Campaña</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.typeButton, type === 'solicitud' && styles.typeButtonActive]} onPress={() => setType('solicitud')}>
            <Text style={styles.typeText}>Solicitud</Text>
          </TouchableOpacity>
        </View>
      </View>
      {type === 'campaña' ? (
        <View style={styles.formGroup}>
          <Text style={styles.label}>Meta de la campaña</Text>
          <TextInput style={styles.input} value={goal} onChangeText={setGoal} placeholder="$1000" keyboardType="numeric" placeholderTextColor="#bbb" />
          <Text style={styles.label}>Opciones de aportación</Text>
          <View style={styles.amountRow}>
            {options.map((opt, idx) => (
              <div
                key={idx}
                style={{ position: 'relative', display: 'inline-flex', marginRight: 8 }}
                onMouseEnter={() => setShowDeleteIdx(idx)}
                onMouseLeave={() => setShowDeleteIdx(null)}
              >
                <TouchableOpacity
                  style={[styles.amountButton, amount === opt && styles.amountButtonActive]}
                  onPress={() => setAmount(opt)}
                >
                  <Text style={styles.amountText}>${opt}</Text>
                </TouchableOpacity>
                {showDeleteIdx === idx && (
                  <button
                    style={{
                      position: 'absolute',
                      top: -12,
                      right: -12,
                      background: 'rgba(255,255,255,0.18)',
                      border: 'none',
                      color: '#fff',
                      fontSize: 16,
                      cursor: 'pointer',
                      padding: 0,
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                      zIndex: 2,
                    }}
                    onClick={(e) => { e.stopPropagation(); setOptions(options.filter((_, i) => i !== idx)); setShowDeleteIdx(null); }}
                    aria-label={`Eliminar opción $${opt}`}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </View>
          <View style={[styles.formGroup, { marginTop: 16 }]}> 
            <TextInput style={styles.input} value={newOption} onChangeText={setNewOption} placeholder="Agregar opción ($)" keyboardType="numeric" placeholderTextColor="#bbb" />
            <TouchableOpacity style={styles.amountButton} onPress={() => { if (newOption) { setOptions([...options, newOption]); setNewOption(''); } }}>
              <Text style={styles.amountText}>Agregar opción</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.formGroup, { flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-between' }]}> 
            <Text style={styles.label}>Incluir opción Otro</Text>
            <input type="checkbox" checked={includeOther} onChange={() => setIncludeOther(!includeOther)} style={{ marginLeft: 8, width: 18, height: 18, verticalAlign: 'middle' }} />
          </View>
        </View>
      ) : (
        <View style={styles.formGroup}>
          <Text style={styles.label}>Total solicitado</Text>
          <TextInput style={styles.input} value={goal} onChangeText={setGoal} placeholder="$100" keyboardType="numeric" placeholderTextColor="#bbb" />
        </View>
      )}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Crear solicitud</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 480,
  marginTop: 40,
  alignSelf: 'center',
    backgroundColor: 'rgba(30,30,30,0.95)',
    borderRadius: 18,
    padding: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  formGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    color: '#e0e0e0',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.08)',
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
    marginBottom: 8,
    fontFamily: 'Inter, sans-serif',
  },
  typeRow: {
    flexDirection: 'row',
    gap: 16,
  },
  typeButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
  },
  typeButtonActive: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderColor: '#4E61D3',
  },
  typeText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  amountRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  amountButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
  },
  amountButtonActive: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderColor: '#4E61D3',
  },
  amountText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  submitButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderWidth: 1,
    borderColor: '#4E61D3',
    marginTop: 16,
  },
  submitText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default FundRequest;
