import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'MeridenDAO - Building Crypto Communities Beyond London';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;