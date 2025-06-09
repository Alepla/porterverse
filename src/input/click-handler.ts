import * as THREE from 'three';
import { camera } from '../core/camera';
import { zoneMeshes } from '../zones/zones';
import { zones } from '../zones/data';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export const setupClickHandler = () => {
  window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(zoneMeshes);

    if (intersects.length > 0) {
      const clicked = intersects[0].object;
      const zone = zones.find(z => z.name === clicked.name);
      if (zone) {
        window.open(zone.link, '_blank');
      }
    }
  });
}
