import React from 'react';
import ErrorPage from './error-page.jsx';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
import Products from './components/Products.jsx';
import Contact from './components/Contact.jsx';
import LiveRates from './components/Features/liveRates.jsx';



const App = () => {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home Children={<><About/><Features/><Products /><Contact/></>} />} />
        <Route path='/about' element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path='/features/:id' element={<LiveRates />}  />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App