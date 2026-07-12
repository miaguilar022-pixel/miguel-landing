# Miguel Aguilar - Landing Page

Landing page dark monochrome para servicios de Digital Performance Marketing.

## Stack
- **React 18** + **Vite** (desarrollo rápido)
- **Tailwind CSS** (estilos utilities)
- **Framer Motion** (animaciones scroll/hover)
- **Lucide React** (iconos)
- **TypeScript-ready** (puedes migrar cuando quieras)

## Instalación

```bash
# 1. Clona o descarga el proyecto
cd miguel-landing

# 2. Instala dependencias
npm install

# 3. Inicia servidor de desarrollo
npm run dev
```

Abre http://localhost:3000 en tu navegador.

## Estructura del Proyecto

```
miguel-landing/
├── src/
│   ├── App.jsx          # Componente principal (landing page)
│   ├── main.jsx         # Entry point React
│   └── index.css        # Tailwind base + custom styles
├── index.html           # HTML template
├── vite.config.js       # Configuración Vite
├── tailwind.config.js   # Configuración Tailwind
├── postcss.config.js    # PostCSS plugins
├── package.json         # Dependencias
└── README.md           # Este archivo
```

## Deployment

### Opción 1: Vercel (Recomendado - gratis, rápido)
```bash
# 1. Instala Vercel CLI
npm install -g vercel

# 2. Deploy
vercel
```

### Opción 2: Netlify
```bash
# 1. Haz build
npm run build

# 2. Sube carpeta 'dist' a Netlify (arrastra y suelta)
```

### Opción 3: Hosting propio (cPanel, DigitalOcean, etc)
```bash
npm run build
# Sube contenido de carpeta 'dist' vía FTP/SSH
```

## Cambios Recomendados

1. **Enlaces de contacto** (`src/App.jsx`):
   - Línea ~278: `href="mailto:miaguilar022@gmail.com"` → tu email
   - Línea ~285: `href="https://wa.me/5037959712"` → tu WhatsApp

2. **Redes sociales** (navbar):
   - Línea ~45-55: Reemplaza URLs de Instagram, LinkedIn, Twitter

3. **Contenido personalizado**:
   - Hero subtitle: Ajusta según tu propuesta específica
   - About me section: Personaliza con tu historia
   - Clientes mencionados: Actualiza según tus cuentas

4. **Colores** (si quieres cambiar):
   - `src/App.jsx` línea ~30-45: CSS custom properties
   - Modifica HSL values según necesites

## Optimizaciones para Producción

Antes de publicar, ejecuta:

```bash
# Build optimizado
npm run build

# Analiza tamaño de bundle
npm run preview
```

El proyecto ya incluye:
- ✅ Code splitting automático
- ✅ Tree shaking de imports no usados
- ✅ Minificación de CSS/JS
- ✅ Compresión de assets

## Notas de Performance

La landing está optimizada para:
- Mobile-first responsive design
- Lazy loading de secciones
- Smooth animations sin reflow
- Fonts optimizadas (Google Fonts + variable fonts)

## FAQ

**¿Cómo agrego más secciones?**
- Copia un `<motion.section>` existente
- Usa el patrón `fadeUp(delay)` para animaciones consistentes

**¿Puedo cambiar colores?**
- Sí, edita las variables CSS en `src/App.jsx` línea ~30-45
- O usa Tailwind classes en los elementos

**¿Cómo integro formulario de contacto real?**
- Opción 1: Usa `formspree.io` (gratis, sin backend)
- Opción 2: Usa `mailchimp` o `brevo` para email
- Opción 3: Usa `make.com` para integrar con tu CRM

## Soporte

Para dudas sobre el código o deployment, contacta.

---

**Última actualización:** 2026-07-12
**Versión:** 1.0.0
