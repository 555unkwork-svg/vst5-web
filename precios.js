// Lógica de precios compartida: la usa la página (para mostrar) y api/crear-preferencia.js (para cobrar).
(function (root) {
  // Precio argentino = USD × dólar MEP × factor, redondeado al múltiplo de `redondeoArs` más cercano.
  function ars(usd, cfg) {
    const r = cfg.redondeoArs;
    return Math.round((usd * cfg.dolarMep * cfg.factorArgentina) / r) * r;
  }
  // Limpia el carrito: ids válidos y disponibles, sin repetidos; si está el pack, saca lo que el pack incluye.
  function armarCarrito(ids, cfg) {
    const P = cfg.productos;
    let lista = [...new Set((Array.isArray(ids) ? ids : []).filter(id => typeof id === 'string' && P[id] && P[id].disponible))];
    if (lista.includes('pack')) lista = lista.filter(id => !P.pack.incluye.includes(id));
    return lista.map(id => ({ id, nombre: P[id].nombre, usd: P[id].usd, ars: ars(P[id].usd, cfg) }));
  }
  const api = { ars, armarCarrito };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Precios = api;
})(this);
