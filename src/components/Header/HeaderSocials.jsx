import React from 'react'

import {AiOutlineLinkedin} from 'react-icons/ai'
import {SiGithub} from 'react-icons/si'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>

     <a href="https://www.linkedin.com/in/uddeshya-patel-a247611b2/" target="_blank" rel="noreferrer"><AiOutlineLinkedin/></a> 
     <a href='https://github.com/Uddeshya0323' target='_blank' rel="noreferrer"><SiGithub/></a> 

    </div>
  )
}

export default HeaderSocials
