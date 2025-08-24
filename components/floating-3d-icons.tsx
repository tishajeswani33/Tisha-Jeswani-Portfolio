"use client"

import { Canvas } from "@react-three/fiber"
import { Float, Text3D, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function FloatingIcon({ position, text, color }: { position: [number, number, number]; text: string; color: string }) {
  const meshRef = useRef<Mesh>(null)

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshStandardMaterial color={color} />
        </Text3D>
      </mesh>
    </Float>
  )
}

export default function Floating3DIcons() {
  return (
    <div className="w-full h-64 relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingIcon position={[-2, 1, 0]} text="React" color="#e91e63" />
        <FloatingIcon position={[2, -1, 0]} text="JS" color="#ff69b4" />
        <FloatingIcon position={[0, 0, -1]} text="CSS" color="#c2185b" />
        <FloatingIcon position={[-1, -1, 1]} text="Node" color="#ad1457" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
