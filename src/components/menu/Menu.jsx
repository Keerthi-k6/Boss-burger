import React from 'react'
import styles from'./Menu.module.css'
import vegburger from '../../assets/vegburger.jpeg'
import chickenburger from '../../assets/chickenburger.jpeg'
import cheeseburger from '../../assets/cheeseburger.jpeg'
import fries from '../../assets/fries.jpeg'
import perifries from '../../assets/perifries.jpeg'
import coke from '../../assets/coke.jpeg'
import pepsi from '../../assets/pepsi.jpeg'
import addons from '../../assets/addons.jpeg'
import combo1 from '../../assets/combo1.jpg'
import combo2 from '../../assets/combo2.jpg'
import combo3 from '../../assets/combo3.jpg'
import { Link } from 'react-router-dom'
import Title from '../Title/Title'
const data = [
  {
        id: 1,
        image: combo1,
        title: 'Veg Burger Combo'
  },
  {
      id: 2,
      image: combo2,
      title: 'Chicken Burger Combo'
  },
  {
      id: 3,
      image: combo3,
      title: 'Cheese Burger Combo'
  }
]
const Menu = () => {
    return (
      <section className={styles['menu-wrapper']} id='menu'>
       <Title Title='Our Popular Combos' color='var(--black)' fontSize='3rem' />
        <div className={`${styles['menu-container']} innerwidth paddings flexCenter`}>
          {data.map(({ id, image, title }) => {
            return (
              <article className={styles['menu-item']} key={id}>
                <div className={styles['menu-image']}>
                  <img src={image} alt={title} width={200} />
                </div>
                <div className={styles['menu-text']}>
                  <h4>{title}</h4>
                </div>
              </article>
            );
          })}
        </div>
          <p>Check Out <Link to='/menu' style={{color: 'var(--yellow)'}}> Menu </Link> For More !</p>
      </section>
    );
  };
  
  export default Menu;
  