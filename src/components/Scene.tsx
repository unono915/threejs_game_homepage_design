import { Cloud, Float, Stars } from '@react-three/drei'
import { siteObjects } from '../data/objects'
import type { SiteObject } from '../types/site'
import { InteractiveObject } from './InteractiveObject'
import { PlayerController } from './PlayerController'

type Props = { onSelect: (object: SiteObject) => void; activeId?: string; controlsEnabled: boolean }

function CampusEnvironment() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[45, 45]} />
        <meshStandardMaterial color="#efe9dd" roughness={1} />
      </mesh>
      <gridHelper args={[40, 40, '#d2c9b9', '#ded6c8']} position={[0, .008, 0]} />
      {[-11, 11].map((x) => (
        <group key={x} position={[x, 0, -2]}>
          {[0, -5, 5].map((z) => <mesh key={z} position={[0, .8, z]} castShadow><cylinderGeometry args={[.22, .32, 1.6, 8]} /><meshStandardMaterial color="#d67d52" /></mesh>)}
        </group>
      ))}
      <Float speed={1.2} floatIntensity={.4} rotationIntensity={.2}>
        <mesh position={[-7, 6, -10]}><sphereGeometry args={[1.2, 24, 24]} /><meshStandardMaterial color="#ff8a5e" roughness={.7} /></mesh>
      </Float>
      <Float speed={1.5} floatIntensity={.5}><mesh position={[8, 5, -8]} rotation={[.3, .5, 0]}><torusGeometry args={[1.15,.28,12,40]} /><meshStandardMaterial color="#6d89d5" /></mesh></Float>
      <Cloud position={[-8, 7, -14]} scale={[3.8, 1.1, 1.2]} opacity={.35} speed={.12} />
      <Cloud position={[9, 8, -16]} scale={[4.2, 1.2, 1.3]} opacity={.28} speed={.09} />
    </>
  )
}

export function Scene({ onSelect, activeId, controlsEnabled }: Props) {
  return (
    <>
      <color attach="background" args={['#b9d9dc']} />
      <fog attach="fog" args={['#b9d9dc', 13, 34]} />
      <ambientLight intensity={1.35} />
      <hemisphereLight intensity={1.2} color="#fff8e9" groundColor="#9b8268" />
      <directionalLight position={[7, 12, 5]} intensity={2.2} castShadow shadow-mapSize={[1024, 1024]} />
      <Stars radius={35} depth={15} count={280} factor={1.3} saturation={0} fade speed={.2} />
      <CampusEnvironment />
      {siteObjects.map((object) => <InteractiveObject key={object.id} object={object} active={activeId === object.id} onSelect={onSelect} />)}
      <PlayerController enabled={controlsEnabled} />
    </>
  )
}
