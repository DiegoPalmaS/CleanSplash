import React from 'react';
import { CONTACT_INFO } from '../constants';
import PiscinaImg from "../assets/img/foto_piscina_casa.jpg";

const Hero = () => {
  const whatsappLink = `https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hola, me gustaría solicitar un presupuesto para el mantenimiento de mi piscina.'
  )}`;

  return (
    <section
      id="home"
      className="relative text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${PiscinaImg})`,
      }}
    >
      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-gray-800/70"></div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 text-center py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">
          Tu piscina perfecta, limpia y segura todo el año
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up">
          Confía en los expertos para mantener el agua cristalina y tu familia protegida. Cobertura en toda la Región Metropolitana.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            Solicitar Presupuesto
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;