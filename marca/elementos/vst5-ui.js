// vst5-ui.js — tokens de tema y elementos (perilla, íconos, logo). Fuente de vst5_ui_tokens.h.
/* ---------- Tokens de tema (mismos nombres en el código JUCE: vst5_ui_tokens.h) ---------- */
const ACC={clip5:{acc:'#D93A2B',accink:'#FFFFFF',accedge:'#9E2519'},sampler5:{acc:'#E8862A',accink:'#171614',accedge:'#A85E19'},drum5:{acc:'#6FA83A',accink:'#171614',accedge:'#4C7826'}};
const BASE={
 vst5:{body:'#F1EFEA',panel:'#FAF9F6',well:'#E2DFD8',line:'#D8D5CE',ink:'#171614',dim:'#6E6A62',key:'#171614',keyink:'#F1EFEA',keyedge:'#000000',ptr:'#F1EFEA',screen:'#171614',screenink:'#F1EFEA',screendim:'#A29E96',pad:'#2A2927',padink:'#F1EFEA',padedge:'#0E0D0C',ledoff:'#4A4742',focus:'#171614',meter:'#F1EFEA',over:'#FF3B2F'},
 oscuro:{body:'#1B1A18',panel:'#232220',well:'#121110',line:'#3A3834',ink:'#F1EFEA',dim:'#A29E96',key:'#3A3834',keyink:'#F1EFEA',keyedge:'#0A0A09',ptr:'#F1EFEA',screen:'#0E0D0C',screenink:'#F1EFEA',screendim:'#8C8880',pad:'#3A3834',padink:'#F1EFEA',padedge:'#0A0A09',ledoff:'#2A2826',focus:'#F1EFEA',meter:'#F1EFEA',over:'#FF4D40'},
};
const OFICIAL={
 clip5:{body:'#C9C6BE',panel:'#D8D5CE',well:'#B8B5AD',line:'#A9A59C',ink:'#171614',dim:'#46423C',key:'#232220',keyink:'#F1EFEA',keyedge:'#000000',ptr:'#F1EFEA',screen:'#121211',screenink:'#F1EFEA',screendim:'#A29E96',pad:'#232220',padink:'#F1EFEA',padedge:'#000000',ledoff:'#4A4742',focus:'#171614',meter:'#F1EFEA',over:'#FF3B2F'},
 sampler5:{body:'#EDEDEA',panel:'#F7F7F4',well:'#DEDFDB',line:'#CBCCC7',ink:'#141516',dim:'#5F625E',key:'#1E1F21',keyink:'#F5F3EE',keyedge:'#000000',ptr:'#F5F3EE',screen:'#0B0C0D',screenink:'#F5F3EE',screendim:'#9C9F9A',pad:'#1E1F21',padink:'#F5F3EE',padedge:'#000000',ledoff:'#4A4C4A',focus:'#141516',meter:'#F5F3EE',over:'#FF3B2F'},
 drum5:{body:'#A9A8A2',panel:'#B9B8B2',well:'#97968F',line:'#8A8982',ink:'#121211',dim:'#33322E',key:'#3B3B38',keyink:'#EDEDE8',keyedge:'#1A1A18',ptr:'#EDEDE8',screen:'#1B2316',screenink:'#CFE3B4',screendim:'#8AA273',pad:'#4A4A47',padink:'#EDEDE8',padedge:'#1F1F1D',ledoff:'#2E2E2B',focus:'#121211',meter:'#CFE3B4',over:'#FF4D40'},
};
/* Color del plugin sobre superficie (accsurf): el mismo tono, oscurecido o aclarado lo justo para llegar a 3:1
   (WCAG 1.4.11) contra el cuerpo y el panel del tema. Lo usan las marcas que caen sobre superficies: arco y 5 de las
   perillas, raya de la pestaña elegida, fila elegida de una lista, contorno al editar. Sobre teclas, pads y pantalla va acc. */
const lum=h=>{const c=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4));return .2126*c[0]+.7152*c[1]+.0722*c[2]};
const contrast=(a,b)=>{const x=lum(a),y=lum(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
const mixHex=(h,to,t)=>'#'+[1,3,5].map(i=>Math.round(parseInt(h.slice(i,i+2),16)*(1-t)+parseInt(to.slice(i,i+2),16)*t).toString(16).padStart(2,'0')).join('').toUpperCase();
function surfAcc(o){const s=[o.body,o.panel],ok=c=>s.every(x=>contrast(c,x)>=3);if(ok(o.acc))return o.acc;
  const to=(lum(o.body)+lum(o.panel))/2>.18?'#000000':'#FFFFFF';for(let k=1;k<=50;k++){const c=mixHex(o.acc,to,k/50);if(ok(c))return c}return to}
const themeFor=(p,t)=>{const o=Object.assign({},t==='oficial'?OFICIAL[p]:BASE[t],ACC[p]);o.accsurf=surfAcc(o);return o};
const applyTheme=(el,p,t)=>{const o=themeFor(p,t);for(const k in o)el.style.setProperty('--p-'+k,o[k]);};

/* ---------- Perilla ---------- */
const DEG=a=>a*Math.PI/180;
function knobSVG(size,ticks){const r=50,s=[];
  if(ticks){for(let i=0;i<=10;i++){const a=DEG(-135+i*27),five=i===5,r1=five?39:41,r2=five?49:47;
    s.push(`<line class="${five?'five':'tick'}" x1="${50+Math.sin(a)*r1}" y1="${50-Math.cos(a)*r1}" x2="${50+Math.sin(a)*r2}" y2="${50-Math.cos(a)*r2}" stroke-width="${five?4:2.5}" stroke-linecap="round"/>`);}}
  const R=ticks?33:40;
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" role="slider" tabindex="0"><path class="track" d="${arc(R,-135,135)}" fill="none" stroke-width="5" stroke-linecap="round"/><path class="arc" d="" fill="none" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="50" r="${R-8}" fill="currentColor"/><line class="ptr" x1="50" y1="${50-(R-8)*0.3}" x2="50" y2="${50-(R-8)+4}" stroke-width="5" stroke-linecap="round"/></svg>`;}
function arc(R,a0,a1){if(Math.abs(a1-a0)<.5)return'';const p=a=>[50+Math.sin(DEG(a))*R,50-Math.cos(DEG(a))*R];const [x0,y0]=p(a0),[x1,y1]=p(a1);
  return `M${x0.toFixed(2)} ${y0.toFixed(2)} A${R} ${R} 0 ${Math.abs(a1-a0)>180?1:0} ${a1>a0?1:0} ${x1.toFixed(2)} ${y1.toFixed(2)}`;}
function knob(el,{size=56,ticks=true,label,fmt=v=>v.toFixed(1),def=5,bip=true,v=def,onHelp}={}){
  el.className='knob';el.innerHTML=knobSVG(size,ticks)+(label?`<span class="lbl">${label}</span><span class="val"></span>`:'');
  const svg=el.querySelector('svg'),a=el.querySelector('.arc'),p=el.querySelector('.ptr'),out=el.querySelector('.val'),R=ticks?33:40;
  svg.setAttribute('aria-label',label||'Perilla');svg.setAttribute('aria-valuemin',0);svg.setAttribute('aria-valuemax',10);
  const set=n=>{v=Math.max(0,Math.min(10,Math.round(n*100)/100));const ang=-135+v*27,from=bip?0:-135;
    a.setAttribute('d',v===def&&bip?'':arc(R,Math.min(from,ang),Math.max(from,ang)));p.setAttribute('transform',`rotate(${ang} 50 50)`);
    const t=fmt(v);if(out)out.textContent=t;svg.setAttribute('aria-valuenow',v);svg.setAttribute('aria-valuetext',t);onHelp&&onHelp(label,t);};
  let y0=null,v0;svg.addEventListener('pointerdown',e=>{y0=e.clientY;v0=v;svg.setPointerCapture(e.pointerId)});
  svg.addEventListener('pointermove',e=>{if(y0!==null)set(v0+(y0-e.clientY)/(e.shiftKey?80:20))});
  svg.addEventListener('pointerup',()=>y0=null);svg.addEventListener('pointercancel',()=>y0=null);
  svg.addEventListener('dblclick',()=>set(def));
  svg.addEventListener('wheel',e=>{e.preventDefault();set(v+(e.deltaY<0?.25:-.25))},{passive:false});
  svg.addEventListener('keydown',e=>{const d={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1}[e.key];if(d){e.preventDefault();set(v+d*(e.shiftKey?.05:.25))}});
  svg.addEventListener('pointerenter',()=>onHelp&&onHelp(label,fmt(v)));
  set(v);return{set};}
const F={db:(a,b)=>v=>((a+(b-a)*v/10)>0?'+':'')+(a+(b-a)*v/10).toFixed(1).replace('.',',')+' dB',pct:v=>Math.round(v*10)+' %',st:v=>{const s=Math.round((v-5)*2.4);return(s>0?'+':'')+s+' st'},
  hz:v=>{const h=20*Math.pow(1000,v/10);return h>=1000?(h/1000).toFixed(1).replace('.',',')+' kHz':Math.round(h)+' Hz'},ms:v=>Math.round(v*v*10)+' ms',swing:v=>Math.round(50+v*2.5)+' %'};

/* ---------- Campo arrastrable ----------
   Arrastre vertical (Shift fino), rueda, flechas, doble clic a fábrica; clic sin arrastrar o Enter abre la edición (Enter confirma, Esc cancela). */
function field(el,o){const lim=x=>{const lo=typeof o.min==='function'?o.min():o.min,hi=typeof o.max==='function'?o.max():o.max;return Math.max(lo,Math.min(hi,x))};
 const show=()=>{el.textContent=o.fmt(o.get());el.setAttribute('aria-valuetext',el.textContent)};el.__show=show;
 const put=x=>{o.set(Math.round(lim(x)/o.step)*o.step);show();o.onHelp&&o.onHelp(el.getAttribute('aria-label'),el.textContent)};
 let y0=null,v0,moved=false;
 el.addEventListener('pointerdown',e=>{if(el.isContentEditable)return;y0=e.clientY;v0=o.get();moved=false;el.setPointerCapture(e.pointerId)});
 el.addEventListener('pointermove',e=>{if(y0===null)return;const dy=y0-e.clientY;if(Math.abs(dy)>2)moved=true;if(moved)put(v0+dy*(lim(1e9)-lim(-1e9))/(e.shiftKey?800:200))});
 el.addEventListener('pointerup',()=>{if(y0!==null&&!moved)edit();y0=null});
 el.addEventListener('dblclick',()=>{if(o.def!=null)put(o.def)});
 el.addEventListener('wheel',e=>{e.preventDefault();put(o.get()+(e.deltaY<0?1:-1)*o.step*(e.shiftKey?1:10))},{passive:false});
 el.addEventListener('keydown',e=>{if(el.isContentEditable){if(e.key==='Enter'){e.preventDefault();done(true)}if(e.key==='Escape'){e.preventDefault();e.stopPropagation();done(false)}return}
  const d={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1}[e.key];if(d){e.preventDefault();put(o.get()+d*o.step*(e.shiftKey?1:10))}if(e.key==='Enter'){e.preventDefault();edit()}});
 const edit=()=>{el.contentEditable='true';el.textContent=el.textContent.replace(/[^\d,.\-−]/g,'');el.focus();getSelection().selectAllChildren(el)};
 const done=ok=>{const t=el.textContent.replace('−','-').replace(',','.');el.contentEditable='false';if(ok&&!isNaN(parseFloat(t)))put(parseFloat(t));else show()};
 el.addEventListener('blur',()=>{if(el.isContentEditable)done(true)});show();return{show}}

/* ---------- Íconos ---------- */
const IC={prev:'<path d="M9 3 4 7l5 4"/>',next:'<path d="m5 3 5 4-5 4"/>',undo:'<path d="M4 6h6a3 3 0 0 1 0 6H6"/><path d="M6 3 3 6l3 3"/>',redo:'<path d="M10 6H4a3 3 0 0 0 0 6h4"/><path d="m8 3 3 3-3 3"/>',x:'<path d="M3.5 3.5l7 7M10.5 3.5l-7 7"/>',gear:'<circle cx="7" cy="7" r="2"/><path d="M7 1.5v2M7 10.5v2M1.5 7h2M10.5 7h2M3.1 3.1l1.4 1.4M9.5 9.5l1.4 1.4M3.1 10.9l1.4-1.4M9.5 4.5l1.4-1.4"/>'};
const ibtn=(n,l)=>`<button class="ibtn" type="button" aria-label="${l}" title="${l}"><svg viewBox="0 0 14 14">${IC[n]}</svg></button>`;
const CURVES=['M2 13 C 8 8, 11 3, 20 3','M2 13 L 9 6 Q 11 3 14 3 L 20 3','M2 13 L 12 3 L 20 3','M2 13 L 20 1'];

/* ---------- Logos de plugin (perilla + nombre en texto; en los plugins se usa el SVG del kit) ---------- */
const plugLogo=p=>`<svg class="logo" viewBox="0 0 ${p.length*15+34} 24" aria-label="${p}"><g transform="translate(2 2) scale(.3125)"><circle cx="32" cy="32" r="19" fill="currentColor"/><line x1="32" y1="27" x2="32" y2="17" stroke="var(--p-acc)" stroke-width="5" stroke-linecap="round"/>${[...Array(11)].map((_,i)=>{const a=DEG(-135+i*27),f=i===5;return`<line x1="${32+Math.sin(a)*(f?22:23)}" y1="${32-Math.cos(a)*(f?22:23)}" x2="${32+Math.sin(a)*(f?30:28)}" y2="${32-Math.cos(a)*(f?30:28)}" stroke="${f?'var(--p-acc)':'currentColor'}" stroke-width="${f?4:2.5}" stroke-linecap="round"/>`}).join('')}</g><text x="28" y="18" font-family="Archivo,sans-serif" font-weight="800" font-size="17" style="font-stretch:125%" fill="currentColor">${p}</text></svg>`;

