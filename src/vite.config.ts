import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Configuración de Vite para el proyecto
// https://vitejs.dev/config/
export default defineConfig({
  // Plugins necesarios para React y Tailwind CSS
  plugins: [
    react(), // Soporte para React
    tailwindcss() // Soporte para Tailwind CSS v4.0
  ],
  
  // Configuración de alias para imports más limpios
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Permite usar @ para referenciar src/
    },
  },
  
  // Configuración del servidor de desarrollo
  server: {
    port: 5173, // Puerto donde se ejecutará el servidor
    open: true, // Abre el navegador automáticamente
  },
})
