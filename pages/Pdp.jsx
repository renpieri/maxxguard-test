import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productos from "../utils/Productos.json";
import "../src/css/Pdp.css";

const Pdp = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (producto && producto.img && producto.img.length > 0) {
      setMainImage(producto.img[0]);
    }
  }, [producto]);

  useEffect(() => {
    if (!producto) {
      navigate("/", { replace: true });
    }
  }, [producto, navigate]);

  if (!producto) return null;

  return (
    <section className="section-pdp">
      <div className="container mx-auto px-4 section-pdp-div">
        <div className="flex flex-wrap -mx-4 contenedor-img-info-pdp">

          <div className="w-full contenedor-img-pdp">
            <img
              src={`img/${mainImage}`}
              alt={producto.name}
              onClick={() => setIsModalOpen(true)}
              className="w-full h-auto rounded-lg shadow-md mb-4 img-principal-pdp"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {producto.img.map((src, index) => (
                <img
                  key={index}
                  src={`img/${src}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 sm:w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300 img-variante-pdp"
                  onClick={() => setMainImage(src)}
                />
              ))}
            </div>
          </div>

          <div className="w-full contenedor-info-pdp">
            <h2 className="text-3xl font-bold mb-2">{producto.name}</h2>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p className="text-gray-700 mb-6">{producto.descripcion}</p>

            <div>
              <h3 className="text-lg font-semibold mb-2">Medidas:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {Object.entries(producto.medidas).map(([key, value], index) => (
                  <li key={index}>
                    <span className="capitalize">{key}</span>: {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>





      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setIsModalOpen(false)} // cerrar al hacer click en el fondo
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // evita que cierre si clickeas sobre la imagen
          >
            <button
              className="absolute top-2 right-2 px-3 py-1 rounded-lg hover:text-amber-200 text-white"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <img
              src={`img/${mainImage}`}
              alt={producto.name}
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default Pdp;
