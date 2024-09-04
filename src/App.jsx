import React from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Statistics from './Components/Statistics'
import Products from './Components/Products'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className=' bg-slate-800 w-full h-full'>
     <Nav></Nav>
      <Hero></Hero>
      <Statistics></Statistics>
      <Products></Products>
      <Footer></Footer>
    </div>
  )
}

export default App
