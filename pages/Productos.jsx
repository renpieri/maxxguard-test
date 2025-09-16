import '../src/css/Productos.css'
import { Link } from 'react-router-dom'
import productos from '../utils/Productos.json'
import { LiaShippingFastSolid } from "react-icons/lia";


const Productos = () => {
  return (
    <section className='section-products' id='productosId'>
      <h2 className='section-title'>Productos</h2>
      <div className=''>
        <article className=''>
          <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-20 mt-10 mb-5 section-card-productos">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="w-72 bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl card-armero"
              >
                 {/* <div className="envio-pdp-contenedor-home">
                              <div className="envio-pdp-cucarda">
                                <LiaShippingFastSolid className="envio-icon"/>
                                <p>ENVÍO A TODO EL PAÍS</p>
                              </div>
                            </div> */}
                <Link to={`/producto/${producto.id}`} className='card-armero-a'>
                  <img
                    src={`img/${producto.img[0]}`}
                    alt={producto.name}
                    className="h-80 w-72 object-cover rounded-t-xl"
                  />
                  <div className="px-4 py-3 w-72 text-card-producto">
                    <p className="text-lg font-bold truncate block capitalize product-name">
                      {producto.name}
                      <span className='span-precio'> ${producto.precio} </span>
                    </p>
                   
                  </div>
                </Link>
              </div>
            ))}
          </section>
        </article>
      </div>
      
    </section>
  )
}

export default Productos
