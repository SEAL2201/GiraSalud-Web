import React, { useState } from "react";
import { GiToolbox, GiCrafting, GiBookshelf, GiMusicalNotes } from "react-icons/gi";
import styles from '../App.module.css';

const resources = [
  {
    id: 1,
    title: "Kits de Habilidades para la Vida",
    icon: <GiToolbox />,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Manualidades Emocionales",
    icon: <GiCrafting />,
    content: "Praesent varius urna id elit tincidunt interdum.",
  },
  {
    id: 3,
    title: "Cuentos Infantiles",
    icon: <GiBookshelf />,
    content: "Nullam in mi nec lorem tempor eleifend ut nec arcu.",
  },
  {
    id: 4,
    title: "Cancionario",
    icon: <GiMusicalNotes />,
    content: "Vivamus consectetur justo sed erat maximus ultrices.",
  },
];

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  const openDetails = (resource) => {
    setSelectedResource(resource);
  };

  const closeDetails = () => {
    setSelectedResource(null);
  };

  const colors = ["#F0A532", "#F2BB41", "#F0A532", "#F2BB41"];

  return (
    <div name="Semillero" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-5xl font-extrabold text-gray-900 text-center mb-8 ${styles['fontFamily-MyFont2']}`}>
          Semillero
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={resource.id} style={{ backgroundColor: colors[index % colors.length] }} className="shadow-md rounded-lg p-6 flex flex-col items-center text-center">
              <div className="text-6xl text-blue-500 mb-4">
                {resource.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{resource.title}</h3>
              <button onClick={() => openDetails(resource)} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Ver detalles
              </button>
            </div>
          ))}
        </div>
        {selectedResource && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg max-w-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedResource.title}</h2>
              <div className="text-2xl text-blue-500 mb-4">
                {selectedResource.icon}
              </div>
              <p className="text-gray-700">{selectedResource.content}</p>
              <button onClick={closeDetails} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;