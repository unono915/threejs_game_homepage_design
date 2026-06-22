import { Billboard, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import type { SiteObject } from '../types/site'

type Props = { object: SiteObject; active: boolean; onSelect: (object: SiteObject) => void }

export function InteractiveObject({ object, active, onSelect }: Props) {
  const group = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  useFrame(({ clock }) => {
    if (!group.current) return
    const target = hovered || active ? 1.08 : 1
    group.current.scale.lerp(new THREE.Vector3(target, target, target), 0.12)
    group.current.position.y = Math.sin(clock.elapsedTime * 1.7 + object.position[0]) * 0.06
  })

  const interaction = {
    onClick: (event: { stopPropagation: () => void }) => { event.stopPropagation(); onSelect(object) },
    onPointerOver: (event: { stopPropagation: () => void }) => { event.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' },
    onPointerOut: () => { setHovered(false); document.body.style.cursor = 'default' },
  }

  return (
    <group ref={group} position={object.position} {...interaction}>
      <mesh position={[0, 0.09, 0]} receiveShadow>
        <cylinderGeometry args={[1.18, 1.32, 0.18, 32]} />
        <meshStandardMaterial color="#e6dfd2" roughness={0.85} />
      </mesh>
      {object.shape === 'classroom' && (
        <group position={[0, 1.15, 0]}>
          <mesh castShadow><boxGeometry args={[2.2, 1.8, 1.6]} /><meshStandardMaterial color={object.color} roughness={0.7} /></mesh>
          <mesh position={[0, 0.15, 0.811]}><boxGeometry args={[1.35, 0.75, 0.03]} /><meshStandardMaterial color="#d9eff0" /></mesh>
          <mesh position={[0, -0.68, 0.83]}><boxGeometry args={[0.52, 0.44, 0.05]} /><meshStandardMaterial color="#253345" /></mesh>
        </group>
      )}
      {object.shape === 'notice' && (
        <group position={[0, 1.35, 0]}>
          <mesh castShadow><boxGeometry args={[2.5, 1.75, 0.28]} /><meshStandardMaterial color={object.color} roughness={0.76} /></mesh>
          {[[-.65,.25],[0,.25],[.65,.25],[-.65,-.38],[0,-.38],[.65,-.38]].map((p, i) => (
            <mesh key={i} position={[p[0], p[1], .16]}><boxGeometry args={[.45,.35,.025]} /><meshStandardMaterial color={i % 2 ? '#f6efe3' : object.accent} /></mesh>
          ))}
          <mesh position={[-.85,-1.35,0]} castShadow><boxGeometry args={[.16,1.0,.16]} /><meshStandardMaterial color="#263748" /></mesh>
          <mesh position={[.85,-1.35,0]} castShadow><boxGeometry args={[.16,1.0,.16]} /><meshStandardMaterial color="#263748" /></mesh>
        </group>
      )}
      {object.shape === 'projects' && (
        <group position={[0, 1, 0]}>
          <mesh castShadow rotation={[0, .4, 0]}><octahedronGeometry args={[1.35, 0]} /><meshStandardMaterial color={object.color} roughness={0.55} /></mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.58, .055, 12, 48]} /><meshStandardMaterial color="#f7ede0" emissive="#f7ede0" emissiveIntensity={.7} /></mesh>
        </group>
      )}
      {object.shape === 'library' && (
        <group position={[0, 1, 0]} rotation={[0, -.12, 0]}>
          {[0, 1, 2, 3].map((i) => (
            <mesh key={i} castShadow position={[(i - 1.5) * .48, i * .08, 0]} rotation={[0, 0, (i - 1.5) * .045]}>
              <boxGeometry args={[.42, 1.8 + i * .1, 1.15]} /><meshStandardMaterial color={i % 2 ? object.color : '#f0a16d'} roughness={.8} />
            </mesh>
          ))}
        </group>
      )}
      <pointLight position={[0, 2.2, 0]} color={object.color} intensity={hovered || active ? 3 : .8} distance={5} />
      <Billboard position={[0, 3.25, 0]}>
        <Text fontSize={0.28} color="#1e2b3a" anchorX="center" anchorY="middle" outlineWidth={0.012} outlineColor="#f5f0e7">
          {object.title}
        </Text>
        <Text position={[0, -.38, 0]} fontSize={0.12} letterSpacing={0.1} color="#52606f">CLICK TO EXPLORE</Text>
      </Billboard>
    </group>
  )
}
