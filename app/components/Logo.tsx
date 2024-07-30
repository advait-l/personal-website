import React from "react";
import Image from "next/image";
import profilePic from '@/public/profile-photo.jpg'
import logo from '@/public/logo.jpg'

const Logo = () => {
  return (
    <div className="w-16 border-2  border-red-800 rounded-full drop-shadow-lg">
      <Image className="border border-3xl rounded-full drop-shadow-lg" src={logo} alt="Advait Lonkar Profile Picture"></Image>
    </div>
  );
};

export default Logo;