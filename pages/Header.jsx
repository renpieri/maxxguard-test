import { React, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { Link } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false); 

  return (
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
            </div>
          </div>
        </div>

        <div className='menu-principal'> 
          <div className='menu-principal-div flex items-center justify-between xl:max-w-10xl xl:mx-auto max-w-full lg:p-5 flex-wrap w-full back p-5'> 
            <div className='menu-img-burger px-3'>
              <a href="/#"><img className='logo-header' src="img/LOGO.png" alt='Logo maxxguard'/></a> 
              <FiMenu className='lg:hidden block h-8 w-8 cursor-pointer text-white' onClick={() => setOpen(!open)} /> 
            </div>
            <nav className={`nav-principal ${open ? 'block' : 'hidden'} lg:flex lg:justify-between items-center lg:w-auto w-full lg:bg-transparent`}>
              <ul className='menu-ul lg:flex px-3 text-white lg:justify-between'> 
                <li className='menu-li mx-3'><a className='menu-a block p-3 lg:p-0' href="/#" onClick={() => setOpen(!open)}>Inicio</a></li> 
                <li className='menu-li mx-3'><a className='menu-a block p-3 lg:p-0' href="/#/#productosId" onClick={() => setOpen(!open)}>Productos</a></li>
                <li className='menu-li mx-3'><a className='menu-a block p-3 lg:p-0' href="/#/#quienesomosId" onClick={() => setOpen(!open)}>Quienes somos</a></li> 
                <li className='menu-li menu-li-last mx-3'><a className='menu-a block p-3 lg:p-0' href="/#/#contactoId" onClick={() => setOpen(!open)}>Contacto</a></li> 
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
      </header>  
  )
}

export default Header