import * as THREE from 'three';
import { scene } from '../core/scene';
import { zones } from './data';

export const zoneMeshes: THREE.Mesh[] = [];

export const createZones = () => {
  zones.forEach(({ name, position, color }) => {
    const geometry = new THREE.SphereGeometry(0.6, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.name = name;

    scene.add(mesh);
    zoneMeshes.push(mesh);
  });
}
