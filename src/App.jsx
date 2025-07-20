import './App.css'
import Loading from './component/Loading'
import MobileMenu from './component/MobileMenu';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import Home from './component/section/Home';
import Qualification from './component/section/Qualification';
import Contact from './component/section/Contact';
import Footer from './component/section/Footer';
import WhatsAppButton from './component/section/whatsAppButton';
import Skills from './component/section/Skills'
import CertificationCarousel from "./component/section/CertificationsCarousel.jsx";
function App() {
  const [loading, setLoading] = useState(false);
  const [menuOpen ,setMenuOpen] = useState(false)
  return (
    <>
      {!loading && <Loading onComplete={() => setLoading(true)} />}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Qualification />
      <CertificationCarousel />
      <Skills />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App
