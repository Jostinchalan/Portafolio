# 📥 Guía de Descarga e Instalación Completa

## 🎯 Objetivo
Esta guía te ayudará a descargar todo el proyecto y configurarlo en Visual Studio Code paso a paso.

---

## 📦 PARTE 1: Descargar el Proyecto

### Opción A: Si tienes un archivo ZIP

1. **Descarga el archivo** `portafolio-jostin.zip`
2. **Descomprímelo** en tu computadora
   - Clic derecho → Extraer aquí (Windows)
   - Doble clic (Mac)
3. **Tendrás una carpeta** con todos los archivos

### Opción B: Si descargaste archivos sueltos

1. **Crea una carpeta** llamada `portafolio-jostin`
2. **Descarga TODOS los archivos** del proyecto
3. **Guárdalos todos** en la carpeta que creaste

---

## 📂 PARTE 2: Organizar la Estructura

### ⚠️ IMPORTANTE: Los archivos descargados NO están en la estructura correcta

Debes reorganizarlos manualmente siguiendo estos pasos:

### Paso 2.1: Crear la Estructura de Carpetas

Dentro de `portafolio-jostin`, crea estas carpetas:

```
portafolio-jostin/
├── src/                    ← CREAR
│   ├── components/         ← CREAR dentro de src/
│   │   ├── ui/            ← CREAR dentro de components/
│   │   └── figma/         ← CREAR dentro de components/
│   └── styles/            ← CREAR dentro de src/
├── public/                ← CREAR
└── documentacion/         ← CREAR
```

**En Windows - Cómo crear las carpetas:**
1. Abre la carpeta `portafolio-jostin`
2. Clic derecho → Nueva carpeta
3. Nómbrala `src`
4. Entra en `src`, clic derecho → Nueva carpeta → `components`
5. Entra en `components`, clic derecho → Nueva carpeta → `ui`
6. Entra en `components`, clic derecho → Nueva carpeta → `figma`
7. Sal a `src`, clic derecho → Nueva carpeta → `styles`
8. Sal a la raíz, clic derecho → Nueva carpeta → `public`
9. Sal a la raíz, clic derecho → Nueva carpeta → `documentacion`

---

### Paso 2.2: Mover Archivos de Configuración

Estos archivos deben estar **en la raíz** de `portafolio-jostin/`:

**Archivo** | **Descripción**
--- | ---
`package.json` | Dependencias del proyecto
`vite.config.ts` | Configuración de Vite
`tsconfig.json` | Configuración TypeScript
`tsconfig.node.json` | Config adicional
`index.html` | HTML principal
`.gitignore` | Git ignore (opcional)

✅ Cópialos/muévelos directamente a `portafolio-jostin/`

---

### Paso 2.3: Mover Archivos de Código

#### A. Archivos en `src/`:

**Archivo** | **Ubicación Final**
--- | ---
`App.tsx` | `src/App.tsx`
`main.tsx` | `src/main.tsx`

#### B. Archivos en `src/styles/`:

**Archivo** | **Ubicación Final**
--- | ---
`globals.css` | `src/styles/globals.css`

#### C. Archivos en `src/components/`:

Mueve estos 8 archivos:

**Archivo** | **Ubicación Final**
--- | ---
`Navigation.tsx` | `src/components/Navigation.tsx`
`Hero.tsx` | `src/components/Hero.tsx`
`Projects.tsx` | `src/components/Projects.tsx`
`Skills.tsx` | `src/components/Skills.tsx`
`Experience.tsx` | `src/components/Experience.tsx`
`Education.tsx` | `src/components/Education.tsx`
`Contact.tsx` | `src/components/Contact.tsx`
`ChatBot.tsx` | `src/components/ChatBot.tsx`

#### D. Archivos en `src/components/ui/`:

Mueve **TODOS** los archivos que empiezan con nombres como:
- `button.tsx`
- `card.tsx`
- `input.tsx`
- `accordion.tsx`
- etc. (todos los archivos de UI)

**Son aproximadamente 49 archivos** → Todos van a `src/components/ui/`

#### E. Archivos en `src/components/figma/`:

**Archivo** | **Ubicación Final**
--- | ---
`ImageWithFallback.tsx` | `src/components/figma/ImageWithFallback.tsx`

---

### Paso 2.4: Mover Documentación

Mueve **TODOS** los archivos `.md` a `documentacion/`:

- `LEEME-PRIMERO.md`
- `GUIA-RAPIDA.md`
- `PASOS-COMPLETOS.md`
- `GUIA-INSTALACION.md`
- `ESTRUCTURA-PROYECTO.md`
- `README.md`
- `INSTRUCCIONES-DESCARGA.md`
- `MAPA-ORGANIZACION.md`
- `ACTUALIZAR-FOTO.md`
- `RESUMEN-FINAL.md`
- `INDICE-COMPLETO.md`
- `INICIO-RAPIDO.txt`
- `Attributions.md`
- `COMO-ORGANIZAR-PROYECTO.md`
- `DESCARGA-E-INSTALACION.md` (este archivo)

✅ Todos van a `documentacion/`

---

## 📸 PARTE 3: Agregar Tu Foto de Perfil

### Paso 3.1: Preparar la foto

1. Elige tu foto de perfil
2. Asegúrate de que sea en formato: `.png`, `.jpg`, o `.jpeg`
3. Renómbrala a `perfil.png` (o el nombre que prefieras)

### Paso 3.2: Guardar la foto

1. Copia tu foto
2. Pégala en la carpeta `public/`
3. Ruta final: `portafolio-jostin/public/perfil.png`

### Paso 3.3: Actualizar la ruta en el código

1. Abre `src/components/Hero.tsx` con un editor de texto
2. Busca la línea que contiene la imagen (algo como `<img`)
3. Actualiza el `src` para que apunte a tu foto:

```tsx
<img src="/perfil.png" alt="Jostin Chalan Mora" />
```

**Nota:** Si guardaste tu foto con otro nombre, usa ese nombre:
```tsx
<img src="/mi-foto.jpg" alt="Jostin Chalan Mora" />
```

---

## ✅ PARTE 4: Verificar la Estructura

Tu carpeta debe verse exactamente así:

```
portafolio-jostin/
│
├── 📁 src/
│   ├── 📄 App.tsx
│   ├── 📄 main.tsx
│   │
│   ├── 📁 components/
│   │   ├── 📄 Navigation.tsx
│   │   ├── 📄 Hero.tsx
│   │   ├── 📄 Projects.tsx
│   │   ├── 📄 Skills.tsx
│   │   ├── 📄 Experience.tsx
│   │   ├── 📄 Education.tsx
│   │   ├── 📄 Contact.tsx
│   │   ├── 📄 ChatBot.tsx
│   │   │
│   │   ├── 📁 ui/
│   │   │   ├── 📄 button.tsx
│   │   │   ├── 📄 card.tsx
│   │   │   ├── 📄 input.tsx
│   │   │   └── 📄 ... (49 archivos UI)
│   │   │
│   │   └── 📁 figma/
│   │       └── 📄 ImageWithFallback.tsx
│   │
│   └── 📁 styles/
│       └── 📄 globals.css
│
├── 📁 public/
│   └── 📄 perfil.png              ← Tu foto aquí
│
├── 📁 documentacion/
│   ├── 📄 LEEME-PRIMERO.md
│   └── 📄 ... (todos los .md)
│
├── 📄 package.json
├── 📄 vite.config.ts
├── 📄 tsconfig.json
├── 📄 tsconfig.node.json
├── 📄 index.html
└── 📄 .gitignore
```

---

## 💻 PARTE 5: Abrir en Visual Studio Code

### Paso 5.1: Instalar Visual Studio Code

Si no lo tienes instalado:
1. Ve a: https://code.visualstudio.com/
2. Descarga e instala para tu sistema operativo

### Paso 5.2: Abrir el Proyecto

**Método 1 - Desde VS Code:**
1. Abre Visual Studio Code
2. Menú: **Archivo** → **Abrir Carpeta** (File → Open Folder)
3. Navega hasta `portafolio-jostin`
4. Haz clic en **Seleccionar Carpeta**

**Método 2 - Desde la Carpeta:**
1. Abre la carpeta `portafolio-jostin`
2. Clic derecho en espacio vacío
3. "Abrir con Code" (si está la opción)

### Paso 5.3: Confiar en el Proyecto

Cuando VS Code pregunte "¿Confías en los autores de esta carpeta?"
- Haz clic en **Sí, confío**

---

## 🔧 PARTE 6: Instalar Dependencias

### Paso 6.1: Verificar Node.js

Antes de continuar, verifica que Node.js esté instalado:

1. Abre la terminal en VS Code: `Ctrl + Ñ` (o View → Terminal)
2. Escribe: `node --version`
3. Presiona Enter

**Debes ver algo como:** `v20.11.0`

Si vez un error: **Instala Node.js desde https://nodejs.org/**

### Paso 6.2: Instalar las Librerías

En la terminal de VS Code, escribe:

```bash
npm install
```

Presiona Enter y **espera** (puede tardar 2-5 minutos).

Verás muchos mensajes. Cuando termine dirá algo como:
```
added 300 packages in 2m
```

✅ ¡Dependencias instaladas!

---

## 🚀 PARTE 7: Ejecutar el Proyecto

### Paso 7.1: Iniciar el Servidor

En la terminal de VS Code, escribe:

```bash
npm run dev
```

Presiona Enter.

Verás algo como:
```
  VITE v5.x.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

✅ ¡El servidor está corriendo!

### Paso 7.2: Ver el Portafolio

**Opción 1:** El navegador se abrirá automáticamente

**Opción 2:** 
- Mantén presionado `Ctrl` (o `Cmd` en Mac)
- Haz clic en `http://localhost:5173/`

**Opción 3:**
- Abre tu navegador manualmente
- Ve a: `http://localhost:5173`

🎉 **¡Deberías ver tu portafolio funcionando!**

---

## 🎨 PARTE 8: Personalizar

### Cambiar tu información:

**Tu nombre y descripción:**
1. Abre: `src/components/Hero.tsx`
2. Busca tu nombre y cámbialo
3. Guarda: `Ctrl + S`
4. El navegador se actualizará solo

**Tus proyectos:**
1. Abre: `src/components/Projects.tsx`
2. Edita el array `projects`
3. Guarda

**Tus habilidades:**
1. Abre: `src/components/Skills.tsx`
2. Edita el array `skills`
3. Guarda

**Tu contacto:**
1. Abre: `src/components/Contact.tsx`
2. Actualiza email, teléfono, etc.
3. Guarda

---

## 🛑 PARTE 9: Detener el Servidor

Cuando termines de trabajar:

1. Ve a la terminal en VS Code
2. Presiona: `Ctrl + C`
3. Si pregunta, escribe `Y` y presiona Enter

El servidor se detendrá.

**Para volver a iniciar:**
```bash
npm run dev
```

---

## ❓ SOLUCIÓN DE PROBLEMAS

### "npm no se reconoce como comando"
**Solución:** Node.js no está instalado
- Instala desde: https://nodejs.org/
- Reinicia tu computadora
- Vuelve a intentar

### "Cannot find module './components/...'"
**Solución:** Los archivos no están en las ubicaciones correctas
- Revisa la **PARTE 2** de esta guía
- Asegúrate de que la estructura sea exacta

### La página está en blanco
**Solución:**
1. Presiona `F12` en el navegador
2. Ve a la pestaña "Console"
3. Lee el error (te dirá qué falta)

### Los estilos no se ven
**Solución:**
1. Verifica que `src/styles/globals.css` existe
2. Verifica que `src/main.tsx` tenga: `import '../styles/globals.css'`
3. Reinicia el servidor (Ctrl+C y `npm run dev`)

### Error "Port 5173 is already in use"
**Solución:**
```bash
npm run dev -- --port 3000
```

---

## 📝 CHECKLIST FINAL

Antes de considerar que está todo listo:

### Descarga:
- [ ] Todos los archivos descargados
- [ ] Carpeta `portafolio-jostin` creada

### Estructura:
- [ ] Carpeta `src/` creada con archivos
- [ ] Carpeta `src/components/` con 8 componentes
- [ ] Carpeta `src/components/ui/` con ~49 archivos
- [ ] Carpeta `src/components/figma/` con 1 archivo
- [ ] Carpeta `src/styles/` con `globals.css`
- [ ] Archivos de configuración en la raíz
- [ ] Tu foto en `public/`

### Instalación:
- [ ] Node.js instalado (`node --version` funciona)
- [ ] VS Code instalado y abierto
- [ ] Proyecto abierto en VS Code
- [ ] `npm install` ejecutado sin errores

### Ejecución:
- [ ] `npm run dev` ejecutado
- [ ] Navegador abierto en `localhost:5173`
- [ ] Portafolio visible y funcionando
- [ ] Modo oscuro funciona
- [ ] Navegación funciona
- [ ] Chatbot abre

### Personalización:
- [ ] Información personal actualizada
- [ ] Proyectos editados
- [ ] Foto de perfil visible
- [ ] Número de WhatsApp configurado

---

## 🎓 RECURSOS ADICIONALES

Si tienes dudas, consulta estos archivos en `documentacion/`:

- **LEEME-PRIMERO.md** - Guía de inicio
- **PASOS-COMPLETOS.md** - Guía paso a paso detallada
- **GUIA-RAPIDA.md** - Para usuarios con experiencia
- **ESTRUCTURA-PROYECTO.md** - Entender el código
- **README.md** - Documentación oficial

---

## 🎉 ¡Felicitaciones!

Si llegaste hasta aquí y todo funciona:

✅ Has descargado el proyecto correctamente
✅ Has organizado la estructura
✅ Has instalado las dependencias
✅ El portafolio está corriendo
✅ Puedes empezar a personalizarlo

**¡Éxito con tu portafolio profesional! 🚀**

---

**Desarrollado para Jostin Chalan Mora**
*Estudiante de Ingeniería de Software - UNEMI*
