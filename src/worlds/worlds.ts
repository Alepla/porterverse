import * as THREE from 'three';
import { TextGeometry } from 'three-stdlib';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import fontJson from 'three/examples/fonts/helvetiker_regular.typeface.json';
import { scene } from '@/core/scene';

const font = new FontLoader().parse(fontJson);

const worldDefinitions = [
  { name: 'Music', position: new THREE.Vector3(-4, 0, 0), color: 0xff3399 },
  { name: 'Games', position: new THREE.Vector3(0, 0, 0), color: 0x3399ff },
  { name: 'AI', position: new THREE.Vector3(4, 0, 0), color: 0x33ff99 }
];

export function enterWorlds() {
  // Añade una luz si quieres que se vean bien
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 5, 10);
  scene.add(directionalLight);

  worldDefinitions.forEach(world => {
    // Esfera representando el mundo
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 32, 32),
      new THREE.MeshStandardMaterial({ color: world.color })
    );
    sphere.position.copy(world.position);
    scene.add(sphere);

    // Texto 3D del nombre
    const textGeo = new TextGeometry(world.name, {
      font,
      size: 0.4,
      depth: 0.05
    });
    const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    // Centra el texto
    textGeo.computeBoundingBox();
    if (textGeo.boundingBox) {
      const offsetX = (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x) / 2;
      textMesh.position.set(world.position.x - offsetX, world.position.y + 1.2, world.position.z);
    }

    scene.add(textMesh);
  });
}
