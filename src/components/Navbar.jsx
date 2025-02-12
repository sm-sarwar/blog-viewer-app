
"use client";
import React from "react";
import Link from "next/link";
import {
  useKindeAuth,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/profile"}>Profile</Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-300">
      <div className="navbar max-w-screen-xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className="text-xl font-bold">Postify
        </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className=" menu-horizontal space-x-6 px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">
        <LoginLink className="btn">Sign in</LoginLink>
         <LogoutLink className="btn">Log out</LogoutLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
