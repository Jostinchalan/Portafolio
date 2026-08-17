# 🗺️ Mapa de Organización de Archivos

## 📥 Estado Actual (Cómo están los archivos ahora)

```
Archivos descargados/
├── App.tsx                          ❌ Mover a src/
├── index.html                       ✅ Dejar en raíz
├── package.json                     ✅ Dejar en raíz
├── vite.config.ts                   ✅ Dejar en raíz
├── tsconfig.json                    ✅ Dejar en raíz
├── tsconfig.node.json               ✅ Dejar en raíz
├── README.md                        ✅ Dejar en raíz
├── GUIA-*.md                        ✅ Dejar en raíz
│
├── components/                      ❌ Mover TODO a src/components/
│   ├── ChatBot.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── figma/                       ❌ Mover a src/components/figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/                          ❌ Mover a src/components/ui/
│       ├── accordion.tsx
│       ├── ... (40+ archivos)
│       └── utils.ts
│
├── src/
│   └── main.tsx                     ✅ Dejar en src/
│
└── styles/                          ❌ Mover a src/styles/
    └── globals.css
```

---

## ✅ Estado Final (Cómo deben quedar)

```
portafolio-jostin/
│
├── 📁 public/                       ← CREAR ESTA CARPETA
│   └── perfil.jpg                   ← AGREGAR TU FOTO AQUÍ
│
├── 📁 src/                          ← YA EXISTE
│   │
│   ├── 📁 components/               ← CREAR ESTA CARPETA
│   │   │
│   │   ├── 📁 figma/                ← CREAR ESTA CARPETA
│   │   │   └── ImageWithFallback.tsx
│   │   │
│   │   ├── 📁 ui/                   ← CREAR ESTA CARPETA
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── use-mobile.ts
│   │   │   └── utils.ts
│   │   │
│   │   ├── ChatBot.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   │
│   ├── 📁 styles/                   ← CREAR ESTA CARPETA
│   │   └── globals.css
│   │
│   ├── App.tsx                      ← MOVER DESDE LA RAÍZ
│   └── main.tsx                     ← YA ESTÁ AQUÍ
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
├── INSTRUCCIONES-DESCARGA.md
└── MAPA-ORGANIZACION.md (este archivo)
```

---

## 🎯 Instrucciones Paso a Paso

### PASO 1: Crear la Carpeta Principal
```
1. Crea una carpeta llamada: portafolio-jostin
```

### PASO 2: Crear Subcarpetas
```
Dentro de portafolio-jostin, crea:
├── public/
└── src/
    ├── components/
    │   ├── ui/
    │   └── figma/
    └── styles/
```

### PASO 3: Mover Archivos de Configuración
```
Coloca estos archivos en la RAÍZ de portafolio-jostin/:
✅ .gitignore
✅ index.html
✅ package.json
✅ tsconfig.json
✅ tsconfig.node.json
✅ vite.config.ts
✅ README.md
✅ LEEME-PRIMERO.md
✅ GUIA-RAPIDA.md
✅ GUIA-INSTALACION.md
✅ PASOS-COMPLETOS.md
✅ ESTRUCTURA-PROYECTO.md
✅ INSTRUCCIONES-DESCARGA.md
✅ MAPA-ORGANIZACION.md
```

### PASO 4: Mover Archivos a src/
```
Mueve estos archivos a src/:
📄 App.tsx (desde la raíz)
📄 main.tsx (ya está en src/, déjalo ahí)
```

### PASO 5: Mover Carpeta components/
```
Mueve TODO el contenido de components/ a src/components/:
📂 src/components/
   ├── ChatBot.tsx
   ├── Contact.tsx
   ├── Education.tsx
   ├── Experience.tsx
   ├── Hero.tsx
   ├── Navigation.tsx
   ├── Projects.tsx
   ├── Skills.tsx
   ├── figma/ (con su contenido)
   └── ui/ (con todos sus archivos)
```

### PASO 6: Mover Carpeta styles/
```
Mueve la carpeta styles/ a src/:
📂 src/styles/
   └── globals.css
```

### PASO 7: Agregar tu Foto
```
Guarda tu foto en:
📂 public/
   └── perfil.jpg (o perfil.png)
```

---

## 🔍 Verificación Rápida

Después de organizar, verifica que tengas esta estructura:

```
portafolio-jostin/
├── public/              ✅ Carpeta con tu foto
├── src/                 ✅ Carpeta con código
│   ├── components/      ✅ 8 archivos + 2 subcarpetas
│   ├── styles/          ✅ globals.css
│   ├── App.tsx          ✅ Archivo principal
│   └── main.tsx         ✅ Punto de entrada
├── index.html           ✅ HTML principal
├── package.json         ✅ Dependencias
└── vite.config.ts       ✅ Config de Vite
```

---

## 📊 Tabla de Movimientos

| Archivo/Carpeta | Ubicación Actual | Ubicación Final | Acción |
|----------------|------------------|-----------------|--------|
| App.tsx | `/App.tsx` | `/src/App.tsx` | ✂️ MOVER |
| components/ | `/components/` | `/src/components/` | ✂️ MOVER TODO |
| styles/ | `/styles/` | `/src/styles/` | ✂️ MOVER TODO |
| main.tsx | `/src/main.tsx` | `/src/main.tsx` | ✅ NO MOVER |
| package.json | `/package.json` | `/package.json` | ✅ NO MOVER |
| index.html | `/index.html` | `/index.html` | ✅ NO MOVER |
| vite.config.ts | `/vite.config.ts` | `/vite.config.ts` | ✅ NO MOVER |
| *.md (guías) | `/` | `/` | ✅ NO MOVER |

---

## 🚨 Errores Comunes

### ❌ Error 1: "Cannot find module './components/...'"
**Causa:** Los archivos no están en `src/components/`
**Solución:** Mueve la carpeta `components/` dentro de `src/`

### ❌ Error 2: "Cannot find module './styles/globals.css'"
**Causa:** El archivo globals.css no está en `src/styles/`
**Solución:** Mueve `styles/` dentro de `src/`

### ❌ Error 3: La aplicación no muestra nada
**Causa:** `App.tsx` no está en `src/`
**Solución:** Mueve `App.tsx` a `src/App.tsx`

### ❌ Error 4: Los componentes UI no funcionan
**Causa:** La carpeta `ui/` no está en `src/components/ui/`
**Solución:** Mueve toda la carpeta `ui/` a `src/components/ui/`

---

## ✅ Checklist de Organización

Marca cada item cuando lo completes:

- [ ] Carpeta `portafolio-jostin` creada
- [ ] Subcarpeta `public/` creada
- [ ] Subcarpeta `src/` existe (ya debería estar)
- [ ] Subcarpeta `src/components/` creada
- [ ] Subcarpeta `src/components/ui/` creada
- [ ] Subcarpeta `src/components/figma/` creada
- [ ] Subcarpeta `src/styles/` creada
- [ ] `App.tsx` movido a `src/`
- [ ] Carpeta `components/` movida completa a `src/`
- [ ] Carpeta `styles/` movida completa a `src/`
- [ ] Tu foto agregada en `public/`
- [ ] Archivos de configuración en la raíz
- [ ] Archivos `.md` en la raíz

---

## 🎯 Siguiente Paso

Una vez organizados los archivos correctamente:

```bash
# Abre VS Code en la carpeta
code portafolio-jostin

# En la terminal de VS Code:
npm install

# Luego ejecuta:
npm run dev
```

---

## 💡 Tip Visual

Si abres Visual Studio Code y en el panel izquierdo ves:

```
PORTAFOLIO-JOSTIN
├── node_modules/        (aparecerá después de npm install)
├── public/
├── src/
│   ├── components/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.ts
```

**¡Todo está correcto!** ✅

---

**¿Dudas?** Consulta **INSTRUCCIONES-DESCARGA.md** para una guía completa paso a paso.
