import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 w-screen">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-sm lg:text-xl font-bold hover:text-slate-950">Crypto Tracker</Link>
        
          <ul className={'flex flex-col h-full gap-4 md:flex-row lg:flex-row items-center'}>
            <li className="mr-6">
              <Link to="/" className="text-white hover:text-gray-300">Coin</Link>
            </li>
            <li className="mr-6">
              <Link to="/nft" className="text-white hover:text-gray-300">NFT</Link>
            </li>
            <li className="mr-6">
              <Link to="/categories" className="text-white hover:text-gray-300">Categories</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;