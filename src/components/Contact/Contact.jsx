 import React from 'react'
import './contact.css'
import {MdOutlineAttachEmail} from 'react-icons/md'
import {PiWhatsappLogo} from 'react-icons/pi'
import  {useRef} from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form= useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_8gurabg', 'template_hmg6wwm', form.current, 'MiOKu543egsASieUt')
  }
  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Don't Be Shy !</h2>
    

    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineAttachEmail className='contact__option_icon'/>
          <h4>Email</h4>
          <h5>uddeshyap1@gmail.com</h5>
          <a href='mailto:uddeshyap1@gmail.com'>Send a message</a>
        </article>

        <article className='contact__option'>
          <PiWhatsappLogo className='contact__option_icon'/>
          <h4>WhatsApp</h4>
          <h5>9628452687</h5>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message'rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>

      </form>
    </div>
   </section>
  )
}

export default Contact