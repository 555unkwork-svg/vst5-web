# Web de vst5

Web estática con un único endpoint para cobrar con Mercado Pago. Sigue la guía de marca (`BRAND.md`).

## Archivos
- `index.html`: la página completa (estilos y código adentro).
- `productos.json`: **lo único que tenés que tocar para precios.** Precio en USD de cada producto, dólar MEP, descuento para Argentina (0,6) y redondeo (500).
- `precios.js`: calcula el precio en pesos y limpia el carrito. Lo usan la página y el servidor, así nunca muestran precios distintos.
- `api/crear-preferencia.js`: crea el pago en Mercado Pago con los precios de `productos.json` (el navegador solo manda qué productos quiere).
- `logo/`: favicon e ícono.

## Actualizar el precio en pesos (una vez por mes)
Cambiá `dolarMep` en `productos.json` y volvé a publicar. Para comprobar las cuentas:

    node precios.test.js

## Publicar en Vercel
1. Subí esta carpeta a un repo de GitHub (privado) e importalo en vercel.com. No hace falta configurar nada de compilación.
2. En Vercel → Settings → Environment Variables cargá:
   - `MP_ACCESS_TOKEN`: el Access Token de tu cuenta de Mercado Pago (primero el de prueba).
   - `SITE_URL`: la dirección de la web, por ejemplo `https://vst5.com.ar` (sin barra al final).
3. Probá una compra con las tarjetas de prueba de Mercado Pago antes de usar el token real.

## Todavía no hace
- Enviar el email con el instalador y la clave de licencia cuando el pago se aprueba.
- Cobrar fuera de Argentina (Mercado Pago cobra en pesos).
