import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import {Hero} from './assets/pages/Browser'
import Header from './Components/Header'



const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Header/>
        {/* Place NavBar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/hero'element={<Hero/>}/>
        </Routes>
        {/* Place Footer Here */}
      </BrowserRouter>

    </div>
  )
}

export default App