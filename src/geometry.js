import * as T from 'three';
export function group(name,parent){const g=new T.Group();g.name=name;parent?.add(g);return g;}
export function mesh(geometry,material,parent,position=[0,0,0]){const m=new T.Mesh(geometry,material);m.position.set(...position);m.castShadow=true;m.receiveShadow=true;parent?.add(m);return m;}
export const box=(p,s,m,g)=>mesh(new T.BoxGeometry(...s),m,g,p);
export const cylinder=(p,r,h,m,g,rt=r)=>mesh(new T.CylinderGeometry(rt,r,h,40),m,g,p);
export function line(points,material,g,r=.025){const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));return mesh(new T.TubeGeometry(curve,Math.max(8,points.length*3),r,6,false),material,g);}
export function shape(points){const s=new T.Shape();points.forEach((p,i)=>i?s.lineTo(p[0],-p[1]):s.moveTo(p[0],-p[1]));s.closePath();return s;}
export function extrude(points,y,depth,m,g){const geo=new T.ExtrudeGeometry(shape(points),{depth,bevelEnabled:false});geo.rotateX(-Math.PI/2);return mesh(geo,m,g,[0,y,0]);}
export function ring(cx,cz,rx,rz,width,y,h,m,g,start=0,end=Math.PI*2){const p=[];for(let i=0;i<=72;i++){const a=start+(end-start)*i/72;p.push([cx+rx*Math.cos(a),cz+rz*Math.sin(a)]);}for(let i=72;i>=0;i--){const a=start+(end-start)*i/72;p.push([cx+(rx-width)*Math.cos(a),cz+(rz-width)*Math.sin(a)]);}return extrude(p,y,h,m,g);}
export function rail(points,y,m,g){for(const p of points)cylinder([p[0],y+.55,p[1]],.023,1.1,m,g);for(const h of [.12,.3,.48,.66,.84,1.1])line(points.map(p=>[p[0],y+h,p[1]]),m,g,.018);}
export function loft(points,layers,m,g){const verts=[],idx=[],cx=points.reduce((s,p)=>s+p[0],0)/points.length,cz=points.reduce((s,p)=>s+p[1],0)/points.length,n=points.length;for(const [y,s]of layers)for(const p of points)verts.push(cx+(p[0]-cx)*s,y,cz+(p[1]-cz)*s);for(let j=0;j<layers.length-1;j++)for(let i=0;i<n;i++){const a=j*n+i,b=j*n+(i+1)%n;idx.push(a,a+n,b,b,a+n,b+n);}const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(verts,3));geo.setIndex(idx);geo.computeVertexNormals();return mesh(geo,m,g);}
