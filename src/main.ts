import { scene } from './core/scene';
import { camera, updateCameraOnResize } from './core/camera';
import { renderer } from './core/renderer';
import { controls } from './core/controls';
import { addLights } from './core/lighting';
import { createZones } from './zones/zones';
import { setupClickHandler } from './input/click-handler';
import { animate } from './core/loop';

// Setup
addLights();
createZones();
setupClickHandler();
animate();

// Resize support
window.addEventListener('resize', () => {
  updateCameraOnResize();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
