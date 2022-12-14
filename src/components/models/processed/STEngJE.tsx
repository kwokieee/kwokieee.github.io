import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { STEngJEModel } from "../raw/STEngJE";

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function STEngJE() {
  return (
    <Canvas camera={
      {
        position: [8,5,8]
      }
    }>
      <Suspense fallback={<Loader />}>
        <ambientLight />
        <spotLight intensity={1} angle={0.1} penumbra={1} position={[0, 80, 0]} castShadow />
        <spotLight intensity={1} angle={0.1} penumbra={1} position={[0, -50, 0]} castShadow />
        <STEngJEModel />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} autoRotate />
      </Suspense>
    </Canvas>
  )
}

export default STEngJE