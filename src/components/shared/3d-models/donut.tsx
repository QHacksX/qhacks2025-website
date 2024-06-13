"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

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
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh position={[x, y, 0]} ref={torusRef}>
      <torusGeometry args={[radius, radius / 4, 15, 35]} />
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
    <div style={{ height: "100vh", backgroundColor: "transparent" }}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color='red' position={[0, 0, 5]} />
        <RotatingTorus x={x} y={y} radius={radius} color={color} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
