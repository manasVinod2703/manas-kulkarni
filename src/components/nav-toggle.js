import React from 'react'
import { useAppContext } from '../context/appContext'

const NavToggle = () => {
  
    const {setSideBar} = useAppContext();


  return (
  
    <div className='outer-circle' onClick={setSideBar}>
        <div className='line active'></div>
        <div className='line'></div>
        <div className='line'></div>
    </div>
  )
}

export default NavToggle