# Guía: Editar, Publicar y Medir tu Landing

Escrita para seguirla de corrido. Tiempo total estimado: 1–2 horas la primera vez.

---

## PARTE 1: Cómo editar el contenido

### Qué necesitas instalar (una sola vez)

1. **Node.js** → descarga de https://nodejs.org (versión LTS, el botón verde)
2. **Visual Studio Code** → descarga de https://code.visualstudio.com (editor gratis)

### Cómo abrir y editar

1. Descomprime la carpeta del proyecto donde quieras (ej. Documentos)
2. Abre VS Code → File → Open Folder → selecciona la carpeta
3. **Todo el contenido está en UN solo archivo: `src/App.jsx`**

### Dónde está cada cosa en App.jsx

Usa Ctrl+F en VS Code para buscar estos textos:

| Quieres cambiar | Busca esto |
|---|---|
| Tu email de contacto | `miaguilar022@gmail.com` (aparece 1 vez) |
| Tu WhatsApp | `wa.me/50379597128` |
| Links de Instagram/LinkedIn/Twitter | `instagram.com`, `linkedin.com`, `twitter.com` |
| Título principal | `Resultados en` |
| Texto del hero | `Optimización de campañas` |
| Métricas (los números grandes) | `-26%` |
| Historia personal / Sleek | `De agencias a` |
| Los 4 pasos de metodología | `Auditoría sin compromisos` |

**Regla de oro:** solo cambia lo que está entre comillas `'...'` o entre `>` y `<`. No toques nada que parezca código (className, motion, div).

### Ver tus cambios en vivo

Abre la terminal de VS Code (menú Terminal → New Terminal) y escribe:

```bash
npm install        (solo la primera vez, tarda 2-3 min)
npm run dev
```

Abre http://localhost:3000 en tu navegador. Cada vez que guardes un archivo (Ctrl+S), la página se actualiza sola.

---

## PARTE 2: Publicar en internet (Vercel — gratis)

Vercel es el hosting estándar para este tipo de proyecto. Gratis, con SSL (candado https) automático.

### Paso a paso

1. Crea cuenta en https://vercel.com (usa tu Google/GitHub)
2. Crea cuenta en https://github.com si no tienes
3. En GitHub: botón "New repository" → nombre `miguel-landing` → Create
4. Sube tu proyecto a GitHub. En la terminal de VS Code:

```bash
git init
git add .
git commit -m "landing inicial"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/miguel-landing.git
git push -u origin main
```

5. En Vercel: "Add New Project" → Import → selecciona `miguel-landing` → Deploy
6. En 1 minuto tienes tu URL: `miguel-landing.vercel.app`

### Flujo de trabajo de ahí en adelante

Cada vez que edites algo:

```bash
git add .
git commit -m "descripción del cambio"
git push
```

Vercel detecta el cambio y actualiza tu sitio solo en ~1 minuto. Así de simple.

### Dominio propio (recomendado para pauta)

**Importante para ads:** un dominio propio (ej. `miguelaguilar.digital` o `aguilarperformance.com`) da más confianza que `.vercel.app` y mejora el Event Match Quality del pixel.

1. Compra el dominio en Namecheap o Porkbun (~$10-12/año)
2. En Vercel: tu proyecto → Settings → Domains → agrega tu dominio
3. Vercel te da 2 registros DNS → los pegas en Namecheap (Advanced DNS)
4. Listo en 10-30 min, SSL automático

---

## PARTE 3: Conectar el Pixel de Meta

Ya dejé el código instalado en `index.html`. Solo te falta pegar tu ID.

### Obtener tu Pixel ID

1. Ve a https://business.facebook.com → Events Manager
2. Si no tienes pixel: "Conectar orígenes de datos" → Web → Pixel de Meta
3. Copia el ID (número de ~15 dígitos)

### Instalarlo

1. Abre `index.html` en VS Code
2. Busca `TU_PIXEL_ID` (aparece **2 veces**) y reemplázalo con tu número
3. Guarda, haz commit y push

### Verificar que funciona

1. Instala la extensión de Chrome **Meta Pixel Helper**
2. Entra a tu sitio publicado → el ícono debe mostrar "PageView" en verde
3. En Events Manager → Test Events → pon tu URL y navega: deberías ver PageView

### Eventos que ya están configurados (no tienes que hacer nada)

| Evento | Cuándo se dispara | Úsalo para |
|---|---|---|
| `PageView` | Al cargar la página | Audiencias de retargeting |
| `Lead` | Cuando alguien envía el formulario del hero | **Optimización de campañas de leads** |
| `Contact` | Click en "Enviar email" o "WhatsApp" | Conversión secundaria, retargeting |

Cuando crees tu campaña en Ads Manager, optimiza por **Lead** o **Contact** según tu objetivo.

### API de Conversiones (para después, no urgente)

Con iOS14+ el pixel de navegador pierde ~20-30% de eventos. Cuando ya tengas pauta corriendo, configura la Conversions API. La ruta fácil sin servidor: Events Manager → tu pixel → Configuración → "Gateway de API de conversiones" o integración vía GTM server-side. No lo necesitas para arrancar.

---

## PARTE 4: Conectar Google Analytics 4

También ya está el código en `index.html`.

1. Ve a https://analytics.google.com → Admin → Crear propiedad
2. Crea un "Flujo de datos" tipo Web con tu URL
3. Copia el **ID de medición** (formato `G-XXXXXXXXXX`)
4. En `index.html` busca `G-XXXXXXXXXX` (aparece **2 veces**) y reemplaza
5. Commit + push

Los eventos `generate_lead` y `contact_click` ya se envían automáticamente. Los verás en GA4 → Informes → Interacción → Eventos (tardan ~24h en aparecer la primera vez).

---

## PARTE 5: Orden recomendado de ejecución

1. ✅ Edita contenido (email, WhatsApp, redes) — 20 min
2. ✅ Sube a GitHub + Vercel — 30 min
3. ✅ Compra dominio y conéctalo — 15 min + espera DNS
4. ✅ Pega Pixel ID y GA4 ID → push — 10 min
5. ✅ Verifica con Pixel Helper y Test Events — 10 min
6. ✅ Crea audiencia de retargeting en Meta (visitantes últimos 30 días)
7. ✅ Deja el pixel juntando data 1-2 semanas con tráfico orgánico (comparte el link en tu Instagram, LinkedIn, firma de correo)
8. ✅ Recién ahí lanza pauta fría optimizando por Lead

---

## Advertencia honesta sobre el paso 8

Tú sabes esto mejor que nadie por tu trabajo, pero te lo digo como lo dirías a un cliente: **no lances pauta el día 1 con pixel virgen.** Sin data, Meta no sabe a quién mostrarle el ad y quemas presupuesto en aprendizaje. Mueve tráfico orgánico primero (tus 6K de Sleek, tu red de LinkedIn, grupos de emprendedores SV), deja que el pixel registre 50-100 eventos, y entonces sí escala con paid.

Segundo punto: el destino de conversión más natural para tu tipo de servicio es **WhatsApp**, no el formulario de email. Considera que tu primera campaña sea de objetivo "Mensajes" directo a WhatsApp Business, con la landing como respaldo de credibilidad en el perfil del anuncio. El CPL en LATAM por WhatsApp suele ser 30-50% más barato que por formulario web.

---

## Problemas comunes

| Problema | Solución |
|---|---|
| `npm install` da error | Verifica que instalaste Node.js LTS y reinicia VS Code |
| La página sale en blanco | Revisa la terminal, casi siempre es una comilla o `<` borrado por error |
| Pixel Helper no detecta nada | ¿Reemplazaste TU_PIXEL_ID en los DOS lugares? ¿Hiciste push? |
| El dominio no carga | DNS tarda hasta 24h, usualmente 30 min |
| Cambios no se ven en el sitio | ¿Hiciste git add + commit + push? Revisa en vercel.com que el deploy terminó |
