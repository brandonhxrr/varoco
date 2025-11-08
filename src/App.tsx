import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from './NavBar';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

export const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <NavBar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </View>
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
    borderColor: 'green',
    borderWidth: 1,
  },
});

export default App;
