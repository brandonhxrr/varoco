
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import Logo from './Logo';

interface NavBarProps {
  onAction?: () => void;
}

const options = ["Inicio", "Proyectos", "Contacto"];

const NavBar: React.FC<NavBarProps> = ({ onAction }) => {
  return (
    <View style={styles.container}>
  <Logo width={50} height={50} />
      <View style={styles.options}>
        {options.map((opt) => (
          <View key={opt} style={styles.optionWrapper}>
            <Text style={styles.option}>{opt}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.actionButton} onPress={onAction} activeOpacity={0.8}>
        <Text style={styles.actionText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '#1C1C1C',
    width: '100%',
    position: 'relative',
    zIndex: 10,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    width: '100%',
    top: 0,
    height: '100%',
    gap: 24,
    pointerEvents: 'none',
  },
  optionWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    pointerEvents: 'auto',
  },
  option: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    fontSize: 16,
    color: '#fff',
    backgroundColor: 'transparent',
    fontFamily: 'Inter, sans-serif',
  },
  actionButton: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    shadowColor: '#fff',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    marginLeft: 16,
  },
  actionText: {
    color: '#f5f5f5',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'Inter, sans-serif',
    textShadowColor: 'rgba(0,0,0,0.18)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default NavBar;
