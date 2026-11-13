# clip5 · especificación de interfaz (diseño 0.1 estable)

> Generado por `generar_specs.js` desde `clip5.html`: las posiciones y medidas son las de la maqueta a 100 %. No editar a mano; cambiá la maqueta y volvé a generarlo.
> Contrato general: `marca/elementos/PLUGIN_UI.md`. Colores y medidas en JUCE: `vst5_ui_tokens.h` → `vst5::ui::palette (Plugin::clip5, tema)`.

## Resumen
Clipper de mastering: recorta los picos por encima del Techo con cuatro curvas, suma cuerpo con Densidad y mezcla en paralelo.

- **Ventana:** 800 × 500 (base). Cabecera de 40, pie de 28, margen y separación de 12, columna de 264 px. Escala de 75 a 200 % en pasos de 25: todo se multiplica por la escala, nada se reacomoda.
- **Cabecera:** logo, preset anterior, menú de presets, preset siguiente, deshacer, rehacer, ajustes, versión.
- **Pie:** ayuda del control bajo el mouse o con foco (Plex Mono 11, `dim`); a la derecha, tamaño y escala.
- **No cambia ningún identificador de parámetro.** Los nombres de esta especificación son los que se ven.

## Tokens de color por tema
| Token | Oficial | vst5 | Oscuro | Uso |
|---|---|---|---|---|
| `body` | `#C9C6BE` | `#F1EFEA` | `#1B1A18` | cuerpo |
| `panel` | `#D8D5CE` | `#FAF9F6` | `#232220` | paneles |
| `well` | `#B8B5AD` | `#E2DFD8` | `#121110` | fondos hundidos (selector, menú) |
| `line` | `#A9A59C` | `#D8D5CE` | `#3A3834` | filetes y pista de perilla |
| `ink` | `#171614` | `#171614` | `#F1EFEA` | texto |
| `dim` | `#46423C` | `#6E6A62` | `#A29E96` | texto secundario, títulos de panel |
| `key` | `#232220` | `#171614` | `#3A3834` | teclas y cuerpo de perilla |
| `keyink` | `#F1EFEA` | `#F1EFEA` | `#F1EFEA` | texto de tecla |
| `screen` | `#121211` | `#171614` | `#0E0D0C` | pantallas |
| `screenink` | `#F1EFEA` | `#F1EFEA` | `#F1EFEA` | datos en pantalla |
| `screendim` | `#A29E96` | `#A29E96` | `#8C8880` | datos tenues y marcas de escala |
| `pad` | `#232220` | `#2A2927` | `#3A3834` | pads |
| `ledoff` | `#4A4742` | `#4A4742` | `#2A2826` | LED apagado |
| `acc` | `#D93A2B` | `#D93A2B` | `#D93A2B` | color del plugin en pantalla y rellenos |
| `accink` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | texto sobre acc |
| `accsurf` | `#C83528` | `#D93A2B` | `#D93A2B` | arcos, pestaña elegida, listas, contornos de edición |
| `acckey` | `#D93A2B` | `#D93A2B` | `#DE5244` | LED encendido, anillo de pad, ícono de segmento elegido |

## Tipografía
| Uso | Fuente | Tamaño |
|---|---|---|
| Etiqueta de perilla, teclas, nombres de fila | Archivo 600 | 12 (teclas 11) |
| Valores, menús, campos, pie, pantallas | IBM Plex Mono 500 | 11 |
| Títulos de panel, etiquetas en mayúsculas | IBM Plex Mono 500, espaciado 0,1 em | 10 |

## Elementos (ventana a 100 %, x e y desde el borde superior izquierdo de la ventana)
| Elemento | Nombre | x, y | Ancho × alto | Ayuda del pie |
|---|---|---|---|---|
| Botón de ícono | Preset anterior | 396, 8 | 24 × 24 |  |
| Menú | En 5 | 424, 8 | 168 × 24 |  |
| Botón de ícono | Preset siguiente | 596, 8 | 24 × 24 |  |
| Botón de ícono | Deshacer | 632, 8 | 24 × 24 |  |
| Botón de ícono | Rehacer | 668, 8 | 24 × 24 |  |
| Botón de ícono | Ajustes | 704, 8 | 24 × 24 |  |
| Pantalla | Historia · −4 sTecho −1,0 dB ES | 12, 52 | 500 × 283 |  |
| Medidor | Medidor de entrada y salida. Clic borra  | 452, 78 | 52 × 249 |  |
| Panel | Procesada | 12, 347 | 228 × 113 |  |
| Perilla 40 (sin escala) | Procesada | 24, 378 | 60 × 72 |  |
| Perilla 40 (sin escala) | Original | 96, 378 | 44 × 72 |  |
| Tecla con LED | Enlace | 160, 426 | 68 × 24 |  |
| Panel | Comparar | 248, 347 | 94 × 113 |  |
| Selector de 2 | Estado A/B | 260, 378 | 70 × 28 |  |
| Tecla secundaria | Copiar | 260, 414 | 70 × 24 |  |
| Panel | Sobremuestreo | 350, 347 | 162 × 113 |  |
| Selector de 4 | Sobremuestreo | 362, 378 | 138 × 28 |  |
| Panel | Techo | 524, 52 | 264 × 408 |  |
| Selector de 4 | Curva de recorte | 536, 93 | 240 × 28 |  |
| Perilla 72 (sin escala) | Techo | 558, 138 | 72 × 104 |  |
| Perilla 72 (sin escala) | Densidad | 682, 138 | 72 × 104 |  |
| Perilla 56 (sin escala) | Suavizado | 544, 258 | 58 × 88 |  |
| Perilla 40 (sin escala) | Entrada | 634, 274 | 44 × 72 |  |
| Perilla 40 (sin escala) | Salida | 719, 274 | 40 × 72 |  |
| Tecla con LED | True peak | 536, 380 | 116 × 24 |  |
| Tecla con LED | Igualar | 660, 380 | 116 × 24 |  |
| Selector de 3 | Tono | 536, 420 | 240 × 28 |  |

### Hoja de ajustes (se abre con el botón de ajustes; cubre el cuerpo)
| Elemento | Nombre | x, y | Ancho × alto | Ayuda del pie |
|---|---|---|---|---|
| Panel | Tamaño | 388, 52 | 400 × 293 |  |
| Botón de ícono | Cerrar ajustes | 752, 64 | 24 × 24 |  |
| Selector de 4 | Tamaño | 558, 100 | 147 × 28 |  |
| Selector de 3 | Tema | 558, 140 | 147 × 28 |  |
| Selector de 5 | Sobremuestreo al exportar | 558, 193 | 181 × 28 |  |
| Selector de 2 | Fase del filtrado | 558, 233 | 105 × 28 |  |
| Tecla con LED | Rango −3 dB | 558, 273 | 100 × 24 |  |
| Tecla con LED | Compensar | 558, 309 | 93 × 24 |  |

## Pantalla
- Historia de 4 s (una columna cada 10 ms): entrada como área en el tono de pantalla al 35 %, salida como línea de 1,5 px en el tono de pantalla.
- Techo: línea punteada (5/4) en `acc`. Exceso sobre el techo: franja en `acc` arriba, de 3 a 10 px según cuánto pasa; nunca tapa la forma de onda.
- Escala de 0 a −30 dB; si el Techo baja de −24 dB la escala se estira hasta Techo − 6 dB.
- Medidor E/S a la derecha (52 px): 4 barras de 6 px, retención de 1,5 s, caída de 300 ms. Clic borra el recorte.

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
- Techo en −36 dB: la escala se estira, el techo sigue visible.
- Sin recorte con +12 dB de entrada: la franja de exceso queda en 10 px.
- Preset de nombre largo: «…» en el menú y nombre completo en el pie.
- Valores en los límites: probados en la maqueta, con unidad y coma decimal en todos.

## Teclado y accesibilidad
- Orden de Tab medido en la maqueta: Preset anterior → En 5 → Preset siguiente → Deshacer → Rehacer → Ajustes → Medidor de entrada y salida. → Procesada → Original → Enlace → A → B → Copiar → 1× → 2× → 4× → 8× → Suave → Medio → Duro → Sin recorte → Techo → Densidad → Suavizado → Entrada → Salida → True peak → Igualar → Plano → Seda → Terciopelo.
- Tab recorre: cabecera, medidor, Mezcla, Comparar, Sobremuestreo, Curva, perillas, teclas, Tono.
- Esc cierra la hoja de ajustes o la lista abierta.
- Perillas: arrastre vertical (200 px todo el rango, 800 con Shift), rueda, flechas (Shift fino), doble clic a fábrica, Enter o clic en el valor para escribirlo.
- Menús: flechas, Inicio y Fin; Enter elige; Esc cierra y devuelve el foco.
- Todo botón de ícono tiene nombre accesible. Contraste: texto 4,5:1 y marcas 3:1 en los tres temas (auditado).
