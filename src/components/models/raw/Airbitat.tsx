/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube070: THREE.Mesh
    Cube070_1: THREE.Mesh
    Cube070_2: THREE.Mesh
    Cube070_3: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    ['Light Grey']: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    ['Dark Grey']: THREE.MeshStandardMaterial
  }
}

export function AirbitatModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/Airbitat.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null} scale={1}>
      <group position={[-2.5, -2, 2.5]} scale={[2.5, 1, 2.5]}>
        <mesh geometry={nodes.Cube070.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Cube070_1.geometry} material={materials['Light Grey']} />
        <mesh geometry={nodes.Cube070_2.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cube070_3.geometry} material={materials['Dark Grey']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Airbitat.glb')