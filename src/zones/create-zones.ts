import * as THREE from 'three';
import { zones } from './data';

export const createZones = (): THREE.Mesh[] => {
  return zones.map(({ name, position, color }) => {
    const geometry = new THREE.SphereGeometry(0.6, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.name = name;
    return mesh;
  });
};
