import React from 'react'
import LetraLogo from '../assets/LetraLogo.png'

export default function NavBar() {
    return (
        <div className="h-14 border-b border-gray-300 sticky top-0 w-full z-30 bg-white">
            <div className="h-14 max-w-screen-lg mx-auto flex px-5">
            <img src={LetraLogo} alt="Logo" className="h-7 self-center"/>
            </div>
        </div>
    )
}
