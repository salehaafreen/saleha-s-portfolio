
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = ({ position, color, shape = 'box' }: { position: [number, number, number], color: string, shape?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {shape === 'sphere' ? (
          <sphereGeometry args={[0.5, 32, 32]} />
        ) : (
          <boxGeometry args={[0.8, 0.8, 0.8]} />
        )}
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const ThreeHero = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff007f" />
        
        {/* Floating geometric shapes */}
        <FloatingGeometry position={[-2, 1, 0]} color="#00ffff" shape="box" />
        <FloatingGeometry position={[2, -1, 0]} color="#ff007f" shape="sphere" />
        <FloatingGeometry position={[0, 2, -1]} color="#7c3aed" shape="box" />
        <FloatingGeometry position={[-1, -2, 1]} color="#3b82f6" shape="sphere" />
        <FloatingGeometry position={[1.5, 0.5, -0.5]} color="#00ffff" shape="sphere" />
        <FloatingGeometry position={[-1.5, -1.5, 0.5]} color="#ff007f" shape="box" />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ThreeHero;
