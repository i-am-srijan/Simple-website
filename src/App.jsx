import React from 'react'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import Marquee from './components/Marquee'
import Services from './components/Services'
import OurStory from './components/OurStory'
import Realstories from './components/Realstories'
import Touch from './components/Touch'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Showcase id='home'/>
      <Marquee />
      <Services/>
      <OurStory id="about" />
      <Realstories />
      <Touch />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
