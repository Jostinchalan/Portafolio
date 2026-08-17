# ✅ Pasos Completos para Configurar el Portafolio

## 📌 Resumen: ¿Qué voy a hacer?

Vas a configurar un portafolio web profesional en tu computadora usando Visual Studio Code. El portafolio ya está desarrollado, solo necesitas instalarlo y personalizarlo.

---

## 🎯 PARTE 1: Preparar tu Computadora

### Paso 1.1: Instalar Node.js

**¿Qué es?** Software necesario para ejecutar aplicaciones web modernas.

**¿Cómo instalarlo?**
1. Ve a: https://nodejs.org/
2. Descarga la versión **LTS** (el botón verde grande)
3. Ejecuta el instalador descargado
4. Haz clic en "Siguiente" en todo
5. **Importante:** Marca la opción "Automatically install necessary tools"
6. Reinicia tu computadora después de instalar

**Verificar:**
1. Abre "Símbolo del sistema" (Windows) o "Terminal" (Mac)
2. Escribe: `node --version`
3. Deberías ver algo como: `v20.11.0`
4. Escribe: `npm --version`
5. Deberías ver algo como: `10.2.4`

✅ Si ves los números de versión, ¡Node.js está instalado correctamente!

---

### Paso 1.2: Instalar Visual Studio Code

**¿Qué es?** Editor de código profesional y gratuito.

**¿Cómo instalarlo?**
1. Ve a: https://code.visualstudio.com/
2. Descarga para tu sistema operativo (Windows/Mac)
3. Ejecuta el instalador
4. Acepta las opciones predeterminadas
5. **Importante:** Marca la opción "Agregar a PATH"

**Configurar VS Code:**
1. Abre Visual Studio Code
2. Presiona `Ctrl + Shift + X` (abre extensiones)
3. Instala estas extensiones (búscalas una por una):
   - **ES7+ React/Redux/React-Native snippets**
   - **Tailwind CSS IntelliSense**
   - **Prettier - Code formatter**
   - **Spanish Language Pack** (opcional, para tener VS Code en español)

✅ Visual Studio Code está listo para usar.

---

## 🎯 PARTE 2: Crear el Proyecto

### Paso 2.1: Crear la carpeta del proyecto

**Windows:**
1. Abre el "Explorador de archivos"
2. Ve a tu carpeta de Documentos (o donde prefieras)
3. Clic derecho → Nuevo → Carpeta
4. Nómbrala: `portafolio-jostin`

**Mac:**
1. Abre "Finder"
2. Ve a tu carpeta de Documentos
3. Clic derecho → Nueva carpeta
4. Nómbrala: `portafolio-jostin`

---

### Paso 2.2: Abrir la carpeta en VS Code

1. Abre Visual Studio Code
2. Menú: **Archivo** → **Abrir Carpeta** (o File → Open Folder)
3. Navega y selecciona la carpeta `portafolio-jostin`
4. Haz clic en **Seleccionar carpeta**
5. Si aparece "¿Confías en los autores?", haz clic en **Sí, confío**

✅ Ahora estás dentro de la carpeta del proyecto en VS Code.

---

### Paso 2.3: Abrir la Terminal en VS Code

**Opción 1:**
- Presiona: `Ctrl + Ñ` (Windows) o `Cmd + Ñ` (Mac)

**Opción 2:**
- Menú: **Terminal** → **Nueva Terminal** (o View → Terminal)

✅ Verás una terminal abierta en la parte inferior de VS Code.

---

## 🎯 PARTE 3: Instalar el Proyecto

### Paso 3.1: Crear proyecto base con Vite

**Copia y pega** este comando en la terminal:

```bash
npm create vite@latest . -- --template react-ts
```

**Presiona Enter**

**Te preguntará:**
```
? Current directory is not empty. Remove existing files and continue? › (y/N)
```
**Escribe:** `y` y presiona Enter

**Espera** a que termine (verás muchos mensajes verdes).

✅ Proyecto base creado.

---

### Paso 3.2: Instalar dependencias base

**Copia y pega** en la terminal:

```bash
npm install
```

**Presiona Enter**

**Espera** unos 2-3 minutos (descargará muchas librerías).

✅ Dependencias base instaladas.

---

### Paso 3.3: Instalar Tailwind CSS

**Copia y pega** en la terminal:

```bash
npm install -D tailwindcss@next @tailwindcss/vite@next
```

**Presiona Enter y espera.**

✅ Tailwind CSS instalado.

---

### Paso 3.4: Instalar iconos (Lucide React)

**Copia y pega** en la terminal:

```bash
npm install lucide-react
```

**Presiona Enter y espera.**

✅ Librería de iconos instalada.

---

### Paso 3.5: Instalar utilidades

**Copia y pega** en la terminal:

```bash
npm install class-variance-authority clsx tailwind-merge
```

**Presiona Enter y espera.**

✅ Utilidades instaladas.

---

### Paso 3.6: Instalar Sonner (notificaciones)

**Copia y pega** en la terminal:

```bash
npm install sonner@2.0.3
```

**Presiona Enter y espera.**

✅ Todas las librerías instaladas.

---

## 🎯 PARTE 4: Configurar Archivos

### Paso 4.1: Crear estructura de carpetas

En VS Code, haz clic derecho en la carpeta `src` → **Nueva Carpeta**

Crea estas carpetas dentro de `src`:
- `components`
- `styles`

Dentro de `components`, crea:
- `ui`

**Tu estructura debe verse así:**
```
src/
├── components/
│   └── ui/
└── styles/
```

---

### Paso 4.2: Copiar archivos de configuración

Ahora necesitas copiar los siguientes archivos que te proporcioné:

#### En la **raíz del proyecto** (mismo nivel que `src`):

1. **vite.config.ts** - Configuración de Vite
2. **tsconfig.json** - Configuración de TypeScript
3. **tsconfig.node.json** - Configuración adicional
4. **package.json** - Sobreescribe el existente
5. **index.html** - Sobreescribe el existente
6. **.gitignore** - Control de versiones

#### En la carpeta **src/**:

1. **App.tsx** - Sobreescribe el existente
2. **main.tsx** - Crea este archivo nuevo

#### En la carpeta **src/styles/**:

1. **globals.css** - Estilos globales

#### En la carpeta **src/components/**:

Crea estos archivos (copia el código que te proporcioné):

1. **Navigation.tsx** - Navegación
2. **Hero.tsx** - Sección inicio
3. **Projects.tsx** - Proyectos
4. **Skills.tsx** - Habilidades
5. **Experience.tsx** - Experiencia
6. **Education.tsx** - Educación
7. **Contact.tsx** - Contacto
8. **ChatBot.tsx** - Chatbot

#### En la carpeta **src/components/ui/**:

Copia **todos los archivos** de la carpeta `ui` que te proporcioné (40+ archivos):
- button.tsx
- card.tsx
- input.tsx
- ... y todos los demás

---

### Paso 4.3: Agregar tu foto de perfil

1. Guarda tu foto de perfil en algún lugar del proyecto
2. Abre `src/components/Hero.tsx`
3. Busca la línea que dice: `import profileImage from ...`
4. Actualiza la ruta para que apunte a tu foto

**Ejemplo:**
```typescript
// Si guardaste tu foto en src/assets/perfil.png
import profileImage from '../assets/perfil.png';
```

---

## 🎯 PARTE 5: Ejecutar el Proyecto

### Paso 5.1: Iniciar el servidor

En la terminal de VS Code, escribe:

```bash
npm run dev
```

**Presiona Enter**

Verás algo como:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

✅ ¡El servidor está corriendo!

---

### Paso 5.2: Abrir en el navegador

1. **Opción 1:** El navegador se abrirá automáticamente
2. **Opción 2:** Copia `http://localhost:5173/` y pégalo en tu navegador
3. **Opción 3:** En la terminal, mantén presionado `Ctrl` (o `Cmd` en Mac) y haz clic en el link

✅ ¡Deberías ver tu portafolio funcionando!

---

### Paso 5.3: Ver cambios en tiempo real

Ahora puedes editar cualquier archivo y verás los cambios automáticamente:

1. Abre `src/components/Hero.tsx`
2. Cambia tu nombre
3. Guarda el archivo (`Ctrl + S`)
4. El navegador se actualizará solo

✅ Hot reload funcionando.

---

## 🎯 PARTE 6: Personalizar

### Paso 6.1: Actualizar tu información

**Tu nombre y presentación:**
- Archivo: `src/components/Hero.tsx`
- Busca tu nombre y cámbialo
- Actualiza tu descripción

**Tus proyectos:**
- Archivo: `src/components/Projects.tsx`
- Edita el array `projects`
- Cambia nombres, descripciones, tecnologías

**Tus habilidades:**
- Archivo: `src/components/Skills.tsx`
- Edita el array `skills`

**Tu experiencia:**
- Archivo: `src/components/Experience.tsx`
- Edita el array `experiences`

**Tu educación:**
- Archivo: `src/components/Education.tsx`
- Actualiza la información de UNEMI

**Tu contacto:**
- Archivo: `src/components/Contact.tsx`
- Actualiza email, teléfono, ubicación
- Actualiza links de redes sociales

---

### Paso 6.2: Configurar el chatbot

1. Abre: `src/components/ChatBot.tsx`
2. Tu número de WhatsApp ya está configurado: `+593980601334`
3. Si quieres cambiar las respuestas automáticas:
   - Busca la función `getBotResponse`
   - Edita los textos de respuesta

---

## 🎯 PARTE 7: Detener y Reiniciar

### Para detener el servidor:
1. Ve a la terminal en VS Code
2. Presiona: `Ctrl + C`
3. Confirma con `Y` si pregunta

### Para volver a iniciar:
```bash
npm run dev
```

---

## 🎯 PARTE 8: Compilar para Producción

Cuando quieras subir tu portafolio a internet:

```bash
npm run build
```

Esto creará una carpeta `dist/` con los archivos optimizados.

---

## ❓ Solución de Problemas

### Error: "npm no se reconoce como comando"
**Causa:** Node.js no está instalado correctamente
**Solución:** 
1. Reinstala Node.js desde https://nodejs.org/
2. Reinicia tu computadora
3. Vuelve a abrir VS Code

---

### Error: "Cannot find module"
**Causa:** Dependencias no instaladas
**Solución:**
```bash
npm install
```

---

### Los estilos no se ven
**Causa:** Archivo CSS no importado correctamente
**Solución:**
1. Verifica que `src/styles/globals.css` exista
2. Verifica que en `src/main.tsx` esté:
   ```typescript
   import './styles/globals.css'
   ```
3. Reinicia el servidor (Ctrl+C y luego `npm run dev`)

---

### Puerto 5173 ya está en uso
**Causa:** Ya tienes otro proyecto corriendo
**Solución:**
```bash
npm run dev -- --port 3000
```

---

### La página está en blanco
**Causa:** Error en el código
**Solución:**
1. Abre la **Consola del navegador**:
   - Presiona `F12`
   - Ve a la pestaña "Console"
2. Lee el error (generalmente dice qué archivo tiene el problema)
3. Revisa ese archivo en VS Code

---

## 📝 Checklist Final

Antes de considerar que está todo listo:

- [ ] Node.js instalado y verificado
- [ ] VS Code instalado con extensiones
- [ ] Proyecto creado con Vite
- [ ] Todas las dependencias instaladas
- [ ] Estructura de carpetas creada
- [ ] Archivos de configuración copiados
- [ ] Todos los componentes copiados
- [ ] Carpeta UI completa
- [ ] Foto de perfil agregada
- [ ] Servidor corriendo sin errores
- [ ] Portafolio visible en el navegador
- [ ] Información personal actualizada
- [ ] Proyectos personalizados
- [ ] Número de WhatsApp configurado
- [ ] Modo oscuro funcionando
- [ ] Diseño responsivo verificado

---

## 🎓 Conceptos Importantes

### ¿Qué es npm?
**Node Package Manager** - Administrador de paquetes que instala librerías.

### ¿Qué es Vite?
Herramienta que ejecuta y compila tu proyecto. Es muy rápida.

### ¿Qué es React?
Librería de JavaScript para crear interfaces web interactivas.

### ¿Qué es TypeScript?
Versión mejorada de JavaScript con tipos de datos, previene errores.

### ¿Qué es Tailwind CSS?
Framework de CSS que permite estilizar con clases predefinidas.

### ¿Qué es hot-reload?
Los cambios en el código se reflejan automáticamente en el navegador sin recargar.

---

## 🚀 Próximos Pasos

Una vez que todo funcione:

1. ✅ Personaliza toda tu información
2. ✅ Agrega capturas de pantalla de tus proyectos
3. ✅ Prueba el chatbot
4. ✅ Verifica en diferentes navegadores
5. ✅ Prueba en modo móvil (F12 → Toggle device toolbar)
6. ✅ Considera subir a Vercel, Netlify o GitHub Pages

---

## 🆘 Recursos de Ayuda

- **Guía Completa:** `GUIA-INSTALACION.md`
- **Guía Rápida:** `GUIA-RAPIDA.md`
- **Estructura:** `ESTRUCTURA-PROYECTO.md`
- **README:** `README.md`

---

**¡Éxito con tu portafolio! 🎉**

Si sigues todos estos pasos cuidadosamente, tendrás tu portafolio funcionando perfectamente.
