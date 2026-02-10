import { useState } from 'react'
import StateDemo from './components/statedemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StateDemo />
    </>
  )
}

export default App
