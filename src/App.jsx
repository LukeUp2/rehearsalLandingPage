import React from 'react'
import styles from './styles'
import { Navbar , Hero} from './components'
import About from './components/About'

function App() {
  return (
    <div className="bg-[#091153] h-screen">
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-[#091153] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div id='about' className={`bg-[#091153] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </div>
    </div>
  )
}

export default App