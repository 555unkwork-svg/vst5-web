# Prompt: eq5, ecualizador paramétrico de vst5

> Copiá todo lo que está debajo de la línea en un chat nuevo de Claude Code, con un repo nuevo `eq5` (privado) y el repo `555unkwork-svg/vst5-web` agregados a la sesión.

---

Vamos a crear **eq5**, un plugin de vst5. Es un ecualizador paramétrico de 8 bandas para el uso de todos los días en mezcla y mastering. Tiene que ser tan confiable que un ingeniero lo deje en todos los canales sin pensarlo.

## Antes de escribir código
1. Leé del repo `555unkwork-svg/vst5-web` estos archivos y seguilos al pie de la letra:
   - `BRAND.md`: marca, nombres, versiones y voz.
   - `marca/elementos/PLUGIN_UI.md`: el contrato visual.
   - `marca/elementos/vst5_ui_tokens.h`: colores y medidas.
   - `marca/elementos/index.html` y `marca/elementos/banco.html`: la referencia visual. El banco ya tiene un boceto de eq5.
2. Leé el código de `clip5`, `sampler5` y `drum5` (mis repos) para seguir la misma estructura de proyecto JUCE, el mismo CMake, las mismas pruebas y el mismo GitHub Actions.
3. Antes de empezar, mandame un plan por etapas con preguntas. Trabajamos con una ida y vuelta y después ejecutás.

## Referencias y límites legales
- **Funciones:** igualá todas las funciones del EQ Eight de Ableton Live. Verificá cada rango y cada comportamiento en el manual oficial de Live 12, capítulo «Live Audio Effect Reference», sección EQ Eight. Si no podés abrirlo, avisame: no inventes rangos. Abajo hay una lista de partida.
- **Visor:** tomá como referencia lo que hace el visor del Kirchhoff-EQ (Three-Body Technology), pero dibujalo con nuestra estética. No copies su aspecto, sus colores ni sus gráficos.
- **Código:** el código de Ableton y el de Kirchhoff son cerrados. No los busques ni los descompiles. Podés estudiar proyectos abiertos como referencia, pero no copies código GPL: eq5 se vende con código cerrado. Escribí los filtros desde la teoría publicada, citando la fuente en un comentario.
- **Nombres:** ni «Ableton», ni «EQ Eight», ni «Kirchhoff» aparecen en el plugin, la web ni el manual.

## Funciones (paridad con EQ Eight; verificá los números en el manual)
- **8 bandas.** Cada una tiene encendido/apagado, tipo, frecuencia, ganancia y Q.
- **Tipos de filtro:**
  - corte de graves de 12 o 48 dB/oct;
  - estante de graves;
  - campana;
  - notch;
  - estante de agudos;
  - corte de agudos de 12 o 48 dB/oct.

  En los cortes y el notch, la ganancia no se ajusta.
- **Rangos de partida (verificalos):**
  - frecuencia de 10 Hz a 22 kHz;
  - ganancia de ±15 dB;
  - Q de 0,1 a 18.
- **Q adaptativo:** con el modo activado, el Q aumenta a medida que crece la ganancia, sea realce o corte.
- **Modo:** Estéreo, I/D (izquierda y derecha independientes) o M/S (medio y lados). En I/D y M/S, un selector «Editar» elige qué curva se edita, y las dos se ven en pantalla.
- **Escala:** escala la ganancia de todas las bandas a la vez, salvo cortes y notch. Verificá el rango.
- **Ganancia de salida:** verificá el rango.
- **Sobremuestreo 2x:** suaviza el comportamiento de los filtros en agudos. Sumá 4x como opción para mastering.
- **Escuchar banda (audición):** mientras mantenés apretado un punto, se escucha solo esa banda.
- **Analizador de espectro:** verificá en el manual sus opciones (bloque, canal, refresco, promedio, tipo de gráfico, escala, rango) e incluilas todas.
- **Atajos de mouse y teclado:** los mismos del original, verificados en el manual. Por ejemplo, arrastrar un punto mueve la frecuencia y la ganancia, y con un modificador se ajusta el Q.

## Visor (inspirado en lo que hace Kirchhoff, con estética vst5)
- **Pantalla grande:** es el protagonista. Usá la ventana grande de 960 × 600 propuesta en el banco de pruebas, escalable de 75 a 200 %.
- **Eje de frecuencia logarítmico** con marcas en Hz y kHz, y opción de mostrar nombres de notas («piano roll»). Al arrastrar una banda se ve su nota.
- **Rango de ganancia del visor elegible:** 3, 6, 12, 18 o 30 dB, para cortes finos de mastering y para cirugía.
- **Espectro antes del EQ, después o los dos**, con retención de picos, velocidad de refresco y suavizado (1/3, 1/6 o 1/12 de octava) configurables, y una pendiente de inclinación (por ejemplo 4,5 dB/oct) para leer como en una mezcla real.
- **Agarrar un pico:** clic sobre un pico del espectro crea una campana en esa frecuencia; arrastrar hacia abajo la corta.
- **Curvas:** la suma va en el tono de pantalla y cada banda tiene su curva propia, rellena y translúcida, en el color del plugin. En I/D o M/S se ven las dos sumas y la que se edita queda resaltada.
- **Puntos de banda** con número, en el color del plugin. Elegido: lleno. Apagado: solo contorno y atenuado.
- **Lectura exacta:** al pasar sobre la curva se ve la frecuencia, la nota y la ganancia en ese punto.

## Lógica profesional (lo que separa un juguete de una herramienta)
- **Filtros:**
  - Procesamiento en doble precisión.
  - Respuesta fiel a la analógica cerca de Nyquist, sin el «cramping» de la transformada bilineal. Usá filtros de estado variable (SVF/TPT) o diseños con respuesta igualada (matched), y citá la fuente.
  - Los cortes de 48 dB/oct son Butterworth de orden 8 en cascada. Definí cómo afecta el Q a la resonancia, igual que en el original.
- **Automatización sin clics:** suavizado de parámetros y coeficientes por muestra o sub-bloque, estable al mover frecuencia, Q y tipo mientras suena.
- **Latencia:** cero en el modo normal. El sobremuestreo reporta su latencia exacta al host.
- **Estabilidad:**
  - Funciona de 44,1 a 192 kHz.
  - Frecuencias por encima de Nyquist se recortan sin romper el filtro.
  - Protección contra denormales y NaN.
  - Estado limpio al cambiar la frecuencia de muestreo o el tamaño de buffer.
- **I/D y M/S** con reconstrucción exacta: con todas las bandas planas, la salida es idéntica a la entrada (prueba de nulo).
- **Medición y analizador** en un hilo aparte, con una cola sin bloqueos (lock-free) entre audio e interfaz. El hilo de audio nunca reserva memoria, nunca bloquea y nunca toca la interfaz.
- **Bypass** sin clics y con la misma latencia que el modo activo.
- **Estado y presets:**
  - Todo se guarda en la sesión del DAW, con versión de estado para abrir sesiones viejas.
  - Comparación A/B y deshacer/rehacer.
  - Presets de fábrica con nombres de vos («Voz al frente», «Limpiar graves», «Aire de master»).
- **Interfaz:** sigue `PLUGIN_UI.md`.
  - El color del plugin es provisional, `#1FA6A0`, hasta que se defina su familia.
  - La columna derecha muestra los controles de la banda elegida y los globales: modo, editar, Q adaptativo, escala, salida y sobremuestreo.
  - Abajo va una tira con las 8 bandas: número, ícono del tipo y LED de encendido.
  - Cualquier elemento nuevo (por ejemplo, los puntos arrastrables sobre la pantalla) se propone para sumarlo a la guía, con sus medidas y estados.

## Pruebas obligatorias (en GitHub Actions, como en los otros plugins)
- **Respuesta en frecuencia** contra la fórmula analítica de cada tipo, a 44,1, 48 y 96 kHz: error de 0,01 dB o menos en la banda útil.
- **Nulo:** con todas las bandas planas, la salida es idéntica a la entrada en Estéreo, I/D y M/S.
- **Barrido de automatización** de frecuencia, ganancia y Q sin saltos ni clics detectables.
- **Estrés:** tamaños de buffer al azar, incluido 0 y 1; cambios de frecuencia de muestreo; valores extremos.
- **Estado:** guardar y cargar da exactamente los mismos parámetros. Un preset de una versión anterior abre igual.
- **pluginval** en el nivel máximo, en Windows, macOS y Linux.
- **Consumo:** medí la CPU con 8 bandas activas a 48 kHz y buffer de 64, con y sin sobremuestreo, y reportá el resultado.

## Alcance
- **Versión 1.0:** todo lo anterior, VST3 para Windows (con instalador, como clip5), y AU y VST3 para macOS compilados en CI.
- **Para después** (dejá la arquitectura preparada, sin implementarlo): modo de fase lineal para mastering, EQ dinámico por banda, sidechain y ganancia automática.

## Entregables
- Plugin con pruebas pasando en CI e instalador de Windows publicado en Releases.
- Manual `LEEME.pdf` con la identidad de marca y textos de vos.
- Un informe corto con lo verificado, lo no verificado (por ejemplo, la prueba dentro de FL Studio) y las diferencias que encuentres con el original.
