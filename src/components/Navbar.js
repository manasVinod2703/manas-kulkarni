import React from 'react'
import Logo from './Logo'
import NavToggle from './nav-toggle'

const Navbar = ({addClass}) => {
  return (
    <div className={`navbar ${addClass}`}>
         <Logo />
        <NavToggle />
         
         
    </div>
  )
}

export default Navbar