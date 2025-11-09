declare global {
  interface Window {
    onLogout?: () => void;
  }
}
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import FundRequest from './FundRequest';
import SendPayment from './SendPayment';
import Auth from './Auth';
import Dashboard from './Dashboard';
import History from './History';
import Requests from './Requests';
import Settings from './Settings';

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  // Exponer función global para logout
  window.onLogout = () => {
    setUserName('');
    navigate('/');
  };
  return (
    <View style={styles.container}>
      <NavBar onAction={() => navigate('/auth')} userName={userName} />
      <Routes>
        <Route path="/" element={
          <>
            <div id="hero-section" className="hero-full-height"><Hero /></div>
            <div id="features-section"><Features /></div>
            <div id="about-section"><About /></div>
            <div id="contact-section"><Contact /></div>
            <Footer />
          </>
        } />
  <Route path="/request" element={<FundRequest />} />
  <Route path="/send" element={<SendPayment />} />
        <Route path="/auth" element={<Auth onLogin={name => { setUserName(name); navigate('/dashboard'); }} />} />
        <Route path="/dashboard" element={<Dashboard userName={userName} />} />
        <Route path="/history" element={<History />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </View>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  minHeight: 800,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#1C1C1C',
    fontFamily: 'Inter, sans-serif',
  },
});

export default App;
