// Vercel: crea el pago en Mercado Pago. Los precios salen de productos.json, nunca del navegador.
const cfg = require('../productos.json');
const { armarCarrito } = require('../precios');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Usá POST.' });
  const token = process.env.MP_ACCESS_TOKEN;
  if (!token) return res.status(500).json({ error: 'Falta configurar MP_ACCESS_TOKEN en Vercel.' });
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const items = armarCarrito(body.ids, cfg);
  if (!items.length) return res.status(400).json({ error: 'El carrito está vacío.' });
  const sitio = process.env.SITE_URL || `https://${req.headers.host}`;
  const r = await fetch('https://api.mercadopago.com/checkout/preferences', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: items.map(i => ({ id: i.id, title: i.nombre, quantity: 1, unit_price: i.ars, currency_id: 'ARS' })),
      back_urls: { success: `${sitio}/?pago=aprobado`, pending: `${sitio}/?pago=pendiente`, failure: `${sitio}/?pago=rechazado` },
      auto_return: 'approved',
      statement_descriptor: 'VST5',
    }),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok || !data.init_point) return res.status(502).json({ error: 'Mercado Pago no respondió bien. Probá de nuevo en un rato.' });
  res.status(200).json({ url: data.init_point });
};
