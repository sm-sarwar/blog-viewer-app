"use client";
import React from "react";
import Link from "next/link";
import { useKindeAuth, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const { user, isAuthenticated } = useKindeAuth();

  return (
    <div className="bg-base-300">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <Link href={"/"} className="text-xl font-bold">
            Postify
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu-horizontal space-x-6">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/profile"}>Profile</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <LoginLink className="btn">Sign in</LoginLink>
         <LogoutLink className="btn">Log out</LogoutLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
