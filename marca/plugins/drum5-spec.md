# drum5 · especificación de interfaz (diseño 0.1 estable)

> Generado por `generar_specs.js` desde `drum5.html`: las posiciones y medidas son las de la maqueta a 100 %. No editar a mano; cambiá la maqueta y volvé a generarlo.
> Contrato general: `marca/elementos/PLUGIN_UI.md`. Colores y medidas en JUCE: `vst5_ui_tokens.h` → `vst5::ui::palette (Plugin::drum5, tema)`.

## Resumen
Batería de 16 pads con un sample cada uno y repetición de golpes por pad.

- **Ventana:** 960 × 600 (grande). Cabecera de 40, pie de 28, margen y separación de 12, columna de 300 px. Escala de 75 a 200 % en pasos de 25: todo se multiplica por la escala, nada se reacomoda.
- **Cabecera:** logo, preset anterior, menú de presets, preset siguiente, deshacer, rehacer, ajustes, versión.
- **Pie:** ayuda del control bajo el mouse o con foco (Plex Mono 11, `dim`); a la derecha, tamaño y escala.
- **No cambia ningún identificador de parámetro.** Los nombres de esta especificación son los que se ven.

## Tokens de color por tema
| Token | Oficial | vst5 | Oscuro | Uso |
|---|---|---|---|---|
| `body` | `#A9A8A2` | `#F1EFEA` | `#1B1A18` | cuerpo |
| `panel` | `#B9B8B2` | `#FAF9F6` | `#232220` | paneles |
| `well` | `#97968F` | `#E2DFD8` | `#121110` | fondos hundidos (selector, menú) |
| `line` | `#8A8982` | `#D8D5CE` | `#3A3834` | filetes y pista de perilla |
| `ink` | `#121211` | `#171614` | `#F1EFEA` | texto |
| `dim` | `#33322E` | `#6E6A62` | `#A29E96` | texto secundario, títulos de panel |
| `key` | `#3B3B38` | `#171614` | `#3A3834` | teclas y cuerpo de perilla |
| `keyink` | `#EDEDE8` | `#F1EFEA` | `#F1EFEA` | texto de tecla |
| `screen` | `#1B2316` | `#171614` | `#0E0D0C` | pantallas |
| `screenink` | `#CFE3B4` | `#F1EFEA` | `#F1EFEA` | datos en pantalla |
| `screendim` | `#8AA273` | `#A29E96` | `#8C8880` | datos tenues y marcas de escala |
| `pad` | `#4A4A47` | `#2A2927` | `#3A3834` | pads |
| `ledoff` | `#2E2E2B` | `#4A4742` | `#2A2826` | LED apagado |
| `acc` | `#6FA83A` | `#6FA83A` | `#6FA83A` | color del plugin en pantalla y rellenos |
| `accink` | `#171614` | `#171614` | `#171614` | texto sobre acc |
| `accsurf` | `#3E5E20` | `#649734` | `#6FA83A` | arcos, pestaña elegida, listas, contornos de edición |
| `acckey` | `#6FA83A` | `#6FA83A` | `#6FA83A` | LED encendido, anillo de pad, ícono de segmento elegido |

## Tipografía
| Uso | Fuente | Tamaño |
|---|---|---|
| Etiqueta de perilla, teclas, nombres de fila | Archivo 600 | 12 (teclas 11) |
| Valores, menús, campos, pie, pantallas | IBM Plex Mono 500 | 11 |
| Títulos de panel, etiquetas en mayúsculas | IBM Plex Mono 500, espaciado 0,1 em | 10 |

## Elementos (ventana a 100 %, x e y desde el borde superior izquierdo de la ventana)
| Elemento | Nombre | x, y | Ancho × alto | Ayuda del pie |
|---|---|---|---|---|
| Botón de ícono | Preset anterior | 540, 8 | 24 × 24 |  |
| Menú | Boom bap polvoriento | 568, 8 | 188 × 24 | Preset |
| Botón de ícono | Preset siguiente | 760, 8 | 24 × 24 |  |
| Botón de ícono | Deshacer | 796, 8 | 24 × 24 |  |
| Botón de ícono | Rehacer | 832, 8 | 24 × 24 |  |
| Botón de ícono | Ajustes | 868, 8 | 24 × 24 |  |
| Pad | Pad 13: fx_scratch_baby.wav | 12, 52 | 72 × 90 |  |
| Pad | Pad 14: vox_hey_seco.wav | 92, 52 | 72 × 90 |  |
| Pad | Pad 15: crash_lavado.wav | 172, 52 | 72 × 90 |  |
| Pad | Pad 16: vacío | 252, 52 | 72 × 90 |  |
| Pad | Pad 9: perc_conga_slap.wav | 12, 150 | 72 × 90 |  |
| Pad | Pad 10: tom_grave.wav | 92, 150 | 72 × 90 |  |
| Pad | Pad 11: tom_agudo.wav | 172, 150 | 72 × 90 |  |
| Pad | Pad 12: vacío | 252, 150 | 72 × 90 |  |
| Pad | Pad 5: snare_cajon_reverb.wav, repite | 12, 248 | 72 × 90 |  |
| Pad | Pad 6: clap_seco_01.wav | 92, 248 | 72 × 90 |  |
| Pad | Pad 7: rim_madera.wav | 172, 248 | 72 × 90 |  |
| Pad | Pad 8: 808_largo_La.wav | 252, 248 | 72 × 90 |  |
| Pad | Pad 1: kick_boom_bap_seco.wav | 12, 345 | 72 × 90 |  |
| Pad | Pad 2: snare_tight_ghost.wav | 92, 345 | 72 × 90 |  |
| Pad | Pad 3: hh_cerrado_tape.wav, repite | 172, 345 | 72 × 90 |  |
| Pad | Pad 4: hh_abierto_medio.wav | 252, 345 | 72 × 90 |  |
| Panel | Swing | 12, 447 | 312 × 113 |  |
| Perilla 40 (sin escala) | Swing | 24, 478 | 40 × 72 |  |
| Perilla 40 (sin escala) | Humanizar | 95, 478 | 60 × 72 |  |
| Perilla 40 (sin escala) | Velocidad | 186, 478 | 55 × 72 |  |
| Perilla 40 (sin escala) | Master | 272, 478 | 40 × 72 |  |
| Pestañas | Pantalla | 336, 52 | 300 × 28 |  |
| Pantalla | Forma de onda y repetición del pad elegi | 336, 88 | 300 × 472 |  |
| Panel | Volumen | 648, 52 | 300 × 508 |  |
| Tecla | Cargar | 880, 64 | 56 × 24 | Cargar · elegí un archivo para este pad, o arrastralo encima |
| Menú | Mi5 | 696, 96 | 52 × 24 | Nota MIDI del pad |
| Tecla secundaria | Aprender | 756, 96 | 69 × 24 | Aprender · tocá una nota del controlador para asignarla al pad |
| Pestañas | Controles del pad | 660, 128 | 276 × 28 |  |
| Perilla 56 (sin escala) | Volumen | 664, 168 | 56 × 88 |  |
| Perilla 56 (sin escala) | Pan | 735, 168 | 56 × 88 |  |
| Perilla 56 (sin escala) | Tono | 806, 168 | 56 × 88 |  |
| Perilla 56 (sin escala) | Caída | 877, 168 | 56 × 88 |  |
| Tecla con LED | Invertir | 660, 264 | 87 × 24 | Invertir · el sample al revés |
| Tecla con LED | Silenciar | 755, 264 | 87 × 24 | Silenciar · el pad no suena |
| Tecla con LED | Mono | 849, 264 | 87 × 24 | Mono · un golpe nuevo corta el anterior del mismo pad |
| Menú | Sin choke | 728, 296 | 208 × 24 | Choke · los pads del mismo grupo se cortan entre sí (hat cerrado y abierto) |
| Menú | Main | 728, 328 | 208 × 24 | Salida · Main o una salida aparte para el mixer del DAW |

### Hoja de ajustes (se abre con el botón de ajustes; cubre el cuerpo)
| Elemento | Nombre | x, y | Ancho × alto | Ayuda del pie |
|---|---|---|---|---|
| Panel | Tamaño | 548, 52 | 400 × 287 |  |
| Botón de ícono | Cerrar ajustes | 912, 64 | 24 × 24 |  |
| Selector de 4 | Tamaño | 718, 100 | 147 × 28 | Tamaño de la ventana |
| Selector de 3 | Tema | 718, 140 | 147 × 28 | Tema |
| Menú | 32 voces | 718, 193 | 85 × 24 | Voces · cuántos golpes suenan a la vez; al pasarse se corta el más viejo |
| Menú | Todos los canales | 718, 267 | 144 × 24 | Canal MIDI |
| Menú | Do0 | 718, 303 | 52 × 24 | Rango MIDI desde |
| Menú | Sol10 | 792, 303 | 65 × 24 | Rango MIDI hasta |

## Pantalla
- Pestaña Pad: forma de onda del sample; lo que corta la Caída, en `screendim` al 35 %; marca de Caída de 2 px y manija de 8 × 16 en `acc` (se arrastra).
- Vista de repetición: 1 compás con grilla de 16 (tiempos al 30 %, semicorcheas al 12 %). Cada golpe es una barra en `acc`: alto = fuerza (acento), ancho = duración, posición según ritmo, swing y aceleración. Deriva: línea de 1 px.
- Pestaña Browser: campo de búsqueda + menú de categoría, lista de pantalla, «Copiar a biblioteca» y Exportar.

## Estados (todos los elementos)
| Elemento | Estado | Cómo se ve |
|---|---|---|
| Perilla | Normal / encima / foco / deshabilitada / editando | Arco de 5 px `accsurf` desde 0 o desde el mediodía («en 5») / brillo +12 % / anillo de 2 px `focus` / 40 % / contorno de 1 px `accsurf` en el valor |
| Tecla | Normal / encima / presionada / foco / deshabilitada | Borde inferior de 2 px `keyedge` / brillo +15 % / baja 2 px / anillo de 2 px / 40 % |
| Tecla con LED | Apagada / encendida | LED de 6 px `ledoff` / `acckey` con brillo de 6 px |
| Selector | Elegido | La opción es una tecla (`key`, `keyink`); su ícono en `acckey` |
| Menú | Abierto | Lista propia de filas de 24, elegida con filete de 2 px `accsurf` |
| Pad | Elegido / golpe / vacío | Anillo interior de 2 px `acckey` / se hunde 3 px y se llena de `acc` / 55 % |
| Pestaña | Elegida | Texto `ink` y raya de 2 px `accsurf`; las demás en `dim` |

## Movimiento
| Elemento | Disparo | Animación | Duración |
|---|---|---|---|
| Tecla, pad, selector | Presionar | Desplazamiento y sombra | 80 ms |
| Todo lo clickeable | Pasar el mouse | Brillo o fondo | 150 ms |
| Medidores | Señal | Caída real; pico retenido 1,5 s | 300 ms de caída |
| Valores, curvas, espectros | — | Sin animación de adorno: muestran el dato real | — |
| Con «reducir movimiento» del sistema | — | Sin transiciones | 0 |

## Casos límite
- Pad vacío: VACÍO al 55 %; la pantalla dice cómo cargarlo.
- Búsqueda sin resultados: «Nada con «x». Probá otra palabra o «Todas».»
- Repetir apagado: la vista lo dice y muestra un golpe por toque.
- Choke: tocar un pad corta a los del mismo grupo.
- Velocidad del mouse: de 1 a 127 según la altura del clic.
- Valores en los límites: probados en la maqueta, con unidad y coma decimal en todos.

## Teclado y accesibilidad
- Orden de Tab medido en la maqueta: Preset anterior → Boom bap polvoriento → Preset siguiente → Deshacer → Rehacer → Ajustes → Pad 13: fx_scratch_baby.wav → Pad 14: vox_hey_seco.wav → Pad 15: crash_lavado.wav → Pad 16: vacío → Pad 9: perc_conga_slap.wav → Pad 10: tom_grave.wav → Pad 11: tom_agudo.wav → Pad 12: vacío → Pad 5: snare_cajon_reverb.wa → Pad 6: clap_seco_01.wav → Pad 7: rim_madera.wav → Pad 8: 808_largo_La.wav → Pad 1: kick_boom_bap_seco.wa → Pad 2: snare_tight_ghost.wav → Pad 3: hh_cerrado_tape.wav,  → Pad 4: hh_abierto_medio.wav → Swing → Humanizar → Velocidad → Master → Pad → Forma de onda y repetición d → Cargar → Mi5 → Aprender → Sonido → Volumen → Pan → Tono → Caída → Invertir → Silenciar → Mono → Sin choke → Main.
- Pads: Z X C V (1–4), A S D F, Q W E R, 1 2 3 4 (13–16), como la grilla.
- Lista: flechas recorren, Enter carga en el pad elegido.
- Pantalla: flechas mueven la Caída.
- Perillas: arrastre vertical (200 px todo el rango, 800 con Shift), rueda, flechas (Shift fino), doble clic a fábrica, Enter o clic en el valor para escribirlo.
- Menús: flechas, Inicio y Fin; Enter elige; Esc cierra y devuelve el foco.
- Todo botón de ícono tiene nombre accesible. Contraste: texto 4,5:1 y marcas 3:1 en los tres temas (auditado).
