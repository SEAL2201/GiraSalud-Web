import React from "react";
import background1 from '../assets/background1.jpg';
import paragraphImage from '../assets/IMG_0134.jpg';
import girasolIcon from '../assets/girasol.png'; // Asegúrate de tener esta imagen en tu carpeta de assets
import './Us.css';
import styles from '../App.module.css';

const professionals = [
  {
    name: "Alexander Azuero Galarza",
    profesion: "Psicólogo Industrial",
    description: "Psicólogo especialista en la gestión del talento humano, con más de 3 años de experiencia, ha formado a 1000 colaboradores en: liderazgo, trabajo en equipo, gestión de emociones, seguridad en el trabajo y riesgos psicosociales. Destaca en dinámicas de equipos, capacitaciones lúdicas, gincanas y team building; imparte talleres para empresas e instituciones.",
    image: require("../assets/ALEX.png"),
    className: "alexander" // Añade una clase específica
  },
  {
    name: "Ambar Vivas Villamarín",
    profesion: "Especialista en Terapia Cognitiva Conductual",
    description: "Psicóloga Clínica con 3 años de experiencia trabajando con terapia cognitivo conductual en casos de ansiedad, depresión, trastornos alimenticios, síndrome post COVID, adicciones, trastornos de conducta en niños y violencia intrafamiliar; ha ayudado a más de 300 personas. Además destaca en dinámicas creativas, intervenciones grupales, primeros auxilios psicológicos y terapia cognitiva conductual.",
    image: require("../assets/AMBAR.png"),
    className: "" // Clase vacía para otras imágenes
  },
];

const Nosotros = () => {
  return (
    <div name="Nosotros">
      <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${background1})` }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-8xl font-extrabold">GiraSalud</h1>
            <p className="mt-4 text-5xl">
              "Todos los aprendizajes más importantes de la vida se hacen jugando"<br></br>
              (Francesco Tonucci)
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-4 flex flex-col sm:flex-row items-center">
            <div className={`sm:w-1/2 text-4xl text-gray-600 ${styles['fontFamily-MyFont1']}`}>
              <ul>
                <li>Somos Girasalud, un equipo de psicólogos que promociona la salud mental por medio de actividades artísticas con material lúdico y terapias psicológicas.</li>
                <br></br>
                <li><img src={girasolIcon} alt="Girasol" className="inline-block w-10 h-10 mx-2"/>En Girasalud, empoderamos a los padres de hijos con dificultades emocionales y de conducta con el objetivo de mejorar su salud mental y calidad de vida.</li><br></br>
                <li><img src={girasolIcon} alt="Girasol" className="inline-block w-10 h-10 mx-2"/>Contribuimos en la prevención y promoción de la salud mental por medio de actividades artísticas con material lúdico; y tratamos el malestar emocional a través de la terapia psicológica.</li><br></br>
                <li><img src={girasolIcon} alt="Girasol" className="inline-block w-10 h-10 mx-2"/>Ser reconocidos como un espacio de salud mental artístico en la ciudad de Latacunga.</li>
              </ul>
            </div>
            <div className="sm:w-1/2 mt-6 sm:mt-0 flex justify-center">
              <img 
                className="w-top h-95 object-cover rounded-lg shadow-md" 
                src={paragraphImage} 
                alt="GIRASALUD"
              />
            </div>
          </div>
          <br></br>
          <br></br>
          <h2 className={`text-4xl font-extrabold text-gray-900 text-center ${styles['fontFamily-MyFont2']}`}>Equipo de GiraSalud</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {professionals.map((professional, index) => (
              <div key={index} className="professional-container bg-white shadow-md p-6 text-center">
                <div className="professional-image-container">
                  <img 
                    className={`professional-image ${professional.className}`} 
                    src={professional.image} 
                    alt={professional.name} 
                  />
                </div>
                <h3 className="mt-6 text-5xl font-bold text-gray-900">{professional.name}</h3>
                <h3 className="mt-6 text-4xl font-bold text-gray-900">{professional.profesion}</h3>
                <p className={`mt-4 text-3xl text-gray-500" ${styles['fontFamily-MyFont1']}`}>{professional.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
