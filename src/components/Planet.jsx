import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap' // ✅ Import gsap

export function Planet(props) {
  const shapeContainer = useRef(null)
  const spheresContainer = useRef(null)
  const ringContainer = useRef(null)

  const { nodes, materials } = useGLTF('/models/Planet.glb')

  // Run GSAP animations once when component mounts
  useGSAP(() => {
    const tl = gsap.timeline()

    // Animate the main shape container coming from above
    tl.from(shapeContainer.current.position, {
      y: 5,
      duration: 3,
      ease: 'circ.out',
    })

    // Animate the rotation of spheres
    tl.from(
      spheresContainer.current.rotation,
      {
        x: 0,
        y: Math.PI,
        z: -Math.PI,
        duration: 10,
        ease: 'power1.inOut',
      },
      '-=25%' // Start 2s before the previous animation ends
    )

    // Animate the rotation of the ring
    tl.from(
      ringContainer.current.rotation,
      {
        x: 0.8,
        y: 0,
        z: 0,
        duration: 10,
        ease: 'power1.inOut',
      },
      '<' // Overlap this animation too
    )
  }, [])

  return (
    <group ref={shapeContainer} {...props} dispose={null}>
      <group ref={spheresContainer}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.002']}
          rotation={[0, 0, 0.741]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere2.geometry}
          material={materials['Material.001']}
          position={[0.647, 1.03, -0.724]}
          rotation={[0, 0, 0.741]}
          scale={0.223}
        />
      </group>
      <mesh
        ref={ringContainer}
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials['Material.001']}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
      />
    </group>
  )
}

useGLTF.preload('/models/Planet.glb')
