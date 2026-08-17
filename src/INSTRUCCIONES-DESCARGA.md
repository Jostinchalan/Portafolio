# 📥 Instrucciones para Descargar y Configurar en Visual Studio Code

## 🎯 Objetivo

Estos pasos te ayudarán a descargar todo el proyecto y organizarlo correctamente en Visual Studio Code.

---

## 📋 PASO 1: Descargar Todos los Archivos

### Opción A: Descargar desde Figma Make

1. Haz clic en el botón de **descarga** o **exportar**
2. Guarda todos los archivos en una carpeta temporal en tu computadora
3. Nombra la carpeta: `portafolio-temporal`

### Opción B: Si tienes acceso a los archivos individuales

Descarga o copia todos estos archivos manualmente.

---

## 📂 PASO 2: Crear la Estructura Correcta

### 2.1 Crear la Carpeta Principal

1. Crea una nueva carpeta en tu computadora llamada:
   ```
   portafolio-jostin
   ```

2. Dentro de ella, crea esta estructura:

```
portafolio-jostin/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   └── figma/
│   └── styles/
├── public/
└── (archivos de configuración en la raíz)
```

### 2.2 Comandos para Crear Carpetas

**En Windows (PowerShell):**
```powershell
cd ruta\a\portafolio-jostin
mkdir src
mkdir src\components
mkdir src\components\ui
mkdir src\components\figma
mkdir src\styles
mkdir public
```

**En Mac/Linux (Terminal):**
```bash
cd ruta/a/portafolio-jostin
mkdir -p src/components/ui src/components/figma src/styles public
```

---

## 🗂️ PASO 3: Organizar los Archivos Descargados

Ahora mueve cada archivo a su ubicación correcta:

### ✅ ARCHIVOS EN LA RAÍZ DEL PROYECTO

Coloca estos archivos directamente en `portafolio-jostin/`:

```
portafolio-jostin/
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
├── LEEME-PRIMERO.md
├── GUIA-RAPIDA.md
├── GUIA-INSTALACION.md
├── PASOS-COMPLETOS.md
├── ESTRUCTURA-PROYECTO.md
└── INSTRUCCIONES-DESCARGA.md (este archivo)
```

### ✅ ARCHIVOS EN src/

Mueve estos archivos a `portafolio-jostin/src/`:

```
src/
├── App.tsx
└── main.tsx
```

### ✅ ARCHIVOS EN src/components/

Mueve estos archivos a `portafolio-jostin/src/components/`:

```
src/components/
├── Navigation.tsx
├── Hero.tsx
├── Projects.tsx
├── Skills.tsx
├── Experience.tsx
├── Education.tsx
├── Contact.tsx
└── ChatBot.tsx
```

### ✅ ARCHIVOS EN src/components/ui/

Mueve TODOS los archivos de la carpeta `ui/` a `portafolio-jostin/src/components/ui/`:

```
src/components/ui/
├── accordion.tsx
├── alert-dialog.tsx
├── alert.tsx
├── aspect-ratio.tsx
├── avatar.tsx
├── badge.tsx
├── breadcrumb.tsx
├── button.tsx
├── calendar.tsx
├── card.tsx
├── carousel.tsx
├── chart.tsx
├── checkbox.tsx
├── collapsible.tsx
├── command.tsx
├── context-menu.tsx
├── dialog.tsx
├── drawer.tsx
├── dropdown-menu.tsx
├── form.tsx
├── hover-card.tsx
├── input-otp.tsx
├── input.tsx
├── label.tsx
├── menubar.tsx
├── navigation-menu.tsx
├── pagination.tsx
├── popover.tsx
├── progress.tsx
├── radio-group.tsx
├── resizable.tsx
├── scroll-area.tsx
├── select.tsx
├── separator.tsx
├── sheet.tsx
├── sidebar.tsx
├── skeleton.tsx
├── slider.tsx
├── sonner.tsx
├── switch.tsx
├── table.tsx
├── tabs.tsx
├── textarea.tsx
├── toggle-group.tsx
├── toggle.tsx
├── tooltip.tsx
├── use-mobile.ts
└── utils.ts
```

### ✅ ARCHIVOS EN src/components/figma/

Mueve este archivo a `portafolio-jostin/src/components/figma/`:

```
src/components/figma/
└── ImageWithFallback.tsx
```

### ✅ ARCHIVOS EN src/styles/

Mueve este archivo a `portafolio-jostin/src/styles/`:

```
src/styles/
└── globals.css
```

---

## 🎨 PASO 4: Agregar tu Foto de Perfil

1. Guarda tu foto de perfil en la carpeta `public/`
2. Nómbrala: `perfil.jpg` o `perfil.png`
3. Ruta final: `portafolio-jostin/public/perfil.jpg`

---

## 📊 PASO 5: Verificar la Estructura Final

Tu proyecto debe verse exactamente así:

```
portafolio-jostin/
│
├── 📁 public/
│   └── perfil.jpg                      # Tu foto
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 figma/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── 📁 ui/
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── ... (40+ archivos)
│   │   │   └── utils.ts
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── ChatBot.tsx
│   ├── 📁 styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
│
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
├── LEEME-PRIMERO.md
├── GUIA-RAPIDA.md
├── GUIA-INSTALACION.md
├── PASOS-COMPLETOS.md
├── ESTRUCTURA-PROYECTO.md
└── INSTRUCCIONES-DESCARGA.md
```

---

## 💻 PASO 6: Abrir en Visual Studio Code

### 6.1 Abrir el Proyecto

1. Abre **Visual Studio Code**
2. Ve a: **Archivo → Abrir Carpeta** (o File → Open Folder)
3. Selecciona la carpeta `portafolio-jostin`
4. Haz clic en **Seleccionar carpeta**
5. Si pregunta "¿Confías en los autores?", haz clic en **Sí, confío**

### 6.2 Verificar que Todo Esté Bien

En VS Code, verás la estructura de carpetas en el panel izquierdo. Debe verse igual a la estructura mostrada arriba.

---

## 🔧 PASO 7: Instalar Dependencias

### 7.1 Abrir la Terminal

En Visual Studio Code:
- Presiona: `Ctrl + Ñ` (Windows) o `Cmd + Ñ` (Mac)
- O ve a: **Terminal → Nueva Terminal**

### 7.2 Instalar Node Modules

Copia y pega este comando en la terminal:

```bash
npm install
```

**Presiona Enter** y espera 2-3 minutos mientras se descargan todas las librerías.

Verás una carpeta nueva llamada `node_modules/` - ¡Esto es normal!

---

## 🚀 PASO 8: Ejecutar el Proyecto

En la terminal de VS Code, escribe:

```bash
npm run dev
```

**Presiona Enter**

Deberías ver algo como:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 🎉 ¡Listo!

Tu navegador se abrirá automáticamente con tu portafolio en:
**http://localhost:5173**

---

## ✏️ PASO 9: Personalizar tu Información

Ahora que todo funciona, actualiza tu información:

### Tu Foto
1. Abre `src/components/Hero.tsx`
2. Busca la línea con la importación de la imagen
3. Actualiza la ruta a `/perfil.jpg` o donde guardaste tu foto

### Tu Información Personal
Edita estos archivos:
- `src/components/Hero.tsx` - Nombre, descripción, redes sociales
- `src/components/Projects.tsx` - Tus proyectos
- `src/components/Skills.tsx` - Tus habilidades
- `src/components/Experience.tsx` - Tu experiencia
- `src/components/Education.tsx` - Tu educación
- `src/components/Contact.tsx` - Tu contacto

### El Chatbot
- `src/components/ChatBot.tsx` - Ya tiene tu número configurado: +593980601334

---

## 🔄 Comandos Útiles

```bash
# Iniciar el servidor de desarrollo
npm run dev

# Detener el servidor
Ctrl + C (en la terminal)

# Compilar para producción
npm run build

# Previsualizar la versión de producción
npm run preview

# Reinstalar dependencias (si hay problemas)
rm -rf node_modules package-lock.json
npm install
```

---

## ❓ Problemas Comunes

### "npm no se reconoce como comando"
**Solución:**
1. Instala Node.js desde: https://nodejs.org/
2. Reinicia tu computadora
3. Vuelve a abrir VS Code

### "Cannot find module '@/...'"
**Solución:**
- Los archivos no están en las carpetas correctas
- Revisa que `src/components/` contenga todos los componentes
- Ejecuta: `npm install`

### Página en blanco
**Solución:**
1. Presiona `F12` en el navegador
2. Ve a la pestaña "Console"
3. Lee el error - te dirá qué archivo falta o tiene problemas

### Los estilos no se ven
**Solución:**
1. Verifica que `src/styles/globals.css` exista
2. Verifica que en `src/main.tsx` diga:
   ```typescript
   import './styles/globals.css'
   ```
3. Reinicia el servidor (Ctrl+C y luego `npm run dev`)

### Error: "Module not found"
**Solución:**
- Verifica que todos los archivos estén en las carpetas correctas
- Ejecuta: `npm install`
- Revisa que los nombres de archivos coincidan exactamente (mayúsculas/minúsculas)

---

## 📦 Archivos Opcionales

Estos archivos son documentación y puedes eliminarlos si quieres:
- `Attributions.md`
- `guidelines/` (carpeta completa)

**NO elimines:**
- Ningún archivo `.tsx`
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `globals.css`

---

## 🎯 Checklist Final

Antes de empezar a programar, verifica:

- [ ] Carpeta `portafolio-jostin` creada
- [ ] Estructura de carpetas correcta (`src/`, `src/components/`, etc.)
- [ ] Todos los archivos en sus ubicaciones correctas
- [ ] Proyecto abierto en Visual Studio Code
- [ ] `npm install` ejecutado sin errores
- [ ] `npm run dev` ejecutándose correctamente
- [ ] Portafolio visible en http://localhost:5173
- [ ] Tu foto agregada en `public/`
- [ ] Información personal actualizada
- [ ] Chatbot probado y funcionando

---

## 📞 Siguiente Paso

Una vez que todo funcione correctamente:

1. ✅ Revisa que todo se vea bien en el navegador
2. ✅ Prueba el modo oscuro (botón en la navegación)
3. ✅ Prueba el chatbot (botón en la sección de contacto)
4. ✅ Verifica en modo móvil (F12 → Toggle device toolbar)
5. ✅ Personaliza tu información
6. ✅ ¡Disfruta tu nuevo portafolio!

---

## 🎓 Recursos Adicionales

- **LEEME-PRIMERO.md** - Punto de inicio
- **GUIA-RAPIDA.md** - Instalación rápida
- **PASOS-COMPLETOS.md** - Guía detallada
- **ESTRUCTURA-PROYECTO.md** - Entender el código
- **README.md** - Documentación completa

---

**¡Mucha suerte! 🚀**

Si algo no funciona, revisa la sección de "Problemas Comunes" o consulta las otras guías.

---

**Nota importante:** 
Este proyecto usa Vite + React + TypeScript + Tailwind CSS v4.0. Asegúrate de tener Node.js versión 18 o superior instalado.
