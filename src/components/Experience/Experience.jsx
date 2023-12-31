import React from 'react'
import './experience.css'
import {BsClipboardCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className='container experience__container'>
    <div className='experience__frontend'>
      <h3>Frontend Development</h3>
      <div className='experience__content'>
        <article className='experience__details'>
        <BsClipboardCheckFill className='.experience__details-icon' />
        <div>
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>

        </div>
        </article>

        <article className='experience__details'>
        <BsClipboardCheckFill className='.experience__details-icon' />
        <div>
        <h4>CSS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsClipboardCheckFill className='.experience__details-icon' />
        <div>
        <h4>JAVASCRIPT</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsClipboardCheckFill className='.experience__details-icon' />
       <div>
       <h4>BOOTSTRAP</h4>
        <small className='text-light'>Intermediate</small>
       </div>
        </article>

       

        <article className='experience__details'>
        <BsClipboardCheckFill className='.experience__details-icon' />
        <div>
        <h4>REACT</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>

      </div>

    </div>
    <div className='experience__backend'>
    <h3>Backend Development</h3>
      <div className='experience__content'>
        <article className='experience__details'>
        <BsClipboardCheckFill className='.experience__details-icon' />
      <div>
      <h4>NODE JS</h4>
        <small className='text-light'>Intermediate</small>
      </div>
        </article>

        <article className='experience__details'>
        <BsClipboardCheckFill className='.experience__details-icon' />
      <div>
      <h4>MY SQL</h4>
        <small className='text-light'>Experienced</small>
      </div>
        </article>

        <article className='experience__details'>
        <BsClipboardCheckFill className='.experience__details-icon' />
        <div>
        <h4>PYTHON</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsClipboardCheckFill className='.experience__details-icon' />
       <div>
       <h4>SPFX FRAMEWORK</h4>
        <small className='text-light'>Experienced</small>
       </div>
        </article>

        <article className='experience__details'>
        <BsClipboardCheckFill className='.experience__details-icon' />
        <div>
        <h4>POWER APP</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsClipboardCheckFill className='.experience__details-icon' />
        <div>
        <h4>POWER AUTOMATE</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsClipboardCheckFill className='.experience__details-icon' />
       <div>
       <h4>DOT NET</h4>
        <small className='text-light'>Intermediate</small>
       </div>
        </article>

      </div>



    </div>

    </div>
    </section>
    )
}

export default Experience