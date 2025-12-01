import { useState} from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>

        <header className="w-full bg-gradient-to-r from-sky-600 to-sky-400 shadow-md fixed top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                  <span className="font-bold text-sky-600">L</span>
                </div>
                <span className="ml-2 font-semibold text-white text-lg">Bingo el llano</span>
              </div>

              {/* Menú desktop */}
              <nav className="hidden md:flex space-x-6">
                <a className="text-white hover:text-sky-200 font-medium cursor-pointer transition-colors">
                  Dashboard
                </a>
                <a className="text-white hover:text-sky-200 font-medium cursor-pointer transition-colors">
                  Usuarios
                </a>
                <a className="text-white hover:text-sky-200 font-medium cursor-pointer transition-colors">
                  Reportes
                </a>
                <a className="text-white hover:text-sky-200 font-medium cursor-pointer transition-colors">
                  Configuración
                </a>
              </nav>

              {/* Botón hamburguesa móvil */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">

                  {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}

                </button>
              </div>
            </div>
          </div>

          {/* Menú desplegable móvil */}
          {isOpen && (
            <div className="md:hidden bg-gradient-to-r from-sky-600 to-sky-400 w-full flex flex-col p-4 space-y-2">
              <a className="py-2 text-white hover:text-sky-200 font-medium border-b border-sky-500 transition-colors">
                Dashboard
              </a>
              <a className="py-2 text-white hover:text-sky-200 font-medium border-b border-sky-500 transition-colors">
                Usuarios
              </a>
              <a className="py-2 text-white hover:text-sky-200 font-medium border-b border-sky-500 transition-colors">
                Reportes
              </a>
              <a className="py-2 text-white hover:text-sky-200 font-medium transition-colors">
                Configuración
              </a>
            </div>
          )}
      </header>
    </>
  )
}
