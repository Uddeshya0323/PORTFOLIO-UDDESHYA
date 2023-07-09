import React from 'react'
import './portfolio.css'
import LE from '../../assets/LE.jpg'
import so from '../../assets/so.jpg'
import To from '../../assets/To.jpg'
import Us from '../../assets/Us.jpg'
import CL from '../../assets/CL.jpg'
import CS from '../../assets/CS.jpg'

const data = [
  {
    id: 1,
    image: LE,
    title: 'Leave Management System',
    github: 'https://github.com/Uddeshya0323'
  },

  {
    id: 2,
    image: so,
    title: ' Stop Watch',
    github: 'https://github.com/Uddeshya0323'

  },
  {
    id: 3,
    image: To,
    title: 'Todo App',
    github: 'https://github.com/Uddeshya0323'

  },
  {
    id: 4,
    image: Us,
    title: 'University Management System',
    github: 'https://github.com/Uddeshya0323'

  },
  {
    id: 5,
    image: CL,
    title: 'Calculator',
    github: 'https://github.com/Uddeshya0323'

  },
  {
    id: 6,
    image: CS,
    title: 'Canteen Management System',
    github: 'https://github.com/Uddeshya0323'

  }
]


export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
        
        data.map(({id, image, title, github}) => {
          return(
          <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image}alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn'_target='_blank'>Github</a>
          </div>
          
        </article>
        )
        
        })
       }

       
      </div>
    </section>
  
    )
}
