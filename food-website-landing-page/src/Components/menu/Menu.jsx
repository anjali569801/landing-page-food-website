import React from 'react'
import Button from '../button/Button'
import styles from './Menu.module.css';
function Menu() {
  return (
    <section id="menu" className={styles.container}>
        <h1 className={styles.heading}>Dessert</h1>
        <div className={styles.contentBox}>
            
            <div className={styles.content}>
                <p className={styles.contentText}>Indulge your sweet cravings with our delightful range of desserts! From creamy classics to innovative treats, each bite is crafted to satisfy your taste buds and leave you wanting more. Experience the perfect end to your meal with our irresistible dessert selection!</p>
                <Button>Explore Now</Button>
            </div>
            <div className={styles.foodItems}>
              <img src='src/assets/Dessert.jpg'  className={styles.img}></img>
              <img src='src/assets/Dessert2.jpg'  className={styles.img}></img>
            </div>
        </div>
        <h1  className={styles.heading}>Italian section</h1>
        <div className={styles.contentBox2}>
            
            <div className={styles.content}>
                <p className={styles.contentText}>Discover the rich and authentic flavors of Italy with our Italian menu. From hand-tossed pizzas to creamy pastas and hearty risottos, every dish is a celebration of traditional recipes and fresh ingredients. Experience a taste of Italy in every bite!</p>
                <Button>Explore Now</Button>
            </div>
            <div className={styles.foodItems}>
              <img src='src/assets/italian.jpg'  className={styles.img}></img>
              <img src='src/assets/italian2.jpg'  className={styles.img}></img>

            </div>
              </div>
    </section>
  )
}

export default Menu