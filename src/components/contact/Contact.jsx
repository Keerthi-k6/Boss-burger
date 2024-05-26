import React from 'react'
import styles from './contact.module.css'
const Contact = () => {
  return (
    <section className={styles['c-wrapper']} id='contact'> {/* Use styles object */}
      <div className={`${styles['c-container']} flexCenter paddings `}>
        <h1>Contact Us! </h1>
        <div className={`${styles['c-desc']} paddings`}>
          You are welcome to contact us at any time. Whether you have a suggestion to make or if you have a problem you need to solve or just want to leave a comment, we would love to hear from you!
        </div>
        <div className={styles['c-cta']}>
          <button className={`${styles['btn-cta']} btn-cta`}>
            <a href='mailto:bossburger.b6@gmail.com' target='_blank'>Mail us at <br/> bossburger.b6@gmail.com</a>
          </button>
          <button className={`${styles['btn-cta']} btn-cta`}>
            <a href='tel:123456789' target='_blank'>Call Us! <br/> +123456789</a>
          </button>
        </div>
      <p>© 2024. All rights reserved - Keerthi sree </p>
      </div>
    </section>
  );
}

export default Contact;