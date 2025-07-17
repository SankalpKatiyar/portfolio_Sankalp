import './App.css'
import Loading from './component/Loading'
import MobileMenu from './component/MobileMenu';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import Home from './component/section/Home';
import About from './component/section/About';
import Contact from './component/section/Contact';
import Footer from './component/section/Footer';
import WhatsAppButton from './component/section/whatsAppButton';
function App() {
  const [loading, setLoading] = useState(false);
  const [menuOpen ,setMenuOpen] = useState(false)
  return (
    <>
      {!loading && <Loading onComplete={() => setLoading(true)} />}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App
