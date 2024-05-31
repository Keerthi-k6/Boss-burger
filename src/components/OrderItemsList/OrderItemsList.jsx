import React from 'react'
import { Link } from 'react-router-dom'
import styles from './OrderItemsList.module.css'
import Title from '../Title/Title'
const OrderItemsList = ({order}) => {
  return (
    <>
      <Title Title='Order Items :' color='var(--black)' fontSize='1rem' />
        <div className={`${styles['menu-wrapper']} innerwidth `} >
          <div className={`${styles['menu-container']} innerwidth `}>
            {order.items.map(item => (
              <article className={`${styles['menu-item']} flexStart`} key={item.food.id} style={{justifyContent: 'space-around'}}>
                <Link className={styles['menu-image']} to={`/food/${item.food.id}`}>
                  <img src={item.food.imageUrl} alt={item.food.name} width={100} />
                </Link>
                <p >{item.food.name}</p>   
                <p>&#x20B9; {item.food.price}</p>
                <p>{item.quantity}</p>
                <p>&#x20B9; {item.price}</p>
              </article>
            ))}
          </div>
          <div className={`${styles['total']}`}>
          <p className={styles['btn']}> Order Total : &#x20B9; {order.totalPrice}</p>
          </div>
        </div>
    </>
  )
}

export default OrderItemsList
