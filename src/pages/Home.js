import React from 'react'
import Navbar from '../components/Navbar'
import secimg from '../assets/secimg.jpg'
import HomeButton from '../components/home-button'
import SideBar from '../components/SideBar'
import { useAppContext } from '../context/appContext'


const Home = () => {

    const {showSideBar} = useAppContext();
    
    const addClass = showSideBar ? 'active' : "";

  return (
    <section className='home-section'>
        
    <div className={`home ${addClass}`}>
        <Navbar addClass = {addClass}/>
        <div className='main-section'>
            <div className='left-section'>
                 <h1>Manas Kulkarni</h1>
                 <h2><span className='job'></span></h2>
                 
                 <HomeButton/>
                 
                 
            </div>

            <div className='right-section'>
                  <div className='img-container'>
                      <img src={secimg} />
                  </div>
            </div>
        </div>
            
            
        
    </div>
    <SideBar addClass = {addClass}/>

    </section>
  )
}

export default Home