import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MiniForm from './components/MiniForm';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Courses from './pages/Courses';
import Apply from './pages/Apply';
import AboutUs from './pages/AboutUs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      
      <Routes>
      <Route 
          path="/" 
          element={
            <>
              
              <Banner />
              <MiniForm />
              
            </>
          } 
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/visit" element={<AboutUs />} />
      </Routes>
      
      <Footer />
    </div>
  </Router>
);

export default App;

