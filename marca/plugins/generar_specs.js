// generar_specs.js — escribe <plugin>-spec.md midiendo cada maqueta a 100 % con Playwright.
// Uso: node marca/plugins/generar_specs.js   (necesita playwright; las medidas salen del DOM, no se escriben a mano)
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const DIR=__dirname;

const PL={
 clip5:{size:'800 × 500 (base)',col:264,que:'Clipper de mastering: recorta los picos por encima del Techo con cuatro curvas, suma cuerpo con Densidad y mezcla en paralelo.',
  pantalla:['Historia de 4 s (una columna cada 10 ms): entrada como área en el tono de pantalla al 35 %, salida como línea de 1,5 px en el tono de pantalla.','Techo: línea punteada (5/4) en `acc`. Exceso sobre el techo: franja en `acc` arriba, de 3 a 10 px según cuánto pasa; nunca tapa la forma de onda.','Escala de 0 a −30 dB; si el Techo baja de −24 dB la escala se estira hasta Techo − 6 dB.','Medidor E/S a la derecha (52 px): 4 barras de 6 px, retención de 1,5 s, caída de 300 ms. Clic borra el recorte.'],
  bordes:['Techo en −36 dB: la escala se estira, el techo sigue visible.','Sin recorte con +12 dB de entrada: la franja de exceso queda en 10 px.','Preset de nombre largo: «…» en el menú y nombre completo en el pie.'],
  teclado:['Tab recorre: cabecera, medidor, Mezcla, Comparar, Sobremuestreo, Curva, perillas, teclas, Tono.','Esc cierra la hoja de ajustes o la lista abierta.']},
 sampler5:{size:'960 × 600 (grande)',col:300,que:'Muestreador: corta un audio en hasta 16 pads y toca cada corte con su propio sonido.',
  pantalla:['Forma de onda de la zona visible; el corte elegido en el tono de pantalla pleno, el resto en `screendim`; fuera de la zona usada, al 30 %.','Cortes: líneas de 2 px en `acc` con etiqueta de 16 px arriba (elegida rellena con `accink`); se toman a 6 px y se engrosan a 3 al pasar.','Manija de 8 × 16 px en el final del corte elegido. Tinte del 12 % de `acc` sobre el corte elegido.','Golpes detectados: marcas tenues abajo; se avivan 1,5 s al cambiar la sensibilidad.','Mini vista de 28 px: audio entero, recuadro de lo visible, corchetes de la zona en `acc` (se arrastran).','Cabezal de reproducción: línea de 1,5 px en el tono de pantalla mientras suena un pad.'],
  bordes:['A mano: arranca con un solo corte; los pads sin corte dicen VACÍO al 55 %.','16 cortes y doble clic: no crea más (el pie lo dice).','Favoritos: no se pierden al regenerar.','Nombre de preset o de archivo largo: «…».'],
  teclado:['Pads: teclas 1–8 y Q–I; Enter o espacio sobre un pad lo toca.','Pantalla: flechas mueven el corte elegido, Supr lo borra.','Pestañas: flechas izquierda y derecha.']},
 drum5:{size:'960 × 600 (grande)',col:300,que:'Batería de 16 pads con un sample cada uno y repetición de golpes por pad.',
  pantalla:['Pestaña Pad: forma de onda del sample; lo que corta la Caída, en `screendim` al 35 %; marca de Caída de 2 px y manija de 8 × 16 en `acc` (se arrastra).','Vista de repetición: 1 compás con grilla de 16 (tiempos al 30 %, semicorcheas al 12 %). Cada golpe es una barra en `acc`: alto = fuerza (acento), ancho = duración, posición según ritmo, swing y aceleración. Deriva: línea de 1 px.','Pestaña Browser: campo de búsqueda + menú de categoría, lista de pantalla, «Copiar a biblioteca» y Exportar.'],
  bordes:['Pad vacío: VACÍO al 55 %; la pantalla dice cómo cargarlo.','Búsqueda sin resultados: «Nada con «x». Probá otra palabra o «Todas».»','Repetir apagado: la vista lo dice y muestra un golpe por toque.','Choke: tocar un pad corta a los del mismo grupo.','Velocidad del mouse: de 1 a 127 según la altura del clic.'],
  teclado:['Pads: Z X C V (1–4), A S D F, Q W E R, 1 2 3 4 (13–16), como la grilla.','Lista: flechas recorren, Enter carga en el pad elegido.','Pantalla: flechas mueven la Caída.']},
 eq5:{size:'960 × 600 (grande)',col:300,que:'Ecualizador paramétrico de 8 bandas con analizador, modos Estéreo, I/D y M/S.',
  pantalla:['Eje de frecuencia logarítmico de 10 Hz a 22 kHz, marcas en 20, 50, 100, 200, 500, 1k, 2k, 5k, 10k, 20k (Plex Mono 11, `screendim`).','Rango vertical elegible: ±3, 6, 12, 18 o 30 dB; línea de 0 dB al 45 %, resto de la grilla al 20–25 %.','Espectro: antes como área al 22 %, después al 35 % (o al 50 % con los dos), picos retenidos como línea de 1 px; inclinación alrededor de 1 kHz.','Cada banda: curva rellena al 12 % de `acc` (la elegida al 28 %). Suma: línea de 2 px en el tono de pantalla. En I/D o M/S la otra curva va punteada (4/4) en `screendim`.','Puntos: círculo de 18 px con número. Elegido: relleno `acc` con número `accink`. Sin elegir: fondo de pantalla, contorno de 2 px `acc`. Apagado: todo al 45 %.','Notas: teclado de 12 px bajo las marcas de frecuencia y «DoN» en cada Do.','Lectura: línea vertical de 1 px y rótulo con frecuencia, nota y ganancia de la suma.'],
  bordes:['Las 8 bandas encendidas y clic en un pico: no crea otra (el pie lo dice).','Cortes y notch: la ganancia se apaga (perilla al 40 %) y el arrastre vertical mueve el Q.','Escala al 0 %: los puntos de ganancia quedan en la línea de 0 dB.','Editar se apaga en Estéreo.'],
  teclado:['Pantalla: flechas izquierda y derecha = frecuencia, arriba y abajo = ganancia (o Q), 1–8 eligen banda, Supr apaga; Shift = fino.','Tira: flechas recorren, espacio prende o apaga.']},
};

const SEL='.panelp,.screen,.tabs,.knob,.key,.segp,.menu,.field,.pad,.band,.search,.ibtn,.mtrs';
(async()=>{const b=await chromium.launch();
for(const [pl,info] of Object.entries(PL)){const p=await b.newPage({viewport:{width:1200,height:1000}});
 await p.goto('file://'+path.join(DIR,pl+'.html'));await p.waitForTimeout(800);
 const grab=async inSheet=>p.evaluate(([SEL,inSheet])=>{const w=document.querySelector('#win'),q=w.getBoundingClientRect();
  const kind=e=>e.matches('.knob')?'Perilla '+(e.querySelector('svg')?.getAttribute('width'))+(e.querySelector('.tick')?'':' (sin escala)'):e.matches('.key')?(e.querySelector('.led')?'Tecla con LED':e.matches('.ghost')?'Tecla secundaria':'Tecla'):
   e.matches('.segp')?'Selector de '+e.querySelectorAll('button').length:e.matches('.menu')?'Menú':e.matches('.field.drag')?'Campo arrastrable':e.matches('.field')?'Campo':e.matches('.pad')?'Pad':e.matches('.band')?'Celda de tira':
   e.matches('.search')?'Campo de búsqueda':e.matches('.ibtn')?'Botón de ícono':e.matches('.mtrs')?'Medidor':e.matches('.screen')?'Pantalla':e.matches('.tabs')?'Pestañas':'Panel';
  const name=e=>(e.getAttribute('aria-label')||e.querySelector('.lbl')?.textContent||e.querySelector('.cap')?.textContent||(e.matches('.tabs')?[...e.querySelectorAll('button')].map(x=>x.textContent).join(' / '):'')||e.textContent||'').trim().replace(/\s+/g,' ').slice(0,40);
  return [...w.querySelectorAll(SEL)].filter(e=>e.offsetParent&&!!e.closest('.sheet')===inSheet&&!(e.matches('.panelp')&&e.parentElement.closest('.sheet')&&!inSheet)).map(e=>{const r=e.getBoundingClientRect();
   return{k:kind(e),n:name(e),x:Math.round(r.left-q.left),y:Math.round(r.top-q.top),w:Math.round(r.width),h:Math.round(r.height),help:(e.dataset.help||e.closest('[data-help]')?.dataset.help||'').trim()}})},[SEL,inSheet]);
 const main=await grab(false);
 const focus=[];await p.locator('#win').click({position:{x:2,y:2}});
 for(let i=0;i<90;i++){await p.keyboard.press('Tab');const f=await p.evaluate(()=>{const a=document.activeElement;if(!a||!a.closest('#win'))return null;return(a.getAttribute('aria-label')||a.closest('.knob')?.querySelector('.lbl')?.textContent||a.textContent||a.id).trim().replace(/\s+/g,' ').slice(0,28)});if(!f)break;if(focus.includes(f)&&focus.length>4)break;focus.push(f)}
 await p.click('[aria-label="Ajustes"]');await p.waitForTimeout(150);const sheet=(await grab(true));await p.keyboard.press('Escape');
 const tok=await p.evaluate(pl=>['oficial','vst5','oscuro'].map(t=>[t,themeFor(pl,t)]),pl);
 await p.close();
 const row=e=>`| ${e.k} | ${e.n.replace(/\|/g,'/')} | ${e.x}, ${e.y} | ${e.w} × ${e.h} | ${e.help.replace(/\|/g,'/')} |`;
 const KEYS=['body','panel','well','line','ink','dim','key','keyink','screen','screenink','screendim','pad','ledoff','acc','accink','accsurf','acckey'];
 const md=`# ${pl} · especificación de interfaz (diseño 0.1 estable)

> Generado por \`generar_specs.js\` desde \`${pl}.html\`: las posiciones y medidas son las de la maqueta a 100 %. No editar a mano; cambiá la maqueta y volvé a generarlo.
> Contrato general: \`marca/elementos/PLUGIN_UI.md\`. Colores y medidas en JUCE: \`vst5_ui_tokens.h\` → \`vst5::ui::palette (Plugin::${pl}, tema)\`.

## Resumen
${info.que}

- **Ventana:** ${info.size}. Cabecera de 40, pie de 28, margen y separación de 12, columna de ${info.col} px. Escala de 75 a 200 % en pasos de 25: todo se multiplica por la escala, nada se reacomoda.
- **Cabecera:** logo, preset anterior, menú de presets, preset siguiente, deshacer, rehacer, ajustes, versión.
- **Pie:** ayuda del control bajo el mouse o con foco (Plex Mono 11, \`dim\`); a la derecha, tamaño y escala.
- **No cambia ningún identificador de parámetro.** Los nombres de esta especificación son los que se ven.

## Tokens de color por tema
| Token | Oficial | vst5 | Oscuro | Uso |
|---|---|---|---|---|
${KEYS.map(k=>`| \`${k}\` | ${tok.map(([,o])=>'`'+o[k]+'`').join(' | ')} | ${{body:'cuerpo',panel:'paneles',well:'fondos hundidos (selector, menú)',line:'filetes y pista de perilla',ink:'texto',dim:'texto secundario, títulos de panel',key:'teclas y cuerpo de perilla',keyink:'texto de tecla',screen:'pantallas',screenink:'datos en pantalla',screendim:'datos tenues y marcas de escala',pad:'pads',ledoff:'LED apagado',acc:'color del plugin en pantalla y rellenos',accink:'texto sobre acc',accsurf:'arcos, pestaña elegida, listas, contornos de edición',acckey:'LED encendido, anillo de pad, ícono de segmento elegido'}[k]} |`).join('\n')}

## Tipografía
| Uso | Fuente | Tamaño |
|---|---|---|
| Etiqueta de perilla, teclas, nombres de fila | Archivo 600 | 12 (teclas 11) |
| Valores, menús, campos, pie, pantallas | IBM Plex Mono 500 | 11 |
| Títulos de panel, etiquetas en mayúsculas | IBM Plex Mono 500, espaciado 0,1 em | 10 |

## Elementos (ventana a 100 %, x e y desde el borde superior izquierdo de la ventana)
| Elemento | Nombre | x, y | Ancho × alto | Ayuda del pie |
|---|---|---|---|---|
${main.map(row).join('\n')}

### Hoja de ajustes (se abre con el botón de ajustes; cubre el cuerpo)
| Elemento | Nombre | x, y | Ancho × alto | Ayuda del pie |
|---|---|---|---|---|
${sheet.map(row).join('\n')}

## Pantalla
${info.pantalla.map(x=>'- '+x).join('\n')}

## Estados (todos los elementos)
| Elemento | Estado | Cómo se ve |
|---|---|---|
| Perilla | Normal / encima / foco / deshabilitada / editando | Arco de 5 px \`accsurf\` desde 0 o desde el mediodía («en 5») / brillo +12 % / anillo de 2 px \`focus\` / 40 % / contorno de 1 px \`accsurf\` en el valor |
| Tecla | Normal / encima / presionada / foco / deshabilitada | Borde inferior de 2 px \`keyedge\` / brillo +15 % / baja 2 px / anillo de 2 px / 40 % |
| Tecla con LED | Apagada / encendida | LED de 6 px \`ledoff\` / \`acckey\` con brillo de 6 px |
| Selector | Elegido | La opción es una tecla (\`key\`, \`keyink\`); su ícono en \`acckey\` |
| Menú | Abierto | Lista propia de filas de 24, elegida con filete de 2 px \`accsurf\` |
| Pad | Elegido / golpe / vacío | Anillo interior de 2 px \`acckey\` / se hunde 3 px y se llena de \`acc\` / 55 % |
| Pestaña | Elegida | Texto \`ink\` y raya de 2 px \`accsurf\`; las demás en \`dim\` |

## Movimiento
| Elemento | Disparo | Animación | Duración |
|---|---|---|---|
| Tecla, pad, selector | Presionar | Desplazamiento y sombra | 80 ms |
| Todo lo clickeable | Pasar el mouse | Brillo o fondo | 150 ms |
| Medidores | Señal | Caída real; pico retenido 1,5 s | 300 ms de caída |
| Valores, curvas, espectros | — | Sin animación de adorno: muestran el dato real | — |
| Con «reducir movimiento» del sistema | — | Sin transiciones | 0 |

## Casos límite
${info.bordes.map(x=>'- '+x).join('\n')}
- Valores en los límites: probados en la maqueta, con unidad y coma decimal en todos.

## Teclado y accesibilidad
- Orden de Tab medido en la maqueta: ${focus.join(' → ')}.
${info.teclado.map(x=>'- '+x).join('\n')}
- Perillas: arrastre vertical (200 px todo el rango, 800 con Shift), rueda, flechas (Shift fino), doble clic a fábrica, Enter o clic en el valor para escribirlo.
- Menús: flechas, Inicio y Fin; Enter elige; Esc cierra y devuelve el foco.
- Todo botón de ícono tiene nombre accesible. Contraste: texto 4,5:1 y marcas 3:1 en los tres temas (auditado).
`;
 fs.writeFileSync(path.join(DIR,pl+'-spec.md'),md);console.log(pl,main.length,'elementos,',sheet.length,'en ajustes,',focus.length,'pasos de Tab')}
await b.close()})();
