import { useState } from 'react'
import styles from './App.module.css'
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/HeroPage/Hero'
import Menu from './Components/menu/Menu'
import About from './Components/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class={styles.container}>
      <Navbar></Navbar>
      <div className={styles.content}>
        <Hero></Hero>
        <Menu></Menu>
        <About></About>
      </div>
    </div>
  )
}

export default App
