# eq5 · especificación de interfaz (diseño 0.1 estable)

> Generado por `generar_specs.js` desde `eq5.html`: las posiciones y medidas son las de la maqueta a 100 %. No editar a mano; cambiá la maqueta y volvé a generarlo.
> Contrato general: `marca/elementos/PLUGIN_UI.md`. Colores y medidas en JUCE: `vst5_ui_tokens.h` → `vst5::ui::palette (Plugin::eq5, tema)`.

## Resumen
Ecualizador paramétrico de 8 bandas con analizador, modos Estéreo, I/D y M/S.

- **Ventana:** 960 × 600 (grande). Cabecera de 40, pie de 28, margen y separación de 12, columna de 300 px. Escala de 75 a 200 % en pasos de 25: todo se multiplica por la escala, nada se reacomoda.
- **Cabecera:** logo, preset anterior, menú de presets, preset siguiente, deshacer, rehacer, ajustes, versión.
- **Pie:** ayuda del control bajo el mouse o con foco (Plex Mono 11, `dim`); a la derecha, tamaño y escala.
- **No cambia ningún identificador de parámetro.** Los nombres de esta especificación son los que se ven.

## Tokens de color por tema
| Token | Oficial | vst5 | Oscuro | Uso |
|---|---|---|---|---|
| `body` | `#2A2D31` | `#F1EFEA` | `#1B1A18` | cuerpo |
| `panel` | `#33373C` | `#FAF9F6` | `#232220` | paneles |
| `well` | `#1F2226` | `#E2DFD8` | `#121110` | fondos hundidos (selector, menú) |
| `line` | `#474C52` | `#D8D5CE` | `#3A3834` | filetes y pista de perilla |
| `ink` | `#ECEEF0` | `#171614` | `#F1EFEA` | texto |
| `dim` | `#A7AEB5` | `#6E6A62` | `#A29E96` | texto secundario, títulos de panel |
| `key` | `#474C53` | `#171614` | `#3A3834` | teclas y cuerpo de perilla |
| `keyink` | `#F1F3F5` | `#F1EFEA` | `#F1EFEA` | texto de tecla |
| `screen` | `#0D0F12` | `#171614` | `#0E0D0C` | pantallas |
| `screenink` | `#E7EEF6` | `#F1EFEA` | `#F1EFEA` | datos en pantalla |
| `screendim` | `#8F9AA6` | `#A29E96` | `#8C8880` | datos tenues y marcas de escala |
| `pad` | `#474C53` | `#2A2927` | `#3A3834` | pads |
| `ledoff` | `#2A2D31` | `#4A4742` | `#2A2826` | LED apagado |
| `acc` | `#2F6FD6` | `#2F6FD6` | `#2F6FD6` | color del plugin en pantalla y rellenos |
| `accink` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | texto sobre acc |
| `accsurf` | `#4880DB` | `#2F6FD6` | `#2F6FD6` | arcos, pestaña elegida, listas, contornos de edición |
| `acckey` | `#6D9AE2` | `#2F6FD6` | `#4880DB` | LED encendido, anillo de pad, ícono de segmento elegido |

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
| Menú | Voz al frente | 568, 8 | 188 × 24 | Preset |
| Botón de ícono | Preset siguiente | 760, 8 | 24 × 24 |  |
| Botón de ícono | Deshacer | 796, 8 | 24 × 24 |  |
| Botón de ícono | Rehacer | 832, 8 | 24 × 24 |  |
| Botón de ícono | Ajustes | 868, 8 | 24 × 24 |  |
| Tecla con LED | Analizar | 12, 52 | 75 × 24 | Analizar · muestra el espectro en la pantalla |
| Selector de 5 | Rango del visor | 138, 50 | 172 × 28 | Rango del visor en dB · fino para mastering, amplio para cirugía |
| Tecla con LED | Notas | 318, 52 | 63 × 24 | Notas · muestra un teclado bajo la pantalla y la nota de cada banda |
| Selector de 2 | Comparar | 503, 50 | 70 × 28 | Comparar · cambia entre dos ajustes |
| Tecla secundaria | Copiar | 581, 52 | 55 × 24 | Copiar · pasa el ajuste actual al otro |
| Pantalla | Curva de ecualización. Flechas mueven la | 12, 84 | 624 × 424 |  |
| Celda de tira | Banda 1: Corte de graves 12, encendida | 12, 516 | 73 × 44 |  |
| Celda de tira | Banda 2: Estante de graves, encendida | 91, 516 | 73 × 44 |  |
| Celda de tira | Banda 3: Campana, encendida | 170, 516 | 73 × 44 |  |
| Celda de tira | Banda 4: Campana, encendida | 248, 516 | 73 × 44 |  |
| Celda de tira | Banda 5: Campana, encendida | 327, 516 | 73 × 44 |  |
| Celda de tira | Banda 6: Campana, apagada | 406, 516 | 73 × 44 |  |
| Celda de tira | Banda 7: Estante de agudos, encendida | 485, 516 | 73 × 44 |  |
| Celda de tira | Banda 8: Corte de agudos 48, apagada | 563, 516 | 73 × 44 |  |
| Panel | Frecuencia | 648, 52 | 300 × 508 |  |
| Menú | Campana | 717, 64 | 219 × 24 | Tipo de filtro de la banda |
| Perilla 72 (sin escala) | Frecuencia | 660, 96 | 72 × 104 |  |
| Perilla 72 (sin escala) | Ganancia | 770, 96 | 72 × 104 |  |
| Perilla 56 (sin escala) | Q | 880, 112 | 56 × 88 |  |
| Tecla con LED | Encendida | 660, 208 | 134 × 24 | Encendida · prende o apaga la banda |
| Tecla con LED | Escuchar | 802, 208 | 134 × 24 | Escuchar · mientras arrastrás un punto se oye solo esa banda |
| Selector de 3 | Modo | 720, 278 | 216 × 28 | Modo · Estéreo, izquierda y derecha aparte, o medio y lados |
| Selector de 2 | Editar | 720, 314 | 216 × 28 | Editar · qué curva tocás; las dos se ven en la pantalla |
| Perilla 40 (sin escala) | Escala | 660, 350 | 40 × 72 |  |
| Perilla 40 (sin escala) | Salida | 746, 350 | 40 × 72 |  |
| Tecla con LED | Q adaptativo | 832, 362 | 104 × 24 | Q adaptativo · el Q sube a medida que crece la ganancia, en realce y en corte |
| Selector de 3 | Sobremuestreo | 832, 394 | 104 × 28 | Sobremuestreo · agudos más fieles; 4× para mastering |

### Hoja de ajustes (se abre con el botón de ajustes; cubre el cuerpo)
| Elemento | Nombre | x, y | Ancho × alto | Ayuda del pie |
|---|---|---|---|---|
| Panel | Tamaño | 548, 52 | 400 × 504 |  |
| Botón de ícono | Cerrar ajustes | 912, 64 | 24 × 24 |  |
| Selector de 4 | Tamaño | 718, 100 | 147 × 28 | Tamaño de la ventana |
| Selector de 3 | Tema | 718, 140 | 147 × 28 | Tema |
| Tecla con LED | Adaptativo | 718, 180 | 89 × 24 | Q adaptativo también en los estantes |
| Selector de 3 | Espectro a mostrar | 718, 262 | 171 × 28 | Espectro antes del EQ, después o los dos |
| Selector de 4 | Suavizado | 718, 302 | 144 × 28 | Suavizado por fracción de octava |
| Campo arrastrable | Inclinación | 718, 342 | 96 × 22 | Inclinación · para leer el espectro como una mezcla (por ejemplo 4,5 dB/oct) |
| Campo arrastrable | Refresco | 718, 376 | 96 × 22 | Refresco · cada cuánto se redibuja |
| Campo arrastrable | Promedio | 718, 410 | 96 × 22 | Promedio · bloques que se promedian; más, más calmo |
| Menú | 4096 muestras | 718, 444 | 118 × 24 | Bloque · más grande, más detalle en graves y más lento |
| Selector de 4 | Canal del espectro | 718, 480 | 174 × 28 | Canal del espectro |
| Tecla con LED | Retener | 718, 520 | 74 × 24 | Retener picos · 1,5 s y caen 12 dB/s |

## Pantalla
- Eje de frecuencia logarítmico de 10 Hz a 22 kHz, marcas en 20, 50, 100, 200, 500, 1k, 2k, 5k, 10k, 20k (Plex Mono 11, `screendim`).
- Rango vertical elegible: ±3, 6, 12, 18 o 30 dB; línea de 0 dB al 45 %, resto de la grilla al 20–25 %.
- Espectro: antes como área al 22 %, después al 35 % (o al 50 % con los dos), picos retenidos como línea de 1 px; inclinación alrededor de 1 kHz.
- Cada banda: curva rellena al 12 % de `acc` (la elegida al 28 %). Suma: línea de 2 px en el tono de pantalla. En I/D o M/S la otra curva va punteada (4/4) en `screendim`.
- Puntos: círculo de 18 px con número. Elegido: relleno `acc` con número `accink`. Sin elegir: fondo de pantalla, contorno de 2 px `acc`. Apagado: todo al 45 %.
- Notas: teclado de 12 px bajo las marcas de frecuencia y «DoN» en cada Do.
- Lectura: línea vertical de 1 px y rótulo con frecuencia, nota y ganancia de la suma.

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
- Las 8 bandas encendidas y clic en un pico: no crea otra (el pie lo dice).
- Cortes y notch: la ganancia se apaga (perilla al 40 %) y el arrastre vertical mueve el Q.
- Escala al 0 %: los puntos de ganancia quedan en la línea de 0 dB.
- Editar se apaga en Estéreo.
- Valores en los límites: probados en la maqueta, con unidad y coma decimal en todos.

## Teclado y accesibilidad
- Orden de Tab medido en la maqueta: Preset anterior → Voz al frente → Preset siguiente → Deshacer → Rehacer → Ajustes → Analizar → 3 → 6 → 12 → 18 → 30 → Notas → A → B → Copiar → Curva de ecualización. Flech → Encender banda 1 → Encender banda 2 → Encender banda 3 → Encender banda 4 → Banda 5: Campana, encendida → Encender banda 5 → Encender banda 6 → Encender banda 7 → Encender banda 8 → Campana → Frecuencia → Ganancia → Q → Encendida → Escuchar → Estéreo → I/D → M/S → Escala → Salida → Q adaptativo → 1× → 2× → 4×.
- Pantalla: flechas izquierda y derecha = frecuencia, arriba y abajo = ganancia (o Q), 1–8 eligen banda, Supr apaga; Shift = fino.
- Tira: flechas recorren, espacio prende o apaga.
- Perillas: arrastre vertical (200 px todo el rango, 800 con Shift), rueda, flechas (Shift fino), doble clic a fábrica, Enter o clic en el valor para escribirlo.
- Menús: flechas, Inicio y Fin; Enter elige; Esc cierra y devuelve el foco.
- Todo botón de ícono tiene nombre accesible. Contraste: texto 4,5:1 y marcas 3:1 en los tres temas (auditado).
