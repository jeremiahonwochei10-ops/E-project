import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from "./assets/pages/Home"



const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Header/>
        {/* Place NavBar */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Place Footer Here */}
      </BrowserRouter>

    </div>
  )
}

export default App