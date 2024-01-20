import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Content from './Content'

function Main() {
  return (
    <>
    <div className='main-page'>
    <Navbar/>
    <hr className='navbar-breaker'></hr>
    <Content/>
    <Footer/>
    </div>
    </>
  )
}

export default Main
