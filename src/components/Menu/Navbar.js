"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logoImg from '../../Image/responsive-logo-tagline.svg';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const currentPath = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const notify = () => toast.success('Login successful');

  const handleLoginClick = () => {
    notify();
    setIsLoggedIn(true);
    setUserName('User Name'); 
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const navList = (
  //   <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
  //     <li className="p-1 font-normal flex items-center gap-3">
  //       <Link href="/" className={currentPath==="/"?'active-link':''} >Home</Link>
  //       <Link href="#" className={currentPath==="/about"?'active-link':''} >About</Link>
  //       <Link href="#" className={currentPath==="/blog"?'active-link':''}>Blog</Link>
  //       <Link href="/Login" className={currentPath==="/Login"?'active-link':''}>Login</Link>
  //     </li>
  //   </ul>
  // );

  return (
    <nav className="sticky top-0 z-10 rounded-none px-4 py-2 lg:py-1 bg-white shadow-md">
      <div className="flex items-center justify-between text-blue-gray-900 container">
        <a href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
          <Image className="w-[200px] h-[60px] object-cover" src={logoImg} alt="logo" />
        </a>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">
          <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="p-1 font-normal flex items-center gap-3">
          <Link href="/" className={currentPath === '/' ? 'active-link' : ''}>
            Home
          </Link>
          <Link href="/about" className={currentPath === '/about' ? 'active-link' : ''}>
            About
          </Link>
          <Link href="/blog" className={currentPath === '/blog' ? 'active-link' : ''}>
            Blog
          </Link>
          {isLoggedIn ? (
            <>
              <Link  href="/dashboard" className={currentPath === '/dashboard' ? 'active-link' : ''}>
                Dashboard
              </Link>
              <span>{userName}</span>
              <button className='bg-primaryColor py-0.5 text-[#fff] px-[1.5rem] text-[18px] rounded-md' onClick={handleLogoutClick}>Logout</button>
            </>
          ) : (
            <Link href="/Login" className={`${currentPath === "/Login" ? "active-link" : ""
          } bg-primaryColor py-0.5 text-[#fff] px-[1.5rem] text-[18px] rounded-md`} onClick={handleLoginClick}>Login</Link>
          )}
        </li>
      </ul>

      <ToastContainer />
          </div>

          <button
            className={`ml-auto lg:hidden focus:outline-none`}
            type="button"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Open icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-max-height duration-500 ease-in-out max-h-0 ${
          openNav ? 'max-h-screen' : ''
        }`}
      >
        <ul className="mt-2 mb-4 flex flex-col items-center gap-6">
              <li className="p-1 font-normal flex flex-col items-center gap-3">
                <Link href="/" className={currentPath==="/"?'active-link':''} >Home</Link>
                <Link href="#" className={currentPath==="/about"?'active-link':''} >About</Link>
                <Link href="#" className={currentPath==="/blog"?'active-link':''}>Blog</Link>
                <Link href="/Login" className={currentPath==="/Login"?'active-link':''}>Login</Link>
              </li>
           </ul>
      </div>
    </nav>
  );
};

export default Navbar;

