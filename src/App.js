import React from 'react'
import Galeria from './Components/Galeria'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import './assets/main.css';

export default function App() {
  return (
    <div>
      <NavBar/>
      <Galeria/>
      <Login/>
      <h1 className="text-base">Hola</h1>
    </div>
  )
}

