import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { RiTelegramLine } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Neeraj. All rights reserved.</p>
        <p>Follow me on: </p>
        <div className='conact-us'>
          <a href="https://github.com/neerajxcoder" target="_blank" rel="noopener noreferrer">        <span> <IoLogoGithub /> </span>GitHub</a>
          <a href="t.me/StereoIndiaChatting" target="_blank" rel="noopener noreferrer">     <span> <RiTelegramLine /> </span>telegram</a>
          <a href="https://twitter.com/neeraj" target="_blank" rel="noopener noreferrer">  <span> <  CiFacebook /> </span>facebook</a></div>

        <p>Made with <span style={{ color: 'red' }}>❤</span> by Neeraj</p>
      </div>
    </footer>
  )
}

export default Footer
