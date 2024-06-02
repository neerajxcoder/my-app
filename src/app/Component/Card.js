
"use client"
import React, { useState } from 'react';
import { FaBacon } from "react-icons/fa6";
import { 
    FaHtml5,
    FaReact,
    FaGithub,
  } from "react-icons/fa";
  import {
    IoLogoCss3,
    IoLogoJavascript,
  } from "react-icons/io";
  import {
    RiNextjsLine,
  } from "react-icons/ri";
  import {
    BiLogoNodejs,
  } from "react-icons/bi";
  import {
    DiPostgresql,
  } from "react-icons/di";
  import {
    VscVscode,
  } from "react-icons/vsc";
  
const Card = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
      const nav = document.querySelector('header nav');
      if (nav) {
        
        nav.style.left = isNavOpen ? '30px' : '500px';
       
      }
    };
  
  return (
    <div className='skils'>
    <div className='card'>
        <FaHtml5 className='icon' />
        <div>
          <h2> HTML </h2>
          <div className='div'></div>
        </div>
        <h1>80%</h1>
      </div>
      <div className='card'>
        < IoLogoCss3 className='icon' />
        <div>
          <h2> Css</h2>
          <div className='div'></div>
        </div>
        <h1>75%</h1>
      </div>
      <div className='card'>
        <IoLogoJavascript className='icon' />
        <div>
          <h2>JavaScript</h2>
         <div className='div'></div>         
        </div>
        <h1>60%</h1>
      </div>
      <div className='card'>
        <FaReact className='icon' />
        <div>
          <h2> React.js</h2>
          <div className='div'></div>
        </div>
        <h1>20%</h1>
      </div>
      <div className='card'>
        < RiNextjsLine className='icon' />
        <div>
          <h2> Next.js</h2>
          <div className='div'></div>
        </div>
        <h1>20%</h1>
      </div>
      <div className='card'>
        <BiLogoNodejs className='icon' />
        <div>
          <h2>Node.js</h2>
          <div className='div'></div>
        </div>
        <h1>40%</h1>
      </div>
      <div className='card'>
        <DiPostgresql className='icon' />
        <div>
          <h2>SQL</h2>
          <div className='div'></div>
        </div>
        <h1>0.1%</h1>
      </div>
      <div className='card'>
        < FaGithub className='icon' />
        <div>
          <h2> Git&GiHub</h2>
          <div className='div'></div>
        </div>
        <h1>60%</h1>
      </div>
      <div className='card'>
        <VscVscode className='icon' />
        <div>
          <h2> VS.code</h2>
          <div className='div'></div>
        </div>
        <h1>70%</h1>
      </div>
    </div>
  )
}

export default Card
