import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {group} from './geometry.js';
import {table} from './furniture.js';
import manifest from '../generated/chisel-assets/manifest.json';
export async function chiselAssets(root,m,data){const host=group('Ativos Chisel — propostas reversíveis',root),record=manifest.assets[0],loader=new GLTFLoader();let glb;
try{const bytes=Uint8Array.from(atob(data),c=>c.charCodeAt(0));glb=(await loader.parseAsync(bytes.buffer,'')).scene;glb.position.set(...record.position);glb.scale.set(...record.scale);glb.rotation.set(...record.rotation);glb.name=record.id;glb.traverse(o=>{if(o.isMesh){o.material=m.wood;o.castShadow=true;o.receiveShadow=true;}});}catch(e){console.error('Falha no GLB auxiliar',e);}
const fallback=group('Alternativa procedural estimada');table(...record.position,m,fallback,.53);
return {host,loaded:!!glb,set(mode){host.clear();if(mode==='glb')host.add(glb||fallback);if(mode==='fallback')host.add(fallback);},manifest};}
