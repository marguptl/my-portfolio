'use client'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import { useState, useEffect } from 'react'
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      <GlobalStyle />
    <div>
      <Header />
      <Hero />
      <Skills />
      <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
      <Experience />
      <Contact />
    </div>
    </>
  );
}
