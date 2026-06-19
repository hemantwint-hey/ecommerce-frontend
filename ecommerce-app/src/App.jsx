import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  /** okay so this is variable  we can use it any where in the code */
 const element = <h1> Hello,world</h1>

  return (
    <div>
     {element}
    </div>
  )
}

export default App
