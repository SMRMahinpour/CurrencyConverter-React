import { useState } from 'react'
import CurrencyConverter from './components/CurrencyConverter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyConverter />
    </>
  )
}

export default App
