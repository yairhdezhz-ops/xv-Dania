# Fuentes Personalizadas

Coloca aquí los archivos de fuentes que quieres usar en la invitación.

## 📝 Archivos Necesarios

### 1. **script-font.woff2** (o .ttf, .otf, .woff)
   - **Uso**: Nombre principal "Dania" (texto elegante/script)
   - **Características**: 
     - Fuente script, cursiva o elegante
     - Estilo similar a caligrafía
     - Formato recomendado: WOFF2 (mejor compresión) o TTF
   - **Alternativas**: Si tienes múltiples pesos, puedes usar:
     - `script-font-regular.woff2`
     - `script-font-bold.woff2`

### 2. **subtitle-font.woff2** (o .ttf, .otf, .woff)
   - **Uso**: Texto "XV años" (subtítulo)
   - **Características**:
     - Fuente más simple que la script pero elegante
     - Puede ser sans-serif o serif
     - Debe ser legible en tamaños pequeños
   - **Alternativas**: Si tienes múltiples pesos:
     - `subtitle-font-regular.woff2`
     - `subtitle-font-medium.woff2`

### 3. **body-font.woff2** (o .ttf, .otf, .woff)
   - **Uso**: Texto general del cuerpo (párrafos, descripciones)
   - **Características**:
     - Fuente legible y clara
     - Sans-serif recomendado
     - Buena legibilidad en diferentes tamaños
   - **Alternativas**: Si tienes múltiples pesos:
     - `body-font-light.woff2`
     - `body-font-regular.woff2`
     - `body-font-medium.woff2`

### 4. **heading-font.woff2** (o .ttf, .otf, .woff)
   - **Uso**: Títulos y encabezados (nombres de padres, títulos de secciones)
   - **Características**:
     - Fuente elegante pero legible
     - Puede ser serif o sans-serif
     - Buena presencia visual
   - **Alternativas**: Si tienes múltiples pesos:
     - `heading-font-regular.woff2`
     - `heading-font-semibold.woff2`
     - `heading-font-bold.woff2`

## 📋 Formatos Soportados

- **WOFF2** (recomendado) - Mejor compresión y rendimiento
- **WOFF** - Buena compatibilidad
- **TTF** - Compatible con todos los navegadores
- **OTF** - Compatible con todos los navegadores

## 🔧 Cómo Agregar las Fuentes

1. Coloca los archivos de fuentes en esta carpeta (`assets/fonts/`)
2. Asegúrate de que los nombres coincidan con los especificados arriba
3. Si usas nombres diferentes, actualiza las referencias en `styles.css` en la sección `@font-face`

## 📝 Ejemplo de Estructura

```
assets/fonts/
├── script-font.woff2          (o script-font.ttf)
├── subtitle-font.woff2        (o subtitle-font.ttf)
├── body-font.woff2           (o body-font.ttf)
└── heading-font.woff2        (o heading-font.ttf)
```

## ⚠️ Notas Importantes

- Si solo tienes una fuente para todo, puedes usar el mismo archivo para todas las variables
- El sistema tiene fallbacks (fuentes de respaldo) si las fuentes personalizadas no están disponibles
- Para mejor rendimiento, usa WOFF2 cuando sea posible
- Si tus fuentes tienen nombres diferentes, solo actualiza las rutas en `styles.css`

## 🎨 Personalización

Si quieres usar diferentes fuentes para diferentes elementos, puedes modificar las variables CSS en `styles.css`:

```css
:root {
    --font-script: 'TuFuenteScript', cursive;
    --font-subtitle: 'TuFuenteSubtitle', sans-serif;
    --font-body: 'TuFuenteBody', sans-serif;
    --font-heading: 'TuFuenteHeading', serif;
}
```

