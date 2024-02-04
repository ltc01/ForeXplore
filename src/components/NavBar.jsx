import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const features = [
    {
        name: "Live Rates",
        description: "Get Live Exchange Rates",
        href: "#",
        icon: ChartPieIcon,
    },
    {
        name: "Historical Rates",
        description: "Get and Analyze past trends",
        href: "#",
        icon: CursorArrowRaysIcon,
    },
    {
        name: "Currency converter",
        description: "Easily convert currencies with our intuitive currency converter tool",
        href: "#",
        icon: FingerPrintIcon,
    },
    {
        name: "Timeframe Query",
        description: "Explore currency rates for custom timeframes",
        href: "#",
        icon: SquaresPlusIcon,
    },
    {
        name: "Change Query",
        description: "Analyze changes in currency rates over time",
        href: "#",
        icon: ArrowPathIcon,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-yellow-200 z-10 fixed w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                {/* Company Logo */}
                <div className="flex lg:flex-1">
                    <h1 className="-m-1.5 p-1.5 text-2xl text-slate-800 font-bold">
                        ForeXplore.
                    </h1>
                </div>

                <div className="flex lg:hidden">
                    <button
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm font-semibold leading-6 text-slate-800 ">
                        Home
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-slate-800 ">
                        About
                    </a>
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm text-slate-800 font-semibold leading-6">
                            Features
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -right-56 z-10 mt-3 w-96 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-3">
                                    {features.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-5 rounded-lg p-2 text-sm leading-6 hover:bg-yellow-50"
                                        >
                                            <div className="flex h-10 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-yellow-200">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-black" />
                                            </div>
                                            <div className="flex-auto">
                                                <Link to={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                </Link>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a href="#" className="text-sm text-slate-800 font-semibold leading-6 text-gray-900">
                        Products
                    </a>
                    <a href="#" className="text-sm text-slate-800 font-semibold leading-6 text-gray-900">
                        Contact Us
                    </a>
                </Popover.Group>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                {/* <div className="fixed inset-0 z-10" /> */}
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <h1 className="-m-1.5 p-1.5 text-2xl text-semibold">Menu</h1>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Home
                                </Link>
                                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    About
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-yellow-100">
                                                Features
                                                <ChevronDownIcon className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")} />
                                            </Disclosure.Button>

                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...features].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-yellow-100"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>


                                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Products
                                </Link>
                                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default NavBar;
