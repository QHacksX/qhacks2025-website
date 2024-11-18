"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function BasicDonutMesh({
  x,
  y,
  color 
}: {
    x: number;
    y: number;
    color: string;
  }) {
  return (
    <mesh position={[x, y, 0]}>
      {/* <circleGeometry args={[20, 20]}/> */}
      <meshBasicMaterial
        color={color}
        transparent={true}
        opacity={0.5}
        wireframe={true}
        wireframeLinewidth={1}
      />
    </mesh>
  )
}

export function RotatingTorus({
  x,
  y,
  radius,
  color = "white",
}: {
  x: number;
  y: number;
  radius: number;
  color: string;
}) {
  const torusRef = useRef<THREE.Mesh>(null!);
  const wires = useRef<THREE.CircleGeometry>(null!);

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.z += 0.0075;
    }
  });

  return (
    <mesh position={[x, y, 0]} ref={torusRef}>
      <torusGeometry args={[radius, radius / 5, 15, 35]} />
      {/* <circleGeometry args={[20, 20]}/> */}
      <meshBasicMaterial
        color={color}
        transparent={true}
        opacity={0.5}
        wireframe={true}
        wireframeLinewidth={1}
      />
    </mesh>
  );
}

export default function Donut({
  x,
  y,
  radius,
  color,
}: {
  x: number;
  y: number;
  radius: number;
  color: string;
}) {
  return (
    <div style={{ height: "100vh", backgroundColor: "transparent", overflow: "visible" }}>
      <Canvas className="-z-50" gl={{ preserveDrawingBuffer: true }} fallback={<><BasicDonutMesh x={x} y={y} color={color} /></>}>
        <ambientLight intensity={0.1} />
        <directionalLight color='red' position={[0, 0, 5]} />
        <RotatingTorus x={x} y={y} radius={radius} color={color} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
