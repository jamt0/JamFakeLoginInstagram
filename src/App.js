import React, {useEffect, useState} from 'react'
import Galeria from './Components/Galeria'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import './assets/main.css';

export default function App() {
  const [isModal, setIsModal] = useState(false)

  useEffect(() => {
    setTimeout(() => {

      function disableScroll(){  
        window.scrollTo(0, 0);
      }
      disableScroll()
      
      window.addEventListener('scroll', disableScroll);
      setIsModal(true)
    }, 5000);
  }, [])

  return (
    <div className="relative h-screen">
      <NavBar/>
      <Galeria/>
      {isModal && <Login/>}
    </div>
  )
}

