import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";


export const features = [
    {
      name: "Live Rates",
      href: "/liveRates",
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

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-yellow-200 z-10 fixed w-full shadow-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                {/* Company Logo */}
                <div className="flex lg:flex-1">
                    <h1 className="-m-1.5 p-1.5 text-2xl text-slate-800 font-bold">
                        ForeXplore.
                    </h1>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex lg:gap-x-12">
                    <li>
                        <Link to="/" className="text-sm font-semibold leading-6 hover:underline text-slate-800">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-sm font-semibold leading-6 hover:underline text-slate-800">
                            About
                        </Link>
                    </li>
                    <li className="relative">
                        <Link to='/features' className="inline text-sm text-slate-800 hover:underline font-semibold leading-6">
                            Features
                        </Link>
                        <ChevronDownIcon className="h-5 w-5 ml-2 inline" onClick={() => setOpen(!open)} />
                        {open && <button className="absolute top-full left-0 z-10 mt-3 w-56 max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div >
                                {features.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={`/features${item.href}`}
                                        className="block py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-100"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </button>}
                    </li>
                    <li>
                        <Link to="/products" className="text-sm text-slate-800 hover:underline font-semibold leading-6 text-gray-900">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-sm text-slate-800 hover:underline font-semibold leading-6 text-gray-900">
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute">
                        <div className="fixed inset-y-0 left-40 right-0 z-50 bg-white">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                                <h1 className="-m-1.5 p-1.5 text-2xl font-semibold">Menu</h1>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-700"
                                >
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <ul className="px-8 py-5 flex flex-col gap-8" onClick={() => setIsMobileMenuOpen(false)}>
                                <li>
                                    <Link to="/" className="text-sm font-semibold leading-6 hover:underline text-slate-800">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="text-sm font-semibold leading-6 hover:underline text-slate-800">
                                        About
                                    </Link>
                                </li>
                                <li className="relative">
                                    <Link to='/features' className="inline text-sm text-slate-800 hover:underline font-semibold leading-6">
                                        Features
                                    </Link>
                                    <ChevronDownIcon className="h-5 w-5 ml-2 inline" onClick={() => setOpen(!open)} />
                                    {open && <button className="absolute top-full left-0 z-10 mt-3 w-56 max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div>
                                            {features.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={`/features${item.href}`}
                                                    className="block px-4 py-3 text-left text-sm font-semibold text-gray-900 hover:bg-yellow-100"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </button>}
                                </li>
                                <li>
                                    <Link to="/products" className="text-sm text-slate-800 hover:underline font-semibold leading-6 text-gray-900">
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-sm text-slate-800 hover:underline font-semibold leading-6 text-gray-900">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={() => setIsMobileMenuOpen(false)}></div>
                    </div>
                )}
            </nav>


        </header>

    );
};

export default NavBar;
