import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { Scene } from './components/Scene'
import { Hud } from './components/Hud'
import { InfoPanel } from './components/InfoPanel'
import { LoadingScreen } from './components/LoadingScreen'
import type { SiteObject } from './types/site'

export default function App() {
  const [selected, setSelected] = useState<SiteObject | null>(null)
  const [entered, setEntered] = useState(false)

  return (
    <main className="app-shell">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [0, 2.2, 8], fov: 52 }}
        gl={{ antialias: true }}
        onPointerMissed={() => setSelected(null)}
      >
        <Suspense fallback={null}>
          <Scene onSelect={setSelected} activeId={selected?.id} controlsEnabled={entered} />
        </Suspense>
      </Canvas>
      <Hud />
      <InfoPanel selected={selected} onClose={() => setSelected(null)} />
      {!entered && <LoadingScreen onEnter={() => setEntered(true)} />}
      <div className="grain" aria-hidden="true" />
    </main>
  )
}
