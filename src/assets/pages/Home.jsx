import React from 'react'
import image from '../pages/image/B2.png'
import {FaUsers} from "react-icons/fa"
import { FaBirthdayCake } from 'react-icons/fa'
import HeroSection from '../../Components/HeroSection'
import MenuSection from '../../Components/MenuSection'
import AboutUs from '../../Components/AboutUs'
import Offers from '../../Components/Offers'
import WhyChooseUs from '../../Components/WhyChooseUs'
import Testimonials from '../../Components/Testimonials'

const Home = () => {
  return (
    <main>

      <HeroSection/>
      <MenuSection/>
      <AboutUs/>
      <Offers />
      <WhyChooseUs />
      <Testimonials/>
    </main>
  );
}

export default Home