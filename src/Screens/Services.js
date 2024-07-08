import React, { useState } from "react";
import styles from '../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDesktop, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import exampleImage from '../assets/pexels-shvets-production-7176319.jpg';
import exampleImage2 from '../assets/photo_5129678144436022606.jpg';
import exampleImage3 from '../assets/example3.jpg';
import exampleImage4 from '../assets/milroses.jpg';
import exampleImage5 from '../assets/example4.jpg';
import exampleImage6 from '../assets/pexels-cliff-booth-4058226.jpg'

const services = [
  {
    title: "ATENCION PSICOLOGICA",
    description: "Atención psicológica individual Atención psicológica niños Atención psicológica adolescentes. Asesoramiento para padres.Terapia de parejas.Terapia de duelo.Orientación vocacional adultos.Orientación vocacional adolescentes.",
    icon: faBrain,
    iconColor: "#827054",
    details: [
      {
        title: "- Atención psicológica individual",
        image: exampleImage
      },
      {
        title: "- Atención psicológica niños",
        image: exampleImage3
      },
      {
        title: "- Atención psicológica adolescentes",
        image: exampleImage2
      }
    ]
  },
  {
    title: "ATENCION ONLINE - PSICOCLICK",
    description: "Sesiones de terapia en línea a través de nuestra plataforma PsicoClick.",
    icon: faDesktop,
    iconColor: "#827054",
    details: [
      {
        title: "Sesiones de terapia en línea",
        image: exampleImage6
      }
    ]
  },
  {
    title: "FORMACION FAMILIAR Y EMPRESARIAL",
    description: "Programas de formación y talleres para familias y empresas.",
    icon: faUsers,
    iconColor: "#827054",
    details: [
      {
        title: "- Formación para familias",
        image: exampleImage5
      },
      {
        title: "- Formación para empresas",
        image: exampleImage4
      }
    ]
  },
];

const Services = () => {
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

  return (
    <div name="Servicios" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-5xl font-extrabold text-gray-900 text-center ${styles['fontFamily-MyFont2']}`}>SERVICIOS</h2>
        <br></br>
        <p className={`text-5xl text-gray-600 text-center ${styles['fontFamily-MyFont3']}`}>
          GIRASALUD te invita a que seas responsable de los hábitos que tú elijas ten por
          certeza que te enseñará recomendaciones para alimentarte bien, hacer ejercicio,
          dormir a tiempo, leer, compartir tiempo en familia, organizar tu espacio, cuidar de
          tus seres queridos, ayudar a las personas y sobre todo aquellas acciones que van
          a generarte bienestar en aquellos aspectos relevantes de tú vida.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Disclosure
              key={index}
              as="div"
              className={`bg-green shadow-md rounded-lg p-6 ${hoveredServiceIndex === index ? 'bg-blue-100' : ''}`}
              onMouseEnter={() => setHoveredServiceIndex(index)}
              onMouseLeave={() => setHoveredServiceIndex(null)}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex justify-between w-full text-left text-3xl font-medium text-gray-900 focus:outline-none ${styles['fontFamily-MyFont2']}`}>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={service.icon} className="text-6xl mr-4" style={{ color: service.iconColor }} />
                      {service.title}
                    </div>
                    <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-4 text-lg text-gray-600">
                    <p className={`text-4xl ${styles['fontFamily-MyFont3']}`}>{service.description}</p>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.details.map((detail, index) => (
                        <div key={index} className="flex flex-col items-center">
                          {detail.image && (
                            <img src={detail.image} alt={detail.title} className="w-40 h-40 object-cover rounded-lg shadow-md mb-2" />
                          )}
                          <p className={`text-3xl font-medium ${styles['fontFamily-MyFont3']}`}>{detail.title}</p>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;