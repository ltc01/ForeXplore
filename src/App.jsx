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
import HistoricalRates from './components/Features/HistoricalRates.jsx';
import TimeframeQuery from './components/Features/TimeframeQuery.jsx';
import ChangeQuery from './components/Features/ChangeQuery.jsx';
import CurrencyConverter from './components/Features/CurrencyConverter.jsx';



const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home Children={<><About /><Features /><Products /><Contact /></>} />} />
        <Route path='/about' element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path='/features/liveRates' element={<LiveRates />} />
        <Route path='/features/historicalRate' element={<HistoricalRates />} />
        <Route path='/features/currencyConverter' element={<CurrencyConverter />} />
        <Route path='/features/timeFrameChanges' element={<TimeframeQuery />} />
        <Route path='/features/changeRates' element={<ChangeQuery />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App