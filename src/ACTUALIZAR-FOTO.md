# 📸 Cómo Actualizar tu Foto de Perfil

## 🎯 Objetivo

Configurar tu foto de perfil para que aparezca en el portafolio.

---

## 📋 PASO 1: Preparar tu Foto

### Requisitos de la Foto:
- **Formato:** JPG, PNG, o WEBP
- **Tamaño recomendado:** 400x400 píxeles (o proporcional)
- **Peso:** Menos de 500 KB
- **Tipo:** Foto de perfil profesional (fondo neutro preferiblemente)

### Nombre Sugerido:
- `perfil.jpg` o `perfil.png`

---

## 📂 PASO 2: Guardar la Foto

### Opción A: En la carpeta public/ (RECOMENDADO)

1. Coloca tu foto en:
   ```
   portafolio-jostin/public/perfil.jpg
   ```

2. Abre el archivo `src/components/Hero.tsx` en VS Code

3. Busca la línea 4 que dice:
   ```typescript
   import profileImage from 'figma:asset/0ba820618215325d7e10fbf1b5bedb47c1102ead.png';
   ```

4. **REEMPLÁZALA** por:
   ```typescript
   import profileImage from '/perfil.jpg';
   ```
   
   O si tu foto es PNG:
   ```typescript
   import profileImage from '/perfil.png';
   ```

5. Guarda el archivo (Ctrl + S)

✅ **Ventaja:** Las imágenes en `public/` se sirven directamente y es más fácil.

---

### Opción B: En una carpeta assets/

1. Crea una carpeta `src/assets/` (si no existe)

2. Coloca tu foto en:
   ```
   portafolio-jostin/src/assets/perfil.jpg
   ```

3. Abre `src/components/Hero.tsx`

4. Busca la línea 4:
   ```typescript
   import profileImage from 'figma:asset/0ba820618215325d7e10fbf1b5bedb47c1102ead.png';
   ```

5. **REEMPLÁZALA** por:
   ```typescript
   import profileImage from '../assets/perfil.jpg';
   ```

6. Guarda el archivo (Ctrl + S)

---

## 🔍 PASO 3: Verificar

1. Asegúrate de que el servidor esté corriendo:
   ```bash
   npm run dev
   ```

2. Abre http://localhost:5173 en tu navegador

3. Deberías ver tu foto en la sección de inicio

4. Si no se ve:
   - Presiona `Ctrl + Shift + R` (recarga forzada)
   - O cierra y vuelve a abrir la pestaña

---

## 🛠️ Solución de Problemas

### ❌ La imagen no aparece

**Causa 1:** La ruta es incorrecta
**Solución:**
- Verifica que el nombre del archivo coincida exactamente (mayúsculas/minúsculas)
- Si está en `public/perfil.jpg`, la ruta debe ser `/perfil.jpg`
- Si está en `src/assets/perfil.jpg`, la ruta debe ser `../assets/perfil.jpg`

**Causa 2:** El archivo no existe en esa ubicación
**Solución:**
- Verifica que la foto esté realmente en la carpeta correcta
- En VS Code, deberías ver el archivo en el explorador de archivos

**Causa 3:** El formato no es compatible
**Solución:**
- Usa JPG o PNG
- Convierte tu imagen a uno de estos formatos

---

### ❌ Error: "Cannot find module"

**Mensaje completo:**
```
Cannot find module '/perfil.jpg' or its corresponding type declarations
```

**Causa:** La foto no está en la carpeta `public/`

**Solución:**
1. Verifica que la foto esté en `portafolio-jostin/public/perfil.jpg`
2. Reinicia el servidor:
   - Presiona `Ctrl + C` en la terminal
   - Ejecuta: `npm run dev`

---

### ❌ La imagen se ve pixelada

**Causa:** La imagen es muy pequeña

**Solución:**
1. Usa una imagen de al menos 400x400 píxeles
2. Guarda en alta calidad
3. Reemplaza el archivo y recarga la página

---

## 📝 Código Completo para Referencia

### Si tu foto está en public/perfil.jpg

```typescript
// Línea 4 de src/components/Hero.tsx
import profileImage from '/perfil.jpg';
```

### Si tu foto está en public/perfil.png

```typescript
// Línea 4 de src/components/Hero.tsx
import profileImage from '/perfil.png';
```

### Si tu foto está en src/assets/perfil.jpg

```typescript
// Línea 4 de src/components/Hero.tsx
import profileImage from '../assets/perfil.jpg';
```

---

## 🎨 Optimizar tu Foto (Opcional)

### Herramientas Online Gratuitas:

1. **TinyPNG** - https://tinypng.com/
   - Reduce el peso sin perder calidad

2. **Squoosh** - https://squoosh.app/
   - Comprime y cambia formato

3. **Remove.bg** - https://remove.bg/
   - Elimina el fondo (útil para fotos profesionales)

---

## 🔄 Cambiar la Foto Después

Si quieres cambiar tu foto más adelante:

1. **Opción Fácil:**
   - Reemplaza el archivo `perfil.jpg` en `public/` con tu nueva foto
   - Mantén el mismo nombre
   - Recarga la página (Ctrl + Shift + R)

2. **Opción con Nombre Diferente:**
   - Guarda la nueva foto con otro nombre (ej: `mi-foto.jpg`)
   - Actualiza la línea 4 en `Hero.tsx`:
     ```typescript
     import profileImage from '/mi-foto.jpg';
     ```
   - Guarda y recarga

---

## ✅ Checklist

Verifica que hayas completado:

- [ ] Foto preparada (tamaño y formato correctos)
- [ ] Foto guardada en `public/perfil.jpg` o `src/assets/perfil.jpg`
- [ ] Archivo `src/components/Hero.tsx` editado
- [ ] Línea 4 actualizada con la ruta correcta
- [ ] Archivo guardado (Ctrl + S)
- [ ] Servidor reiniciado (si es necesario)
- [ ] Imagen visible en http://localhost:5173

---

## 🎯 Ubicación Exacta en el Código

La importación de la imagen está en:

```
📂 portafolio-jostin/
   └── 📂 src/
       └── 📂 components/
           └── 📄 Hero.tsx
               └── Línea 4 ← AQUÍ
```

---

## 💡 Tips Profesionales

1. **Usa fondo neutro:** Fondos blancos, grises o degradados se ven más profesionales

2. **Buena iluminación:** Foto con luz natural o bien iluminada

3. **Vestimenta apropiada:** Ropa profesional o semi-profesional

4. **Sonrisa natural:** Transmite confianza y amabilidad

5. **Centrado:** Asegúrate de estar centrado en la foto

6. **Alta resolución:** Mínimo 400x400px, ideal 800x800px

---

## 🔗 Rutas de Importación Explicadas

### `/perfil.jpg` 
- La barra inicial `/` significa: "desde la carpeta public/"
- Esta es la forma más simple y recomendada

### `../assets/perfil.jpg`
- `..` significa: "sube un nivel desde components/"
- Desde `components/Hero.tsx` sube a `src/`, luego entra a `assets/`

### `./perfil.jpg`
- `.` significa: "en la misma carpeta"
- No usar para imágenes, solo para componentes

---

## 📞 Ayuda Adicional

Si después de seguir estos pasos tu foto aún no aparece:

1. Verifica en la consola del navegador (F12 → Console)
2. Busca mensajes de error
3. Revisa que el servidor esté corriendo sin errores
4. Intenta con una imagen diferente para descartar que sea un problema del archivo

---

**¡Tu foto debería estar visible ahora! 🎉**

Si tienes problemas, revisa la sección de "Solución de Problemas" o consulta las otras guías.
