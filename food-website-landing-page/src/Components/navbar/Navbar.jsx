import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancelPresentation } from "react-icons/md";

import styles from './Navbar.module.css'

function Navbar() {
  
    const [listItems , updateListMenu]=useState(false)

    const onMenuClick=()=>updateListMenu(true)
    const onCancelClick=()=>updateListMenu(false)
   

  return (
    <nav className={styles.nav}>
        <ul className={`${styles.listItems} ${listItems && styles.listItemsOpen}`}>
            <li className={styles.listItem}>
                <a href='#'>
                    Home
                </a>
            </li>
            <li className={styles.listItem}>
                <a href='#menu'>
                    Menu
                </a>
            </li>
            <li className={styles.listItem}>
                <a href='#about' >
                    About
                </a>
            </li>
            <li className={styles.listItem}>
                <a href='#contact'>
                    Contact
                </a>
            </li>
        </ul>
        

        <button className={styles.btn}><FaSearch/>
        search</button>
        {!listItems &&<GiHamburgerMenu onClick={onMenuClick}   className={styles.listMenu}/>}
        {listItems && <MdCancelPresentation onClick={onCancelClick}   className={styles.listMenu} />}

    </nav>
  )
}

export default Navbar