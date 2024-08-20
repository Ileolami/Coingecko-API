import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold hover:text-gray-300">Crypto Tracker</Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-orange-600 hover:text-white focus:outline-none z-50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <ul className={`fixed top-0 right-0 h-full bg-gray-800 bg-opacity-90 text-center px-5 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:items-center md:transform-none`}>
          <li className="mt-2 md:mt-0 md:ml-6 md:hidden">
            <button onClick={toggleMenu} className="text-orange-600 hover:text-white ml-10 focus:outline-none z-50 p-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </li>
          <li className="mt-2 md:mt-0 md:ml-6">
            <Link to="/" className="text-orange-500 hover:text-gray-300 block p-4 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-orange-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">Coin</Link>
          </li>
          <li className="mt-2 md:mt-0 md:ml-6">
            <Link to="/nft" className="text-orange-500 hover:text-gray-300 block p-4 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-orange-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">NFT</Link>
          </li>
          <li className="mt-2 md:mt-0 md:ml-6">
            <Link to="/categories" className="text-orange-500 hover:text-gray-300 block p-4 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-orange-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">Categories</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;