import * as T from 'three';
import {layout as L} from './layout.js';
import {group,box,cylinder,ring} from './geometry.js';
export function table(x,y,z,m,g,r=.55){cylinder([x,y+.22,z],r*.52,.44,m.wood,g);cylinder([x,y+.46,z],r,.06,m.stone,g);}
function chair(x,y,z,m,g,a=0){const c=group('Cadeira estimada',g);c.position.set(x,y,z);c.rotation.y=a;box([0,.43,0],[.59,.12,.58],m.fabric,c);box([0,.74,-.26],[.61,.5,.09],m.wood,c);for(const xx of [-.23,.23])for(const zz of [-.22,.22])cylinder([xx,.2,zz],.026,.4,m.wood,c);}
function sofa(x,y,z,m,g,angle=0){const s=group('Sofá estimado',g);s.position.set(x,y,z);s.rotation.y=angle;box([0,.25,0],[.9,.34,2.8],m.wood,s);box([0,.49,0],[.96,.28,2.8],m.fabric,s);box([-.35,.78,0],[.22,.42,2.8],m.fabric,s);for(const z of [-1.28,1.28])box([0,.68,z],[.9,.28,.18],m.fabric,s);}
export function furniture(root,m){const upper=group('Mobiliário Main Deck — estimado',root),lower=group('Mobiliário Lower Deck — estimado',root);
for(const [x,y,z]of L.tables){box([x,y+.013,z],[3.4,.026,3.4],m.rug,upper);if(x!==21.7)table(x,y,z,m,upper);cylinder([x+.7,y+.19,z+.65],.34,.38,m.fabric,upper);chair(x,y,z-1.3,m,upper);}
sofa(14.2,2.7,9.6,m,upper);sofa(17.1,2.7,9.6,m,upper,Math.PI);sofa(14.6,2.7,17.6,m,upper);sofa(23.3,2.7,17.8,m,upper,Math.PI);
ring(18.2,13.4,1.85,1.55,.42,2.7,.94,m.wood,upper,.17,Math.PI*2-.17);ring(18.2,13.4,1.94,1.64,.59,3.64,.085,m.stone,upper,.17,Math.PI*2-.17);
for(let i=0;i<90;i++){let a=.17+i/89*(Math.PI*2-.34);cylinder([18.2+1.86*Math.cos(a),3.17,13.4+1.56*Math.sin(a)],.025,.9,m.wood,upper);}
ring(22.5,8.6,1.3,1,.4,2.7,.9,m.wood,upper,.65,5.65);ring(22.5,8.6,1.4,1.1,.53,3.6,.08,m.stone,upper,.65,5.65);
for(const [x,z,w,d]of L.lowerObjects){box([x,.74,z],[w,.09,d],m.stone,lower);cylinder([x,.35,z],.18,.7,m.dark,lower);chair(x,z===9?.0:0,z-d/2-.4,m,lower);chair(x,0,z+d/2+.4,m,lower,Math.PI);}
for(const x of [17.3,18.7]){chair(x,0,11.9,m,lower);chair(x,0,14.1,m,lower,Math.PI);}
box([18,1.1,7.8],[3.3,2.2,.35],m.glass,lower);for(let i=0;i<5;i++)box([18,.25+i*.4,7.78],[3.2,.025,.4],m.metal,lower);
ring(3.7,19.5,1.6,1.2,.4,0,1,m.wood,lower,-.4,1.6);ring(3.7,19.5,1.65,1.25,.5,1,.08,m.stone,lower,-.4,1.6);
return {upper,lower};}
