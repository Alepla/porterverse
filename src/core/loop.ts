import { renderer } from './renderer';
import { scene } from './scene';
import { camera } from './camera';
import { controls } from './controls';

export function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
