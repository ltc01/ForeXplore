import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../components/Home';
import About from '../components/About';
import Features from '../components/Features';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const Root = () => {
    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Features />
            <Products />
            <Contact />
            <Footer />
        </>
    )
}

export default Root