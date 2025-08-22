import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

//single pages
import Navbar from './components/Navbar'
import HeroSection from './pages/Hero'
import AboutUs from './pages/AboutUs'
import GallerySection from './pages/GallerySection'
import KitchenMenu from './pages/KitchenMenu'
import KitchenGallery from './pages/KitchenGallery'
import CoffeeBar from './pages/CofeeBar'
import CofeeeGallery from './pages/CofeeGallery'
import FindUs from './pages/FindUs'
import Newsletter from './pages/NewsLetter'
import Footer from './pages/Footer'
import BookTable from './pages/BookaTable'

// Router pages
import Gallery from './router/Gallery'
import Menu from './router/Menu'
import Contact from './router/Contact'
import Boooking from './router/Boooking'

const App = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
      {/* Home page */}
      <Route
      path='/'
      element={
        <>
        <HeroSection/>
        <AboutUs/>
        <GallerySection/>
        <KitchenMenu/>
        <KitchenGallery/>
        <CoffeeBar/>
        <CofeeeGallery/>
        <Newsletter/>
        <FindUs/>
        <BookTable/>
        <Footer/>
        </>
      }
      />
      {/* Other pages */}
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Contact' element={<Contact/>}/> 
      <Route path='/Boooking' element={<Boooking/>}/> 
    </Routes>
    </Router>
  )
}

export default App