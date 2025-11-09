import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Text from './Text';

const SendPayment: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSend = () => {
    // Aquí iría la lógica real de envío de pago
    setSuccess(true);
    setRecipient('');
    setAmount('');
    setNote('');
    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Payment</Text>
      <Text style={styles.desc}>Quickly send money to friends, family, or pay for services. Enter the recipient's details and amount to proceed.</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Recipient</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter recipient's name or email"
          placeholderTextColor="#888"
          value={recipient}
          onChangeText={setRecipient}
        />
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount (USD)"
          placeholderTextColor="#888"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Note (optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Add a note (e.g. reason, reference)"
          placeholderTextColor="#888"
          value={note}
          onChangeText={setNote}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend} disabled={!recipient || !amount}>
          <Text style={styles.buttonText}>Send Payment</Text>
        </TouchableOpacity>
        {success && <Text style={styles.success}>Payment sent successfully!</Text>}
      </View>
    </View>
  );
};

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
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 24,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    marginTop: 12,
    alignSelf: 'center',
  },
  label: {
    color: '#bbb',
    fontSize: 15,
    marginBottom: 6,
    marginTop: 14,
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
  },
  button: {
    backgroundColor: '#4E61D3',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 18,
    alignItems: 'center',
    opacity: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  success: {
    color: '#4ED361',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default SendPayment;
