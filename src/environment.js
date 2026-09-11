import * as T from 'three';
import {layout as L,inside} from './layout.js';
import {group,box,cylinder,mesh,ring,line,extrude} from './geometry.js';
function tree(x,y,z,m,g){cylinder([x,y+.4,z],.72,.8,m.wood,g);cylinder([x,y+.81,z],.66,.03,m.grass,g);for(let i=0;i<36;i++){const a=i*Math.PI/18;cylinder([x+.723*Math.cos(a),y+.4,z+.723*Math.sin(a)],.019,.8,m.wood,g);}
line([[x,y+.8,z],[x+.12,y+1.8,z],[x-.1,y+3.4,z+.15]],m.trunk,g,.095);
const leafGeo=new T.IcosahedronGeometry(1,1);for(let i=0;i<85;i++){const a=i*2.39996,r=.9*Math.sqrt((i%17)/17),h=2.5+Math.sin(i*1.9)*.9;const p=[x+Math.cos(a)*r,y+h,z+Math.sin(a)*r];if(i%14===0)line([[x,y+1.7,z],p],m.trunk,g,.025);const o=mesh(leafGeo,m.leaf,g,p);o.scale.set(.28,.14,.35);o.rotation.set(i,i*.6,i*.1);}}
export function environment(root,m){const g=group('Paisagismo — posições e espécies estilizadas',root);for(const t of L.trees)tree(...t,m,g);
const ep=L.ellipsePlanter,oval=Array.from({length:72},(_,i)=>[ep.center[0]+ep.radii[0]*Math.cos(i/72*Math.PI*2),ep.center[1]+ep.radii[1]*Math.sin(i/72*Math.PI*2)]);
for(const contour of [L.frontGarden,oval]){extrude(contour,0,.34,m.wood,g);extrude(contour,.34,.04,m.grass,g);for(let x=4.4;x<25;x+=.5)for(let z=9.5;z<21.5;z+=.55)if(inside(x,z,contour)){const o=mesh(new T.IcosahedronGeometry(.3,1),m.grass,g,[x,.58+.12*Math.sin(x*9+z),z]);o.scale.set(1,.9,1);}}
return g;}
