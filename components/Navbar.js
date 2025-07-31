import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <nav className="w-full md:w-4/5  z-20 flex justify-between items-center  mx-auto mt-4 px-5 p-4 backdrop-blur-[1px] ring-[1px] bg-slate-800/15 ring-slate-700 rounded-lg text-white">
      <div>
        <Link href="/">
          <span className=" flex gap-2 item-center text-lg font-bold mx-2">
            Getmea Chai{" "}
            <img className="w-8 invert" src="/tea.gif" alt="video"></img>
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <span className="cursor-pointer hover:text-slate-400">Projects</span>
        <Link href="/login">
          <button className="group relative inline-flex h-[calc(44px+4px)] items-center justify-center rounded-full bg-slate-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
            <span className="z-10 pr-2">Log In</span>
            <div className="absolute right-1 inline-flex h-10 w-12 items-center justify-end rounded-full bg-slate-800 transition-[width] group-hover:w-[calc(100%-8px)]">
              <div className="mr-3.5 flex items-center justify-center">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-neutral-50"
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
      </div>
    </nav>
  );
};

export default Nav;
