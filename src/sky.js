import * as T from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
export function sky(scene,renderer){const generator=new T.PMREMGenerator(renderer),room=new RoomEnvironment(),target=generator.fromScene(room,.04);scene.environment=target.texture;room.dispose();generator.dispose();return {set(mode){const render=mode==='render',evening=mode==='evening';scene.background=new T.Color(render?'#070807':evening?'#262723':'#939991');scene.environmentIntensity=render?.28:evening?.4:.6;}};}
