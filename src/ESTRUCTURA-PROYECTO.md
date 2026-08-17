# 📂 Estructura del Proyecto - Explicada

Este documento explica la estructura de carpetas y archivos del portafolio.

## 🗂️ Vista General

```
portafolio-jostin/
│
├── 📁 node_modules/          # ⚠️ NO TOCAR - Librerías instaladas automáticamente
├── 📁 public/                # Archivos públicos (favicon, imágenes estáticas)
├── 📁 src/                   # ⭐ CÓDIGO FUENTE PRINCIPAL
│   ├── 📁 components/        # Componentes de React
│   ├── 📁 styles/            # Estilos CSS
│   ├── 📄 App.tsx           # Componente principal
│   └── 📄 main.tsx          # Punto de entrada
│
├── 📄 index.html             # HTML principal
├── 📄 package.json           # Configuración y dependencias
├── 📄 vite.config.ts         # Configuración de Vite
├── 📄 tsconfig.json          # Configuración de TypeScript
└── 📄 .gitignore             # Archivos ignorados por Git
```

---

## 📁 Carpetas Principales

### `/src` - Código Fuente
**Aquí está TODO el código de tu portafolio**

```
src/
├── components/              # Todos los componentes de React
├── styles/                  # Archivos de estilos
├── App.tsx                  # Componente raíz que organiza todo
└── main.tsx                 # Primer archivo que se ejecuta
```

### `/src/components` - Componentes de React
**Cada archivo es una parte de tu portafolio**

```
components/
│
├── 🏠 Navigation.tsx        # Barra de navegación superior
│                            # - Logo
│                            # - Menú de secciones
│                            # - Botón de modo oscuro
│
├── 👤 Hero.tsx              # Sección de inicio
│                            # - Tu foto
│                            # - Nombre y presentación
│                            # - Botones de acción
│                            # - Enlaces a redes sociales
│
├── 💼 Projects.tsx          # Sección de proyectos
│                            # - 4 proyectos principales
│                            # - Descripciones y tecnologías
│                            # - Enlaces a GitHub/Demo
│
├── 💻 Skills.tsx            # Sección de habilidades
│                            # - Logos SVG de tecnologías
│                            # - HTML, CSS, JS, React, etc.
│                            # - Organizado por categorías
│
├── 📊 Experience.tsx        # Sección de experiencia
│                            # - Historial profesional
│                            # - Proyectos realizados
│                            # - Logros destacados
│
├── 🎓 Education.tsx         # Sección de educación
│                            # - UNEMI
│                            # - Carrera y período
│                            # - Certificaciones
│
├── 📧 Contact.tsx           # Sección de contacto
│                            # - Email, teléfono, ubicación
│                            # - Redes sociales
│                            # - Botón para abrir chatbot
│
├── 🤖 ChatBot.tsx           # Componente del chatbot
│                            # - Interfaz de chat
│                            # - Respuestas automáticas
│                            # - Redirección a WhatsApp
│
└── 📁 ui/                   # Componentes reutilizables
    ├── button.tsx           # Botones con diferentes estilos
    ├── card.tsx             # Tarjetas/contenedores
    ├── input.tsx            # Campos de texto
    └── ... otros 40+ componentes de UI
```

### `/src/styles` - Estilos

```
styles/
└── globals.css              # 🎨 Estilos globales de la aplicación
                             # - Importa Tailwind CSS
                             # - Define colores personalizados
                             # - Tipografía por defecto
                             # - Tema oscuro
```

---

## 📄 Archivos de Configuración

### En la raíz del proyecto:

#### `package.json`
**¿Qué hace?** Lista todas las librerías que usa el proyecto
```json
{
  "dependencies": {
    "react": "^18.3.1",        // Librería de React
    "lucide-react": "...",     // Iconos
    // ... más librerías
  }
}
```

#### `vite.config.ts`
**¿Qué hace?** Configura Vite (herramienta de desarrollo)
- Define plugins (React, Tailwind)
- Configura alias de importación
- Puerto del servidor

#### `tsconfig.json`
**¿Qué hace?** Configura TypeScript
- Reglas de tipado estricto
- Cómo compilar el código
- Alias de rutas (@/)

#### `index.html`
**¿Qué hace?** HTML principal de la aplicación
- Define el título de la página
- Meta tags para SEO
- Punto de montaje de React (`<div id="root">`)

#### `.gitignore`
**¿Qué hace?** Indica qué archivos NO subir a Git
- `node_modules/` - No se sube (muy pesado)
- `.env` - Variables secretas
- `dist/` - Archivos compilados

---

## 🔍 ¿Dónde Está Cada Cosa?

### ¿Dónde cambio mi información personal?
📂 `src/components/Hero.tsx`

### ¿Dónde agrego/edito proyectos?
📂 `src/components/Projects.tsx`

### ¿Dónde modifico mis habilidades?
📂 `src/components/Skills.tsx`

### ¿Dónde cambio colores y estilos?
📂 `src/styles/globals.css`

### ¿Dónde está el chatbot?
📂 `src/components/ChatBot.tsx`

### ¿Dónde cambio la navegación?
📂 `src/components/Navigation.tsx`

### ¿Dónde está mi foto?
En el código: `src/components/Hero.tsx`
La imagen debe estar en el proyecto (ruta especificada en la importación)

---

## 📦 Archivos Generados Automáticamente

### ⚠️ NO EDITAR MANUALMENTE:

```
node_modules/               # Librerías instaladas (regenerar con npm install)
dist/                       # Archivos compilados para producción (regenerar con npm run build)
.vite/                      # Caché de Vite
```

---

## 🎯 Flujo de Ejecución

Cuando ejecutas `npm run dev`, esto es lo que pasa:

```
1. index.html
   ↓
2. src/main.tsx (importa App y estilos)
   ↓
3. src/App.tsx (organiza todas las secciones)
   ↓
4. src/components/* (cada sección se renderiza)
   ↓
5. Navegador muestra el portafolio completo
```

---

## 📝 Convenciones de Nombres

### Archivos de Componentes:
- Siempre empiezan con **mayúscula**
- Usan **PascalCase**: `Hero.tsx`, `ChatBot.tsx`
- Extensión `.tsx` para componentes React con TypeScript

### Carpetas:
- Usan **minúsculas**
- Nombres descriptivos: `components`, `styles`, `ui`

### Archivos de Configuración:
- Nombres específicos del sistema: `package.json`, `vite.config.ts`

---

## 🚀 Comandos y Sus Efectos

### `npm install`
**Genera:** `node_modules/`
**Acción:** Descarga todas las librerías

### `npm run dev`
**Genera:** Servidor en `http://localhost:5173`
**Acción:** Inicia modo desarrollo con hot-reload

### `npm run build`
**Genera:** Carpeta `dist/`
**Acción:** Compila el proyecto para producción

---

## 💡 Consejos

### ✅ Puedes Editar:
- Todo dentro de `src/`
- Archivos de configuración (con cuidado)
- `index.html` (título, meta tags)

### ⚠️ NO Edites:
- `node_modules/`
- `dist/`
- Archivos ocultos generados (`.vite/`, `.cache/`)

### 📌 Antes de Editar:
1. Asegúrate de que el servidor esté corriendo
2. Guarda los cambios (Ctrl+S)
3. El navegador se actualizará automáticamente

---

## 📚 Recursos Adicionales

- **Documentación React**: https://react.dev
- **Documentación TypeScript**: https://typescriptlang.org
- **Documentación Tailwind**: https://tailwindcss.com
- **Documentación Vite**: https://vitejs.dev

---

**¿Tienes dudas sobre algún archivo específico?**
Revisa los comentarios dentro de cada archivo `.tsx` para entender qué hace cada parte.
