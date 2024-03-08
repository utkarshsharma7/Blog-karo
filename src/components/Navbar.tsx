"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"




function Navbar(){

    const [isLoggedIn, isNotLoggedIn] = useState(false)
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex-1">
        <Link href="/">
          <span className="text-white text-lg font-semibold">Blog Karo</span>
        </Link>
      </div>
      <div>
        {!isLoggedIn ? (
          <>
            <Link href="/login">
              <span className="text-white text-sm font-medium mr-4">Login</span>
            </Link>
            <Link href="/signup">
              <span className="text-white text-sm font-medium">Signup</span>
            </Link>
          </>
        ) : (
          <div className="flex items-center">
             <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
             <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
