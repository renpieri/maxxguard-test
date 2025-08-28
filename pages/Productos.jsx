import '../src/css/Productos.css'

    
    const ListaShow = () => {
      return (
        <section className='section-products' id='productosId'>
        <h2 className='section-title'>Productos</h2>
            <div className=''>
            <article className=''>
              <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                    <img
                      src="/img/product-1.png"
                      alt="Product"
                      className="h-80 w-72 object-cover rounded-t-xl"
                    />
                    <div className="px-4 py-3 w-72">
                      {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                      <p className="text-lg font-bold truncate block capitalize">
                        Product Name
                      </p>
                    </div>
                  </a>
                  
                </div>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                    <img
                      src="/img/product-1.png"
                      alt="Product"
                      className="h-80 w-72 object-cover rounded-t-xl"
                    />
                    <div className="px-4 py-3 w-72">
                      {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                      <p className="text-lg font-bold truncate block capitalize">
                        Product Name
                      </p>
                    </div>
                  </a>
                </div>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                    <img
                      src="/img/product-1.png"
                      alt="Product"
                      className="h-80 w-72 object-cover rounded-t-xl"
                    />
                    <div className="px-4 py-3 w-72">
                      {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                      <p className="text-lg font-bold truncate block capitalize">
                        Product Name
                      </p>
                    </div>
                  </a>
                </div>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                    <img
                      src="/img/product-1.png"
                      alt="Product"
                      className="h-80 w-72 object-cover rounded-t-xl"
                    />
                    <div className="px-4 py-3 w-72">
                      {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                      <p className="text-lg font-bold truncate block capitalize">
                        Product Name
                      </p>
                    </div>
                  </a>
                </div>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                    <img
                      src="/img/product-1.png"
                      alt="Product"
                      className="h-80 w-72 object-cover rounded-t-xl"
                    />
                    <div className="px-4 py-3 w-72">
                      {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                      <p className="text-lg font-bold truncate block capitalize">
                        Product Name
                      </p>
                    </div>
                  </a>
                </div>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                    <img
                      src="/img/product-1.png"
                      alt="Product"
                      className="h-80 w-72 object-cover rounded-t-xl"
                    />
                    <div className="px-4 py-3 w-72">
                      {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                      <p className="text-lg font-bold truncate block capitalize">
                        Product Name
                      </p>
                    </div>
                  </a>
                </div>
              </section>
              



              
            {/* 
              <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                  <div className="card-producto rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl duration-500">
                    <a href="#"></a>
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="/img/armero-square.png"
                          alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      </a>
                    </div>
                    <div className="px-6 py-2">
                      <a
                        href="#"
                        className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        Best View in Newyork City
                      </a>
                     
                    </div>
                  </div>
                  <div className="card-producto rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl duration-500">
                    <a href="#"></a>
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="/img/armero-square.png"
                          alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      </a>
                    </div>
                    <div className="px-6 py-2">
                      <a
                        href="#"
                        className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        Best View in Newyork City
                      </a>
                     
                    </div>
                  </div>
                  <div className="card-producto rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl duration-500">
                    <a href="#"></a>
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="/img/armero-square.png"
                          alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      </a>
                    </div>
                    <div className="px-6 py-2">
                      <a
                        href="#"
                        className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        Best View in Newyork City
                      </a>
                      
                    </div>
                  </div>
                  <div className="card-producto rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl duration-500">
                    <a href="#"></a>
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="/img/armero-square.png"
                          alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      </a>
                    </div>
                    <div className="px-6 py-2">
                      <a
                        href="#"
                        className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        Best View in Newyork City
                      </a>
                      
                    </div>
                  </div>
                  <div className="card-producto rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl duration-500">
                    <a href="#"></a>
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="/img/armero-square.png"
                          alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      </a>
                    </div>
                    <div className="px-6 py-2">
                      <a
                        href="#"
                        className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        Best View in Newyork City
                      </a>
                      
                    </div>
                  </div>
                  <div className="card-producto rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl duration-500">
                    <a href="#"></a>
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="/img/armero-square.png"
                          alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      </a>
                    </div>
                    <div className="px-6 py-2">
                      <a
                        href="#"
                        className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                      >
                        Best Salad Images ever
                      </a>
                     
                    </div>
                  </div>
                </div>
              </div> 
            */}





            {/* 
              <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

                  <div className="card-producto rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl duration-500">
                    <article className="card-producto-article relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto">
                    <img 
                      src="/img/armero-square.png" 
                      alt="University of Southern California" 
                      className="absolute inset-0 h-full w-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      City of love
                    </div>
                  </article>
                  </div>
                  <div className="card-producto rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl duration-500">
                    <article className="card-producto-article relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto">
                    <img 
                      src="/img/armero-square.png" 
                      alt="University of Southern California" 
                      className="absolute inset-0 h-full w-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      City of love
                    </div>
                  </article>
                  </div>
                  <div className="card-producto rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl duration-500">
                    <article className="card-producto-article relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto">
                    <img 
                      src="/img/armero-square.png" 
                      alt="University of Southern California" 
                      className="absolute inset-0 h-full w-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      City of love
                    </div>
                  </article>
                  </div>
                  <div className="card-producto rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl duration-500">
                    <article className="card-producto-article relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto">
                    <img 
                      src="/img/armero-square.png" 
                      alt="University of Southern California" 
                      className="absolute inset-0 h-full w-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      City of love
                    </div>
                  </article>
                  </div>
                  <div className="card-producto rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl duration-500">
                    <article className="card-producto-article relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto">
                    <img 
                      src="/img/armero-square.png" 
                      alt="University of Southern California" 
                      className="absolute inset-0 h-full w-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      City of love
                    </div>
                  </article>
                  </div>
                  <div className="card-producto rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl duration-500">
                    <article className="card-producto-article relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto">
                    <img 
                      src="/img/armero-square.png" 
                      alt="University of Southern California" 
                      className="absolute inset-0 h-full w-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      City of love
                    </div>
                  </article>
                  </div>

                </div>
              </div> 
            */}




            </article>
            </div>
        </section>
      )
    }
    
    export default ListaShow
