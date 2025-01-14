import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
            {children}
        </main>
        <Footer />
    </div>
);
export default Layout;