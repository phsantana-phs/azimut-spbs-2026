import {layout} from './layout.js';
import matrix from '../references/matrix.json';
export function interfaceUI({view,mode,light,scenario,capture,exportGLB,asset,home,images}){
const $=id=>document.getElementById(id),select=$('view');
for(const z of layout.zones){const o=document.createElement('option');o.value=z.id;o.textContent=z.name;select.append(o);}select.onchange=()=>view(select.value);
$('home').onclick=()=>{select.value='overall';home();};$('walk').onclick=()=>mode();
$('render').onclick=()=>light('render');$('day').onclick=()=>light('day');$('evening').onclick=()=>light('evening');$('scenario').onchange=e=>scenario(e.target.value);
$('capture-button').onclick=capture;$('export-button').onclick=exportGLB;$('export-mobile').onclick=exportGLB;
$('references').onclick=()=>$('reference-dialog').showModal();$('close-references').onclick=()=>$('reference-dialog').close();$('close-image').onclick=()=>$('image-dialog').close();
$('asset-mode').onchange=e=>asset(e.target.value);
const labels={documentado:'Documentado no PDF',render:'Complementado por render',estimado:'Estimado'};
for(const e of matrix){const section=document.createElement('section');section.className='evidence';const h=document.createElement('h3');h.textContent=e.elemento;const badge=document.createElement('span');badge.className='badge '+e.confianca;badge.textContent=labels[e.confianca];section.append(h,badge);for(const text of [e.medida||'Sem medida fornecida.',e.fonte,e.observacoes]){const p=document.createElement('p');p.textContent=text;section.append(p);}$('reference-list').append(section);}
for(const [key,data]of Object.entries(images)){const n=Number(key),figure=document.createElement('figure'),button=document.createElement('button'),img=document.createElement('img'),caption=document.createElement('figcaption');img.src=data;img.alt=`Página ${n} do PDF REV05`;img.loading='lazy';button.append(img);button.setAttribute('aria-label',`Ampliar página ${n}`);button.onclick=()=>{$('reference-image').src=data;$('reference-image').alt=img.alt;$('image-title').textContent=`Referência · PDF ${n}`;$('image-dialog').showModal();};caption.textContent=`PDF ${n} · ${n<5?'Apresentação':n<27?'Render':n<29?'Planta':n===29?'Cortes':n<34?'Memorial':'Créditos'}`;figure.append(button,caption);$('gallery').append(figure);}
let timer;return {toast(text){$('toast').textContent=text;clearTimeout(timer);timer=setTimeout(()=>$('toast').textContent='',4500);},walk(active){$('walk').setAttribute('aria-pressed',String(active));$('walk').textContent=active?'Sair da caminhada':'Caminhar';$('touchpad').classList.toggle('on',active);$('hint').textContent=active?'WASD / setas: mover · arraste: olhar · Esc: órbita':'Arraste para orbitar · roda / pinça: zoom · botão direito: deslocar';},light(active){for(const k of ['render','day','evening'])$(k).setAttribute('aria-pressed',String(active===k));},status(text){$('status').textContent=text;}};
}
