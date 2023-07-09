import React from 'react'
import {GrInstagram} from 'react-icons/gr'
import {LiaTwitterSquare} from 'react-icons/lia'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {BsGithub} from 'react-icons/bs'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
    
      <a href='#' className='footer__logo'>UDDESHYA</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.instagram.com/uddeshya0323/'><GrInstagram/></a>
        <a href='https://twitter.com/@UDDESHY2377175'><LiaTwitterSquare/></a>
        <a href='https://www.linkedin.com/in/uddeshya-patel-a247611b2/'><TiSocialLinkedinCircular/></a>
        <a href='https://github.com/Uddeshya0323'><BsGithub/></a>

      </div>
    <div className='footer__copyright'>
      <small> &copy; Uddeshya</small>
    </div>
    </footer>
  )
}
