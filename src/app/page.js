"use client"
import React, { useState } from 'react';

const Page = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    const nav = document.querySelector('header nav');
    if (nav) {
      // Update the left position based on isNavOpen state
      nav.style.left = isNavOpen ? '0px' : '300px';
    }
  };

  return (
    <div>
      <header>
        <button className="nav-toggle" onClick={toggleNav}>
          {isNavOpen ? 'Close' : 'Menu'}
        </button>
        <nav className={isNavOpen ? 'open' : ''}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#project">Project</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="section1">
          <div className="box">        
            <img src="photo_2024-05-29_14-38-15.jpg" alt="Portfolio" />          
            <div className="about">
              <h2><span>Hello</span> I'm</h2>
              <h3>learning web development</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio neque, deserunt rem rerum esse in
                velit numquam quis, blanditiis atque ipsa nobis explicabo eligendi nihil ad perferendis quia!
                Ea, nostrum?</p>
              <button>Read more</button>
            </div>
          </div>
        </section>
        <section id="about" className="section2">
          <h1>About Me</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nam quaerat provident aliquam necessitatibus numquam quam dicta porro corrupti quisquam veritatis fuga, accusamus mollitia blanditiis hic, explicabo consectetur temporibus tenetur.</p>
        </section>
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Page;
