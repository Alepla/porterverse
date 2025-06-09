import * as THREE from 'three';
import { camera } from '@/core/camera';
import gsap from 'gsap';

export function flyToZone(target: THREE.Vector3, onComplete?: () => void) {
  gsap.to(camera.position, {
    x: target.x + 2,
    y: target.y + 2,
    z: target.z + 2,
    duration: 1.5,
    onUpdate: () => camera.lookAt(target),
    onComplete
  });
}
