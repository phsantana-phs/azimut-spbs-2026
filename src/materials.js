import * as T from 'three';

// Mapas PBR determinísticos, gerados localmente. Paleta interpretada do render;
// escala de grão/trama é parâmetro visual, não medição do acabamento real.
const SIZE=512, TAU=Math.PI*2;
const clamp=(v,a=0,b=255)=>Math.max(a,Math.min(b,v));
function noise(x,y,seed=0){let h=Math.imul(x+seed*37,374761393)^Math.imul(y+seed*19,668265263);h=Math.imul(h^(h>>>13),1274126177);return ((h^(h>>>16))>>>0)/4294967295;}
function smooth(x,y,period,seed=0){const u=x/period,v=y/period,ix=Math.floor(u),iy=Math.floor(v),tx=u-ix,ty=v-iy,s=tx*tx*(3-2*tx),t=ty*ty*(3-2*ty);const a=noise(ix,iy,seed)*(1-s)+noise(ix+1,iy,seed)*s,b=noise(ix,iy+1,seed)*(1-s)+noise(ix+1,iy+1,seed)*s;return a*(1-t)+b*t;}
function canvasTexture(data,color=false){const c=document.createElement('canvas');c.width=c.height=SIZE;const ctx=c.getContext('2d'),img=ctx.createImageData(SIZE,SIZE);img.data.set(data);ctx.putImageData(img,0,0);const t=new T.CanvasTexture(c);t.colorSpace=color?T.SRGBColorSpace:T.NoColorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=8;return t;}
function maps(kind,base){const count=SIZE*SIZE,color=new Uint8ClampedArray(count*4),height=new Float32Array(count),rough=new Uint8ClampedArray(count*4);for(let y=0;y<SIZE;y++)for(let x=0;x<SIZE;x++){const k=y*SIZE+x,n=noise(x,y,11),broad=smooth(x,y,36,5);let v=0,h=.5,r=.8;
 if(kind==='wood'||kind==='teak'){
  const warp=3.5*Math.sin(y/SIZE*TAU)+1.7*Math.sin(y/SIZE*TAU*3),grain=Math.sin((x+warp)*TAU/7.8),fibers=Math.sin((x+warp*.7)*TAU/2.5);
  v=(broad-.5)*13+grain*5+fibers*2+(n-.5)*5;h=.5+grain*.10+fibers*.035;r=.56+grain*.05;
  if(kind==='teak'){const period=SIZE/6,distance=(x+SIZE)%period,seam=distance<1.6||distance>period-1.6;v+=Math.sin(Math.floor(x/period)*2.7)*9;if(seam){v-=62;h=.12;r=.9;}}
 }else if(kind==='stone'){
  const vein=Math.sin(x*.024+y*.014+4*smooth(x,y,100,3));v=(n-.5)*23+(broad-.5)*26-(Math.abs(vein)<.07?14:0);h=.5+(n-.5)*.16;r=.34+(n-.5)*.1;
 }else if(kind==='sisal'){
  const a=Math.sin(x*TAU/16),b=Math.sin(y*TAU/16),over=(Math.floor(x/16)+Math.floor(y/16))%2;v=(over?a:b)*13+(n-.5)*11+(broad-.5)*9;h=.5+(over?a:b)*.21;r=.94;
 }else if(kind==='fabric'){
  const a=Math.sin(x*TAU/5),b=Math.sin(y*TAU/5);v=(a+b)*2.4+(n-.5)*5;h=.5+(a+b)*.1;r=.94;
 }else if(kind==='carpet'){
  v=(n-.5)*10+(broad-.5)*7+Math.sin(x*TAU/4)*1.5;h=.5+(n-.5)*.3;r=.98;
 }else if(kind==='bark'){v=Math.sin(x*.27+Math.sin(y*.03))*16+(n-.5)*15;h=.5+v/100;r=.96;}
 color[k*4]=clamp(base[0]+v);color[k*4+1]=clamp(base[1]+v*.91);color[k*4+2]=clamp(base[2]+v*.78);color[k*4+3]=255;height[k]=h;rough[k*4]=rough[k*4+1]=rough[k*4+2]=clamp(r*255);rough[k*4+3]=255;
 }
 const normal=new Uint8ClampedArray(count*4);for(let y=0;y<SIZE;y++)for(let x=0;x<SIZE;x++){const k=y*SIZE+x,dx=(height[y*SIZE+(x+1)%SIZE]-height[y*SIZE+(x+SIZE-1)%SIZE])*.6,dy=(height[((y+1)%SIZE)*SIZE+x]-height[((y+SIZE-1)%SIZE)*SIZE+x])*.6,len=Math.hypot(dx,dy,1);normal[k*4]=(1-dx/len)*127.5;normal[k*4+1]=(1-dy/len)*127.5;normal[k*4+2]=(1+1/len)*127.5;normal[k*4+3]=255;}
 return {map:canvasTexture(color,true),normalMap:canvasTexture(normal),roughnessMap:canvasTexture(rough)};
}
function screenTexture(){const c=document.createElement('canvas');c.width=512;c.height=256;const ctx=c.getContext('2d'),gradient=ctx.createLinearGradient(0,0,0,256);gradient.addColorStop(0,'#112a3c');gradient.addColorStop(1,'#5b91a0');ctx.fillStyle=gradient;ctx.fillRect(0,0,512,256);for(let j=0;j<55;j++){ctx.beginPath();for(let x=0;x<=512;x+=5){const y=j*5+Math.sin(x*.027+j*1.6)*4+Math.sin(x*.061+j)*2;x?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.strokeStyle='rgba(210,237,240,'+(.04+j/400)+')';ctx.lineWidth=.7;ctx.stroke();}const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;return t;}
export function materials(){
 const std=(color,roughness=.65,extra={})=>new T.MeshStandardMaterial({color,roughness,...extra});
 const surface=(name,kind,color,tile,normal=.4)=>{const mat=std('#ffffff',1,{...maps(kind,color),normalScale:new T.Vector2(normal,normal)});mat.name=name;mat.userData.surfaceTile=tile;return mat;};
 const wood=surface('Madeira natural · nogueira mel','wood',[132,96,58],[.65,2.4],.3);
 const teak=surface('Teca · réguas e juntas escuras','teak',[178,139,87],[.9,3],.4);
 const stone=surface('Pedra cinza clara · grão fino','stone',[177,177,171],[1.1,1.1],.25);
 const floor=surface('Carpete taupe · trama fina','carpet',[137,126,112],[.65,.65],.4);
 const fabric=surface('Linho marfim · estofamento','fabric',[229,225,211],[.22,.22],.35);
 const rug=surface('Sisal natural · trama cruzada','sisal',[195,170,118],[.32,.32],.6);
 const trunk=surface('Casca de madeira','bark',[72,62,43],[.4,1.2],.7);
 return {wood,teak,stone,floor,fabric,rug,trunk,white:new T.MeshPhysicalMaterial({name:'Casco branco acetinado',color:'#e9e8e1',roughness:.24,clearcoat:.4,clearcoatRoughness:.22}),dark:std('#191b19',.6),wall:std('#22231f',.9),metal:std('#514f46',.3,{metalness:.85}),glass:new T.MeshPhysicalMaterial({name:'Vidro fumê bronze',color:'#302b23',roughness:.12,metalness:.05,transparent:true,opacity:.87,envMapIntensity:1.4,side:T.DoubleSide}),red:std('#862c3c',.6),grass:std('#263b18',1),leaf:std('#3b4923',.88,{side:T.DoubleSide}),light:std('#fff0cc',.3,{emissive:'#ffe2ac',emissiveIntensity:5}),screen:std('#ffffff',.6,{map:screenTexture(),emissive:'#173846',emissiveIntensity:.35}),black:std('#111411',.8)};
}
