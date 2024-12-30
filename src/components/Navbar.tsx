import React from 'react'

export default function Navbar() {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-10xl font-semibold"></div>
        <ul className="text -10xl gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skills">Skills</a></li>
          <li className="menuLink " ><a href="#contact">Contact</a></li>
        </ul>
         
      </div>
    </div>
  )
}