import React from 'react'
import { FaSearch } from "react-icons/fa";

import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <a href='#'>
                    Home
                </a>
            </li>
            <li>
                <a href='#menu'>
                    Menu
                </a>
            </li>
            <li>
                <a href='#about'>
                    About
                </a>
            </li>
            <li>
                <a href='#contact'>
                    Contact
                </a>
            </li>
        </ul>
        <button className={styles.btn}><FaSearch/>
        search</button>
    </nav>
  )
}

export default Navbar