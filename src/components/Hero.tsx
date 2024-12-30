import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image'; // Import Next.js Image component

export default function Hero() {
  return (
    <div id="hero" className="min-h-screen relative overflow-hidden">
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] items-center">
        {/* Profile Picture Section */}
        <div className="flex justify-center items-center relative">
          <div className="w-64 h-64 lg:w-80 lg:h-80 bg-pink-400 rounded-full shadow-lg overflow-hidden border-4 border-teal-500">
            {/* Using Next.js Image component */}
            <Image
              src="/profile.jpg"
              alt="Profile"
              layout="fill" // Ensures image covers the parent container
              objectFit="cover" // Mimics the object-cover behavior of CSS
              quality={100} // Optional: Adjust image quality
              priority // Ensures better performance for above-the-fold images
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="text-center lg:text-left text-gray-800">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            I&apos;m <span className="text-black">Rimsha</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl mt-4 font-medium">A Developer</h2>
        </div>
      </div>
    </div>
  );
}