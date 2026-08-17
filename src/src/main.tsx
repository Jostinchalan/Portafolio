/**
 * Punto de entrada principal de la aplicación React
 * 
 * Este archivo es el primero que se ejecuta cuando se carga la aplicación.
 * Monta el componente App en el elemento HTML con id="root"
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../styles/globals.css' // Importar estilos globales y Tailwind CSS

// Obtener el elemento HTML donde se montará la aplicación
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento root en el HTML');
}

// Crear la raíz de React y renderizar la aplicación
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* StrictMode ayuda a detectar problemas potenciales en la aplicación */}
    <App />
  </React.StrictMode>,
)
