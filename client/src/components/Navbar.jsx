
import React from 'react'
import { assets } from './../assets/assets';
import { Search, Menu, X } from 'lucide-react';

function Navbar() {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Movies', path: '/movies' },
        { name: 'Theatres', path: '/' },
        { name: 'Releases', path: '/' },
    ];

    const ref = React.useRef(null)

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);




    return (
        <div className="h-88 md:h-64  bg-transparent absolute ">
            <p className="w-10 h-[500px]"></p>
            <nav className={`fixed top-0 left-0 bg-transparent   w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <img src={assets.logo} />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8 border px-6 bg-white bg-opacity-15 py-2 rounded-full">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}

                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <Search className='  text-white   ' />
                    <button className=" bg-red-700 text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">

                    <button className=" bg-red-700 text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                        Login
                    </button>
                    <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white h-8 w-8' />
                </div>

                {/* Mobile Menu */}
                <div className={`fixed text-white top-0 left-0 w-full h-screen backdrop-blur-xl text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                    <X onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 cursor-pointer" />

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}




                </div>
            </nav>
        </div>
    )
}

export default Navbar
