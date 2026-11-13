# Interfaces de los plugins · diseño 0.1 estable

Maquetas interactivas y especificaciones para implementar en JUCE. Todas siguen `marca/elementos/PLUGIN_UI.md` (guía v1.2) y usan `vst5-ui.css` y `vst5-ui.js`.

| Plugin | Ventana | Color (familia provisoria) | Tema oficial | Maqueta | Especificación |
|---|---|---|---|---|---|
| clip5 | 800 × 500 | `#D93A2B` rojo | aluminio | `clip5.html` | `clip5-spec.md` |
| sampler5 | 960 × 600 | `#E8862A` naranja | blanco de fábrica | `sampler5.html` | `sampler5-spec.md` |
| drum5 | 960 × 600 | `#6FA83A` verde | caja gris con pantalla verde | `drum5.html` | `drum5-spec.md` |
| eq5 | 960 × 600 | `#2F6FD6` azul | rack grafito | `eq5.html` | `eq5-spec.md` |

## Cómo se pasa a código
1. Copiá `marca/elementos/vst5_ui_tokens.h` y las fuentes (Archivo, IBM Plex Mono) al plugin.
2. Armá el `LookAndFeel` con `vst5::ui::palette (Plugin::<plugin>, tema)`: los tonos `accsurf` y `acckey` ya vienen calculados.
3. Ubicá cada elemento con la tabla de su `-spec.md` (medidas a 100 %; multiplicá por la escala).
4. No cambies identificadores de parámetros: la especificación usa los nombres que se ven, no los ids.
5. Abrí la maqueta al lado para comparar estados, ayuda del pie y teclado.

## Regenerar
- Tokens: `node marca/elementos/generar_tokens.js`.
- Especificaciones (después de cambiar una maqueta): `node marca/plugins/generar_specs.js` (necesita Playwright).

## Pendiente
- Logos de eq5 en el kit (`marca/logo/plugins/`): todavía no existen; las maquetas usan el logo dibujado de `vst5-ui.js`.
- Familias de color: todos los colores siguen provisorios hasta definirlas.
- eq5: los ids de parámetros los fija la etapa 3 del desarrollo; completar la tabla de la maqueta cuando estén.
- `vst5-guia-de-marca.pdf` no tiene los colores nuevos ni la guía v1.2.
