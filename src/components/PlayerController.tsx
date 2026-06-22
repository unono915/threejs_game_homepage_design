import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function PlayerController({ enabled }: { enabled: boolean }) {
  const { camera, gl } = useThree()
  const keys = useRef<Record<string, boolean>>({})
  const dragging = useRef(false)
  const yaw = useRef(0)
  const pitch = useRef(-0.08)

  useEffect(() => {
    const down = (event: KeyboardEvent) => { keys.current[event.key.toLowerCase()] = true }
    const up = (event: KeyboardEvent) => { keys.current[event.key.toLowerCase()] = false }
    const start = () => { dragging.current = true; gl.domElement.classList.add('is-dragging') }
    const stop = () => { dragging.current = false; gl.domElement.classList.remove('is-dragging') }
    const move = (event: PointerEvent) => {
      if (!dragging.current || !enabled) return
      yaw.current -= event.movementX * 0.003
      pitch.current = THREE.MathUtils.clamp(pitch.current - event.movementY * 0.0025, -0.55, 0.35)
    }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    gl.domElement.addEventListener('pointerdown', start)
    window.addEventListener('pointerup', stop)
    window.addEventListener('pointermove', move)
    return () => {
      window.removeEventListener('keydown', down); window.removeEventListener('keyup', up)
      gl.domElement.removeEventListener('pointerdown', start); window.removeEventListener('pointerup', stop)
      window.removeEventListener('pointermove', move)
    }
  }, [gl, enabled])

  useFrame((_, delta) => {
    camera.rotation.set(pitch.current, yaw.current, 0, 'YXZ')
    if (!enabled) return
    const direction = new THREE.Vector3()
    const side = new THREE.Vector3()
    camera.getWorldDirection(direction); direction.y = 0; direction.normalize()
    side.crossVectors(direction, camera.up).normalize()
    const speed = delta * 3.8
    if (keys.current.w || keys.current.arrowup) camera.position.addScaledVector(direction, speed)
    if (keys.current.s || keys.current.arrowdown) camera.position.addScaledVector(direction, -speed)
    if (keys.current.a || keys.current.arrowleft) camera.position.addScaledVector(side, -speed)
    if (keys.current.d || keys.current.arrowright) camera.position.addScaledVector(side, speed)
    camera.position.x = THREE.MathUtils.clamp(camera.position.x, -9, 9)
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, -9, 10)
    camera.position.y = 2.2
  })
  return null
}
