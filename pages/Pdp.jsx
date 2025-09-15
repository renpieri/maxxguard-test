/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";

import productos from "../utils/Productos.json";
import "../src/css/Pdp.css";

const Pdp = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (producto && producto.img && producto.img.length > 0) {
      setMainImage(producto.img[0]);
      setCurrentIndex(0);
    }
  }, [producto]);

  useEffect(() => {
    if (!producto) {
      navigate("/", { replace: true });
    }
  }, [producto, navigate]);

  // 🔥 funciones para navegar entre imágenes
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        (prevIndex - 1 + producto.img.length) % producto.img.length;
      setMainImage(producto.img[newIndex]);
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % producto.img.length;
      setMainImage(producto.img[newIndex]);
      return newIndex;
    });
  };

  // 🔥 soporte de teclado en modal
  useEffect(() => {
    if (isModalOpen) {
      const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") setIsModalOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isModalOpen]);

  if (!producto) return null;

  return (
    <section className="section-pdp">
      <div className="div-flecha">
        <button className="mb-4 btn-atras-pdp" onClick={() => navigate(-1)}>
          <IoMdArrowBack className="flecha-atras" />
        </button>
      </div>

      <div className="container mx-auto px-4 section-pdp-div">
        <div className="flex flex-wrap -mx-4 contenedor-img-info-pdp">
          <div className="w-full contenedor-img-pdp">
            <div className="envio-pdp-contenedor e-c-pdp-top">
              <div className="envio-pdp-cucarda">
                <LiaShippingFastSolid className="envio-icon" />
                <p>ENVÍO A TODO EL PAÍS</p>
              </div>
            </div>

            {/* Imagen principal con flechas encima */}
            <div className="relative w-full">
              {/* Flecha izquierda */}
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white text-2xl p-2 rounded-full hover:bg-opacity-70 transition flecha-no-modal"
                onClick={handlePrev}
              >
                ❮
              </button>

              <img
                src={`img/${mainImage}`}
                alt={producto.name}
                onClick={() => setIsModalOpen(true)}
                className="w-full h-auto shadow-md mb-4 img-principal-pdp cursor-pointer"
              />

              {/* Flecha derecha */}
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white text-2xl p-2 rounded-full hover:bg-opacity-70 transition hover:text-amber-200 flecha-no-modal"
                onClick={handleNext}
              >
                ❯
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {producto.img.map((src, index) => (
                <img
                  key={index}
                  src={`img/${src}`}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 sm:w-20 object-cover cursor-pointer transition duration-300 img-variante-pdp
                    ${
                      index === currentIndex
                        ? "grayscale-0 opacity-100"
                        : "grayscale opacity-60 hover:opacity-100"
                    }`}
                  onClick={() => {
                    setMainImage(src);
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Info producto */}
          <div className="w-full contenedor-info-pdp">
            <h2 className="mb-2 porducto-title-pdp">{producto.name}</h2>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <div className="div-descripcion-pdp">
              <h3 className="mb-2 title-descrition">Caracteristicas generales</h3>
              <p className=" mb-6 descrition-text">{producto.descripcion}</p>
            </div>
            <div className="div-medidas-pdp">
              <h3 className="text-lg font-semibold mb-2 text-medidas title-descrition">
                Medidas:
              </h3>
              <ul className="list-disc list-inside list-none">
                {Object.entries(producto.medidas).map(([key, value], index) => (
                  <li key={index} className="mb-2">
                    <span className="capitalize descrition-text">
                      <strong>{key}</strong>
                    </span>
                    : {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="envio-pdp-contenedor e-c-pdp-bot">
              <div className="envio-pdp-cucarda">
                <LiaShippingFastSolid className="envio-icon" />
                <p>ENVÍO A TODO EL PAÍS</p>
              </div>
            </div>

            <div className="div-redes-pdp-top">
              <hr className="mb-2 border-gray-300 sm:mx-auto lg:my-8 m-auto hr-pdp" />
              <div className="footer-div w-full max-w-screen-xl mx-auto">
                <h3 className="footer-h3 mb-4">
                  COMUNICATE CON NOSOTROS PARA PEDIRLO
                </h3>
                <div className="footer-img-redes">
                  <ul className="ul-redes-footer flex flex-wrap items-center text-sm font-medium">
                    <li>
                      <a
                        href="https://wa.me/541124903366"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiWhatsappFill className="pdp-wpp-img" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/maxxguard.arg/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiInstagramFill className="pdp-inst-img" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/p/Maxxguard-100039732237295/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaSquareFacebook className="pdp-face-img" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:armerosmaxxguard@gmail.com">
                        <MdEmail className="pdp-mailto-img" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

        {/* Info detallada */}
        <div className="info-detallada-general">
          <h3 className="title-descrition text-center">Información detallada:</h3>
          <div className="contenedor-specs">
            <div className="div-list-specs">
              {Array.isArray(producto.generales.especificaciones) && (
                <>
                  <h4 className="title-descrition-spec">Especificaciones:</h4>
                  <ul className="list-circle">
                    {producto.generales.especificaciones.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {Array.isArray(producto.generales.puerta) && (
                <>
                  <h4 className="title-descrition-spec">Seguridad de la puerta:</h4>
                  <ul className="list-circle">
                    {producto.generales.puerta.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="div-list-specs">
              {Array.isArray(producto.generales.cuerpo) && (
                <>
                  <h4 className="title-descrition-spec">Seguridad del cuerpo:</h4>
                  <ul className="list-circle">
                    {producto.generales.cuerpo.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {Array.isArray(producto.generales.fuego) &&
                producto.generales.fuego.length > 0 && (
                  <>
                    <h4 className="title-descrition-spec">Resistencia al fuego:</h4>
                    <ul className="list-circle">
                      {producto.generales.fuego.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              {Array.isArray(producto.generales.exterior) && (
                <>
                  <h4 className="title-descrition-spec">Exterior:</h4>
                  <ul className="list-circle">
                    {producto.generales.exterior.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative flex items-center div-img-atras-adelante"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 px-3 py-1 rounded-lg hover:text-amber-200"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            {/* Flecha izquierda */}
            <button
              className="absolute left-2 text-white text-4xl p-2 hover:text-amber-200 btn-atras-flecha-img"
              onClick={handlePrev}
            >
              ❮
            </button>

            <img
              src={`img/${mainImage}`}
              alt={producto.name}
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            />

            {/* Flecha derecha */}
            <button
              className="absolute right-2 text-white text-4xl p-2 hover:text-amber-200 btn-adelante-flecha-img"
              onClick={handleNext}
            >
              ❯
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="div-redes-pdp-bottom">
        <hr className="mb-2 border-gray-300 sm:mx-auto lg:my-8 m-auto hr-pdp" />
        <div className="footer-div w-full max-w-screen-xl mx-auto">
          <h3 className="footer-h3 mb-4">COMUNICATE CON NOSOTROS PARA PEDIRLO</h3>
          <div className="footer-img-redes">
            <ul className="ul-redes-footer flex flex-wrap items-center text-sm font-medium">
              <li>
                <a
                  href="https://wa.me/541124903366"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiWhatsappFill className="pdp-wpp-img" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/maxxguard.arg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiInstagramFill className="pdp-inst-img" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/p/Maxxguard-100039732237295/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareFacebook className="pdp-face-img" />
                </a>
              </li>
              <li>
                <a href="mailto:armerosmaxxguard@gmail.com">
                  <MdEmail className="pdp-mailto-img" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pdp;
