import * as THREE from 'three';
import { scene } from './core/scene';
import { camera, updateCameraOnResize } from './core/camera';
import { renderer } from './core/renderer';
import { controls } from './core/controls';
import { addLights } from './core/lighting';
import { animate } from './core/loop';
import { createZones } from './zones/create-zones';
import { setupClickHandler } from './zones/click-handler';

addLights();

const zoneMeshes = createZones();
zoneMeshes.forEach(mesh => scene.add(mesh));

setupClickHandler(zoneMeshes);

animate();

window.addEventListener('resize', () => {
  updateCameraOnResize();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
