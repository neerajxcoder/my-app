
"use client"
import React, { useState } from 'react';
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
      const nav = document.querySelector('header nav');
      if (nav) {
        
        nav.style.left = isNavOpen ? '30px' : '500px';
       
      }
    };
  
  return (
    <div>
        <header>
        <h1>Portfolio</h1>
        
        <nav className={isNavOpen ? 'open' : ''}>
          <ul>
         <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#project">Project</a></li>
          </ul>
        </nav>
        <button className="nav-toggle" onClick={toggleNav}>
          {isNavOpen ? 'Close' : 'Menu'}
        </button>
      </header>
    </div>
  )
}

export default Navbar
