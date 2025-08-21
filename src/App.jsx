import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './pages/Hero'
import AboutUs from './pages/AboutUs'
import GallerySection from './pages/GallerySection'
import KitchenMenu from './pages/KitchenMenu'
import KitchenGallery from './pages/KitchenGallery'
import CoffeeBar from './pages/CofeeBar'
import CofeeeGallery from './pages/CofeeGallery'
import FindUs from './pages/FindUs'

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutUs/>
    <GallerySection/>
    <KitchenMenu/>
    <KitchenGallery/>
    <CoffeeBar/>
    <CofeeeGallery/>
    <FindUs/>
    </>
  )
}

export default App