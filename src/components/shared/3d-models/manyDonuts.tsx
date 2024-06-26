"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { RotatingTorus } from "./donut";

export default function ManyDonuts({ mobileView }: { mobileView: boolean }) {
  return (
    <div style={{ height: "100vh", backgroundColor: "transparent" }} className="overflow-x-hidden	">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color='red' position={[0, 0, 5]} />
        {mobileView ? (
          <>
            <RotatingTorus x={1.25} y={2.5} radius={0.8} color='#ffd24d' />
            <RotatingTorus x={-2} y={-2} radius={2} color='#4040ff' />
          </>
        ) : (
          <>
            <RotatingTorus x={-4.5} y={2} radius={0.75} color='#ffd24d' />
            <RotatingTorus x={5} y={2} radius={2} color='#ff4040' />
            <RotatingTorus x={-5} y={-2} radius={1.4} color='#4040ff' />
          </>
        )}

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
