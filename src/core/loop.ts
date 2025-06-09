import { zoneMeshes } from '../zones/zones';
import { controls } from './controls';
import { renderer } from './renderer';
import { scene } from './scene';
import { camera } from './camera';

export const animate = () => {
  requestAnimationFrame(animate);
  zoneMeshes.forEach(mesh => {
    mesh.rotation.y += 0.01;
  });
  controls.update();
  renderer.render(scene, camera);
}
