# 📘 Guía de Instalación - Portafolio Jostin Chalan Mora

Esta guía te ayudará a configurar y ejecutar el portafolio en tu computadora paso a paso.

## 📋 Requisitos Previos

Antes de empezar, necesitas tener instalado:

### 1. Node.js (versión 18 o superior)
- **Descargar**: https://nodejs.org/
- **Recomendado**: Versión LTS (Long Term Support)
- **Verificar instalación**: Abre la terminal y ejecuta:
  ```bash
  node --version
  npm --version
  ```

### 2. Visual Studio Code
- **Descargar**: https://code.visualstudio.com/
- **Extensiones recomendadas** (instalar desde el marketplace de VS Code):
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter
  - ESLint

### 3. Git (opcional, pero recomendado)
- **Descargar**: https://git-scm.com/
- **Verificar instalación**:
  ```bash
  git --version
  ```

---

## 🚀 Pasos de Instalación

### Paso 1: Crear la estructura del proyecto

1. **Crea una carpeta para tu proyecto**:
   ```bash
   mkdir portafolio-jostin
   cd portafolio-jostin
   ```

2. **Abre Visual Studio Code** en esa carpeta:
   ```bash
   code .
   ```
   O abre VS Code manualmente y selecciona: `Archivo > Abrir Carpeta` y elige la carpeta `portafolio-jostin`

### Paso 2: Inicializar el proyecto

1. **Abre la terminal integrada en VS Code**:
   - Presiona: `Ctrl + Ñ` (Windows/Linux) o `Cmd + Ñ` (Mac)
   - O ve a: `Terminal > Nueva Terminal`

2. **Crea el proyecto con Vite**:
   ```bash
   npm create vite@latest . -- --template react-ts
   ```
   - Cuando te pregunte si deseas continuar, escribe `y` y presiona Enter
   - Si te pregunta sobre sobrescribir archivos, escribe `y`

3. **Instala las dependencias base**:
   ```bash
   npm install
   ```

### Paso 3: Instalar las librerías necesarias

Ejecuta los siguientes comandos en la terminal:

```bash
# Instalar Tailwind CSS y dependencias
npm install -D tailwindcss@next @tailwindcss/vite@next postcss autoprefixer

# Instalar iconos de Lucide
npm install lucide-react

# Instalar utilidades
npm install class-variance-authority clsx tailwind-merge

# Instalar React Router (para navegación)
npm install react-router-dom

# Instalar sonner (para notificaciones toast)
npm install sonner@2.0.3
```

### Paso 4: Crear la estructura de carpetas

Dentro de la carpeta `src`, crea la siguiente estructura:

```
src/
├── componentes/           # Componentes principales
│   ├── chatbot/          # Componente del chatbot
│   ├── secciones/        # Secciones del portafolio
│   └── ui/               # Componentes de interfaz reutilizables
├── estilos/              # Archivos de estilos
├── recursos/             # Imágenes y archivos multimedia
└── utilidades/           # Funciones auxiliares
```

**Comandos para crear las carpetas** (ejecutar en la terminal):

```bash
# En Windows (PowerShell)
mkdir src\componentes\chatbot, src\componentes\secciones, src\componentes\ui, src\estilos, src\recursos, src\utilidades

# En Mac/Linux
mkdir -p src/componentes/chatbot src/componentes/secciones src/componentes/ui src/estilos src/recursos src/utilidades
```

### Paso 5: Configurar Tailwind CSS

1. **Crea el archivo `vite.config.ts`** (si no existe, reemplázalo):

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

2. **Crea el archivo `tsconfig.json`** (actualiza si existe):

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Paso 6: Copiar los archivos del proyecto

Ahora copia todos los archivos que te proporcionaré:

1. **Archivos principales**:
   - `App.tsx` → `src/App.tsx`
   - `globals.css` → `src/estilos/globales.css`

2. **Componentes de secciones**:
   - `Hero.tsx` → `src/componentes/secciones/Inicio.tsx`
   - `Projects.tsx` → `src/componentes/secciones/Proyectos.tsx`
   - `Skills.tsx` → `src/componentes/secciones/Habilidades.tsx`
   - `Experience.tsx` → `src/componentes/secciones/Experiencia.tsx`
   - `Education.tsx` → `src/componentes/secciones/Educacion.tsx`
   - `Contact.tsx` → `src/componentes/secciones/Contacto.tsx`
   - `Navigation.tsx` → `src/componentes/secciones/Navegacion.tsx`

3. **Componente de chatbot**:
   - `ChatBot.tsx` → `src/componentes/chatbot/ChatBot.tsx`

4. **Componentes UI** (todos los archivos de la carpeta `ui`):
   - Copiar toda la carpeta `ui` → `src/componentes/ui/`

5. **Tu foto de perfil**:
   - Guarda tu foto como `perfil.png` en `src/recursos/perfil.png`

### Paso 7: Actualizar el archivo principal

1. **Actualiza `src/main.tsx`**:

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './estilos/globales.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

2. **Actualiza `index.html`**:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Portafolio de Jostin Chalan Mora - Estudiante de Ingeniería de Software" />
    <title>Jostin Chalan Mora | Portafolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Paso 8: Ejecutar el proyecto

1. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

2. **Abre el navegador**:
   - El proyecto se abrirá automáticamente en: `http://localhost:5173`
   - Si no se abre, copia y pega esa URL en tu navegador

3. **Para detener el servidor**:
   - Presiona `Ctrl + C` en la terminal

---

## 🔧 Comandos Útiles

```bash
# Iniciar el servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar la versión de producción
npm run preview

# Instalar una nueva librería (ejemplo)
npm install nombre-libreria
```

---

## 📁 Estructura Final del Proyecto

```
portafolio-jostin/
├── node_modules/              # Librerías instaladas (no editar)
├── public/                    # Archivos públicos estáticos
├── src/
│   ├── componentes/
│   │   ├── chatbot/
│   │   │   └── ChatBot.tsx
│   │   ├── secciones/
│   │   │   ├── Inicio.tsx
│   │   │   ├── Proyectos.tsx
│   │   │   ├── Habilidades.tsx
│   │   │   ├── Experiencia.tsx
│   │   │   ├── Educacion.tsx
│   │   │   ├── Contacto.tsx
│   │   │   └── Navegacion.tsx
│   │   └── ui/                # Componentes reutilizables
│   ├── estilos/
│   │   └── globales.css
│   ├── recursos/
│   │   └── perfil.png
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── GUIA-INSTALACION.md        # Este archivo
```

---

## ❓ Solución de Problemas Comunes

### Error: "npm no se reconoce como comando"
- **Solución**: Node.js no está instalado o no está en el PATH del sistema
- **Acción**: Reinstala Node.js desde https://nodejs.org/

### Error: "Cannot find module"
- **Solución**: Las dependencias no están instaladas
- **Acción**: Ejecuta `npm install`

### El puerto 5173 ya está en uso
- **Solución**: Otro proceso está usando ese puerto
- **Acción**: 
  - Cierra otros servidores de desarrollo
  - O usa: `npm run dev -- --port 3000` para cambiar el puerto

### Los estilos de Tailwind no se aplican
- **Solución**: La configuración de Tailwind no está correcta
- **Acción**: 
  - Verifica que `globals.css` esté importado en `main.tsx`
  - Reinicia el servidor de desarrollo

### Error con TypeScript
- **Solución**: Configuración de TypeScript incorrecta
- **Acción**: Verifica que `tsconfig.json` esté configurado correctamente

---

## 🎨 Personalización

Para personalizar el portafolio:

1. **Cambiar colores**: Edita `src/estilos/globales.css`
2. **Modificar contenido**: Edita los archivos en `src/componentes/secciones/`
3. **Agregar proyectos**: Edita `src/componentes/secciones/Proyectos.tsx`
4. **Cambiar foto**: Reemplaza `src/recursos/perfil.png`

---

## 📞 Contacto y Soporte

Si tienes problemas:
1. Revisa esta guía paso a paso
2. Verifica que todos los comandos se ejecutaron correctamente
3. Asegúrate de tener las versiones correctas de Node.js instaladas
4. Consulta la documentación oficial:
   - React: https://react.dev/
   - Vite: https://vitejs.dev/
   - Tailwind CSS: https://tailwindcss.com/

---

## ✅ Checklist de Instalación

- [ ] Node.js instalado (v18+)
- [ ] Visual Studio Code instalado
- [ ] Proyecto creado con Vite
- [ ] Todas las dependencias instaladas
- [ ] Estructura de carpetas creada
- [ ] Archivos copiados a sus ubicaciones
- [ ] Servidor de desarrollo ejecutándose
- [ ] Portafolio visible en el navegador

---

¡Listo! Tu portafolio debería estar funcionando perfectamente. 🎉
