import { React } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../pages/Header'
import Productos from '../pages/Productos'
import Pdp from '../pages/Pdp'
import QuienesSomos from '../pages/QuienesSomos'
import Contacto from '../pages/Contacto'
import Footer from '../pages/Footer'
import BannerSwiper from '../pages/BannerSwiper'
import './App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {

  return (
    <BrowserRouter> 
        <Header />
      <Routes>
        <Route path="/" element={
          <>
          <BannerSwiper />
            <main>
              <Productos />
              <QuienesSomos />
              <Contacto />
            </main>
          </>
        } />

        <Route path="/producto/:id" element={<Pdp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
