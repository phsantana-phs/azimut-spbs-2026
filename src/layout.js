// Fonte de verdade. Metros, Y para cima; X esquerda→direita, Z fundo→chegada.
// Só cotas de `confirmed` são documentadas. Todo contorno/coordenada abaixo é estimado.
export const confirmed=Object.freeze({width:32,depth:23,area:736,mainDeck:2.7,clearHeight:2.4,slab:.3,perimeter:6.5,redPost:6,riser:.18,rail:1.1,grid:2.5,screenLength:15,screenHeight:3.5});
export const layout={bounds:{x0:0,x1:32,z0:0,z1:23},levels:[0,2.7],eye:1.62,radius:.22,
 piazza:[[8,7],[25.7,7],[25.7,12],[25,17],[23.4,19.6],[21,20.8],[18.5,21],[15,20.1],[13.2,20.5],[12.8,17],[11.8,14.3],[9.4,12],[7.3,10.3]],
 mockup:[[.3,3.6],[2,2],[5,.65],[10,.25],[20,.25],[25,.65],[26,1.4],[26,6.3],[25,7],[15,7.4],[7,7.3],[3,6],[.3,3.6]],
 az58:{center:[28.7,13],width:5.2,length:18},
 stair:{count:15,inner:[[7.3,10.3],[9.4,12],[11.8,14.3],[12.8,17],[13.2,20.5]],outer:[[7.4,12],[6.8,14],[5.6,16.8],[7.1,18.6],[8.1,21]]},
 stations:[{"id":"A","name":"Estar amplo junto à 30 Metri","center":[12.2,9.85],"rug":[6.5,3.25],"sofas":[[9.15,9.95,0],[15.2,9.95,3.141592653589793]],"chairs":[[10.8,8.25,0],[11.9,8.25,0],[13.1,11.4,3.141592653589793],[14.2,11.4,3.141592653589793]],"tables":[[10.95,9.7,0.58],[10.8,10.4,0.34],[13.45,10.15,0.55],[13.6,9.55,0.34]]},{"id":"B","name":"Estar menor junto à cozinha de apoio","center":[19.05,10.2],"rug":[2.5,3.05],"sofas":[],"chairs":[[18.4,9.05,0],[19.5,9.05,0],[20.4,10.05,-1.5707963267948966]],"tables":[[18.65,10.5,0.5],[18.95,11.08,0.3]]},{"id":"C","name":"Estar lateral junto à AZ58","center":[22.3,14.05],"rug":[2.5,3.35],"sofas":[],"chairs":[[23.65,12.95,-1.5707963267948966],[23.65,14.05,-1.5707963267948966],[21.55,15.45,3.141592653589793],[22.65,15.45,3.141592653589793]],"tables":[[22,14,0.54],[22.35,13.35,0.32]]},{"id":"D","name":"Estar frontal à esquerda","center":[15.6,18.1],"rug":[2.5,3],"sofas":[[17.05,18.05,3.141592653589793]],"chairs":[[15,19.75,3.141592653589793],[16.1,19.75,3.141592653589793]],"tables":[[15.35,18.35,0.51],[15.6,17.72,0.3]]},{"id":"E","name":"Estar frontal à direita","center":[19.65,18.1],"rug":[3,3],"sofas":[[18.45,18.05,0]],"chairs":[[19.5,16.5,0],[20.6,16.5,0]],"tables":[[20.1,18.4,0.51],[20.3,17.8,0.3]]}],
 bar:{"center":[16.95,13.9],"outer":[5.15,3.1],"shape":"lente / orgânico; raios e abertura de serviço a confirmar"},backCounter:{"center":[22.6,8.9],"outer":[2.9,3]},
 frontGarden:[[8,21.5],[24.6,21.5],[24.6,16.7],[23.9,18.4],[22.2,20],[20.4,20.8],[18.5,20.9],[15,20.1],[12.7,20.4],[10.2,21.1]],ellipsePlanter:{"center":[5.8,13],"radii":[1.45,3.5]},looseSeats:[[1.1,7.1],[2.8,7.1],[0.7,8.1],[2.8,8.1],[1.1,12],[2.8,12],[0.7,13.4],[2.8,13.4]],
 zones:[{id:'arrival',name:'Chegada',level:0,eye:[3.5,1.62,21.6],target:[9,2.2,7]},
 {id:'piazza',name:'Piazza · bar / café',level:2.7,eye:[17.8,4.32,15.8],target:[18,3.8,12]},
 {id:'mockup',name:'30 Metri · upper deck',level:2.7,eye:[5,4.32,4.4],target:[18,4.1,6]},
 {id:'experience',name:'Azimut Experience',level:0,eye:[9,1.62,5.6],target:[23,1.4,3]},
 {id:'meeting1',name:'Reunião · mesa orgânica',level:0,eye:[16,1.62,13.8],target:[18,1.1,13]},
 {id:'meeting2',name:'Reunião · mesa redonda',level:0,eye:[8,1.62,8.5],target:[10,1,9]},
 {id:'decor',name:'Decor / adega',level:0,eye:[16,1.62,8.4],target:[18,1.2,9.3]},
 {id:'service',name:'Apoio operacional',level:0,eye:[21.2,1.62,17.4],target:[23,1.2,14]},
 {id:'az58',name:'AZ58 · acesso',level:2.7,eye:[27,4.32,2.2],target:[29,3.3,11]}],
 walls:[// [x,z,width,depth,height], doors are gaps between solids
 [16,.08,32,.16,6.5],[31.92,11.5,.16,23,6.5],
 [12,9.1,.12,3.2,2.4],[9.4,10.8,5.3,.12,1.9],
 [17.7,7.5,4.9,.12,2.4],[15.3,8.8,.12,2.6,2.4],[18,10.8,5.5,.12,2.4],
 [20.8,12.3,.12,3.2,2.4],[17.6,14.8,6.5,.12,2.4],[14.4,12.7,.12,4.2,2.4],
 [22,12.7,.14,4.2,2.4],[24.9,12.7,.14,4.2,2.4],[23.5,10.6,3,.14,2.4],
 [24,8,3,.14,2.4],[23.5,9.8,3,.14,2.4],[22,8.4,.14,.9,2.4],
 [19.9,18.4,.12,3.6,2.4],[23.6,19.9,3,.12,2.4],[23.6,16.1,3,.12,2.4],
 [16.3,19.7,4.5,.12,2.4],[14.1,18.8,.12,1.8,2.4]],
 columns:[[4,2],[9,2],[14,2],[19,2],[24,2],[4,6],[9,6],[14,6],[19,6],[24,6],
 [14,8],[16.5,8],[19,8],[21.5,8],[24,8],[14,10.5],[16.5,10.5],[19,10.5],[21.5,10.5],[24,10.5],
 [14,15.5],[16.5,15.5],[19,15.5],[21.5,15.5],[24,15.5],[14,18],[16.5,18],[19,18],[21.5,18],[24,18]],
 trees:[[8,0,20.4],[10.2,1.17338,15.7],[5.8,0,11],[5.8,0,14.7],[12,0,21],[24.2,0,18.8]],
 lowerObjects:[[18,13,2.4,1.3],[9.8,9,1.8,1.8],[18,9,1.6,2.1],[23.5,12.5,1.8,2.5],[17,17.1,1.5,1.5]],
 upperObjects:[[13.8,3.7,11,3.7]],
};
export function inside(x,z,p){let b=false;for(let i=0,j=p.length-1;i<p.length;j=i++){const a=p[i],c=p[j];if((a[1]>z)!=(c[1]>z)&&x<(c[0]-a[0])*(z-a[1])/(c[1]-a[1])+a[0])b=!b;}return b;}
// Tread boundaries and navigation share this ruled fan. Coordinates remain graphic estimates.
export function stairPoint(t,side=.5){const point=arr=>{const k=Math.min(arr.length-2,Math.floor(t*(arr.length-1))),f=t*(arr.length-1)-k;return arr[k].map((v,i)=>v+(arr[k+1][i]-v)*f);};const a=point(layout.stair.inner),b=point(layout.stair.outer);return a.map((v,i)=>v+(b[i]-v)*side);}
function triangleHeight(x,z,a,b,c,ha,hb,hc){const d=(b[1]-c[1])*(a[0]-c[0])+(c[0]-b[0])*(a[1]-c[1]);if(Math.abs(d)<1e-9)return null;const u=((b[1]-c[1])*(x-c[0])+(c[0]-b[0])*(z-c[1]))/d,v=((c[1]-a[1])*(x-c[0])+(a[0]-c[0])*(z-c[1]))/d,w=1-u-v;return Math.min(u,v,w)>=-1e-7?u*ha+v*hb+w*hc:null;}
export function stairHeight(x,z){const n=60;for(let i=0;i<n;i++){const t=i/n,u=(i+1)/n,a=stairPoint(t,0),b=stairPoint(t,1),c=stairPoint(u,1),d=stairPoint(u,0),h=confirmed.mainDeck*(1-t),j=confirmed.mainDeck*(1-u);const v=triangleHeight(x,z,a,b,c,h,h,j)??triangleHeight(x,z,a,c,d,h,j,j);if(v!==null)return v;}return null;}
export function upperFloor(x,z){return inside(x,z,layout.piazza)||inside(x,z,layout.mockup)||(x>=25.4&&x<=31.7&&z>=.3&&z<=3.5);}
function inRect(x,z,r,pad=layout.radius){return Math.abs(x-r[0])<r[2]/2+pad&&Math.abs(z-r[1])<r[3]/2+pad;}
export function blocked(x,z,y){if(x<.3||x>31.7||z<.3||z>22.7)return true;
 if(y<2.35){if(layout.walls.some(r=>y<r[4]&&inRect(x,z,r)))return true;if(layout.columns.some(p=>inRect(x,z,[...p,.13,.13])))return true;if(layout.lowerObjects.some(r=>inRect(x,z,r)))return true;
 // Tela Experience e vitrines; casco AZ58; jardim frontal; telão curvo aproximado.
 if(inRect(x,z,[17.5,1.5,15,.15])||inRect(x,z,[28.7,13,5.2,18])||inRect(x,z,[6,16,1,5]))return true;
 } else {if(layout.upperObjects.some(r=>inRect(x,z,r)))return true;
 for(const station of layout.stations){for(const [sx,sz]of station.sofas)if(inRect(x,z,[sx,sz,.96,2.8]))return true;for(const [cx,cz]of station.chairs)if(inRect(x,z,[cx,cz,.7,.7]))return true;for(const [tx,tz,r]of station.tables)if(Math.hypot(x-tx,z-tz)<r+layout.radius)return true;}
 const b=layout.bar;if(inside(x,z,barOutline(.0)))return true;
 const c=layout.backCounter,dx=x-c.center[0],dz=z-c.center[1],r=Math.hypot(dx/(c.outer[0]/2+.22),dz/(c.outer[1]/2+.22)),a=Math.atan2(dz,dx);if(r<1&&r>.43&&(a<0?a+Math.PI*2:a)>.65&&(a<0?a+Math.PI*2:a)<5.65)return true;
 }
 const e=layout.ellipsePlanter;if(((x-e.center[0])/e.radii[0])**2+((z-e.center[1])/e.radii[1])**2<1||inside(x,z,layout.frontGarden))return true;
 if(y<.3&&layout.looseSeats.some(p=>inRect(x,z,[...p,.65,.65])))return true;
 return layout.trees.some(t=>Math.abs(y-t[1])<1&&Math.hypot(x-t[0],z-t[2])<.85);
}
export function nextFloor(x,z,y){const s=stairHeight(x,z);if(s!==null)return Math.abs(s-y)<.3?s:null;
 if(y>2.4)return upperFloor(x,z)?2.7:null;return y<.3?0:null;}
export function move(position,dx,dz){let [x,y,z]=position;const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.07));for(let i=0;i<steps;i++){for(const axis of [0,2]){const nx=x+(axis===0?dx/steps:0),nz=z+(axis===2?dz/steps:0),h=nextFloor(nx,nz,y);if(h!==null&&!blocked(nx,nz,h)){x=nx;z=nz;y=h;}}}return [x,y,z];}

// Parâmetros arquitetônicos auxiliares: todos estimados salvo referência a `confirmed`.
// Permanecem aqui para que cena.js apenas construa a especificação, nunca a redefina.
export const architectural={
 beams:[2,6,8,10.5,15.5,18].map(z=>({p:[z<7?14:19,2.28,z],s:[z<7?20:10,.24,.15]})),
 rails:[{layer:'upper',y:2.7,p:[[13.2,20.5],[15,20.1],[18.5,21],[21,20.8],[23.4,19.6],[25,17],[25.7,12]]},{layer:'lower',y:0,p:[[.4,7.8],[.4,22.6],[25.8,22.6]]},{layer:'upper',y:2.7,p:[[26,.4],[31.7,.4],[31.7,3.5]]}],
 posts:[{p:[.25,3,.4],s:[.45,6,1]},{p:[31.65,3,22.5],s:[.45,6,1]}],
 access:{p:[28.6,2.55,1.9],s:[6.2,.3,3.2]},
 mockup:{layers:[[.25,.79],[1.6,.94],[2.7,1]],deckY:2.7,deckThickness:.12,rimY:2.96,rimRadius:.11,
 cabin:[[8.3,2.2],[9.2,1.8],[18.8,1.8],[19.5,2.2],[19.5,5.1],[18.8,5.5],[9.2,5.5],[8.3,5.1]],cabinLayers:[[3.1,1],[5.2,.86]],roofY:5.2,roofThickness:.18,
 boxes:[{p:[13.8,3,3.65],s:[11.8,.35,4],m:'white'},{p:[14.8,5.65,3.65],s:[5.4,.35,2.8],m:'white'},{p:[15,6.05,3.65],s:[1.1,.5,.18],m:'white'},...[8.4,11,14,17,19.2].map(x=>({p:[x,4.15,5.52],s:[.15,2.3,.15],m:'white'})),...Array.from({length:15},(_,i)=>({p:[3+i*1.4,2,6.85],s:[.78,.37,.06],m:'glass'}))]},
 az58:{contour:[[26.2,4],[31.1,4],[31.35,12],[31,17],[30,20.6],[28.7,22],[27.4,20.6],[26.4,17],[26.1,12]],layers:[[.4,.7],[1.7,.95],[3,1]],deckY:2.95,deckThickness:.12,
 boxes:[{p:[28.7,3.45,10.7],s:[4.15,1.35,9],m:'glass'},{p:[28.7,4.2,10.2],s:[4.7,.2,9.9],m:'white'},{p:[28.7,4.65,9.3],s:[3.3,.8,5.1],m:'glass'},{p:[28.7,5.13,9.3],s:[3.8,.16,5.8],m:'white'},{p:[28.7,3.15,17.8],s:[3,.18,3.3],m:'fabric'},...[6,9,12,15,18].flatMap(z=>[{p:[26.15,2.05,z],s:[.04,.48,.72],m:'glass'},{p:[31.22,2.05,z],s:[.04,.48,.72],m:'glass'}])]},
 screen:{p:[17.5,1.4,1.5],s:[confirmed.screenLength,2.2,.12]},
 cases:Array.from({length:6},(_,i)=>({p:[11+i*2.5,.65,5.8],s:[1.65,1.3,.65]})),
 curvedScreen:{center:[5.4,16],radii:[1.3,3],start:-.7,span:1.3,segments:24,height:confirmed.screenHeight,thickness:.1},
 brise:{center:[5.8,13],radii:[1.45,3.5],start:Math.PI/2,span:Math.PI,count:65,centerY:1.7,slat:[.07,3.4,.1]},
};

// Lens perimeter, including its service opening: reusable by geometry and collisions.
export function barOutline(inset=0){const b=layout.bar,rx=b.outer[0]/2-inset,rz=b.outer[1]/2-inset,p=[];for(let i=0;i<=96;i++){const a=i/96*Math.PI*2;p.push([b.center[0]+rx*Math.cos(a),b.center[1]+rz*Math.sin(a)*Math.abs(Math.sin(a))]);}return p;}
