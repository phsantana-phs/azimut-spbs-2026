import assert from 'node:assert/strict';
import {layout,confirmed,move,blocked,upperFloor,stairPoint,stairHeight} from '../src/layout.js';
assert.equal(confirmed.width*confirmed.depth,736);
for(const zone of layout.zones){assert.equal(blocked(zone.eye[0],zone.eye[2],zone.level),false,`Vista ${zone.id} nasce em colisão`);if(zone.level>0)assert.ok(upperFloor(zone.eye[0],zone.eye[2]),`Vista ${zone.id} fora do piso`);}
// Follow the curved centerline both ways, and test actual transitions to the upper/lower floor.
let point=stairPoint(1),p=[point[0],0,point[1]];
for(let i=299;i>=0;i--){const q=stairPoint(i/300);p=move(p,q[0]-p[0],q[1]-p[2]);assert.ok(Math.hypot(p[0]-q[0],p[2]-q[1])<.01,'Subida livre pelo leque');}
assert.ok(Math.abs(p[1]-2.7)<1e-6);p=move(p,0,-1);assert.equal(p[1],2.7,'Saída superior da escada');
point=stairPoint(0);p=[point[0],2.7,point[1]];for(let i=1;i<=300;i++){const q=stairPoint(i/300);p=move(p,q[0]-p[0],q[1]-p[2]);assert.ok(Math.hypot(p[0]-q[0],p[2]-q[1])<.01,'Descida livre pelo leque');}
p=move(p,0,.2);assert.ok(p[1]<1e-6,'Escada deve retornar ao térreo');
assert.equal(layout.stations.length,5);for(const s of layout.stations)for(const [x,z]of s.sofas)for(const dx of[-.48,.48])for(const dz of[-1.4,1.4])assert.ok(upperFloor(x+dx,z+dz),'Canto do sofá fora do piso: '+s.id);for(const s of layout.stations){for(const [x,z]of [...s.sofas,...s.chairs,...s.tables])assert.ok(upperFloor(x,z),'Móvel fora do piso: '+s.id);for(const [x,z]of s.chairs)assert.ok(blocked(x,z,2.7),'Assento sem colisão');}
assert.ok(blocked(16.95,13.9,2.7),'Bar protege interior não navegável');
p=move([1,0,20],-100,0);assert.ok(p[0]>=.3,'Limite externo deve bloquear deslocamento longo');
p=move([4,0,16],5,0);assert.ok(p[0]<5.3,'Telão deve impedir atravessamento');
p=move([20,2.7,20],0,10);assert.ok(p[2]<21,'Main Deck não permite queda pela borda');assert.equal(p[1],2.7);
console.log('OK: cotas, todas as vistas, subida/descida, limite, colisão e borda do mezanino.');
