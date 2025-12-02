"use client";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Float,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

function ModelWrapper() {
  const gltf = useGLTF("/avatar.glb");
  const ref = useRef<any>(null);
  const { actions, mixer } = useAnimations(gltf.animations, ref);

  useEffect(() => {
    // Play all available animations from the GLB file
    if (actions && Object.keys(actions).length > 0) {
      Object.values(actions).forEach((action) => {
        action?.play();
      });
    }
  }, [actions]);

  useFrame(({ clock, pointer }) => {
    if (ref.current) {
      // Gentle continuous rotation on Y axis only
      ref.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={1.2}
      position={[0, -1.2, 0]}
    />
  );
}

export default function ThreeAvatar({ className }: { className?: string }) {
  return (
    <div className={`${className} w-full h-full`}>
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.8} position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ModelWrapper />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
