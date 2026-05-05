import React from 'react'
import image from '../pages/image/B2.png'
import {FaUsers} from "react-icons/fa"
import { FaBirthdayCake } from 'react-icons/fa'
import HeroSection from '../../Components/HeroSection'
import MenuSection from '../../Components/MenuSection'
import Feedback from '../../Components/Feedback'

const Home = () => {
  return (
    <main>

      <HeroSection/>
      <MenuSection/>
      <Feedback/>

    </main>
  );
}

export default Home