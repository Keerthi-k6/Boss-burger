import React from 'react'
import styles from'./Banner.module.css'
import { motion } from 'framer-motion';
import banner from '../../assets/banner.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
      <section className={styles['banner-wrapper']} id='banner'> 
        <div className={`innerwidth paddings flexCenter`} style={{justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
          {/* leftside */}
          <div className={`flexStart`}>
            <div className={styles['banner-title']}>
              <motion.h1
                initial={{y: "2rem", opacity: '0'}}
                animate={{y: "0", opacity: '1'}}
                transition={{duration: 2, type: 'spring'}}
              >Customize your</motion.h1>
              <motion.h1
                initial={{y: "2rem", opacity: '0'}}
                animate={{y: "0", opacity: '1'}}
                transition={{duration: 2, type: 'spring'}}
              >favourite <b style={{color: '#f9b209'}}>Boss Burger</b></motion.h1>
              <motion.h1
                initial={{y: "2rem", opacity: '0'}}
                animate={{y: "0", opacity: '1'}}
                transition={{duration: 2, type: 'spring'}}
              > with us!</motion.h1>
              <motion.div
                className={`${styles['btn-container']} 'flexStart'`}
                style={{marginTop: '2rem'}}
              >
                <button className={'button'} style={{marginRight: '1rem'}}>
                  <Link to='/menu'><div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>Order Online </div></Link>
                </button>
              </motion.div>
            </div>
          </div>
          {/* rightside */}
          <div className={`flexCenter ${styles['banner-right']}`}>
            <motion.div
              initial={{x: "7rem", opacity: '0'}}
              animate={{x: "0", opacity: '1'}}
              transition={{duration: 2, type: 'spring'}}
              className={styles['image-container']}
            >
              <img src={banner} alt="banner"/>
            </motion.div>
          </div>
        </div>
        <div className={styles['white-gradient']} style={{top: '25%', right: '16%', opacity: '0.9', width: '15rem', height: '15rem', filter: 'blur(15rem)'}}/>
      </section>
    );
  }
  
  export default Banner;