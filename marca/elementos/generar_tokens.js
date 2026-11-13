// generar_tokens.js — regenera vst5_ui_tokens.h desde vst5-ui.js. Uso: node generar_tokens.js
// Las medidas viven acá (plantilla); los colores salen de ACC, BASE y OFICIAL de vst5-ui.js.
const fs=require('fs'),path=require('path'),dir=__dirname;
const src=fs.readFileSync(path.join(dir,'vst5-ui.js'),'utf8');
const {ACC,BASE,OFICIAL,themeFor}=new Function(src+';return{ACC,BASE,OFICIAL,themeFor}')();
const KEYS=['body','panel','well','line','ink','dim','key','keyink','keyedge','ptr','screen','screenink','screendim','pad','padink','padedge','ledoff','focus','meter','over','acc','accink','accedge'];
const plugins=Object.keys(ACC),col=h=>`juce::Colour (0xff${h.slice(1).toUpperCase()})`;
for(const p of plugins)for(const t of ['oficial','vst5','oscuro']){const o=themeFor(p,t);for(const k of KEYS)if(!/^#[0-9a-f]{6}$/i.test(o[k]||''))throw new Error(`${p}/${t}: falta ${k}`)}
const HEAD=`// vst5_ui_tokens.h — generado desde marca/elementos/vst5-ui.js. No editar a mano: cambiá la guía y regeneralo.
#pragma once
#include <juce_graphics/juce_graphics.h>

namespace vst5::ui
{
    enum class Plugin { ${plugins.join(', ')} };
    enum class Theme  { oficial, vst5, oscuro };   // oficial es el de fábrica

    struct Palette
    {
        juce::Colour body, panel, well, line, ink, dim, key, keyink, keyedge, ptr, screen, screenink, screendim, pad, padink, padedge, ledoff, focus, meter, over, acc, accink, accedge;
    };

    // Medidas a 100 %. Multiplicar por la escala de la ventana (0.75 a 2.0).
    namespace size
    {
        constexpr int windowW = 800, windowH = 500, header = 40, footer = 28, margin = 12, gap = 12, sideColumn = 264;\n        constexpr int windowBigW = 960, windowBigH = 600, sideColumnBig = 300;   // ventana grande\n        constexpr int tabH = 28, tabLine = 2, tabPadX = 12;\n        constexpr int dragFullRangePx = 200, dragFineRangePx = 800;          // perillas y campos arrastrables\n        constexpr int miniView = 28, markerW = 2, markerHit = 6, markerFlagH = 16, handleW = 8, handleH = 16;
        constexpr int sp1 = 4, sp2 = 8, sp3 = 12, sp4 = 16, sp5 = 24;
        constexpr int radiusControl = 3, radiusPanel = 6;
        constexpr int knobL = 72, knobM = 56, knobS = 40, knobArc = 5;
        constexpr int keyH = 24, keyPadX = 10, keyEdge = 2, led = 6, segmentMinW = 32;
        constexpr int field = 22, iconButton = 24, icon = 14, menuRow = 24, sheetW = 400;
        constexpr int pad = 56, padCompactH = 44, padPress = 3;
        constexpr int meterBar = 6, meterGap = 3;
        constexpr float iconStroke = 1.8f;
        constexpr int minHit = 24;
    }

    namespace text   // Archivo (100 % de ancho) e IBM Plex Mono, embebidas como BinaryData
    {
        constexpr float label = 12.0f, value = 11.0f, caption = 10.0f, button = 11.0f, padNumber = 11.0f, padName = 10.0f, help = 11.0f, version = 11.0f;
        constexpr float captionTracking = 0.10f;
    }

    namespace motion { constexpr int pressMs = 80, hoverMs = 150, meterReleaseMs = 300, peakHoldMs = 1500; }

`;
let out=HEAD+'    inline Palette palette (Plugin p, Theme t)\n    {\n';
plugins.forEach(p=>{out+=`        if (p == Plugin::${p})\n        {\n`;
  for(const t of ['oficial','vst5','oscuro']){const o=themeFor(p,t);out+=`            if (t == Theme::${t}) return Palette { ${KEYS.map(k=>col(o[k])).join(', ')} };\n`}
  out+='        }\n'});
out+=`        jassertfalse;\n        return palette (Plugin::${plugins[0]}, Theme::oficial);\n    }\n}\n`;
fs.writeFileSync(path.join(dir,'vst5_ui_tokens.h'),out);console.log('vst5_ui_tokens.h regenerado:',plugins.join(', '));
