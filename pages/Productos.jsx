import '../src/css/Productos.css'
import { Link } from 'react-router-dom'
import productos from '../utils/Productos.json'


const Productos = () => {
  return (
    <section className='section-products' id='productosId'>
      <h2 className='section-title'>Productos</h2>
      <div className=''>
        <article className=''>
          <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              >
                <Link to={`/producto/${producto.id}`}>
                  <img
                    src="/img/product-1.png"
                    alt={producto.name}
                    className="h-80 w-72 object-cover rounded-t-xl"
                  />
                  <div className="px-4 py-3 w-72">
                    <p className="text-lg font-bold truncate block capitalize product-name">
                      {producto.name}
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
