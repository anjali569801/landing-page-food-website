import React from 'react'
import styles from './About.module.css'
import Button from '../button/Button'
function About() {
  return (
    <section id='about' className={styles.container}>
        <h1 className={styles.heading}>About</h1>
        <div className={styles.contentBox}>
        <img src="src/assets/about.jpg" alt="" />
        <div className={styles.content}>
            <p className={styles.contentText}>We Pride Outserves  On Making Real Food The Best Ingredients.
                We Make Everything By Hand With The Best Possible Ingredients.<br/>
                we believe that great food brings people together. With a passion for culinary excellence, we craft dishes that combine fresh ingredients, authentic flavors, and a touch of creativity. Our mission is to create memorable dining experiences that delight your senses and warm your heart</p>
            <Button>Know More</Button>

        </div>
        </div>
    </section>
  )
}

export default About