import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import UserRegistration from './components/UserRegistration';
import UserProfile from './components/UserProfile';
import HeroSection from './components/HeroSection';
import TrendingProducts from './components/TrendingProducts';
import AppointmentSection from './components/AppointmentSection';
import BookAppointment from './components/BookAppointment';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />
      <TrendingProducts />
      <BookAppointment />
      <EmailSignup />  
      <Footer />
      
        <Routes>
          <Route path="/" exact component={HomePage} />
          
          <Route path="/register" component={UserRegistration} />
          <Route path="/profile" component={UserProfile} />
          
          <Route path="/book-appointment" element={BookAppointment} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
