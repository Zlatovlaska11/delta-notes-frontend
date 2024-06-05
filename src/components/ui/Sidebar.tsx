// components/Sidebar.tsx

import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex ${isOpen ? 'w-64' : 'w-20'} bg-gray-800 h-screen p-5 pt-8 duration-300 relative`}>
            <button
                className="absolute top-9 right-3 text-2xl text-white"
                onClick={toggleSidebar}
            >
                ☰
            </button>
            <div className="flex flex-col items-start">
                <Link href="/">
                    <a className="text-white text-lg mb-6">Home</a>
                </Link>
                <Link href="/about">
                    <a className="text-white text-lg mb-6">About</a>
                </Link>
                <Link href="/contact">
                    <a className="text-white text-lg">Contact</a>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

