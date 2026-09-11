import {build} from 'esbuild';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
// Baseline inicial autorizado pelo pedido do MVP; alterações futuras exigem revisão humana.
const review=JSON.parse(await readFile('validation/architecture-baseline.json','utf8'));
for(const [file,digest]of Object.entries(review.sha256)){const current=createHash('sha256').update(await readFile(file)).digest('hex');if(current!==digest)throw Error(`${file}: arquitetura alterada. Preserve antes/depois e obtenha aprovação humana antes de atualizar validation/architecture-baseline.json.`);}
const images={};for(let n=1;n<=34;n++){const path=`references/${n>=27&&n<=29?'plan':'azimut'}-${String(n).padStart(2,'0')}.jpg`;images[n]='data:image/jpeg;base64,'+(await readFile(path)).toString('base64');}
const assets={images,glb:(await readFile('generated/chisel-assets/mesa-auxiliar-v1.glb')).toString('base64')};
const result=await build({entryPoints:['src/app.js'],bundle:true,write:false,format:'iife',target:'es2020',minify:true,legalComments:'inline',plugins:[{name:'offline-assets',setup(b){b.onResolve({filter:/^embedded:assets$/},()=>({path:'assets',namespace:'offline'}));b.onLoad({filter:/.*/,namespace:'offline'},()=>({contents:JSON.stringify(assets),loader:'json'}));}}]});
const font=(await readFile('assets/fonts/DejaVuSans.ttf')).toString('base64');
const css=`@font-face{font-family:AzimutUI;src:url(data:font/ttf;base64,${font}) format('truetype');font-weight:100 900;font-display:swap;}`+await readFile('src/style.css','utf8');
let html=await readFile('index.html','utf8');html=html.replace('/*INLINE_CSS*/',()=>css);html=html.replace('/*INLINE_JS*/',()=>result.outputFiles[0].text.replace(/<\/script/gi,'<\\/script'));
await mkdir('dist',{recursive:true});await writeFile('dist/azimut-spbs.html',html);console.log(`HTML offline: dist/azimut-spbs.html (${(Buffer.byteLength(html)/1048576).toFixed(2)} MB). JS, CSS, fonte, texturas e referências locais incorporados.`);
