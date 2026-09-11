import * as T from 'three';
import {layout as L} from './layout.js';
import {group,box,cylinder,mesh,ring,line} from './geometry.js';
function tree(x,y,z,m,g){cylinder([x,y+.4,z],.72,.8,m.wood,g);cylinder([x,y+.81,z],.66,.03,m.grass,g);for(let i=0;i<36;i++){const a=i*Math.PI/18;cylinder([x+.723*Math.cos(a),y+.4,z+.723*Math.sin(a)],.019,.8,m.teak,g);}
line([[x,y+.8,z],[x+.12,y+1.8,z],[x-.1,y+3.4,z+.15]],m.trunk,g,.095);
const leafGeo=new T.IcosahedronGeometry(1,1);for(let i=0;i<85;i++){const a=i*2.39996,r=.9*Math.sqrt((i%17)/17),h=2.5+Math.sin(i*1.9)*.9;const p=[x+Math.cos(a)*r,y+h,z+Math.sin(a)*r];if(i%14===0)line([[x,y+1.7,z],p],m.trunk,g,.025);const o=mesh(leafGeo,m.leaf,g,p);o.scale.set(.28,.14,.35);o.rotation.set(i,i*.6,i*.1);}}
export function environment(root,m){const g=group('Paisagismo — posições e espécies estilizadas',root);for(const t of L.trees)tree(...t,m,g);
box([19,0.18,21.45],[12,.36,1.4],m.wood,g);box([19,.37,21.45],[11.9,.03,1.3],m.grass,g);
for(let i=0;i<42;i++){const x=13.4+(i%21)*.55,z=21.1+Math.floor(i/21)*.55;const a=mesh(new T.IcosahedronGeometry(.32,1),m.grass,g,[x,.65,z]);a.scale.y=.8;}
return g;}
