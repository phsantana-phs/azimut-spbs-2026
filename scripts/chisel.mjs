// Cliente local: somente primitivas/CSG permitidas. Nenhum interpretador é exposto ao MCP.
import {Client} from '@modelcontextprotocol/sdk/client/index.js';
import {StdioClientTransport} from '@modelcontextprotocol/sdk/client/stdio.js';
import {writeFile, mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';
const dir=resolve('generated/chisel-assets'); await mkdir(dir,{recursive:true});
const client=new Client({name:'azimut-auxiliary-assets',version:'1.0.0'});
await client.connect(new StdioClientTransport({command:'node',args:['/home/codex/chisel/dist/server.js'],env:{CSG_OUTPUT_DIR:dir}}));
const operations=[
{name:'add_cylinder',arguments:{radius:0.28,height:0.43,position:[0,0.215,0],color:'#987451',name:'base'}},
{name:'add_cylinder',arguments:{radius:0.53,height:0.065,position:[0,0.45,0],color:'#987451',name:'tampo'}},
{name:'union',arguments:{a:'obj1',b:'obj2',name:'mesa-auxiliar-v1'}}];
const call=async(name,args={})=>{const r=await client.callTool({name,arguments:{...args,session:'azimut-table-v1'}});if(r.isError)throw Error(JSON.stringify(r));return r;};
try{await call('reset'); for(const op of operations)await call(op.name,op.arguments);
const scene=await call('get_scene'); await writeFile(dir+'/csg-scene.json',JSON.stringify(scene,null,2));
const r=await call('render'); const img=r.content.find(c=>c.type==='image');await writeFile(dir+'/mesa-auxiliar-v1-four-views.png',Buffer.from(img.data,'base64'));
await writeFile(dir+'/parameters.json',JSON.stringify(operations,null,2));
if(process.argv.includes('--export-reviewed')){console.log(JSON.stringify(await call('export_model',{format:'glb',path:dir+'/mesa-auxiliar-v1.glb'})));}
console.log('Render de quatro vistas gravado. Exportação exige revisão visual prévia.');
}finally{await client.close();}
