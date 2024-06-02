import React from 'react'
import {FaGithub} from  "react-icons/fa"
const Footer = () => {
  return (
    <footer>
           <div className="footer-content">
          <p>&copy; 2024 Neeraj. All rights reserved.</p>
          <p>Follow me on:
            <a href="https://github.com/neerajxcoder" target="_blank" rel="noopener noreferrer">< FaGithub/>GitHub</a> |
            <a href="https://www.linkedin.com/in/neeraj" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
            <a href="https://twitter.com/neeraj" target="_blank" rel="noopener noreferrer">Twitter</a>
          </p>
          <p>Made with <span style={{color: 'red'}}>❤</span> by Neeraj</p>
        </div>
    </footer>
  )
}

export default Footer
