import React, { useState } from "react";
import styles from '../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDesktop, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const services = [
  {
    title: "ATENCION PSICOLOGICA",
    description: [
      { text: "Atención individual", link: "/atencion-individual" },
      { text: "Atención para padres", link: "/atencion-para-padres" },
      { text: "Atención niños y adolescentes", link: "/atencion-ninos-adolescentes" },
      { text: "Terapia de pareja", link: "/terapia-de-pareja" },
      { text: "Orientación vocacional", link: "/orientacion-vocacional" }
    ],
    icon: faBrain,
    iconColor: "#827054",
    details: [
      {
        title: "- Atención psicológica individual",
        // image: exampleImage
      },
      {
        title: "- Atención psicológica niños",
        // image: exampleImage3
      },
      {
        title: "- Atención psicológica adolescentes",
        // image: exampleImage2
      }
    ]
  },
  {
    title: "ATENCION ONLINE - PSICOCLICK",
    description: [
      { text: "Atención individual", link: "/atencion-individual-online" },
      { text: "Atención para padres", link: "/atencion-para-padres-online" },
      { text: "Atención niños y adolescentes", link: "/atencion-ninos-adolescentes-online" },
      { text: "Terapia de pareja", link: "/terapia-de-pareja-online" },
      { text: "Atención duelo migratorio", link: "/atencion-duelo-migratorio" }
    ],
    icon: faDesktop,
    iconColor: "#827054",
    details: [
      {
        title: "Sesiones de terapia en línea",
        // image: exampleImage6
      }
    ]
  },
  {
    title: "FORMACION FAMILIAR Y EMPRESARIAL",
    description: [
      { text: "Programas para familias", link: "/programas-familias" },
      { text: "Programas para empresas", link: "/programas-empresas" }
    ],
    icon: faUsers,
    iconColor: "#827054",
    details: [
      {
        title: "- Formación para familias",
        // image: exampleImage5
      },
      {
        title: "- Formación para empresas",
        // image: exampleImage4
      }
    ]
  },
];

const Services = () => {
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

  return (
    <div name="Servicios" className={styles.services}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <br />
        <br />
        <h2 className={`text-5xl font-extrabold text-gray-900 text-center ${styles['fontFamily-MyFont2']}`}>SERVICIOS</h2>
        <br />
        <p className={`text-6xl text-gray-600 text-center ${styles['fontFamily-MyFont3']}`}>
          Somos GIRASALUD, un equipo de psicólogos que contribuye a la prevención y promoción de la salud mental por medio de actividades artísticas con material lúdico y terapias psicológicas. Es por ello que brindamos un espacio de salud mental lúdico y seguro donde puedes ser tú mismo.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Disclosure
              key={index}
              as="div"
              className={`bg-green shadow-md rounded-lg p-6 ${styles.serviceContainer} ${hoveredServiceIndex === index ? 'bg-blue-100' : ''}`}
              onMouseEnter={() => setHoveredServiceIndex(index)}
              onMouseLeave={() => setHoveredServiceIndex(null)}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex flex-col items-center w-full text-center text-3xl font-medium text-gray-900 focus:outline-none ${styles['fontFamily-MyFont2']}`}>
                    <div className={styles.disclosureButtonContent}>
                      <FontAwesomeIcon icon={service.icon} className="text-6xl mb-4" style={{ color: service.iconColor }} />
                      <span className={styles.serviceTitle}>{service.title}</span>
                    </div>
                    <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-4 text-lg text-gray-600">
                    <ul className={`${styles.serviceDescriptionList}`}>
                      {service.description.map((desc, index) => (
                        <li key={index} className={`text-3xl ${styles['fontFamily-MyFont3']}`}>
                          <a href={desc.link} className="text-black-600 hover:underline text-5xl text-center">
                            <span className="text-yellow-500">🌻</span> {/* Literal de girasol */}
                            <span className="ml-2">{desc.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.details.map((detail, index) => (
                        <div key={index} className={styles.serviceContainer}>
                          {detail.image && (
                            <img src={detail.image} alt={detail.title} className={styles.webImage} />
                          )}
                          <p className={`text-3xl font-medium ${styles['fontFamily-MyFont3']} ${styles.serviceDetailTitle}`}></p>
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
