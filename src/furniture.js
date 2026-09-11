import * as T from 'three';
import {layout as L,barOutline} from './layout.js';
import {group,box,cylinder,ring,extrude} from './geometry.js';
export function table(x,y,z,m,g,r=.55){const h=r<.4?.34:.46;cylinder([x,y+(h-.03)/2,z],r*.52,h-.03,m.wood,g);cylinder([x,y+h,z],r,.06,m.stone,g);}
function chair(x,y,z,m,g,a=0){const c=group('Cadeira estimada',g);c.position.set(x,y,z);c.rotation.y=a;box([0,.43,0],[.59,.12,.58],m.fabric,c);box([0,.74,-.26],[.61,.5,.09],m.wood,c);for(const xx of [-.23,.23])for(const zz of [-.22,.22])cylinder([xx,.2,zz],.026,.4,m.wood,c);}
function sofa(x,y,z,m,g,angle=0){const s=group('Sofá estimado',g);s.position.set(x,y,z);s.rotation.y=angle;box([0,.25,0],[.9,.34,2.8],m.wood,s);box([0,.49,0],[.96,.28,2.8],m.fabric,s);box([-.35,.78,0],[.22,.42,2.8],m.fabric,s);for(const z of [-1.28,1.28])box([0,.68,z],[.9,.28,.18],m.fabric,s);}
export function furniture(root,m){const upper=group('Mobiliário Main Deck — estimado',root),lower=group('Mobiliário Lower Deck — estimado',root);
for(const station of L.stations){const g=group('Estar '+station.id+' · '+station.name,upper),y=2.7;box([station.center[0],y+.013,station.center[1]],[station.rug[0],.026,station.rug[1]],m.rug,g);for(const [x,z,a]of station.sofas)sofa(x,y,z,m,g,a);for(const [x,z,a]of station.chairs)chair(x,y,z,m,g,a);station.tables.forEach(([x,z,r],i)=>{if(station.id!=='E'||i!==0)table(x,y,z,m,g,r);});}
// Open lens band; outer and inner contours stay in layout.js.
const outer=barOutline(),inner=barOutline(.43),band=[...outer.slice(3,-3),...inner.slice(3,-3).reverse()];extrude(band,2.7,.94,m.wood,upper);const top=[...outer.slice(3,-3),...barOutline(.55).slice(3,-3).reverse()];extrude(top,3.64,.085,m.stone,upper);for(const [x,z]of outer.slice(3,-3))cylinder([x,3.17,z],.024,.9,m.wood,upper);
const bc=L.backCounter;ring(...bc.center,bc.outer[0]/2-.08,bc.outer[1]/2-.08,.4,2.7,.9,m.wood,upper,.65,5.65);ring(...bc.center,bc.outer[0]/2,bc.outer[1]/2,.53,3.6,.08,m.stone,upper,.65,5.65);
for(const [x,z]of L.looseSeats)chair(x,0,z,m,lower,x<2?Math.PI/2:-Math.PI/2);
for(const [x,z,w,d]of L.lowerObjects){box([x,.74,z],[w,.09,d],m.stone,lower);cylinder([x,.35,z],.18,.7,m.dark,lower);chair(x,z===9?.0:0,z-d/2-.4,m,lower);chair(x,0,z+d/2+.4,m,lower,Math.PI);}
for(const x of [17.3,18.7]){chair(x,0,11.9,m,lower);chair(x,0,14.1,m,lower,Math.PI);}
box([18,1.1,7.8],[3.3,2.2,.35],m.glass,lower);for(let i=0;i<5;i++)box([18,.25+i*.4,7.78],[3.2,.025,.4],m.metal,lower);
ring(3.7,19.5,1.6,1.2,.4,0,1,m.wood,lower,-.4,1.6);ring(3.7,19.5,1.65,1.25,.5,1,.08,m.stone,lower,-.4,1.6);
return {upper,lower};}
