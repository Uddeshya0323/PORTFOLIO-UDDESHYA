import React from 'react'
import './about.css'
import personal from '../../assets/personal.png'
import {TbAwardFilled} from 'react-icons/tb'
import {SiKingstontechnology} from 'react-icons/si'
import {AiOutlineProject} from 'react-icons/ai'
export const About = () => {
  return (
  <section id='about'>
  <h5>Get to Know</h5>
  <h2>About Me</h2>

  <div className='container about__container'>

    <div className='about__me'>
    <div className='about__me.image'>
      <img src={personal} alt='About Image'/>
    </div>
    </div>


    <div className='about__content'>
    <div className='about__cards'>
      <article className='about__card'>
        <TbAwardFilled className='about__icon'/>
        <h5>Experience</h5>
        <small>1+ Years Working</small>
       </article>

        <article className='about__card'>
        <SiKingstontechnology className='about__icon' />
        <h5>Technologies</h5>
        <small>React, SPFx Framework, Sharepoint, Power App, Power Automate  </small>
       </article>

       <article className='about__card'>
        <AiOutlineProject className='about__icon' />
        <h5>Project</h5>
        <small>1+ Project </small>


       </article> 
    </div>

    <p>
      I'm an React & SPFx Full Stack Developer focused on crafting clean and user-friendly experiences, I am passonate about building excellent software that improve the lives of those around me.
    </p>

    <a href= '#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  </div>
  </section>
  
  )
}
