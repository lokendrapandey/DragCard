import { useState } from 'react'
import Bacground from './components/Bacground'
import Forground from './components/Forground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
    <Bacground/>
    <Forground/>
    </div>
  )
}

export default App
