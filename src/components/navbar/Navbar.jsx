import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/nav-logo.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const {user,logout} = useAuth()
  const {cart} = useCart()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className={styles['nav-wrapper']} id='navbar'>
      <div className={`${styles['nav-container']} flexCenter innerWidth}`} style={{ justifyContent: 'space-between', padding: '1.5rem' }}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt='logo' width={150} />
        </Link>
        <div className={`flexCenter ${styles['nav-links']}`}>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>Your Orders</Link>
          <Link to='/cart' className={styles.cart}>
            <FaShoppingCart fontSize={'1.5rem'} />
            {cart.totalCount > 0 && <span>{cart.totalCount}</span>}
          </Link>
          <button className='button user' onMouseEnter={toggleMenu} onMouseLeave={toggleMenu} >
            {user ? (
              <div className='user_container'>
                <Link to='/profile'>{user.name}</Link>
                <div className={`${styles.usermenu} ${isMenuOpen && styles.open}`}> 
                  <Link to='/profile'>Profile</Link>
                  <Link onClick={logout}>Logout</Link>
                </div>
              </div>
            ) : (
              <Link to='/login'>Login</Link>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
