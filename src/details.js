import * as T from 'three';
import {group,box,cylinder,line,mesh} from './geometry.js';
export function label(text,x,y,z,w,g,color='#eae4d8'){const c=document.createElement('canvas');c.width=1024;c.height=160;const ctx=c.getContext('2d');ctx.clearRect(0,0,1024,160);ctx.fillStyle=color;ctx.textAlign='center';ctx.font='500 82px Arial';ctx.fillText(text,512,108);const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;const o=mesh(new T.PlaneGeometry(w,w*160/1024),new T.MeshBasicMaterial({map:t,transparent:true,side:T.DoubleSide}),g,[x,y,z]);return o;}
export function details(root,m){const g=group('Sinalização e iluminação estimadas',root);box([2.7,.75,22.6],[4.5,1.5,.2],m.dark,g);label('A Z I M U T',2.7,.82,22.72,3.8,g);label('AZIMUT EXPERIENCE',17.5,1.7,1.58,7,g);
for(let row=0;row<5;row++){const z=8+row*2.7,p=[];for(let i=0;i<=25;i++){const x=8+i*.69,y=5.7-.5*Math.sin(i/25*Math.PI);p.push([x,y,z]);if(i%2===0)mesh(new T.SphereGeometry(.075,8,6),m.light,g,[x,y-.12,z]);}line(p,m.dark,g,.009);}
// Luminária-barco interpretada por uma elipse de madeira suspensa.
const pts=[];for(let i=0;i<=40;i++){let a=i/40*Math.PI*2;pts.push([18.2+2*Math.cos(a),5.0,13.4+.65*Math.sin(a)]);}line(pts,m.wood,g,.07);for(const x of [17,19.4])line([[x,5.05,13.4],[x,5.7,13.4]],m.dark,g,.008);
return g;}
