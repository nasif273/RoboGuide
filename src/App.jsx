import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChatBot from 'ChatBot.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatBot />
    </>
  )
}

export default App
