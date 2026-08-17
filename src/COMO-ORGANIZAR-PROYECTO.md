# 📦 Cómo Organizar el Proyecto para Visual Studio Code

## 🎯 Objetivo
Organizar todos los archivos descargados en la estructura correcta que Visual Studio Code y Vite esperan.

---

## 📁 PASO 1: Estructura de Carpetas a Crear

Crea la siguiente estructura de carpetas en tu computadora:

```
portafolio-jostin/                    ← Carpeta principal (créala primero)
│
├── 📁 src/                           ← CREAR ESTA CARPETA
│   ├── 📁 components/                ← CREAR dentro de src/
│   │   ├── 📁 ui/                    ← CREAR dentro de components/
│   │   └── 📁 figma/                 ← CREAR dentro de components/
│   └── 📁 styles/                    ← CREAR dentro de src/
│
├── 📁 public/                        ← CREAR ESTA CARPETA (vacía por ahora)
│
└── 📁 documentacion/                 ← CREAR ESTA CARPETA
```

---

## 📋 PASO 2: Ubicación de Archivos Descargados

### 🔧 A. Archivos de Configuración → EN LA RAÍZ

Coloca estos archivos **directamente en la carpeta `portafolio-jostin/`**:

```
portafolio-jostin/
├── package.json                      ← Configuración de dependencias
├── vite.config.ts                    ← Configuración de Vite
├── tsconfig.json                     ← Configuración TypeScript
├── tsconfig.node.json                ← Config adicional TypeScript
├── index.html                        ← HTML principal
└── .gitignore                        ← Git ignore (opcional)
```

---

### 📱 B. Archivos de Código → EN src/

#### En `src/` (raíz de src):
```
src/
├── App.tsx                           ← Componente principal
└── main.tsx                          ← Punto de entrada
```

#### En `src/styles/`:
```
src/styles/
└── globals.css                       ← Estilos globales
```

#### En `src/components/`:

Mueve estos 8 archivos de componentes principales:

```
src/components/
├── Navigation.tsx                    ← Barra de navegación
├── Hero.tsx                          ← Sección inicio
├── Projects.tsx                      ← Sección proyectos
├── Skills.tsx                        ← Sección habilidades
├── Experience.tsx                    ← Sección experiencia
├── Education.tsx                     ← Sección educación
├── Contact.tsx                       ← Sección contacto
└── ChatBot.tsx                       ← Componente chatbot
```

#### En `src/components/ui/`:

Mueve **TODOS** estos archivos (hay 49 archivos):

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
├── utils.ts
└── ... (cualquier otro archivo de la carpeta ui)
```

#### En `src/components/figma/`:

```
src/components/figma/
└── ImageWithFallback.tsx             ← Componente de imagen
```

---

### 📚 C. Archivos de Documentación → EN documentacion/

Mueve **TODOS** los archivos .md a la carpeta `documentacion/`:

```
documentacion/
├── LEEME-PRIMERO.md                  ← Guía principal
├── GUIA-RAPIDA.md                    ← Instalación rápida
├── PASOS-COMPLETOS.md                ← Guía detallada
├── GUIA-INSTALACION.md               ← Guía técnica
├── ESTRUCTURA-PROYECTO.md            ← Estructura del proyecto
├── README.md                         ← Documentación oficial
├── INSTRUCCIONES-DESCARGA.md         ← Instrucciones de descarga
├── MAPA-ORGANIZACION.md              ← Mapa de organización
├── ACTUALIZAR-FOTO.md                ← Cómo actualizar foto
├── RESUMEN-FINAL.md                  ← Resumen final
├── INDICE-COMPLETO.md                ← Índice completo
├── INICIO-RAPIDO.txt                 ← Inicio rápido
└── Attributions.md                   ← Atribuciones
```

---

## ✅ PASO 3: Estructura Final Completa

Así debe quedar tu proyecto:

```
portafolio-jostin/
│
├── 📁 src/
│   ├── App.tsx
│   ├── main.tsx
│   │
│   ├── 📁 components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   ├── ChatBot.tsx
│   │   │
│   │   ├── 📁 ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ... (todos los archivos ui)
│   │   │
│   │   └── 📁 figma/
│   │       └── ImageWithFallback.tsx
│   │
│   └── 📁 styles/
│       └── globals.css
│
├── 📁 public/
│   └── (vacío por ahora, aquí irán imágenes)
│
├── 📁 documentacion/
│   ├── LEEME-PRIMERO.md
│   ├── GUIA-RAPIDA.md
│   └── ... (todos los archivos .md)
│
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── index.html
└── .gitignore
```

---

## 🔄 PASO 4: Actualizar Rutas de Importación

### A. En `src/main.tsx`:

Asegúrate de que tenga:
```typescript
import './styles/globals.css'
```

### B. En `src/App.tsx`:

Asegúrate de que los imports sean:
```typescript
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
```

### C. En TODOS los archivos de `src/components/`:

Las rutas a componentes UI deben ser:
```typescript
import { Button } from './ui/button';
import { Card } from './ui/card';
// etc.
```

---

## 📸 PASO 5: Agregar Tu Foto de Perfil

1. Guarda tu foto en `public/perfil.png` (o el nombre que prefieras)

2. Abre `src/components/Hero.tsx`

3. Busca la línea de importación de la imagen y actualízala:
```typescript
// Si guardaste en public/perfil.png:
// Solo usa la ruta /perfil.png en el JSX
<img src="/perfil.png" alt="Jostin Chalan Mora" />
```

---

## 🚀 PASO 6: Abrir en Visual Studio Code

1. Abre Visual Studio Code

2. Menú: **Archivo → Abrir Carpeta**

3. Selecciona la carpeta `portafolio-jostin`

4. Abre la terminal: `Ctrl + Ñ` (o View → Terminal)

5. Ejecuta:
```bash
npm install
```

6. Espera a que termine (2-3 minutos)

7. Ejecuta:
```bash
npm run dev
```

8. ¡Listo! Ve a `http://localhost:5173`

---

## ⚠️ ERRORES COMUNES AL ORGANIZAR

### Error: "Cannot find module './components/...'"
**Causa:** Los archivos no están en la ubicación correcta
**Solución:** Verifica que los componentes estén en `src/components/`

### Error: "Cannot find module './ui/button'"
**Causa:** La carpeta ui no está dentro de components
**Solución:** Asegúrate de que `src/components/ui/` existe

### Error: "Cannot find module './styles/globals.css'"
**Causa:** El archivo CSS no está en la ruta correcta
**Solución:** Debe estar en `src/styles/globals.css`

---

## 📝 CHECKLIST DE ORGANIZACIÓN

Antes de ejecutar `npm install`, verifica:

- [ ] Carpeta `src/` creada
- [ ] Carpeta `src/components/` creada
- [ ] Carpeta `src/components/ui/` creada con todos los archivos
- [ ] Carpeta `src/components/figma/` creada
- [ ] Carpeta `src/styles/` creada
- [ ] `App.tsx` está en `src/`
- [ ] `main.tsx` está en `src/`
- [ ] `globals.css` está en `src/styles/`
- [ ] Los 8 componentes principales están en `src/components/`
- [ ] Archivos de configuración están en la raíz
- [ ] Tu foto está en `public/`

---

## 💡 CONSEJO IMPORTANTE

**NO copies las carpetas tal cual están descargadas**. Debes crear la estructura correcta y MOVER los archivos uno por uno a sus ubicaciones.

La estructura descargada NO es la estructura que Vite necesita.

---

## 🆘 SI ALGO NO FUNCIONA

1. Compara tu estructura con la mostrada en "PASO 3"
2. Verifica que TODOS los archivos estén en las ubicaciones correctas
3. Asegúrate de haber ejecutado `npm install`
4. Revisa la consola del navegador (F12) para ver errores
5. Lee el archivo `PASOS-COMPLETOS.md` en la carpeta documentacion/

---

**¡Éxito organizando tu proyecto! 📦✨**
