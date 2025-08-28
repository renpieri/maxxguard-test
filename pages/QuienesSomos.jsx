import '../src/css/QuienesSomos.css'
import { MdWorkspacePremium } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiWorld } from "react-icons/gi";
function QuienesSomos(){

    return(
        <section className='section-quienesomos relative' id='quienesomosId'>
            <h2 className='section-title'>Seguridad de alto calibre</h2>         
            <div className='contenedor-quienes-somos'>
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1 img-text-div">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex quienes-somos-principal-text-container">
                            <div className="quienes-somos-principal-text w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center dd">MAXXGUARD es una empresa muy joven, innovadora, dinámica y por sobre todas las cosas emprendedora. Nos especializamos en el diseño, producción y comercialización de Armeros de Seguridad, cumpliendo de manera estricta con las normativas vigentes del RENAR.</p>
                        
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Contamos con una capacidad de respuesta inmediata y realizamos envíos a todo el país, garantizando eficiencia, compromiso y confianza en cada entrega.</p>
                            </div>
                        </div>
                        <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover img-quienes-somos" src="img/IMG_2683.jpg" alt="about Us image" />
                    </div>
                </div>

                <div className="py-6 bg-white section-info-cards">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                    <div className="mt-10">
                        <dl className="container-text-item space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative shadow-xl p-4 rounded-xl">
                                <dt className='flex-icon-title'>
                                    <div
                                        className="div-logo-item absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <AiOutlineBarChart className='servicio'/>
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Servicio</p>
                                </dt>
                                <dd className="item-text mt-2 ml-16 text-base text-gray-500"> Tenemos varios modelos fabricados con materiales de primera calidad y distribución en todo el país.

Respaldamos nuestro crecimiento con una sólida inversión en recursos humanos y tecnológicos, orientada a mejorar de manera constante la calidad, la seguridad y la variedad de nuestros productos.
                                </dd>
                            </div>
                            <div className="relative shadow-xl p-4 rounded-xl">
                                <dt className='flex-icon-title'>
                                    <div
                                        className="div-logo-item absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <MdWorkspacePremium className='servicio'/>
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Calidad</p>
                                </dt>
                                <dd className="item-text mt-2 ml-16 text-base text-gray-500"> La calidad es un objetivo esencial en cada uno de nuestros productos.
Prestamos especial atención a cada detalle de terminación, tanto en el interior como en el exterior, garantizando un resultado final que combina seguridad, precisión y excelencia.
                                </dd>
                            </div>
                            <div className="relative shadow-xl p-4 rounded-xl">
                                <dt className='flex-icon-title'>
                                    <div
                                        className="div-logo-item absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <RiCustomerService2Fill className='servicio'/>
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Atención
                                    </p>
                                </dt>
                                <dd className="item-text mt-2 ml-16 text-base text-gray-500"> Ofrecemos una atención personalizada, orientada a potenciar al máximo nuestros diseños y garantizar al cliente la mejor experiencia y servicio en cada etapa.
                                </dd>
                            </div>
                            <div className="relative shadow-xl p-4 rounded-xl">
                                <dt className='flex-icon-title'>
                                    <div
                                        className="div-logo-item absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <GiWorld className='servicio'/>

                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Producción nacional
                                    </p>
                                </dt>
                                <dd className="item-text mt-2 ml-16 text-base text-gray-500"> En MAXXGUARD nos enorgullece fabricar íntegramente en Argentina.
Cada uno de nuestros productos es diseñado y producido en Morón, Provincia de Buenos Aires, con mano de obra calificada y procesos de producción que aseguran máxima confiabilidad y durabilidad.
                                </dd>
                            </div>
                        </dl>
                    </div>

                </div>
                </div>
            </div>
        </section>
    )

} 

export default QuienesSomos