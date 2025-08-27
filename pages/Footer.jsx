import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import '../src/css/Footer.css'


function Footer(){

    return(
            <footer className="footer shadow-sm dark:bg-gray-900" id='contactoId'>
  <div className="footer-div w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="flex-logo-footer-navbar sm:flex sm:items-center sm:justify-between">
      <a href="/c" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        <img className='logo-footer' src="img/LOGO.png" alt='Logo maxxguard'/>
      </a>

      <div className='footer-redes-navbar'>
        <div className='footer-img-redes'>
      <ul className="ul-redes-footer flex flex-wrap items-center text-sm font-medium">
        <li>
          <a href="https://wa.me/541124903366" target="_blank" rel="noopener noreferrer">
            <RiWhatsappFill className='footer-wpp-img'/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/maxxguard.arg/" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill className='footer-inst-img'/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/p/Maxxguard-100039732237295/" target="_blank" rel="noopener noreferrer">
            <FaSquareFacebook className='footer-face-img'/>
          </a>
        </li>
        <li>
          <a href="mailto:armerosmaxxguard@gmail.com">
            <MdEmail className='footer-mailto-img'/>
          </a>
        </li>
      </ul>
      </div>
      <ul className="navbar-footer flex flex-wrap items-center mb-6">
        <li>
          <a href="/" className="navbar-footer me-2 md:me-6">
            Inicio
          </a>
        </li>
        <li>
          <a href="#productosId" className="navbar-footer me-2 md:me-6">
            Productos
          </a>
        </li>
        <li>
          <a href="#quienesomosId" className="navbar-footer me-2 md:me-6">
            Quienes somos
          </a>
        </li>
        <li>
          <a href="#contactoId" className="navbar-footer">
            Contacto
          </a>
        </li>
      </ul>
      </div>
    </div>
    <hr className="mt-6 mb-2 border-gray-200 sm:mx-auto lg:my-8" />
    <span className="copy-text block text-sm">
      © 2025{" "}
  
       <span>Maxxguard</span> 
    
      . Todos los derechos reservados.
    </span>
  </div>
</footer>

    )
}

export default Footer