import React from 'react';
import { useCart } from '../../hooks/useCart';
import styles from './CartPage.module.css';
import Title from '../../components/Title/Title';
import { Link } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
const CartPage = () => {
  const { cart, removeFromCart, changeQuantity } = useCart();

  return (
    <>
      <Title Title='Your Cart' color='var(--black)' fontSize='3rem' />
      {cart.items.length === 0 ? (<NotFound message='Your Cart is Empty' linkRoute='/menu' linkText=' Add Some Delicious Food'/>): (
        <div className={`${styles['menu-wrapper']} innerwidth paddings`}>
          <div className={`${styles['menu-container']} innerwidth paddings`}>
            {cart.items.map(item => (
              <article className={`${styles['menu-item']} flexStart`} key={item.food.id} style={{justifyContent: 'space-around'}}>
                <Link className={styles['menu-image']} to={`/food/${item.food.id}`}>
                  <img src={item.food.imageUrl} alt={item.food.name} width={100} />
                </Link>
                <Link to={`/food/${item.food.id}`} >{item.food.name}</Link>
                <select value={item.quantity} onChange={e => changeQuantity(item, parseInt(e.target.value))}>
                  {[...Array(10).keys()].map(i => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <p>&#x20B9; {item.price}</p>
                <button className={styles['btn']} onClick={() => removeFromCart(item.food.id)}>Remove</button>
              </article>
            ))}
          </div>
          <div className={`${styles['checkout-wrapper']}`}>
            <div className={`${styles['checkout']}`}>
              <div className={styles['food-cnt']}>{cart.totalCount}</div>
              <div className={styles['total']}>&#x20B9; {cart.totalPrice}</div>
              <Link to='/checkout' className={styles['btn']}>Proceed To Checkout</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
