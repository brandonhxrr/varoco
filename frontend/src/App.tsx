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
  return (
    <View style={styles.container}>
      <NavBar onAction={() => navigate('/auth')} userName={userName} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <About />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/solicitud" element={<FundRequest />} />
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
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    fontFamily: 'Inter, sans-serif',
  },
});

export default App;
