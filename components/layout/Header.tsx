import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Top Navbar */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
            </svg>
            ALX Listing
          </Link>
        </div>

        {/* Search Bar (Hidden on small screens) */}
        <div className="hidden md:flex items-center border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition cursor-pointer">
          <span className="text-sm font-semibold text-gray-800 px-2 border-r">Anywhere</span>
          <span className="text-sm font-semibold text-gray-800 px-2 border-r">Any week</span>
          <span className="text-sm text-gray-500 px-2">Add guests</span>
          <div className="bg-blue-600 p-2 rounded-full text-white ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
            <button className='text-sm font-semibold text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full transition'>Sign In</button>
            <button className='text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition'>Sign Up</button>
        </div>
      </div>

      {/* Categories Sub-nav */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-4 flex gap-8 overflow-x-auto no-scrollbar text-gray-500 text-sm font-medium">
             {["Rooms", "Mansion", "Countryside", "Beachfront", "Farms", "Trending", "Tropical", "Amazing pools", "Cabins", "Desert"].map((item) => (
                 <div key={item} className="flex flex-col items-center gap-2 min-w-fit cursor-pointer hover:text-black hover:border-b-2 hover:border-black pb-2 transition">
                     <span>{item}</span>
                 </div>
             ))}
        </div>
      </div>
    </header>
  );
};

export default Header;