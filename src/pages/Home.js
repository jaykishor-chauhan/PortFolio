import React from 'react'
import Navigation from '../components/Navigation'
import Profile from '../components/Profile'

const Home = () => {
  return (
    <div id='home' className='bg-darkblue'>
        <Navigation/>
        <Profile/>
    </div>
  )
}

export default Home