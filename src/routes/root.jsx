import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../components/Home';
import About from '../components/About';
import Features from '../components/Features';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import {ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon} from "@heroicons/react/24/outline";


const Root = () => {
    const features = [
        {
            name: "Live Rates",
            href: "/liveRate",
            icon: ChartPieIcon,
        },
        {
            name: "Historical Rates",
            href: "/historicalRate",
            icon: CursorArrowRaysIcon,
        },
        {
            name: "Currency converter",
            href: "/currencyConverter",
            icon: FingerPrintIcon,
        },
        {
            name: "Timeframe Query",
            href: "/timeFrameChanges",
            icon: SquaresPlusIcon,
        },
        {
            name: "Change Query",
            href: "/changeRates",
            icon: ArrowPathIcon,
        },
    ];
    return (
        <>
            <NavBar features={features} />
            <Home />
            <About />
            <Features features={features}/>
            <Products />
            <Contact />
            <Footer />
        </>
    )
}

export default Root