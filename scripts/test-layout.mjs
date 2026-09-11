import assert from 'node:assert/strict';
import {layout,confirmed,move,blocked,upperFloor} from '../src/layout.js';
assert.equal(confirmed.width*confirmed.depth,736);
for(const zone of layout.zones){assert.equal(blocked(zone.eye[0],zone.eye[2],zone.level),false,`Vista ${zone.id} nasce em colisão`);if(zone.level>0)assert.ok(upperFloor(zone.eye[0],zone.eye[2]),`Vista ${zone.id} fora do piso`);}
let p=[10,0,20];for(let i=0;i<225;i++)p=move(p,0,-.05);assert.equal(p[1],2.7,'Escada deve alcançar Main Deck');
for(let i=0;i<228;i++)p=move(p,0,.05);assert.equal(p[1],0,'Escada deve retornar ao térreo');
p=move([1,0,20],-100,0);assert.ok(p[0]>=.3,'Limite externo deve bloquear deslocamento longo');
p=move([4,0,16],5,0);assert.ok(p[0]<5.3,'Telão deve impedir atravessamento');
p=move([20,2.7,20],0,10);assert.ok(p[2]<21,'Main Deck não permite queda pela borda');assert.equal(p[1],2.7);
console.log('OK: cotas, todas as vistas, subida/descida, limite, colisão e borda do mezanino.');
