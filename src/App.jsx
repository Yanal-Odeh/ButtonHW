import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
   const incrementCounter=()=>{
    setCount(count+1)
   }

  
  return (
    <>
      <button onClick={incrementCounter}>Yanal Odeh {count} </button>
    </>
  )
}

export default App
