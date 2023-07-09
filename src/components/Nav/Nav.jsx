import React from 'react'
import {RiHomeHeartFill} from 'react-icons/ri'
import {CgUserlane} from 'react-icons/cg'
import {BsBookmarkHeartFill} from 'react-icons/bs'
// import {FaServicestack} from 'react-icons/fa'
import {GrContact} from 'react-icons/gr'
import { useState } from 'react'
import './nav.css'

export const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#'onClick={() =>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHomeHeartFill/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === 'about' ? 'active' : ''}><CgUserlane/></a>

      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === 'experience' ? 'active' : ''}><BsBookmarkHeartFill/></a>
      {/* <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === 'services' ? 'active' : ''}><FaServicestack/></a> */}
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === 'contact' ? 'active' : ''}><GrContact/></a>

    </nav>
  )
}
