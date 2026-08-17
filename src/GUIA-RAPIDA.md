# 🚀 Guía Rápida - Inicio en 5 Minutos

Esta guía te ayudará a tener tu portafolio funcionando en pocos minutos.

## ✅ Antes de Empezar

### 1. Descargar Node.js
1. Ve a: https://nodejs.org/
2. Descarga la versión **LTS** (recomendada)
3. Instala haciendo doble clic
4. Acepta todas las opciones predeterminadas

### 2. Descargar Visual Studio Code
1. Ve a: https://code.visualstudio.com/
2. Descarga para tu sistema operativo
3. Instala haciendo doble clic

---

## 🎯 Instalación Paso a Paso

### Paso 1: Crear la carpeta del proyecto
1. Crea una carpeta en tu computadora llamada `portafolio-jostin`
2. Puedes crearla en tu Escritorio o donde prefieras

### Paso 2: Abrir en Visual Studio Code
1. Abre Visual Studio Code
2. Ve a: **Archivo** → **Abrir Carpeta**
3. Selecciona la carpeta `portafolio-jostin`
4. Haz clic en "Confiar en los autores"

### Paso 3: Abrir la Terminal
1. En VS Code, presiona: **Ctrl + Ñ** (Windows) o **Cmd + Ñ** (Mac)
2. Se abrirá una terminal en la parte inferior

### Paso 4: Crear el proyecto
Copia y pega este comando en la terminal (presiona Enter después):

```bash
npm create vite@latest . -- --template react-ts
```

Cuando pregunte algo, escribe `y` y presiona Enter.

### Paso 5: Instalar dependencias base
Copia y pega este comando:

```bash
npm install
```

Espera a que termine (pueden ser unos minutos).

### Paso 6: Instalar librerías adicionales
Copia y pega estos comandos uno por uno:

```bash
npm install -D tailwindcss@next @tailwindcss/vite@next
```

```bash
npm install lucide-react clsx tailwind-merge class-variance-authority
```

```bash
npm install sonner@2.0.3
```

### Paso 7: Copiar los archivos del portafolio

Ahora necesitas copiar todos los archivos del portafolio a tu proyecto:

#### Archivos de configuración (raíz del proyecto):
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.node.json`
- `package.json` (sobreescribe el que se creó)
- `index.html`
- `.gitignore`

#### Archivos en la carpeta `src/`:
- `App.tsx` (sobreescribe el que existe)
- `main.tsx`

#### Crear carpeta `src/styles/` y copiar:
- `globals.css`

#### Crear carpeta `src/components/` y copiar:
- `Navigation.tsx`
- `Hero.tsx`
- `Projects.tsx`
- `Skills.tsx`
- `Experience.tsx`
- `Education.tsx`
- `Contact.tsx`
- `ChatBot.tsx`

#### Copiar toda la carpeta `components/ui/`:
- Copia todos los archivos de la carpeta `ui`

#### Guardar tu foto:
- Guarda tu foto de perfil en el proyecto con el nombre exacto que uses en el código
- La ruta debe coincidir con la importación en `Hero.tsx`

### Paso 8: Ejecutar el proyecto

En la terminal, escribe:

```bash
npm run dev
```

¡Listo! Tu navegador debería abrirse automáticamente con tu portafolio en:
**http://localhost:5173**

---

## 🎨 ¿Cómo editar mi información?

### Cambiar tu nombre y presentación:
Abre `src/components/Hero.tsx` y modifica:
- Tu nombre
- Tu descripción
- Tus enlaces de redes sociales

### Cambiar tus proyectos:
Abre `src/components/Projects.tsx` y edita la información de cada proyecto

### Cambiar tus habilidades:
Abre `src/components/Skills.tsx` y modifica las tecnologías

### Cambiar tu información de contacto:
Abre `src/components/Contact.tsx` y actualiza:
- Email
- Teléfono
- Ubicación
- Redes sociales

### Cambiar respuestas del chatbot:
Abre `src/components/ChatBot.tsx` y edita la función `getBotResponse`

---

## ⚡ Comandos Importantes

### Para iniciar el proyecto:
```bash
npm run dev
```

### Para detener el servidor:
Presiona `Ctrl + C` en la terminal

### Para compilar para producción:
```bash
npm run build
```

---

## ❓ Problemas Comunes

### "npm no se reconoce"
**Solución**: Reinstala Node.js y reinicia tu computadora

### "Cannot find module"
**Solución**: Ejecuta `npm install` de nuevo

### Los estilos no se ven
**Solución**: 
1. Verifica que exista `src/styles/globals.css`
2. Verifica que esté importado en `src/main.tsx`
3. Reinicia el servidor (Ctrl+C y luego `npm run dev`)

### El puerto 5173 está ocupado
**Solución**: Cierra otras pestañas que estén usando el proyecto o usa:
```bash
npm run dev -- --port 3000
```

---

## 📚 Extensiones Recomendadas para VS Code

Busca estas en el marketplace de VS Code (icono de cuadrados en la barra lateral):

1. **ES7+ React/Redux/React-Native snippets** - Atajos para React
2. **Tailwind CSS IntelliSense** - Autocompletado para Tailwind
3. **Prettier - Code formatter** - Formatea el código automáticamente
4. **Auto Rename Tag** - Renombra tags HTML automáticamente

---

## 🎉 ¡Felicitaciones!

Si llegaste hasta aquí, tu portafolio ya debería estar funcionando.

### Próximos pasos:
1. ✅ Personaliza tu información
2. ✅ Agrega tus proyectos reales
3. ✅ Sube tu foto de perfil
4. ✅ Actualiza tu número de WhatsApp en el chatbot
5. ✅ Prueba el modo oscuro
6. ✅ Revisa que todo se vea bien en móvil

---

## 🆘 ¿Necesitas Ayuda?

Si algo no funciona:
1. Lee la **[GUIA-INSTALACION.md](./GUIA-INSTALACION.md)** completa
2. Revisa que Node.js esté instalado: `node --version`
3. Revisa que las dependencias estén instaladas: `npm install`
4. Asegúrate de estar en la carpeta correcta del proyecto

---

**¡Mucha suerte con tu portafolio! 🚀**
