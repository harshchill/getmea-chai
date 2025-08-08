"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [showDropdown, setshowDropdown] = useState(false);
  
  return (
    <nav className="w-full z-20 flex justify-between items-center mx-auto mt-4 px-4 md:px-8 p-2 backdrop-blur-[1px] ring-[1px] bg-slate-800/15 ring-slate-700 rounded-lg text-white">
      <div>
        <Link href="/">
          <span className="flex gap-2 items-center text-base md:text-lg font-bold">
            Get Me a Chai{" "}
            <img className="w-6 md:w-8 invert" src="/tea.gif" alt="tea" />
          </span>
        </Link>
      </div>
      
      <div className="relative">
        {session && (
          <>
            <button
              onClick={() => setshowDropdown(!showDropdown)}
              onBlur={() => {
                setTimeout(() => {
                  setshowDropdown(false)
                }, 100);
              }}
              className="mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 md:px-5 py-2 md:py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              <span className="hidden sm:inline">{"Welcome, " + (session.user.name)}</span>
              <span className="sm:hidden">Menu</span>
              <svg
                className="w-2.5 h-2.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdownHover"
              className={
                "absolute right-0 md:left-16 z-40 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 " +
                (showDropdown ? "" : "hidden")
              }
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                
                <li>
                  <Link
                    href={"/" + session.user.name}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your page
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => signOut()}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
        

        {!session && (
          <Link href="/login">
            <button className="group relative inline-flex h-[calc(44px+4px)] items-center justify-center rounded-full bg-slate-950 py-1 pl-4 md:pl-6 pr-12 md:pr-14 font-medium text-neutral-50 text-sm md:text-base">
              <span className="z-10 pr-2">Log In</span>
              <div className="absolute right-1 inline-flex h-10 w-10 md:w-12 items-center justify-end rounded-full bg-slate-800 transition-[width] group-hover:w-[calc(100%-8px)]">
                <div className="mr-2 md:mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 md:h-5 w-4 md:w-5 text-neutral-50"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
