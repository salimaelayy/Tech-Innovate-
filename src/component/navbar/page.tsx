import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <nav className="bg-black text-white p-4">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center">
                <div>
                    <span className="text-xl font-semibold">Your Logo</span>
                </div>
                <div className="hidden font-semibold md:flex space-x-4">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link>
                    <Link href="/services" className="hover:text-gray-300">Services</Link>
                    <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                </div>
                
            </div>
            
        </nav>
    );
};

export default Navbar;