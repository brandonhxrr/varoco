import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Text from './Text';
import EyeIcon from './EyeIcon';

interface AuthProps {
  onLogin?: (name: string) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = () => {
    if (!email || !password || (!isLogin && !name)) {
      setError('Por favor completa todos los campos');
      return;
    }
    if (!isLogin && password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');
    if (onLogin) {
      onLogin(isLogin ? email : name);
    }
    alert(isLogin ? 'Inicio de sesión exitoso' : 'Registro exitoso');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</Text>
      {!isLogin && (
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Nombre completo"
            placeholderTextColor="#bbb"
          />
        </View>
      )}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Correo electrónico"
          placeholderTextColor="#bbb"
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, { paddingRight: 38 }]}
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          placeholderTextColor="#bbb"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity style={styles.eyeButton} onPress={() => setShowPassword(!showPassword)}>
          <EyeIcon open={showPassword} />
        </TouchableOpacity>
      </View>
      {!isLogin && (
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, { paddingRight: 38 }]}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirmar contraseña"
            placeholderTextColor="#bbb"
            secureTextEntry={!showConfirm}
          />
          <TouchableOpacity style={styles.eyeButton} onPress={() => setShowConfirm(!showConfirm)}>
            <EyeIcon open={showConfirm} />
          </TouchableOpacity>
        </View>
      )}
      {error !== '' && (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>{isLogin ? 'Entrar' : 'Registrarse'}</Text>
      </TouchableOpacity>
      <Text style={{ color: '#fff', marginTop: 12, textAlign: 'center' }}>
        {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
        <Text style={styles.switchText} onPress={() => {
          setIsLogin(!isLogin);
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setName('');
          setError('');
          setShowPassword(false);
          setShowConfirm(false);
        }}>
          {isLogin ? 'Regístrate' : 'Inicia sesión'}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    marginTop: 60,
    alignSelf: 'center',
    backgroundColor: 'rgba(30,30,30,0.95)',
    borderRadius: 18,
    padding: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputWrapper: {
    width: '100%',
    position: 'relative',
    marginBottom: 18,
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
    fontFamily: 'Inter, sans-serif',
    marginBottom: 0,
  },
  eyeButton: {
    position: 'absolute',
    right: 8,
    top: '50%',
    transform: [{ translateY: -11 }],
    padding: 4,
    zIndex: 2,
  },
  submitButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderWidth: 1,
    borderColor: '#4E61D3',
    marginTop: 8,
    marginBottom: 8,
  },
  submitText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
    letterSpacing: 1,
  },
  switchText: {
    color: '#4E61D3',
    fontWeight: '600',
    fontSize: 15,
    marginTop: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  errorBox: {
    backgroundColor: '#ffe5e5',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    width: '100%',
  },
  errorText: {
    color: '#d32f2f',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Auth;
