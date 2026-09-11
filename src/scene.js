import {layout as L,confirmed as C,architectural as A,stairPoint} from './layout.js';
import {group,box,line,extrude,rail,loft} from './geometry.js';
export function architecture(root,m){const lower=group('Lower Deck — implantação estimada',root),upper=group('Main Deck — contornos estimados',root),boats=group('Embarcações — volumes de referência',root);
box([C.width/2,-.13,C.depth/2],[C.width,.26,C.depth],m.floor,lower);
for(const w of L.walls){const [x,z,sx,sz,h]=w;box([x,h/2,z],[sx,h,sz],h>3?m.wall:m.wood,lower);if(h<3&&sx>1){for(let y=.15;y<1;y+=.13)box([x,y,z+.09],[sx,.065,.09],m.teak,lower);if(sx>3)box([x,Math.min(h-.675,1.65),z],[sx-.15,1.35,.035],m.glass,lower);}}
for(const [x,z]of L.columns)box([x,C.clearHeight/2,z],[.13,C.clearHeight,.13],m.dark,lower);
for(const b of A.beams)box(b.p,b.s,m.dark,lower);
extrude(L.piazza,C.clearHeight,C.slab,m.floor,upper);
const s=L.stair;for(let i=0;i<s.count;i++){const t=i/s.count,u=(i+1)/s.count,p=[stairPoint(t,0),stairPoint(t,1),stairPoint(u,1),stairPoint(u,0)],h=(s.count-i)*C.riser;extrude(p,0,h,m.stone,upper);line([stairPoint(u,0),stairPoint(u,1)].map(p=>[p[0],h-.025,p[1]]),m.light,upper,.018);}
for(const r of A.rails)rail(r.p,r.y,m.metal,r.layer==='lower'?lower:upper);
for(const p of A.posts)box(p.p,p.s,m.red,lower);box(A.access.p,A.access.s,m.teak,upper);
const v=A.mockup;loft(L.mockup,v.layers,m.white,boats);extrude(L.mockup,v.deckY,v.deckThickness,m.teak,upper);line(L.mockup.map(p=>[p[0],v.rimY,p[1]]),m.white,boats,v.rimRadius);loft(v.cabin,v.cabinLayers,m.glass,boats);extrude(v.cabin,v.roofY,v.roofThickness,m.white,boats);for(const b of v.boxes)box(b.p,b.s,m[b.m],boats);
const az=A.az58;loft(az.contour,az.layers,m.white,boats);extrude(az.contour,az.deckY,az.deckThickness,m.teak,boats);for(const b of az.boxes)box(b.p,b.s,m[b.m],boats);
box(A.screen.p,A.screen.s,m.screen,lower);for(const c of A.cases){box(c.p,c.s,m.dark,lower);box([c.p[0],1.52,c.p[2]],[c.s[0],.5,c.s[2]],m.glass,lower);box([c.p[0],1.85,c.p[2]],[c.s[0],.04,c.s[2]],m.light,lower);}
const q=A.curvedScreen,screen=[];for(let i=0;i<=q.segments;i++){const a=q.start+i/q.segments*q.span;screen.push([q.center[0]+q.radii[0]*Math.cos(a),q.center[1]+q.radii[1]*Math.sin(a)]);}for(let i=0;i<screen.length-1;i++){const a=screen[i],b=screen[i+1],mesh=box([(a[0]+b[0])/2,q.height/2,(a[1]+b[1])/2],[q.thickness,q.height,Math.hypot(a[0]-b[0],a[1]-b[1])+.015],m.screen,lower);mesh.rotation.y=Math.atan2(b[0]-a[0],b[1]-a[1]);}
const brise=group('Brise estimado',upper),br=A.brise;for(let i=0;i<br.count;i++){const a=br.start+i/(br.count-1)*br.span;box([br.center[0]+br.radii[0]*Math.cos(a),br.centerY,br.center[1]+br.radii[1]*Math.sin(a)],br.slat,m.wood,brise);}return {lower,upper,boats,brise};}
