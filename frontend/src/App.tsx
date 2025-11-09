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

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <View style={styles.container}>
        <NavBar />
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
        </Routes>
      </View>
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
