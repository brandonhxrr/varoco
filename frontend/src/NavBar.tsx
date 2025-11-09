
import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import Logo from './Logo';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavBarProps {
  onAction?: () => void;
  userName?: string;
}

const NavBar: React.FC<NavBarProps> = ({ onAction, userName }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname === '/dashboard';
  const onlyLogo = location.pathname === '/solicitud' || location.pathname === '/auth';
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuFloatingStyle: React.CSSProperties = {
    position: 'absolute',
    top: 40,
    right: 0,
    background: 'rgba(30,30,30,0.98)',
    borderRadius: 12,
    boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
    paddingTop: 8,
    paddingBottom: 8,
    minWidth: 180,
    zIndex: 100,
    border: '1px solid rgba(255,255,255,0.10)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  };
  const menuItemStyle: React.CSSProperties = {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    background: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
  };
  const menuTextStyle: React.CSSProperties = {
    color: '#fff',
    fontSize: 15,
    fontWeight: 500,
    fontFamily: 'Inter, sans-serif',
    background: 'none',
    margin: 0,
    padding: 0,
    display: 'block',
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const isMain = location.pathname === '/';
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('/')} activeOpacity={0.8}>
        <Logo width={50} height={50} />
      </TouchableOpacity>
      {isMain && !userName && (
        <>
          <View style={styles.optionsAbsolute}>
            {[ 
              { label: 'Home', target: 'hero-section' },
              { label: 'Key Features', target: 'features-section' },
              { label: 'About VaroCo', target: 'about-section' },
              { label: 'Contact & Support', target: 'contact-section' }
            ].map(opt => (
              <View key={opt.label} style={styles.optionWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    const el = document.getElementById(opt.target);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  activeOpacity={0.7}
                  style={styles.option}
                >
                  <Text style={styles.option}>{opt.label}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.actionButton} onPress={onAction} activeOpacity={0.85}>
            <Text style={styles.actionText}>Get Started</Text>
          </TouchableOpacity>
        </>
      )}
      {userName && (
        <View style={isDashboard ? styles.userNameBox : styles.userNameButton}>
          <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} activeOpacity={0.8}>
            <Text style={styles.userNameText}>{userName}</Text>
          </TouchableOpacity>
          {menuOpen && (
            <div ref={menuRef} style={menuFloatingStyle}>
              <div style={{ ...menuItemStyle, borderBottom: 'none', color: '#d32f2f' }} onClick={() => { setMenuOpen(false); if (window.onLogout) window.onLogout(); }}>
                <span style={{ ...menuTextStyle, color: '#d32f2f' }}>Log out</span>
              </div>
            </div>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  userNameBox: {
    position: 'absolute',
    right: 32,
    top: 18,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 6,
    zIndex: 20,
  },
  userNameButton: {
    position: 'absolute',
    right: 32,
    top: 18,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 6,
    zIndex: 20,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameText: {
    color: '#4E61D3',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.5,
  },
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
  menuFloating: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: 'rgba(30,30,30,0.98)',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 0,
    minWidth: 180,
    zIndex: 100,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
  },
  menuText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Inter, sans-serif',
  },
  optionsAbsolute: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    pointerEvents: 'none',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
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
