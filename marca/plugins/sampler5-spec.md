# sampler5 · especificación de interfaz (diseño 0.1 estable)

> Generado por `generar_specs.js` desde `sampler5.html`: las posiciones y medidas son las de la maqueta a 100 %. No editar a mano; cambiá la maqueta y volvé a generarlo.
> Contrato general: `marca/elementos/PLUGIN_UI.md`. Colores y medidas en JUCE: `vst5_ui_tokens.h` → `vst5::ui::palette (Plugin::sampler5, tema)`.

## Resumen
Muestreador: corta un audio en hasta 16 pads y toca cada corte con su propio sonido.

- **Ventana:** 960 × 600 (grande). Cabecera de 40, pie de 28, margen y separación de 12, columna de 300 px. Escala de 75 a 200 % en pasos de 25: todo se multiplica por la escala, nada se reacomoda.
- **Cabecera:** logo, preset anterior, menú de presets, preset siguiente, deshacer, rehacer, ajustes, versión.
- **Pie:** ayuda del control bajo el mouse o con foco (Plex Mono 11, `dim`); a la derecha, tamaño y escala.
- **No cambia ningún identificador de parámetro.** Los nombres de esta especificación son los que se ven.

## Tokens de color por tema
| Token | Oficial | vst5 | Oscuro | Uso |
|---|---|---|---|---|
| `body` | `#EDEDEA` | `#F1EFEA` | `#1B1A18` | cuerpo |
| `panel` | `#F7F7F4` | `#FAF9F6` | `#232220` | paneles |
| `well` | `#DEDFDB` | `#E2DFD8` | `#121110` | fondos hundidos (selector, menú) |
| `line` | `#CBCCC7` | `#D8D5CE` | `#3A3834` | filetes y pista de perilla |
| `ink` | `#141516` | `#171614` | `#F1EFEA` | texto |
| `dim` | `#5F625E` | `#6E6A62` | `#A29E96` | texto secundario, títulos de panel |
| `key` | `#1E1F21` | `#171614` | `#3A3834` | teclas y cuerpo de perilla |
| `keyink` | `#F5F3EE` | `#F1EFEA` | `#F1EFEA` | texto de tecla |
| `screen` | `#0B0C0D` | `#171614` | `#0E0D0C` | pantallas |
| `screenink` | `#F5F3EE` | `#F1EFEA` | `#F1EFEA` | datos en pantalla |
| `screendim` | `#9C9F9A` | `#A29E96` | `#8C8880` | datos tenues y marcas de escala |
| `pad` | `#1E1F21` | `#2A2927` | `#3A3834` | pads |
| `ledoff` | `#4A4C4A` | `#4A4742` | `#2A2826` | LED apagado |
| `acc` | `#E8862A` | `#E8862A` | `#E8862A` | color del plugin en pantalla y rellenos |
| `accink` | `#171614` | `#171614` | `#171614` | texto sobre acc |
| `accsurf` | `#C87324` | `#C87324` | `#E8862A` | arcos, pestaña elegida, listas, contornos de edición |
| `acckey` | `#E8862A` | `#E8862A` | `#E8862A` | LED encendido, anillo de pad, ícono de segmento elegido |

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
| Menú | Boom bap 92 · La menor | 568, 8 | 188 × 24 | Preset |
| Botón de ícono | Preset siguiente | 760, 8 | 24 × 24 |  |
| Botón de ícono | Deshacer | 796, 8 | 24 × 24 |  |
| Botón de ícono | Rehacer | 832, 8 | 24 × 24 |  |
| Botón de ícono | Ajustes | 868, 8 | 24 × 24 |  |
| Tecla | Cargar | 12, 52 | 56 × 24 | Cargar · WAV, AIFF, FLAC, MP3 u OGG de hasta 2 minutos. También podés arrastrar el archivo |
| Campo arrastrable | Tempo | 117, 53 | 76 × 22 | Tempo del audio · arrastrá, escribí o usá ÷2 y ×2 |
| Tecla secundaria | Tempo a la mitad | 201, 52 | 34 × 24 | ÷2 · la mitad del tempo detectado |
| Tecla secundaria | Tempo al doble | 243, 52 | 34 × 24 | ×2 · el doble del tempo detectado |
| Tecla secundaria | Detectar | 285, 52 | 65 × 24 | Detectar · vuelve a calcular el tempo y la tonalidad |
| Tecla con LED | Invertir todo | 540, 52 | 96 × 24 | Invertir todo · el audio entero al revés |
| Pantalla | Cortes. Flechas mueven el corte elegido; | 12, 84 | 624 × 338 |  |
| Selector de 5 | Cortar por | 62, 428 | 255 × 28 | Cortar por · cómo se reparte el audio en los pads |
| Campo arrastrable | Sensibilidad | 366, 431 | 56 × 22 | Sensibilidad · cuántos golpes entran como cortes |
| Tecla | Regenerar | 495, 430 | 75 × 24 | Regenerar · vuelve a cortar; los favoritos se quedan |
| Tecla con LED | Imán | 578, 430 | 58 × 24 | Imán · los cortes se pegan al moverlos (Shift lo suelta) |
| Pad | Pad 1: bombo | 12, 466 | 73 × 44 |  |
| Pad | Pad 2: caja | 91, 466 | 73 × 44 |  |
| Pad | Pad 3: bombo | 170, 466 | 73 × 44 |  |
| Pad | Pad 4: caja | 248, 466 | 73 × 44 |  |
| Pad | Pad 5: bombo | 327, 466 | 73 × 44 |  |
| Pad | Pad 6: caja | 406, 466 | 73 × 44 |  |
| Pad | Pad 7: bombo | 485, 466 | 73 × 44 |  |
| Pad | Pad 8: bombo | 563, 466 | 73 × 44 |  |
| Pad | Pad 9: caja | 12, 516 | 73 × 44 |  |
| Pad | Pad 10: bombo | 91, 516 | 73 × 44 |  |
| Pad | Pad 11: caja | 170, 516 | 73 × 44 |  |
| Pad | Pad 12: bombo | 248, 516 | 73 × 44 |  |
| Pad | Pad 13: caja | 327, 516 | 73 × 44 |  |
| Pad | Pad 14: bombo | 406, 516 | 73 × 44 |  |
| Pad | Pad 15: caja | 485, 516 | 73 × 44 |  |
| Pad | Pad 16: bombo | 563, 516 | 73 × 44 |  |
| Panel | Master | 648, 52 | 300 × 508 |  |
| Perilla 40 (sin escala) | Master | 683, 85 | 40 × 72 |  |
| Perilla 40 (sin escala) | Pan | 778, 85 | 40 × 72 |  |
| Perilla 40 (sin escala) | Tono | 873, 85 | 40 × 72 |  |
| Menú | Tonalidad: La menor | 660, 165 | 205 × 24 | Llevar a tonalidad · calcula los semitonos de Tono |
| Tecla secundaria | Silencio | 873, 165 | 63 × 24 | Silencio · corta todo lo que suena |
| Pestañas | Controles | 660, 197 | 276 × 28 |  |
| Tecla con LED | Favorito | 861, 237 | 75 × 24 | Favorito · el corte no se pierde al regenerar |
| Perilla 40 (sin escala) | Volumen | 667, 269 | 49 × 72 |  |
| Perilla 40 (sin escala) | Pan | 743, 269 | 40 × 72 |  |
| Perilla 40 (sin escala) | Tono | 814, 269 | 40 × 72 |  |
| Perilla 40 (sin escala) | Fino | 885, 269 | 40 × 72 |  |
| Perilla 40 (sin escala) | Ganancia | 665, 349 | 53 × 72 |  |
| Perilla 40 (sin escala) | Velocidad | 735, 349 | 55 × 72 |  |
| Perilla 40 (sin escala) | Ataque | 814, 349 | 40 × 72 |  |
| Perilla 40 (sin escala) | Liberación | 875, 349 | 58 × 72 |  |
| Campo arrastrable | Inicio del corte | 710, 429 | 68 × 22 | Inicio · dónde arranca el corte |
| Campo arrastrable | Final del corte | 868, 429 | 68 × 22 | Final · dónde termina el corte |
| Tecla con LED | Invertir | 660, 459 | 87 × 24 | Invertir · el corte al revés |
| Tecla con LED | Loop | 755, 459 | 87 × 24 | Loop · repite mientras mantenés la nota |
| Tecla con LED | Silenciar | 849, 459 | 87 × 24 | Silenciar · el pad no suena |
| Selector de 2 | Reproducción | 660, 491 | 276 × 28 | Mantener suena mientras dura la nota · Disparo suena entero |

### Hoja de ajustes (se abre con el botón de ajustes; cubre el cuerpo)
| Elemento | Nombre | x, y | Ancho × alto | Ayuda del pie |
|---|---|---|---|---|
| Panel | Tamaño | 548, 52 | 400 × 439 |  |
| Botón de ícono | Cerrar ajustes | 912, 64 | 24 × 24 |  |
| Selector de 4 | Tamaño | 718, 100 | 147 × 28 | Tamaño de la ventana |
| Selector de 3 | Tema | 718, 140 | 147 × 28 | Tema |
| Selector de 2 | Polifonía | 718, 193 | 86 × 28 | Mono · una nota a la vez |
| Menú | 16 voces | 812, 195 | 85 × 24 | Voces · cuántas notas suenan juntas |
| Menú | Auto | 718, 233 | 58 × 24 | Imán · a qué se pega un corte al moverlo |
| Tecla con LED | Activa | 718, 307 | 65 × 24 | Entrada MIDI · los pads responden al teclado o al piano roll |
| Menú | Todos los canales | 791, 307 | 144 × 24 | Canal MIDI |
| Menú | Do0 | 718, 343 | 52 × 24 | Rango MIDI desde |
| Menú | Sol10 | 792, 343 | 65 × 24 | Rango MIDI hasta |
| Tecla con LED | Seguir pad | 718, 379 | 89 × 24 | Seguir pad · el pad que tocás por MIDI pasa a ser el elegido |
| Tecla secundaria | Aprender | 815, 379 | 69 × 24 | Aprender · tocá una nota para asignarla al pad elegido |
| Tecla con LED | Teclas | 718, 415 | 66 × 24 | Teclas · el pad elegido se toca cromático |
| Menú | Do5 | 827, 415 | 52 × 24 | Nota base de Teclas |
| Selector de 2 | Aftertouch | 718, 451 | 129 × 28 | Aftertouch · presión a volumen |

## Pantalla
- Forma de onda de la zona visible; el corte elegido en el tono de pantalla pleno, el resto en `screendim`; fuera de la zona usada, al 30 %.
- Cortes: líneas de 2 px en `acc` con etiqueta de 16 px arriba (elegida rellena con `accink`); se toman a 6 px y se engrosan a 3 al pasar.
- Manija de 8 × 16 px en el final del corte elegido. Tinte del 12 % de `acc` sobre el corte elegido.
- Golpes detectados: marcas tenues abajo; se avivan 1,5 s al cambiar la sensibilidad.
- Mini vista de 28 px: audio entero, recuadro de lo visible, corchetes de la zona en `acc` (se arrastran).
- Cabezal de reproducción: línea de 1,5 px en el tono de pantalla mientras suena un pad.

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
- A mano: arranca con un solo corte; los pads sin corte dicen VACÍO al 55 %.
- 16 cortes y doble clic: no crea más (el pie lo dice).
- Favoritos: no se pierden al regenerar.
- Nombre de preset o de archivo largo: «…».
- Valores en los límites: probados en la maqueta, con unidad y coma decimal en todos.

## Teclado y accesibilidad
- Orden de Tab medido en la maqueta: Preset anterior → Boom bap 92 · La menor → Preset siguiente → Deshacer → Rehacer → Ajustes → Cargar → Tempo → Tempo a la mitad → Tempo al doble → Detectar → Invertir todo → Cortes. Flechas mueven el co → Golpes → Grilla → Iguales → Azar → A mano → Sensibilidad → Regenerar → Imán → Pad 1: bombo → Pad 2: caja → Pad 3: bombo → Pad 4: caja → Pad 5: bombo → Pad 6: caja → Pad 7: bombo → Pad 8: bombo → Pad 9: caja → Pad 10: bombo → Pad 11: caja → Pad 12: bombo → Pad 13: caja → Pad 14: bombo → Pad 15: caja → Pad 16: bombo → Master → Pan → Tono → Tonalidad: La menor → Silencio → Pad → Favorito → Volumen.
- Pads: teclas 1–8 y Q–I; Enter o espacio sobre un pad lo toca.
- Pantalla: flechas mueven el corte elegido, Supr lo borra.
- Pestañas: flechas izquierda y derecha.
- Perillas: arrastre vertical (200 px todo el rango, 800 con Shift), rueda, flechas (Shift fino), doble clic a fábrica, Enter o clic en el valor para escribirlo.
- Menús: flechas, Inicio y Fin; Enter elige; Esc cierra y devuelve el foco.
- Todo botón de ícono tiene nombre accesible. Contraste: texto 4,5:1 y marcas 3:1 en los tres temas (auditado).
