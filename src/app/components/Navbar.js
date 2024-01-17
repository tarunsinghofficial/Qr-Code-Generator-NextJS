'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={` flex flex-row items-center justify-between p-4 z-[100] w-full fixed transition-all duration-300 bg-white
        }`}
    >
      <div className='flex flex-row justify-start items-center gap-10 ml-0 md:ml-12 lg:ml-12'>
        <Link href={'/'}>
          <p className='text-[#4361ee]'>QR generator by Tarun</p>
          </Link>
        <div className='hidden lg:flex flex-row gap-4'>
          <Link href={'/'}> Home </Link>
          <Link href={'/qrcode-generator'}> Create QR </Link>
        </div>
      </div>
        <div className='lg:hidden'>
          <button onClick={toggleMobileMenu} className='text-[#4361ee] focus:outline-none '>
            {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

      <div className='hidden justify-end mr-12 lg:flex'>
      <Link href="/signup" className='bg-[#4361ee] text-white rounded-md p-2 font-bold'>Sign up</Link>
      </div>

      {isMobileMenuOpen && (
        <div className='lg:hidden absolute top-full left-0 w-full bg-[#4361ee] flex flex-col justify-center items-center text-white p-4'>
          <Link href={'/'}> Home </Link>
          <Link href={'/qrcode-generator'}> Create QR </Link>

          <div className='flex justify-end lg:flex'>
          <Link href="/signup" className='bg-[#4361ee] text-white rounded-md p-2 font-bold'>Sign up</Link>
          </div>

        </div>
      )}
    </div>
  );
}

export default Navbar;