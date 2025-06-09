import { Raycaster, Vector2, Mesh } from 'three';
import { camera } from '@/core/camera';
import { renderer } from '@/core/renderer';
import { zones } from './data';
import { flyToZone } from '@/transitions/camera-tween';
import { enterWorlds } from '@/worlds/worlds';

const raycaster = new Raycaster();
const mouse = new Vector2();

/**
 * Configura el detector de clics sobre las zonas (esferas).
 * @param zoneMeshes Lista de Meshes que representan zonas interactivas
 */
export function setupClickHandler(zoneMeshes: Mesh[]) {
  renderer.domElement.addEventListener('click', (event) => {
    // Coordenadas normalizadas del ratón
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Proyecta un rayo desde la cámara hacia donde se ha hecho clic
    raycaster.setFromCamera(mouse, camera);

    // Comprueba intersecciones con las zonas
    const intersects = raycaster.intersectObjects(zoneMeshes);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
      const zoneName = clickedObject.name;

      if (zoneName === 'Worlds') {
        // Si es la zona "Worlds", animamos la cámara y luego cargamos contenido
        const targetPosition = clickedObject.position.clone();

        flyToZone(targetPosition, () => {
          enterWorlds(); // Aquí pones lo que debe ocurrir tras llegar
        });
      } else {
        // Si no, abre el link asociado en otra pestaña
        const zoneData = zones.find(z => z.name === zoneName);
        if (zoneData?.link) {
          window.open(zoneData.link, '_blank');
        }
      }
    }
  });
}
