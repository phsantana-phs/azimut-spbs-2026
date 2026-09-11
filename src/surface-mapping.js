import * as T from 'three';

// Altera somente UVs, nunca posições/normais/índices da arquitetura.
// Tile em metros visuais: evita esticar uma trama sobre todo o piso ou balcão.
export function mapSurfaces(root){root.updateWorldMatrix(true,true);root.traverse(object=>{
 if(!object.isMesh||!object.material?.userData.surfaceTile)return;
 const geometry=object.geometry.clone(),position=geometry.attributes.position,normal=geometry.attributes.normal;
 const [tileU,tileV]=object.material.userData.surfaceTile,uv=new Float32Array(position.count*2);
 const point=new T.Vector3(),direction=new T.Vector3(),normalMatrix=new T.Matrix3().getNormalMatrix(object.matrixWorld);
 for(let i=0;i<position.count;i++){point.fromBufferAttribute(position,i).applyMatrix4(object.matrixWorld);direction.fromBufferAttribute(normal,i).applyMatrix3(normalMatrix).normalize();const ax=Math.abs(direction.x),ay=Math.abs(direction.y),az=Math.abs(direction.z);
  if(ay>=ax&&ay>=az){uv[i*2]=point.x/tileU;uv[i*2+1]=-point.z/tileV;}
  else if(ax>az){uv[i*2]=(direction.x>0?-point.z:point.z)/tileU;uv[i*2+1]=point.y/tileV;}
  else{uv[i*2]=(direction.z>0?point.x:-point.x)/tileU;uv[i*2+1]=point.y/tileV;}
 }
 geometry.setAttribute('uv',new T.BufferAttribute(uv,2));object.geometry=geometry;
 });}
