import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LightBtn from './LightBtn.jsx'; 
import DarkBtn from './DarkBtn.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <p className="text-gray-600 mb-4">Hello, I'm Safet, a front-end developer</p>
        <h1 className="text-5xl font-bold min-h-5 mb-6">
        Java and React/Next.js <span className="text-blue-400">developer</span> 
        </h1>
        <div className="flex justify-center gap-5">
          <DarkBtn />
          <LightBtn />
        </div>
      </div>
    </div>
  )
}