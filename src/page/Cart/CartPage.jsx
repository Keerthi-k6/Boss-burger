import React from 'react'
import { useCart } from '../../hooks/useCart'
import styles from './CartPage.module.css'
const CartPage = () => {
    const {cart} = useCart()
  return (
    <div>
   {cart.items.length}
    </div>
  )
}

export default CartPage
