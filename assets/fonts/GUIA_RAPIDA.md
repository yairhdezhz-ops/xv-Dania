# Guía Rápida - Fuentes Personalizadas

## 🚀 Pasos Rápidos

### 1. Coloca tus archivos de fuentes
Copia tus archivos de fuentes a la carpeta `assets/fonts/` con estos nombres:

- `script-font.woff2` (o .ttf) → Para "Dania"
- `subtitle-font.woff2` (o .ttf) → Para "XV años"
- `body-font.woff2` (o .ttf) → Para texto general
- `heading-font.woff2` (o .ttf) → Para títulos

### 2. Si tus archivos tienen nombres diferentes
Edita `styles.css` y busca la sección `/* FUENTES PERSONALIZADAS */` (alrededor de la línea 30).

Cambia las rutas en las declaraciones `@font-face`:

```css
@font-face {
    font-family: 'ScriptFont';
    src: url('assets/fonts/TU-ARCHIVO-AQUI.woff2') format('woff2'),
         url('assets/fonts/TU-ARCHIVO-AQUI.ttf') format('truetype');
    /* ... */
}
```

### 3. Si solo tienes una fuente para todo
Puedes usar el mismo archivo para todas las variables. Solo asegúrate de que el archivo esté en la carpeta y actualiza todas las rutas en `@font-face` para que apunten al mismo archivo.

### 4. Formatos soportados
- ✅ `.woff2` (recomendado - mejor compresión)
- ✅ `.woff`
- ✅ `.ttf`
- ✅ `.otf`

## 📋 Checklist

- [ ] Archivos de fuentes en `assets/fonts/`
- [ ] Nombres coinciden con los esperados O rutas actualizadas en CSS
- [ ] Probar en el navegador para verificar que se cargan
- [ ] Verificar que los fallbacks funcionan si alguna fuente no está disponible

## 💡 Tips

- **Mejor rendimiento**: Usa formato WOFF2 cuando sea posible
- **Múltiples pesos**: Si tienes bold, light, etc., puedes agregar más declaraciones `@font-face` con `font-weight: bold;` o `font-weight: 300;`
- **Fallbacks**: Las fuentes de Google (Playfair Display y Poppins) se usarán automáticamente si tus fuentes personalizadas no están disponibles

## 🔧 Ejemplo: Agregar peso bold

Si tienes `script-font-bold.woff2`, agrega esto en `styles.css`:

```css
@font-face {
    font-family: 'ScriptFont';
    src: url('assets/fonts/script-font-bold.woff2') format('woff2');
    font-weight: bold;  /* ← Cambia esto */
    font-style: normal;
    font-display: swap;
}
```

