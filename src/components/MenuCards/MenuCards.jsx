import React from 'react'
import style from './MenuCards.module.css'
import styles from '../Menu/Menu.module.css'
import { Link } from 'react-router-dom'
import StarRating from '../starRating/StarRating';
const MenuCards = ({foods}) => {
  return (
    <ul>
       <section className={styles['menu-wrapper']}>
        <div className={`${styles['menu-title']} innerwidth paddings flexCenter`}>
          <h1>Our Menu </h1>
        </div>
        <div className={`${styles['menu-container']} innerwidth paddings flexCenter`}>
          {foods.map(food => {
            return (
              <article className={styles['menu-item']} key={food.id}>
                <Link className={styles['menu-image']} to = {`/food/${food.id}`}>
                  <img src={food.imageUrl} alt={food.name} width={200} />
                </Link>
                <div className={styles['menu-text']}>
                  <div className={style['card-content']}>
                    <StarRating rating={food.stars} />
                    <div className={`${style['fav']} ${food.favorite? '':style['not']}`} >
                    ❤
                    </div>
                </div>
                  <h3>{food.name}</h3>
                  <div className={style['card-content']}>
                  <p>&#128337;{food.cookTime}</p>
                  <p className={style['price']}>₹{food.price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </ul>
  )
}

export default MenuCards
