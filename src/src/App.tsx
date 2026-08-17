/**
 * Componente Principal de la Aplicación
 * Portafolio de Jostin Chalan Mora
 * 
 * Este es el componente raíz que organiza todas las secciones del portafolio
 * y maneja el tema oscuro/claro de la aplicación.
 */

import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';

export default function App() {
  // Estado para controlar el modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  /**
   * Efecto que se ejecuta al cargar la página
   * Verifica si el usuario tiene una preferencia guardada o usa la del sistema
   */
  useEffect(() => {
    // Verificar la preferencia del sistema operativo
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Verificar si hay una preferencia guardada en el navegador
    const savedTheme = localStorage.getItem('theme');
    
    // Si hay tema guardado como oscuro, o no hay guardado pero el sistema prefiere oscuro
    if (savedTheme === 'dark' || (!savedTheme && isDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  /**
   * Función para alternar entre modo claro y oscuro
   * Guarda la preferencia en el localStorage del navegador
   */
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
    if (!darkMode) {
      // Activar modo oscuro
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      // Activar modo claro
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Barra de navegación con botón de modo oscuro */}
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Contenido principal con todas las secciones */}
      <main>
        {/* Sección de Inicio - Presentación y foto */}
        <Hero />
        
        {/* Sección de Proyectos - Muestra los 4 proyectos principales */}
        <Projects />
        
        {/* Sección de Habilidades - Stack tecnológico con logos SVG */}
        <Skills />
        
        {/* Sección de Experiencia - Historial profesional */}
        <Experience />
        
        {/* Sección de Educación - Formación académica */}
        <Education />
        
        {/* Sección de Contacto - Información y chatbot */}
        <Contact />
      </main>
    </div>
  );
}
