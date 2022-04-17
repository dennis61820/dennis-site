import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook, FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <p>
        <FaCopyright style={{ color: 'blue' }} />
        {new Date().getFullYear()}
        <span className='animated'>dennis61820</span>
      </p>

      <a
        href='http://www.facebook.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaFacebook />
      </a>
      <a
        href='http://github.com/dennis61820'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGithub />
      </a>
      <a
        href='http://www.linkedin.com/in/michael-pulliam-7a663291'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaLinkedin />
      </a>
    </footer>
  )
}

export default Footer
