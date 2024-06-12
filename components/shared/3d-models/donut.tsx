"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';


function RotatingTorus() {
  const torusRef = useRef<THREE.Mesh>(null!);
  const wires = useRef<THREE.CircleGeometry>(null!);

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.01;
    }
  });


  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[2, 1, 30, 100]} />
      {/* <circleGeometry args={[20, 20]}/> */}
      <meshBasicMaterial color="white" transparent={true} opacity={0.5} wireframe={true} wireframeLinewidth={1} />
    </mesh>
  );
}



export default function Donut() {
  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <RotatingTorus />
        <OrbitControls />
      </Canvas>
    </div>
  );
}