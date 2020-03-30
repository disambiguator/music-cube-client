import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Cube } from 'music-cube';

type Props = {
  width: number;
  height: number;
  cube: Cube;
};

const newRenderer = (width: number, height: number) => {
  const webGLRenderer = new THREE.WebGLRenderer();
  webGLRenderer.setSize(width, height);

  return webGLRenderer;
};

/**
 * This generates a 3 x 3 x 3 set of cubes with random colors. Clearly
 * this doesn't actually work with your data model, but it can at least show
 * you some ThreeJS plumbing.
 */
const generateCubeModel = (cube: Cube, scene: THREE.Scene) => {
  const padding = 20;
  const sideLength = 50;

  const cubeModel: Array<Array<Array<THREE.Mesh>>> = [];

  for (let i = 0; i < 3; i++) {
    const cubeFace = [];
    for (let j = 0; j < 3; j++) {
      const cubeRow = [];
      for (let k = 0; k < 3; k++) {
        const geometry = new THREE.BoxGeometry(sideLength, sideLength, sideLength);
        for (let i = 0; i < geometry.faces.length; i++) {
          geometry.faces[i].color.setHex(Math.random() * 0xffffff);
        }

        const cubeMesh = new THREE.Mesh(
          geometry,
          new THREE.MeshBasicMaterial({
            color: Math.random() * 0xffffff,
            transparent: true,
            opacity: 0.3,
          }),
        );
        cubeMesh.position.x = i * sideLength + padding;
        cubeMesh.position.y = j * sideLength + padding;
        cubeMesh.position.z = k * sideLength + padding;

        cubeRow.push(cubeMesh);
        scene.add(cubeMesh);
      }
      cubeFace.push(cubeRow);
    }
    cubeModel.push(cubeFace);
  }

  return cubeModel;
};

/**
 * Haven't finished this yet, but I figure this will have to be a series
 * of faces with some sort of mapping to your enums.
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
const generateFaces = (scene: THREE.Scene) => {
  const sideLength = 50;
  const color = 0xffff00;

  const geometry = new THREE.PlaneGeometry(sideLength, sideLength);
  const material = new THREE.MeshBasicMaterial({
    color,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);
};
/* eslint-enable @typescript-eslint/no-unused-vars */

const newCamera = (width: number, height: number) => {
  const perspectiveCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
  perspectiveCamera.position.z = 300;
  perspectiveCamera.position.x = 300;
  perspectiveCamera.position.y = 300;

  return perspectiveCamera;
};

export default function Cube3D({ cube, width, height }: Props) {
  const renderer = newRenderer(width, height);
  const camera = newCamera(width, height);
  const controls = new OrbitControls(camera, renderer.domElement);

  let frameId: number | null = null;
  const scene = new THREE.Scene();
  const ref = useRef<HTMLDivElement>(null);

  generateCubeModel(cube, scene);

  const animate = () => {
    renderer.render(scene, camera);
    controls.update();
    frameId = window.requestAnimationFrame(animate);
  };

  const start = () => {
    if (!frameId) frameId = window.requestAnimationFrame(animate);
  };

  const stop = () => {
    if (frameId) window.cancelAnimationFrame(frameId);
  };

  useEffect(() => {
    const componentRef = ref.current;
    if (!componentRef) throw new Error();

    componentRef.appendChild(renderer.domElement);

    start();

    return stop;
  });

  return <div id="scene" ref={ref} />;
}
