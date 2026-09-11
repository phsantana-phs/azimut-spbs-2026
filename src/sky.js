import * as T from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
export function sky(scene,renderer){const generator=new T.PMREMGenerator(renderer),room=new RoomEnvironment(),target=generator.fromScene(room,.04);scene.environment=target.texture;scene.environmentIntensity=.55;room.dispose();generator.dispose();scene.background=new T.Color('#b8c2c3');return {set(mode){scene.background.set(mode==='evening'?'#687477':'#b8c2c3');scene.environmentIntensity=mode==='evening'?.42:.65;}};}
