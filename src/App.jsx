import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Board from './components/Board'

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
   <Header />
   <Board />
    </div>
  )
}

export default App
