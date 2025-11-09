import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import FundRequest from './FundRequest';
import SendPayment from './SendPayment';
import History from './History';
import Settings from './Settings';

const MENU = [
  { key: 'fund', label: 'Request Payment' },
  { key: 'send', label: 'Send Payment' },
  { key: 'history', label: 'History' },
  { key: 'settings', label: 'Settings' },
];

const Dashboard: React.FC<{ userName: string }> = ({ userName }) => {
  const [selected, setSelected] = useState('fund');

  let content;
  switch (selected) {
    case 'fund':
      content = <FundRequest />;
      break;
    case 'send':
      content = <SendPayment />;
      break;
    case 'history':
      content = <History />;
      break;
    case 'settings':
      content = <Settings />;
      break;
    default:
      content = null;
  }

  return (
    <View style={styles.dashboardWrap}>
      <View style={styles.sidebar}>
        {MENU.map(item => (
          <TouchableOpacity
            key={item.key}
            style={[styles.menuItem, selected === item.key && styles.menuItemActive]}
            onPress={() => setSelected(item.key)}
          >
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentArea}>
        {content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardWrap: {
    flexDirection: 'row',
    position: 'absolute',
    top: 64, // Altura estimada de la NavBar
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
  height: '100%',
    backgroundColor: 'rgba(30,30,30,0.95)',
    overflow: 'hidden',
  },
  sidebar: {
    width: 220,
  backgroundColor: '#1C1C1C',
    paddingVertical: 36,
    paddingHorizontal: 18,
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.10)',
    alignItems: 'flex-start',
    gap: 8,
  },
  // userTitle eliminado
  menuItem: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 4,
    backgroundColor: 'transparent',
  },
  menuItemActive: {
    backgroundColor: 'rgba(78,97,211,0.18)',
  },
  menuText: {
    color: '#bbb',
    fontSize: 16,
    fontWeight: '600',
  },
  contentArea: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 600,
  },
});

export default Dashboard;
