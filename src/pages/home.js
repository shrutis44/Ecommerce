import React from 'react'
import Newsletter from '../components/Newsletter.js';
import Maintext from '../components/maintext.js';
import Footer from '../components/footer.js';
import { DiVim } from 'react-icons/di';
import Slideshow from '../components/slideshow.js';
import About from '../components/about.js';
import Stylish from '../components/stylish.js'

const Home = () => {
  return (
    <div>
    <Maintext/>
    <Slideshow/>
    <About/>
    <Stylish/>
    <Newsletter/>
    
    <Footer/>

    </div>
  )
}

export default Home;