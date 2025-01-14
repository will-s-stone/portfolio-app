import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const NAV_ITEMS = [
        { path: '/', label: 'Home' },
        { path: '/experience', label: 'Experience' },
        { path: '/projects', label: 'Projects' },
        { path: '/activities', label: 'Activities' },
        { path: '/education', label: 'Education' },
        { path: '/hobbies', label: 'Hobbies' }
    ];

    return (
        <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-gray-800 font-medium text-3xl">
                        William Stone
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8">
                        {NAV_ITEMS.map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`px-3 py-2 text-sm font-medium transition-colors
                                    ${location.pathname === path
                                    ? 'text-gray-900'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {NAV_ITEMS.map(({ path, label }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`block px-3 py-2 text-base font-medium ${
                                        location.pathname === path
                                            ? 'text-gray-900'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;