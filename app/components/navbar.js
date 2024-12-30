"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About Us", "Teams", "Events", "Gallery", "Contact"];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 lg:hidden"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Sidebar - Now fullscreen and transparent */}
      <div className={`
        fixed inset-0 w-full h-full bg-black/50 backdrop-blur-sm
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        lg:hidden
      `}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((text, index) => (
            <div
              key={index}
              className="relative w-40 h-28"
            >
              <Image
                src="/download.png"
                alt={text}
                layout="fill"
                objectFit="contain"
              />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                           text-brown-400 font-bold text-base shadow-text">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-5 
                      justify-center items-center gap-16 z-10">
        {navItems.map((text, index) => (
          <div
            key={index}
            className="relative w-40 h-28 text-center"
          >
            <Image
              src="/download.png"
              alt={text}
              layout="fill"
              objectFit="contain"
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         text-brown-400 font-bold text-base shadow-text">
              {text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;