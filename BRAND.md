# vst5 · reglas de marca para plugins

Este archivo resume la guía de marca (`vst5-guia-de-marca.pdf`). Leelo antes de tocar la interfaz, los textos, el nombre o la versión de un plugin vst5. Si algo no está acá, seguí la guía. Si tampoco está en la guía, preguntá antes de inventar.

## Identidad
- Marca: **vst5**. Frase: «Máquinas clásicas, workflow de hoy.»
- El 5 es el mediodía de una perilla de 0 a 10: el punto de partida. Los plugins suenan bien «en 5» (valores por defecto) y después se ajustan.
- Tres palabras: útil, eficiente, personalizable.
- Público: beatmakers de hip hop / boom bap, productores con experiencia, ingenieros de mezcla y mastering. Mercado inicial: Argentina.
- No mencionar a 5unk. Nada de Chacarita, armas ni 420 en piezas públicas.

## Nombres y versiones
- Siempre minúscula y pegado: `vst5`, `clip5`, `drum5`, `sampler5`. Nunca VST5, Clip5, «clip 5».
- Plugins nuevos: función en inglés, una palabra, + 5 (`delay5`, `verb5`, `eq5`, `filter5`). Variantes después del nombre: `clip5 lite`.
- SemVer. Todos salen como `1.0.0` en el lanzamiento. MAJOR si un preset o sesión vieja deja de abrir igual; MINOR funciones nuevas; PATCH arreglos. Pruebas: `1.1.0-beta.1`.
- No cambiar los identificadores internos de parámetros al renombrar en la interfaz.

## Interfaz de cada plugin
- **Cabecera:** logo del plugin (`logo/plugins/<plugin>-horizontal-*.svg`) arriba a la izquierda; versión en IBM Plex Mono arriba a la derecha.
- **Color del plugin** solo para lo encendido, activo o seleccionado. Nunca para fondos grandes ni para texto chico sobre fondo claro.
- **Perillas** con escala 0–10 marcada. Si el parámetro tiene punto neutro, el valor por defecto queda al mediodía.
- **Valores** en IBM Plex Mono con unidad y coma decimal: `−0,3 dB`, `92 BPM`, `4x`.
- **Temas: exactamente tres.** `oficial` (de fábrica: su máquina de referencia + su color), `oscuro`, `vst5` (grises de marca). clip5 pasa de 10 a 3; sampler5 de 6 a 3.
- **Fuentes** (OFL, se pueden embeber): Archivo (títulos 800 al 112–125 % de ancho; controles 600 al 100 %; texto 400) e IBM Plex Mono 500 para valores.
- **Textos** de vos, en español: controles en una o dos palabras, botones que dicen lo que hacen, errores que dicen qué pasó y cómo seguir.

## Color
| Token | Hex | Uso |
|---|---|---|
| tinta | `#171614` | texto, logo, fondo oscuro |
| chasis | `#3A3834` | paneles oscuros, texto secundario fuerte |
| gris-perilla | `#6E6A62` | texto secundario sobre fondo claro |
| aluminio | `#D8D5CE` | bordes, paneles claros, secundario sobre oscuro |
| hueso | `#F1EFEA` | fondo claro, texto sobre oscuro |
| led | `#FF5B14` | acento de la marca (solo piezas de vst5, <10 % de la superficie) |
| clip5 | `#D93A2B` | color de clip5 (familia provisoria) |
| drum5 | `#6FA83A` | color de drum5 (familia provisoria) |
| sampler5 | `#D93A2B` | color de sampler5 (familia provisoria). **Pendiente:** hoy comparte el rojo con clip5; definir si son familia o si sampler5 cambia de color. |
| libres | `#2F6FD6` / `#7A4FD0` / `#1FA6A0` | para familias nuevas |

**Color por familia.** El color no es de cada plugin, sino de su familia. Todos los plugins de una familia usan el mismo color y se distinguen por su tema oficial, su máquina de referencia y su nombre. Las familias todavía no están definidas: hasta entonces, clip5, sampler5 y drum5 conservan su color y cada uno cuenta como su propia familia. No le asignes color a un plugin nuevo sin definir antes su familia.

## Logo
- Perilla con escala 0–10 y el puntero siempre al mediodía, en color LED (o del plugin). Cuerpo siempre del color de la tinta.
- Usar los archivos de `logo/` (letras en curvas). No reescribir el logo con texto, no estirar, no cambiar la fuente, no sombras ni degradés.
- Por debajo de 24 px usar `*-simbolo-chico-*`. Área de respeto: medio símbolo alrededor.
- No usar el logo de VST de Steinberg sin su licencia.

## Venta (referencia)
clip5 lite gratis · clip5 USD 19 · drum5 USD 24 · sampler5 USD 24 · pack USD 49. Argentina: USD × dólar MEP × 0,6, redondeado a $500, revisado cada mes. Pago único; licencia JUCE (plan gratuito) antes de vender; repos privados y claves de licencia.
