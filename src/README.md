# 💼 Portafolio Jostin Chalan Mora

Portafolio profesional y moderno desarrollado con React, TypeScript y Tailwind CSS para mostrar proyectos, habilidades y experiencia como estudiante de Ingeniería de Software.

## 🌟 Características

- ✅ **Diseño Responsivo**: Se adapta perfectamente a móviles, tablets y escritorio
- 🌓 **Modo Oscuro**: Alternancia entre tema claro y oscuro con persistencia
- 🤖 **Chatbot Inteligente**: Asistente virtual que responde preguntas y redirige a WhatsApp
- 🎨 **Interfaz Moderna**: Diseño profesional con paleta de colores suaves en tonos slate/gris
- ⚡ **Optimizado**: Construido con Vite para máxima velocidad de carga
- 📱 **PWA Ready**: Preparado para convertirse en Progressive Web App

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18**: Librería de JavaScript para construir interfaces de usuario
- **TypeScript**: Superset de JavaScript con tipado estático
- **Tailwind CSS v4.0**: Framework CSS utility-first para estilos modernos
- **Vite**: Build tool ultrarrápido para desarrollo

### Librerías
- **Lucide React**: Iconos modernos y personalizables
- **Class Variance Authority**: Gestión de variantes de componentes
- **clsx & tailwind-merge**: Utilidades para manejar clases de CSS

## 📋 Requisitos Previos

Antes de instalar el proyecto, asegúrate de tener:

- **Node.js**: versión 18 o superior ([Descargar](https://nodejs.org/))
- **npm** o **yarn**: Gestor de paquetes (viene incluido con Node.js)
- **Visual Studio Code**: Editor de código recomendado ([Descargar](https://code.visualstudio.com/))

## 🛠️ Instalación

Sigue la guía completa de instalación en el archivo **[GUIA-INSTALACION.md](./GUIA-INSTALACION.md)** que incluye:

1. Instalación de requisitos previos
2. Configuración del proyecto paso a paso
3. Instalación de dependencias
4. Estructura de carpetas
5. Comandos de ejecución
6. Solución de problemas comunes

### Instalación Rápida

```bash
# 1. Clonar o descargar el proyecto
cd portafolio-jostin

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# El proyecto se abrirá en http://localhost:5173
```

## 📁 Estructura del Proyecto

```
portafolio-jostin/
├── src/
│   ├── components/           # Componentes de React
│   │   ├── ChatBot.tsx      # Componente del chatbot
│   │   ├── Navigation.tsx   # Barra de navegación
│   │   ├── Hero.tsx         # Sección de inicio
│   │   ├── Projects.tsx     # Sección de proyectos
│   │   ├── Skills.tsx       # Sección de habilidades
│   │   ├── Experience.tsx   # Sección de experiencia
│   │   ├── Education.tsx    # Sección de educación
│   │   ├── Contact.tsx      # Sección de contacto
│   │   └── ui/              # Componentes UI reutilizables
│   ├── styles/
│   │   └── globals.css      # Estilos globales y Tailwind
│   ├── App.tsx              # Componente principal
│   └── main.tsx             # Punto de entrada
├── public/                   # Archivos públicos estáticos
├── index.html               # HTML principal
├── package.json             # Dependencias del proyecto
├── vite.config.ts           # Configuración de Vite
├── tsconfig.json            # Configuración de TypeScript
├── README.md                # Este archivo
└── GUIA-INSTALACION.md      # Guía detallada de instalación
```

## 🎨 Secciones del Portafolio

### 1. **Inicio (Hero)**
- Presentación personal con foto
- Frase descriptiva
- Enlaces a redes sociales
- Botones de acción (Ver Proyectos, Descargar CV)

### 2. **Proyectos**
Muestra 4 proyectos principales:
- Espejo Infinito Inclusivo
- Semáforo Inclusivo con ESP32-CAM
- Aplicativo Web para Alquiler de Bicicletas
- Modelos Matemáticos y Simulación

### 3. **Habilidades**
Stack tecnológico con logos SVG:
- Frontend: HTML5, CSS3, JavaScript, React, TypeScript, Tailwind CSS
- Backend: Python, Django
- Otros: C++, IoT (ESP32)

### 4. **Experiencia**
Historial de experiencia profesional y proyectos

### 5. **Educación**
- Universidad Estatal de Milagro (UNEMI)
- Ingeniería de Software

### 6. **Contacto**
- Información de contacto
- Enlaces a redes sociales
- Chatbot inteligente integrado con WhatsApp

## 🤖 Chatbot

El chatbot incluye:
- Respuestas automáticas a preguntas frecuentes
- Información sobre servicios y proyectos
- Opciones rápidas de navegación
- Redirección directa a WhatsApp para agendar reuniones
- Integración con tu número: +593980601334

### Personalizar respuestas del chatbot
Edita el archivo `src/components/ChatBot.tsx` en la función `getBotResponse()` para modificar o agregar nuevas respuestas automáticas.

## 🔧 Comandos Disponibles

```bash
# Desarrollo - Inicia servidor local con hot reload
npm run dev

# Construcción - Genera archivos optimizados para producción
npm run build

# Vista previa - Previsualiza la versión de producción
npm run preview

# Lint - Revisa el código en busca de errores
npm run lint
```

## 🌐 Despliegue

Este proyecto puede desplegarse en múltiples plataformas:

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta 'dist' a Netlify
```

### GitHub Pages
```bash
npm run build
# Sube la carpeta 'dist' a GitHub Pages
```

## 📝 Personalización

### Cambiar información personal
Edita los siguientes archivos:
- `src/components/Hero.tsx` - Foto y presentación
- `src/components/Contact.tsx` - Información de contacto
- `src/components/Projects.tsx` - Tus proyectos
- `src/components/Skills.tsx` - Tus habilidades
- `src/components/Experience.tsx` - Tu experiencia
- `src/components/Education.tsx` - Tu educación

### Cambiar colores
Edita el archivo `src/styles/globals.css` para modificar la paleta de colores.

### Agregar nueva sección
1. Crea un nuevo componente en `src/components/`
2. Impórtalo en `App.tsx`
3. Agrégalo dentro del tag `<main>`
4. Actualiza la navegación en `Navigation.tsx`

## 🐛 Solución de Problemas

Consulta la sección "Solución de Problemas Comunes" en [GUIA-INSTALACION.md](./GUIA-INSTALACION.md) para resolver errores frecuentes.

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados © 2025 Jostin Chalan Mora.

## 📞 Contacto

- **Email**: jostinmora740@gmail.com
- **GitHub**: [github.com/Jostinchalan](https://github.com/Jostinchalan)
- **Instagram**: [@fernan_jostin](https://www.instagram.com/fernan_jostin)
- **WhatsApp**: +593980601334

---

**Desarrollado con ❤️ por Jostin Chalan Mora**

*"Ingeniero de Software en formación, preparado para aplicar mis conocimientos en proyectos reales. Innovar, aprender y crear es mi enfoque."*
