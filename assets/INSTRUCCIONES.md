# Instrucciones para Assets del Header

## 📁 Estructura de Carpetas

```
assets/
├── images/
│   └── floral-bouquet.png  (o .jpg, .webp)
└── vectors/
    └── gold-frame.svg  (o .png de alta resolución)
```

## 📝 Archivos Necesarios

### 1. Arreglo Floral (`assets/images/floral-bouquet.png`)
- **Ubicación**: Parte superior izquierda del marco
- **Características**:
  - Estilo acuarela con colores pastel (púrpuras, rosas, cremas, verdes)
  - Fondo transparente (PNG recomendado)
  - Tamaño recomendado: mínimo 800x600px
  - Debe extenderse sobre el marco dorado

### 2. Marco Dorado (`assets/vectors/gold-frame.svg`)
- **Ubicación**: Marco principal que contiene el texto
- **Características**:
  - Marco geométrico irregular (hexagonal)
  - Color dorado (#D4AF37 o similar)
  - Fondo transparente
  - Tamaño recomendado: mínimo 400x300px
  - Preferible formato SVG para mejor escalado

## 🔧 Ajustes Opcionales

Si después de colocar tus imágenes necesitas ajustar la posición o tamaño, puedes modificar estos valores en `styles.css`:

### Ajustar posición del arreglo floral:
```css
.floral-bouquet {
    top: -20px;      /* Ajusta hacia arriba/abajo */
    left: -30px;     /* Ajusta hacia izquierda/derecha */
    width: 200px;    /* Ajusta el tamaño */
}
```

### Ajustar tamaño del marco:
```css
.gold-frame-wrapper {
    max-width: 350px;  /* Ajusta el ancho máximo */
}
```

### Ajustar posición del texto dentro del marco:
```css
.frame-content {
    width: 80%;        /* Ajusta el ancho del área de texto */
    /* El transform: translate(-50%, -50%) centra el contenido */
}
```

## 🎨 Personalización de Colores

Si quieres ajustar el color del texto "XV años", modifica en `styles.css`:

```css
.event-type {
    color: #B8A5E0;  /* Cambia este valor por el púrpura que prefieras */
}
```

## ✅ Checklist

- [ ] Colocar `floral-bouquet.png` en `assets/images/`
- [ ] Colocar `gold-frame.svg` en `assets/vectors/`
- [ ] Verificar que las imágenes se muestren correctamente
- [ ] Ajustar posiciones si es necesario
- [ ] Probar en diferentes tamaños de pantalla (responsive)

## 📱 Notas sobre Responsive

El diseño se ajusta automáticamente para:
- Móviles pequeños (≤375px)
- Tablets (≥768px)
- Desktop (≥1024px)
- Pantallas grandes (≥1440px)

Si necesitas ajustar los tamaños para diferentes dispositivos, busca las media queries en `styles.css` con los comentarios `/* Responsive Design - ... */`

