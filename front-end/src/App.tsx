import { useState } from 'react'
import { Header } from './modules/Header'
import './app_style.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Header></Header>
  )
}

export default App
