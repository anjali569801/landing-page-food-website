import React from 'react'
import { FaStar,FaArrowRight } from "react-icons/fa";

import styles from './Hero.module.css'
import Button from '../button/Button'

function Hero() {
  return (
    <section >
      <div className={styles.intro}>
        <div className={styles.content}>
            <h1 className={styles.heading}>A Chef in Every </h1>
             <h1 className={styles.headingMain}>Tasty Meal Box </h1>
            <h1 className={styles.introText}>Embark on a flavorful journey with us! At [Your Website Name], we serve more than just food – we serve experiences. From vibrant dishes to heartfelt hospitality, every bite tells a story of passion and perfection.</h1>
            
            <h3 className={styles.headingSecondary}>Order food from you favourite restaurants near you.</h3>
            <Button>ORDER NOW</Button>
        </div>
        <img src='src/assets/heroImg.png'></img>
    
      </div>
      <div >
          <h2 className={styles.heading2}>Our Featured Food</h2>
          <div className={styles.foodItem}>
            <div className={styles.foodBox}>
                <img src="src/assets/burger.jpg" alt="Cheeseburger" className={styles.foodImg}/>
                <div className={styles.aboutFood}>
                    <h3 className={styles.heading3}>Classic Cheeseburger</h3>
                    <h3 className={styles.heading3}>Price : <span>100</span></h3>
                    <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  
                </div>
            </div>
            <div className={styles.foodBox}>
                <img src="src/assets/paneerTikka.jpg" alt="paneerTikka" className={styles.foodImg}/>
                <div className={styles.aboutFood}>
                    <h3 className={styles.heading3}>Paneer Tikka Masala</h3>
                    <h3 className={styles.heading3}>Price : <span>250</span></h3>
                    <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  
                </div>

            </div>
            <div className={styles.foodBox}>
                <img src="src/assets/shake.jpg" alt="paneerTikka" className={styles.foodImg}/>
                <div className={styles.aboutFood}>
                    <h3 className={styles.heading3}>Chocolate Milkshake</h3>
                    <h3 className={styles.heading3}>Price : <span>150</span></h3>
                    <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  
                </div>

            </div>
            {/* <button className={styles.nextItem}><FaArrowRight />
            </button> */}
            <FaArrowRight className={styles.nextItem}/>

          </div>
      </div>
    </section>
  )
}

export default Hero