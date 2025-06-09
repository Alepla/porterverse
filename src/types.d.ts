declare module 'three-stdlib' {
    export { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
}

declare module '*.json' {
    const value: any;
    export default value;
}