// vst5_ui_tokens.h — generado desde marca/elementos/vst5-ui.js. No editar a mano: cambiá la guía y regeneralo.
#pragma once
#include <juce_graphics/juce_graphics.h>

namespace vst5::ui
{
    enum class Plugin { clip5, sampler5, drum5 };
    enum class Theme  { oficial, vst5, oscuro };   // oficial es el de fábrica

    struct Palette
    {
        juce::Colour body, panel, well, line, ink, dim, key, keyink, keyedge, ptr, screen, screenink, screendim, pad, padink, padedge, ledoff, focus, meter, over, acc, accink, accedge;
    };

    // Medidas a 100 %. Multiplicar por la escala de la ventana (0.75 a 2.0).
    namespace size
    {
        constexpr int windowW = 800, windowH = 500, header = 40, footer = 28, margin = 12, gap = 12, sideColumn = 264;
        constexpr int sp1 = 4, sp2 = 8, sp3 = 12, sp4 = 16, sp5 = 24;
        constexpr int radiusControl = 3, radiusPanel = 6;
        constexpr int knobL = 72, knobM = 56, knobS = 40, knobArc = 5;
        constexpr int keyH = 24, keyPadX = 10, keyEdge = 2, led = 6, segmentMinW = 32;
        constexpr int field = 22, iconButton = 24, icon = 14;
        constexpr int pad = 56, padCompactH = 44, padPress = 3;
        constexpr int meterBar = 6, meterGap = 3;
        constexpr float iconStroke = 1.8f;
        constexpr int minHit = 24;
    }

    namespace text   // Archivo (100 % de ancho) e IBM Plex Mono, embebidas como BinaryData
    {
        constexpr float label = 12.0f, value = 11.0f, caption = 10.0f, button = 11.0f, pad = 10.0f;
        constexpr float captionTracking = 0.10f;
    }

    namespace motion { constexpr int pressMs = 80, hoverMs = 150, meterReleaseMs = 300, peakHoldMs = 1500; }

    inline Palette palette (Plugin p, Theme t)
    {
        if (p == Plugin::clip5)
        {
            if (t == Theme::oficial) return Palette { juce::Colour (0xffC9C6BE), juce::Colour (0xffD8D5CE), juce::Colour (0xffB8B5AD), juce::Colour (0xffA9A59C), juce::Colour (0xff171614), juce::Colour (0xff46423C), juce::Colour (0xff232220), juce::Colour (0xffF1EFEA), juce::Colour (0xff000000), juce::Colour (0xffF1EFEA), juce::Colour (0xff121211), juce::Colour (0xffF1EFEA), juce::Colour (0xffA29E96), juce::Colour (0xff232220), juce::Colour (0xffF1EFEA), juce::Colour (0xff000000), juce::Colour (0xff4A4742), juce::Colour (0xff171614), juce::Colour (0xffF1EFEA), juce::Colour (0xffFF3B2F), juce::Colour (0xffF2C230), juce::Colour (0xff171614), juce::Colour (0xffB88F14) };
            if (t == Theme::vst5) return Palette { juce::Colour (0xffF1EFEA), juce::Colour (0xffFAF9F6), juce::Colour (0xffE2DFD8), juce::Colour (0xffD8D5CE), juce::Colour (0xff171614), juce::Colour (0xff6E6A62), juce::Colour (0xff171614), juce::Colour (0xffF1EFEA), juce::Colour (0xff000000), juce::Colour (0xffF1EFEA), juce::Colour (0xff171614), juce::Colour (0xffF1EFEA), juce::Colour (0xffA29E96), juce::Colour (0xff2A2927), juce::Colour (0xffF1EFEA), juce::Colour (0xff0E0D0C), juce::Colour (0xff4A4742), juce::Colour (0xff171614), juce::Colour (0xffF1EFEA), juce::Colour (0xffFF3B2F), juce::Colour (0xffF2C230), juce::Colour (0xff171614), juce::Colour (0xffB88F14) };
            if (t == Theme::oscuro) return Palette { juce::Colour (0xff1B1A18), juce::Colour (0xff232220), juce::Colour (0xff121110), juce::Colour (0xff3A3834), juce::Colour (0xffF1EFEA), juce::Colour (0xffA29E96), juce::Colour (0xff3A3834), juce::Colour (0xffF1EFEA), juce::Colour (0xff0A0A09), juce::Colour (0xffF1EFEA), juce::Colour (0xff0E0D0C), juce::Colour (0xffF1EFEA), juce::Colour (0xff8C8880), juce::Colour (0xff3A3834), juce::Colour (0xffF1EFEA), juce::Colour (0xff0A0A09), juce::Colour (0xff2A2826), juce::Colour (0xffF1EFEA), juce::Colour (0xffF1EFEA), juce::Colour (0xffFF4D40), juce::Colour (0xffF2C230), juce::Colour (0xff171614), juce::Colour (0xffB88F14) };
        }
        if (p == Plugin::sampler5)
        {
            if (t == Theme::oficial) return Palette { juce::Colour (0xffEDEDEA), juce::Colour (0xffF7F7F4), juce::Colour (0xffDEDFDB), juce::Colour (0xffCBCCC7), juce::Colour (0xff141516), juce::Colour (0xff5F625E), juce::Colour (0xff1E1F21), juce::Colour (0xffF5F3EE), juce::Colour (0xff000000), juce::Colour (0xffF5F3EE), juce::Colour (0xff0B0C0D), juce::Colour (0xffF5F3EE), juce::Colour (0xff9C9F9A), juce::Colour (0xff1E1F21), juce::Colour (0xffF5F3EE), juce::Colour (0xff000000), juce::Colour (0xff4A4C4A), juce::Colour (0xff141516), juce::Colour (0xffF5F3EE), juce::Colour (0xffFF3B2F), juce::Colour (0xffD93A2B), juce::Colour (0xffFFFFFF), juce::Colour (0xff9E2519) };
            if (t == Theme::vst5) return Palette { juce::Colour (0xffF1EFEA), juce::Colour (0xffFAF9F6), juce::Colour (0xffE2DFD8), juce::Colour (0xffD8D5CE), juce::Colour (0xff171614), juce::Colour (0xff6E6A62), juce::Colour (0xff171614), juce::Colour (0xffF1EFEA), juce::Colour (0xff000000), juce::Colour (0xffF1EFEA), juce::Colour (0xff171614), juce::Colour (0xffF1EFEA), juce::Colour (0xffA29E96), juce::Colour (0xff2A2927), juce::Colour (0xffF1EFEA), juce::Colour (0xff0E0D0C), juce::Colour (0xff4A4742), juce::Colour (0xff171614), juce::Colour (0xffF1EFEA), juce::Colour (0xffFF3B2F), juce::Colour (0xffD93A2B), juce::Colour (0xffFFFFFF), juce::Colour (0xff9E2519) };
            if (t == Theme::oscuro) return Palette { juce::Colour (0xff1B1A18), juce::Colour (0xff232220), juce::Colour (0xff121110), juce::Colour (0xff3A3834), juce::Colour (0xffF1EFEA), juce::Colour (0xffA29E96), juce::Colour (0xff3A3834), juce::Colour (0xffF1EFEA), juce::Colour (0xff0A0A09), juce::Colour (0xffF1EFEA), juce::Colour (0xff0E0D0C), juce::Colour (0xffF1EFEA), juce::Colour (0xff8C8880), juce::Colour (0xff3A3834), juce::Colour (0xffF1EFEA), juce::Colour (0xff0A0A09), juce::Colour (0xff2A2826), juce::Colour (0xffF1EFEA), juce::Colour (0xffF1EFEA), juce::Colour (0xffFF4D40), juce::Colour (0xffD93A2B), juce::Colour (0xffFFFFFF), juce::Colour (0xff9E2519) };
        }
        if (p == Plugin::drum5)
        {
            if (t == Theme::oficial) return Palette { juce::Colour (0xffA9A8A2), juce::Colour (0xffB9B8B2), juce::Colour (0xff97968F), juce::Colour (0xff8A8982), juce::Colour (0xff121211), juce::Colour (0xff33322E), juce::Colour (0xff3B3B38), juce::Colour (0xffEDEDE8), juce::Colour (0xff1A1A18), juce::Colour (0xffEDEDE8), juce::Colour (0xff1B2316), juce::Colour (0xffCFE3B4), juce::Colour (0xff8AA273), juce::Colour (0xff4A4A47), juce::Colour (0xffEDEDE8), juce::Colour (0xff1F1F1D), juce::Colour (0xff2E2E2B), juce::Colour (0xff121211), juce::Colour (0xffCFE3B4), juce::Colour (0xffFF4D40), juce::Colour (0xff6FA83A), juce::Colour (0xff171614), juce::Colour (0xff4C7826) };
            if (t == Theme::vst5) return Palette { juce::Colour (0xffF1EFEA), juce::Colour (0xffFAF9F6), juce::Colour (0xffE2DFD8), juce::Colour (0xffD8D5CE), juce::Colour (0xff171614), juce::Colour (0xff6E6A62), juce::Colour (0xff171614), juce::Colour (0xffF1EFEA), juce::Colour (0xff000000), juce::Colour (0xffF1EFEA), juce::Colour (0xff171614), juce::Colour (0xffF1EFEA), juce::Colour (0xffA29E96), juce::Colour (0xff2A2927), juce::Colour (0xffF1EFEA), juce::Colour (0xff0E0D0C), juce::Colour (0xff4A4742), juce::Colour (0xff171614), juce::Colour (0xffF1EFEA), juce::Colour (0xffFF3B2F), juce::Colour (0xff6FA83A), juce::Colour (0xff171614), juce::Colour (0xff4C7826) };
            if (t == Theme::oscuro) return Palette { juce::Colour (0xff1B1A18), juce::Colour (0xff232220), juce::Colour (0xff121110), juce::Colour (0xff3A3834), juce::Colour (0xffF1EFEA), juce::Colour (0xffA29E96), juce::Colour (0xff3A3834), juce::Colour (0xffF1EFEA), juce::Colour (0xff0A0A09), juce::Colour (0xffF1EFEA), juce::Colour (0xff0E0D0C), juce::Colour (0xffF1EFEA), juce::Colour (0xff8C8880), juce::Colour (0xff3A3834), juce::Colour (0xffF1EFEA), juce::Colour (0xff0A0A09), juce::Colour (0xff2A2826), juce::Colour (0xffF1EFEA), juce::Colour (0xffF1EFEA), juce::Colour (0xffFF4D40), juce::Colour (0xff6FA83A), juce::Colour (0xff171614), juce::Colour (0xff4C7826) };
        }
        jassertfalse;
        return palette (Plugin::clip5, Theme::oficial);
    }
}
