"use client"
import React, { useState } from 'react';
import Card from "./comonent/card";

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
      <main>

        <section id="home" className="section1">

          <div className="box">
            <div className="about">
            <h2><span>Hello</span> I'm</h2>
              <h3>Neeraj, a passionate web developer</h3>
              <p>Welcome to my journey in web development! With a keen eye for detail and a love for creating intuitive and dynamic user experiences, I am dedicated to mastering the art of coding and design. Join me as I explore the endless possibilities of the web and strive to bring innovative ideas to life.</p>
              <button>Learn more about me</button>
            </div>
          </div>
        </section>
         
        <section className='section3  '>
        <h1 className='h1'>Skils</h1>
          <Card/>

        </section>
        <section id="about" className="section2">
        <h1>About Me</h1>
          <p>Hi, I'm Neeraj, a web developer with a strong passion for technology and creativity. My journey into the world of web development began with a curiosity for how websites are built and a desire to bring ideas to life through code. Over the years, I have honed my skills in various front-end and back-end technologies, continuously learning and adapting to new trends and tools in the industry.</p>
          <p>With a background in computer science, I have a solid foundation in programming principles and problem-solving techniques. I enjoy tackling challenging projects that push the boundaries of my knowledge and capabilities. Whether it's designing responsive web interfaces, optimizing user experiences, or building robust server-side applications, I strive for excellence in every aspect of development.</p>
          <p>Beyond coding, I am a lifelong learner who enjoys exploring new technologies and staying up-to-date with the latest advancements in the field. I believe in the power of collaboration and actively seek opportunities to work with like-minded individuals who share my passion for innovation and creativity.</p>
          <p>When I'm not coding, you can find me exploring the outdoors, reading tech blogs, or experimenting with new recipes in the kitchen. I am excited about the future of web development and look forward to contributing to the ever-evolving digital landscape.</p>    
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
};

export default Page;
