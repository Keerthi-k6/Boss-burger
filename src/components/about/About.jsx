import React from 'react'
import styles from'./About.module.css'
import about from '../../assets/about.png'
const About = () => {
  return (
    <section className={styles['about-wrapper']} id='about'>
      <div className={`${styles['about-title']} innerwidth paddings flexCenter `}>
        <h1>About Us</h1>
      </div>
      <div className={`${styles['about-container']} innerwidth paddings `}>
        {/* leftside */}
        <div className={styles['about-image']}>
          <img src={about} alt="about" />
        </div>
        {/* rightside */}
        <div className={styles['about-desc']}>
          <h1><b>Welcome To <span style={{color: 'var(--black)'}}>Boss Burger</span></b></h1>
          <h1> Where Every Bite is Your Masterpiece!</h1>
          <div className={styles['about-p']}>
          Our passion lies in crafting burgers tailored precisely to your tastes, ensuring every bite is a delicious reflection of your cravings. From choosing the perfect patty – whether it's juicy beef, succulent grilled chicken, or mouthwatering veggie options – to selecting from an array of premium toppings, savory sauces, and fresh ingredients, your burger journey begins with your preferences in mind. Our commitment to customization means that whether you're a traditionalist seeking classic comfort or an adventurous foodie craving bold new flavors, we've got you covered. Join us at Boss Burger Franchise and let your imagination run wild as you create your perfect burger masterpiece
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;