import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Common/Navbar'
import About from './Components/Main Pages/About'
import Home from './Components/Main Pages/Home'
import Contact from './Components/Main Pages/Contact'
import Product from './Components/Main Pages/Product'
import ScrollToTop from './Components/Common/ScrollToTop'

function App() {

  return (
    <>
    <div className='h-auto'>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Navbar />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
