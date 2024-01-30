"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logoImg from "../../Image/responsive-logo-tagline.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  checkLocalStorageUser,
  logoutUser,
} from "@/redux/reducers/userReducer";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const currentPath = usePathname();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const notify = () => toast.success("Login successful");

  const handleLoginClick = () => {
    notify();
    setIsLoggedIn(true);
    setUserName("User Name");
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setUserName("");
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(checkLocalStorageUser());
    console.log(user);
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
        <Link href="/" className="mr-4 cursor-pointer py-1.5 font-medium">
          <Image
            className="w-[200px] h-[60px] object-cover"
            src={logoImg}
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="p-1 font-normal flex items-center gap-3">
                <Link
                  href="/"
                  className={currentPath === "/" ? "active-link" : ""}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={currentPath === "/about" ? "active-link" : ""}
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className={currentPath === "/blog" ? "active-link" : ""}
                >
                  Blog
                </Link>
                {user.data ? (
                  <>
                    <div className="w-10 h-10 rounded-full bg-sky-700 flex items-center justify-center cursor-pointer relative group">
                      <span className="text-slate-50 text-sm font-semibold">
                        M
                      </span>
                      <div className="absolute w-52 h-auto py-4 px-2 rounded shadow flex flex-col gap-3 bg-slate-100 top-10 right-0 transition-all invisible group-hover:visible">
                        <Link
                          href="/dashboard"
                          className={`hover:bg-primaryColor py-1 px-2 hover:text-slate-50 rounded transition-all ${
                            currentPath === "/dashboard" ? "active-link" : ""
                          }`}
                        >
                          Dashboard
                        </Link>
                        <span>
                          {user?.data?.username
                            ? user?.data?.username
                            : user?.data?.name}
                        </span>
                        <button
                          className="bg-red-600 py-0.5 text-[#fff] px-[1.5rem] text-[18px] rounded-md"
                          onClick={handleLogoutClick}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href="/Login"
                    className={`${
                      currentPath === "/Login" ? "active-link" : ""
                    } bg-primaryColor py-0.5 text-[#fff] px-[1.5rem] text-[18px] rounded-md`}
                  >
                    Login
                  </Link>
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
          openNav ? "max-h-screen" : ""
        }`}
      >
        <ul className="mt-2 mb-4 flex flex-col items-center gap-6">
          <li className="p-1 font-normal flex flex-col items-center gap-3">
            <Link href="/" className={currentPath === "/" ? "active-link" : ""}>
              Home
            </Link>
            <Link
              href="#"
              className={currentPath === "/about" ? "active-link" : ""}
            >
              About
            </Link>
            <Link
              href="#"
              className={currentPath === "/blog" ? "active-link" : ""}
            >
              Blog
            </Link>
          </li>
        </ul>
        {user?.data ? (
          <>
            <div className="py-3 px-2 rounded bg-slate-200 flex items-center gap-2 flex-col w-full">
              <Link
                href="/dashboard"
                className={currentPath === "/dashboard" ? "active-link" : ""}
              >
                Dashboard
              </Link>
              <button
                className="bg-red-600 py-0.5 text-[#fff] px-[1.5rem] text-[18px] rounded-md"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="py-3 px-2 rounded bg-slate-200 flex items-center gap-2 flex-col w-full">
              <Link
                href="/Login"
                className={currentPath === "/Login" ? "active-link" : ""}
              >
                Login
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
