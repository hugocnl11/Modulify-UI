// components/Navbar.tsx

import React from 'react';
import Link from 'next/link';


const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-970 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">
          <Link href="/">Modulify UI</Link> 
        </div>
        
        <div className="space-x-4">
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors duration-200">
            Components
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300 transition-colors duration-200">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors duration-200">
            Log in
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors duration-200">
            Sign up
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

