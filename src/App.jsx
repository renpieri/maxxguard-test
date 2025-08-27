import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import Productos from '../pages/Productos'
//import Contacto from '../pages/Contacto'
import QuienesSomos from '../pages/QuienesSomos'
import Footer from '../pages/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';


import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import './App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {

  const [open, setOpen] = useState(false); 
  // const [productsOpen, setProductsOpen] = useState(false);

  return (
    <>
      <BrowserRouter> 
        <header>
          <div className='top-header'>
            <div className='top-header-div'>
              <div className='top-header-mail-tel-inst'>
                <div className='top-header-img-div'>
                  <a className='top-header-img-tel-a' href="https://wa.me/541124903366" target="_blank" rel="noopener noreferrer">
                    <RiWhatsappFill className='wpp-img'/>
                    <p>1124903366</p>
                  </a>
                </div>
                <div className='top-header-img-div'>
                  <a className='top-header-img-tel-a' href="https://www.instagram.com/maxxguard.arg/" target="_blank" rel="noopener noreferrer">
                    <RiInstagramFill className='inst-img'/>
                    <p>@maxxguard</p>
                  </a>
                </div>
                {/* <div className='top-header-img-div'>
                  <a className='top-header-img-tel-a' href="mailto:armerosmaxxguard@gmail.com">
                    <MdEmail className='mailto-img'/>
                  </a>
                </div>
                <div className='top-header-img-div'>
                  <a className='top-header-img-tel-a' href="https://www.facebook.com/p/Maxxguard-100039732237295/" target="_blank" rel="noopener noreferrer">
                    <FaSquareFacebook className='mailto-img'/>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          {/* Menu sin dropdown*/}
          
            <div className='menu-principal'> 
            <div className='menu-principal-div flex items-center justify-between xl:max-w-10xl xl:mx-auto max-w-full lg:p-5 flex-wrap w-full back p-5'> 
              <div className='menu-img-burger'>
                <a href="/"><img className='logo-header' src="img/LOGO.png" alt='Logo maxxguard'/></a> 
                <FiMenu className='lg:hidden block h-8 w-8 cursor-pointer text-white' onClick={() => setOpen(!open)} /> 
              </div>
              <nav className={`nav-principal ${open ? 'block' : 'hidden'} lg:flex lg:justify-between items-center lg:w-auto w-full lg:bg-transparent`}>
                <ul className='menu-ul lg:flex px-3 text-white lg:justify-between mx-10'> 
                  <li className='menu-li mx-3'><a className='menu-a block p-3 lg:p-0' href="/" onClick={() => setOpen(!open)}>Inicio</a></li> 
                  <li className='menu-li mx-3'><a className='menu-a block p-3 lg:p-0' href="#productosId" onClick={() => setOpen(!open)}>Productos</a></li> 
                  <li className='menu-li mx-3'><a className='menu-a block p-3 lg:p-0' href="#quienesomosId" onClick={() => setOpen(!open)}>Quienes somos</a></li> 
                  <li className='menu-li menu-li-last mx-3'><a className='menu-a block p-3 lg:p-0' href="#contactoId" onClick={() => setOpen(!open)}>Contacto</a></li> 
                  <li className='menu-li top-header-img-tel-a mx-3 menu-mobile-burger-li'>
                    <a className='menu-a block lg:p-0' href="#contactoId" onClick={() => setOpen(!open)}>
                      <div className='menu-mobile-burger-li-div'>
                        <RiWhatsappFill className='wpp-img icon-img-burger'/>
                        <p>1124903366</p>
                      </div>
                    </a>
                  </li> 
                  <li className='menu-li top-header-img-tel-a mx-3 menu-mobile-burger-li'>
                    <a className='menu-a block lg:p-0' href="#contactoId" onClick={() => setOpen(!open)}>
                      <div className='menu-mobile-burger-li-div'>
                        <RiInstagramFill className='inst-img icon-img-burger'/>
                        <p>@maxxguard</p>
                      </div>
                    </a>
                  </li> 
                </ul> 
              </nav> 
              
            </div> 
          </div>
          

          {/* Menu con dropdown*/}
          {/*
          <div className='menu-principal'>
            <div className='menu-principal-div flex items-center justify-between xl:max-w-10xl xl:mx-auto max-w-full lg:p-5 flex-wrap w-full back p-5'>
        
                <a href="/"><img className='logo-header' src="img/LOGO.png" alt='Logo maxxguard'/></a>
                <FiMenu className='menu-hamburguesa lg:hidden block h-8 w-8 cursor-pointer text-white' onClick={() => setOpen(!open)} />
       
              <nav className={`nav-principal ${open ? 'block' : 'hidden'} lg:flex lg:justify-between items-center lg:w-auto w-full lg:bg-transparent`}>
                <ul className='menu-ul lg:flex px-3 text-white lg:justify-between mx-10'>
                  <li className='menu-li mx-3'>
                    <a className='menu-a block p-3 lg:p-0' href="/" onClick={() => setOpen(!open)}>Inicio</a>
                  </li>          
                  <li className='menu-li mx-3 relative me-0'>
                    <button
                      className='menu-a-button block p-3 lg:p-0 flex items-center'
                      onClick={() => setProductsOpen(!productsOpen)}
                    >
                      Productos
                      <span className={`ml-1 transition-transform ${productsOpen ? 'rotate-90' : ''}`}>
                        <RiArrowDropDownLine className='dropdown-arrow'/></span>
                    </button>
                    {productsOpen && (
                      <ul className='menu-dropdown absolute left-0 w-40 bg-white text-black rounded shadow-lg z-50'>
                        <li><a className='menu-dropdown-a block px-4 py-2' href="#product1" onClick={() => setProductsOpen(!productsOpen)}>Ver Todos</a></li>
                        <li><a className='menu-dropdown-a block px-4 py-2' href="#product1" onClick={() => setProductsOpen(!productsOpen)}>Producto 1</a></li>
                        <li><a className='menu-dropdown-a block px-4 py-2' href="#product2" onClick={() => setProductsOpen(!productsOpen)}>Producto 2</a></li>
                        <li><a className='menu-dropdown-a block px-4 py-2' href="#product3" onClick={() => setProductsOpen(!productsOpen)}>Producto 3</a></li>
                      </ul>
                    )}
                  </li>

                  <li className='menu-li mx-3'>
                    <a className='menu-a block p-3 lg:p-0' href="#quienesomosId" onClick={() => setOpen(!open)}>Quienes somos</a>
                  </li>
                  <li className='menu-li mx-3'>
                    <a className='menu-a block p-3 lg:p-0' href="#contactoId" onClick={() => setOpen(!open)}>Contacto</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          */}

          <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} 
            spaceBetween={0}
            slidesPerView={1}
            //navigation
            pagination={{ clickable: true }}
            //scrollbar={{ draggable: true }}
            autoplay={{
              delay: 3000,       
              disableOnInteraction: false, 
            }}
            speed={1500} 
            loop={true}
          >

             <SwiperSlide>
                <picture>
                  <source media="(max-width: 639px)" srcSet="img/banner-1-mobile.png" />
                  <source media="(max-width: 1023px) and (min-width: 640px)" srcSet="img/banner-1-tablet.png" />
                  <img className="img-slider" src="img/banner-1-pc.png" alt="Banner" />
                </picture>
              </SwiperSlide>
              <SwiperSlide>
              <picture>
                  <source media="(max-width: 639px)" srcSet="img/banner-2-mobile.png" />
                  <source media="(max-width: 1023px) and (min-width: 640px)" srcSet="img/banner-2-tablet.png" />
                  <img className="img-slider" src="img/banner-2-pc.png" alt="Banner" />
                </picture>
              </SwiperSlide>
           {/*
            <SwiperSlide><img className='img-slider' src="img/banner-2.png" alt="" /></SwiperSlide>
            */}
          </Swiper>

        </header>  
        <main>
          <Productos></Productos>
          <QuienesSomos></QuienesSomos>
          {/*
          <Contacto></Contacto>
          */}
        </main>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
