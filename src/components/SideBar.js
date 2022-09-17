import React from 'react'
import close from '../assets/close.png'
import { useAppContext } from '../context/appContext'

const SideBar = ({addClass}) => {
  
  const  {setSideBar} = useAppContext();

  return (
    <div className={`container ${addClass}`}>
        <div className='close' onClick={setSideBar}>
           <img src={close} alt = "close"/>
        </div>
        <ul className = 'menu'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default SideBar