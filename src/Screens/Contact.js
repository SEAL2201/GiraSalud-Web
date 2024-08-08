import React from "react";
import contactImage from "../assets/LogoFormulario.jpg";
import styles from '../App.module.css'; // Asegúrate de importar el archivo CSS en módulos

const Contact = () => {
  return (
    <div name="Contact" className="flex justify-center items-center min-h-screen bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-0">
            <img
              className="object-contain w-full h-full"
              src={contactImage}
              alt="Contáctanos"
            />
          </div>
          <div className="p-8 flex-1">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-6">Contáctanos</h2>
            <form
              className="space-y-4"
              method="POST"
              action="https://getform.io/f/zbzkmrja"
            >
              <div>
                <label htmlFor="Name" className="block text-2xl md:text-5xl font-medium text-gray-700">Nombre</label>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-5xl"
                />
              </div>
              <div>
                <label htmlFor="Email" className="block text-2xl md:text-5xl font-medium text-gray-700">Email</label>
                <input
                  id="Email"
                  name="Email"
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-5xl"
                />
              </div>
              <div>
                <label htmlFor="Telefono" className="block text-2xl md:text-5xl font-medium text-gray-700">Telefono</label>
                <input
                  id="Phone"
                  name="Phone"
                  type="phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-5xl"
                />
              </div>
              <div>
                <label htmlFor="Message" className="block text-2xl md:text-5xl font-medium text-gray-700">Mensaje</label>
                <textarea
                  id="Message"
                  name="Message"
                  rows="3"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-5xl"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`${styles.btnGradient} ${styles.btnGrow} w-full text-5xl md:text-4xl py-2 px-4 border border-transparent rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
