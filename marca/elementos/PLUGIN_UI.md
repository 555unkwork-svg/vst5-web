# vst5 · guía de elementos de interfaz (v1.1)

Este es el contrato visual de todos los plugins vst5. Complementa `BRAND.md`.
- Referencia visual interactiva: `marca/elementos/index.html`. Abrila en un navegador.
- Colores y medidas en código: `vst5_ui_tokens.h`. Copialo al plugin y no lo edites a mano: se regenera con `node marca/elementos/generar_tokens.js` (colores de `vst5-ui.js`, medidas en la plantilla del generador).

**Regla general:** cada plugin tiene su máquina y su color, pero se arma con estas piezas, estas medidas y estas reglas. Si un plugin necesita un elemento que no está acá, se diseña siguiendo las mismas reglas y después se suma a esta guía.

**Sumar y probar:** cada diseño nuevo puede proponer piezas. Las que funcionan pasan a la guía y quedan para los que vienen. Así cada plugin tiene algo propio y, con el tiempo, el estilo vst5 queda en las piezas compartidas.

## Ventana
| Zona | Medida | Contenido |
|---|---|---|
| Cabecera | 40 px | Logo del plugin (SVG del kit) a la izquierda. A la derecha, en este orden: preset anterior, menú de presets, preset siguiente, deshacer, rehacer, ajustes (tamaño y tema), versión en Plex Mono. |
| Cuerpo | margen 12, separación 12 | Pantalla a la izquierda: lo que el plugin muestra. Columna de controles de 264 px a la derecha: lo que el plugin hace. Debajo de la pantalla, la fila propia del plugin (medidores o pads). |
| Pie | 28 px | Ayuda en Plex Mono 11 px: al pasar por un control dice qué hace y su valor exacto. A la derecha, el tamaño de ventana. |
| Tamaño | 800 × 500 | Escala de 75 a 200 % en pasos de 25. Todo vectorial. El tamaño se recuerda por plugin. |
| Ventana grande | 960 × 600 | Para plugins densos (muestreadores, sintetizadores). Columna de controles de 300 px; el resto igual. Se usa solo si en la base no entra lo que se toca siempre. |
| Grilla | 4 px | Espacios 4 / 8 / 12 / 16 / 24. Radios: 3 en controles, 6 en paneles, pantallas y pads. |

## Elementos
- **Perilla**: 72 / 56 / 40 px. La de 40 lleva solo arco, sin escala.
  - Escala 0–10 con la marca del 5 en el color del plugin. Arco de valor de 5 px en el mismo color.
  - Bipolar (nace en 5) si el parámetro tiene punto neutro; si no, nace en 0.
  - Etiqueta en Archivo 600, 12 px. Valor debajo, en Plex Mono 500, 11 px, siempre con unidad.
- **Tecla**: 24 px de alto, relleno lateral de 10, radio 3, Archivo 600, 11 px.
  - Borde inferior de 2 px; al presionar baja 2 px en 80 ms.
  - Encendida o apagada: se indica con el LED de 6 px. La tecla no cambia de color.
  - Principal (color del plugin): una sola por panel o diálogo. Secundaria: solo contorno.
- **Selector segmentado**: para 2 a 5 opciones excluyentes; con más, usá un menú. Fondo hundido; la opción elegida es una tecla, con el ícono en el color del plugin. Segmentos de 24 px de alto y 32 de ancho como mínimo.
- **Menú**: 24 px, Plex Mono 11 px, lista propia. Nunca la del sistema operativo.
- **Lista de menú**: se abre debajo del menú, panel con radio 6, relleno 4 y sombra.
  - Filas de 24 px, Plex Mono 11 px, relleno lateral 8. Si el nombre no entra, se corta con «…» y el nombre completo va en la ayuda del pie.
  - Encabezados de grupo (banco de presets) en Plex Mono 10 px, mayúsculas, no clickeables.
  - Encima o con flechas: fondo hundido. Elegida: filete izquierdo de 2 px del color del plugin.
  - Enter elige, Esc cierra y devuelve el foco al menú; clic afuera cierra.
- **Hoja de ajustes**: se abre con el botón de ajustes de la cabecera. Cubre el cuerpo (entre cabecera y pie) con el fondo al 70 % y muestra un panel de 400 px a la derecha.
  - Título «Ajustes» en mayúsculas y botón de ícono para cerrar.
  - Filas de dos columnas: nombre (Archivo 600, 12 px, 150 px de ancho) y control (selector, tecla con LED o menú).
  - Siempre trae Tamaño y Tema; después, lo que el plugin usa una vez por sesión.
  - Esc o clic afuera cierra y devuelve el foco al botón de ajustes. Tab no sale de la hoja mientras está abierta.
- **Campo de valor**: pantalla chica de 22 px, valor alineado a la derecha y con unidad. Al editar, contorno del color del plugin. Enter confirma, Esc cancela. Acepta coma o punto.
- **Campo arrastrable**: el campo de valor que además se maneja como una perilla. Para valores que se ajustan seguido pero no merecen perilla (tempo, sensibilidad, inicio y final).
  - Arrastre vertical: 200 px recorren todo el rango; con Shift, 800. Rueda y flechas; con Shift, paso fino.
  - Doble clic vuelve al valor de fábrica. Clic sin arrastrar o Enter abre la edición.
  - Cursor de arrastre vertical. Comportamiento compartido: `field()` en `vst5-ui.js`.
- **Pestañas**: para repartir los controles de la columna en 2 a 4 grupos. Nunca para lo que se toca siempre.
  - 28 px de alto, Plex Mono 11 px en mayúsculas, relleno lateral 12.
  - Elegida: texto en tinta y raya inferior de 2 px del color del plugin. Las demás, en el texto secundario.
  - Flechas izquierda y derecha cambian de pestaña. Tab entra solo a la elegida.
- **Pantalla**: siempre oscura en los tres temas, con sombra interior y grilla al 25 %. Los datos van en el tono de pantalla; las marcas (cortes, techo, pasos activos), en el color del plugin.
- **Pantalla con puntos arrastrables**: la pantalla cuando se edita lo que muestra (cortes, bandas, puntos de una envolvente).
  - Marca: línea de 2 px del color del plugin; se toma a 6 px de distancia y al pasar se engrosa a 3.
  - Etiqueta de la marca arriba, de 16 px: contorno del color del plugin; la elegida, rellena, con texto `accink`.
  - Lo elegido: tinte del color del plugin al 12 % y manija de 8 × 16 px para su otro extremo.
  - Imán opcional (golpes, grilla, cruce por cero); Shift lo suelta mientras arrastrás.
  - Rueda: zoom alrededor del cursor. Doble clic: punto nuevo. Con teclado: flechas mueven lo elegido y Supr lo borra.
- **Mini vista**: franja de 28 px al pie de una pantalla con zoom. Muestra todo el material en el tono de pantalla, la parte visible como recuadro de 1 px y los límites de uso con corchetes del color del plugin, que se arrastran. Arrastrar en el resto de la franja mueve la parte visible.
- **Panel**: agrupa controles relacionados. Título en Plex Mono 10 px, en mayúsculas y con espaciado.
- **Medidor**: barras de 6 px separadas 3 px, siempre sobre fondo de pantalla.
  - El valor va en el tono de pantalla. Nada de escalas verde-amarillo-rojo.
  - Pico retenido: 1,5 s. Caída: 300 ms.
  - Recorte: franja roja arriba que queda hasta hacer clic en el medidor.
- **Pad**: 56 × 56 px (44 de alto en filas compactas), radio 6. Número arriba (11 px) y nombre abajo (10 px, en mayúsculas), en Plex Mono.
  - Golpe: se hunde 3 px y se ilumina en el color del plugin.
  - Elegido: anillo interior de 2 px del color del plugin.
- **Botón de ícono**: 24 × 24 px con ícono de 14 px, trazo 1,8 y puntas redondeadas. Sin fondo; al pasar el mouse, fondo hundido. Siempre con nombre accesible.

## Temas
Cada plugin tiene exactamente tres temas: **oficial** (el de fábrica, su máquina y su color), **vst5** (claro, con los grises de la marca) y **oscuro**. Los valores exactos están en `vst5_ui_tokens.h` y en la sección 04 de la página.

El color del plugin solo marca lo encendido, lo activo, lo seleccionado y el valor de las perillas. Nunca se usa para texto sobre fondo claro ni para superficies grandes.

**Tres tonos del color del plugin.** `acc` es el color tal cual: va en la pantalla (marcas, cortes, techo) y como relleno con su texto `accink` (golpe del pad, tecla principal). `acckey` es el mismo tono ajustado a 3:1 contra la tecla y el pad: va en el LED encendido, el anillo del pad elegido y el ícono del segmento elegido. `accsurf` es el mismo tono oscurecido o aclarado lo justo para llegar a 3:1 (WCAG 1.4.11) contra el cuerpo y el panel del tema: va en el arco y la marca del 5 de las perillas, la raya de la pestaña elegida, la fila elegida de una lista y el contorno al editar. Los dos se calculan solos (`toneFor()` en `vst5-ui.js`): se oscurece o aclara el color lo justo hasta 3:1; si ya llega, quedan iguales a `acc`.

**Color por familia.** El color viene de la familia del plugin. Los plugins de una misma familia comparten color y se diferencian por su tema oficial. Las familias se definen más adelante; mientras tanto, cada plugin conserva su color. clip5 pasó a rojo `#D93A2B` y sampler5 a naranja `#E8862A`. Colores libres para familias nuevas: `#2F6FD6`, `#7A4FD0` y `#1FA6A0`. Un color nuevo tiene que distinguirse a simple vista de los demás y llevar su color de texto (`accink`) con contraste de 4,5:1.

## Interacción
- **Perillas:**
  - Arrastre vertical; con Shift, ajuste fino.
  - Rueda del mouse.
  - Flechas del teclado; con Shift, más fino.
  - Doble clic vuelve al valor de fábrica.
  - Clic en el valor abre la edición numérica.
- **Teclado:** Tab recorre los controles con un anillo de foco de 2 px. Enter edita y Esc cancela o cierra.
- **Movimiento:** presionar dura 80 ms y pasar el mouse por encima, 150 ms. Los valores y los medidores muestran el dato real, sin animaciones de adorno.
- **Mínimos:** 24 × 24 px para todo lo clickeable. Textos de 10 px solo en etiquetas en mayúsculas; el resto, 11–12 px. Contraste 4,5:1 en los tres temas.
- **Textos:** de vos, una o dos palabras por control, con unidades (dB, Hz, %, st, ms) y coma decimal.

## Cómo adaptar un plugin existente
1. Copiá `vst5_ui_tokens.h` y las fuentes Archivo e IBM Plex Mono (con licencia OFL) al proyecto, como BinaryData.
2. Armá un `LookAndFeel` que dibuje perilla, tecla, menú, campo y botón de ícono con estos tokens.
3. Reordená la ventana: cabecera, pantalla con la columna de controles y pie.
4. Reducí los temas a oficial, vst5 y oscuro. Conservá los identificadores internos de los parámetros.
5. Revisá el plugin con la página de referencia al lado, en los tres temas.
