import { useEffect, useState } from 'react'

export function LoadingScreen({ onEnter }: { onEnter: () => void }) {
  const [ready, setReady] = useState(false)
  useEffect(() => { const timer = setTimeout(() => setReady(true), 850); return () => clearTimeout(timer) }, [])

  return (
    <section className={`welcome ${ready ? 'is-ready' : ''}`}>
      <p className="welcome-kicker">AN INTERACTIVE SCHOOL / 2026</p>
      <h1>배움은<br /><em>탐험</em>이 된다.</h1>
      <p className="welcome-copy">작은 3D 캠퍼스를 걸으며<br />우리의 수업, 소식, 프로젝트를 발견해보세요.</p>
      <button onClick={onEnter} disabled={!ready}>
        <span>{ready ? '캠퍼스 입장하기' : '공간을 준비하는 중'}</span><b>→</b>
      </button>
      <span className="welcome-index">CAMPUS 404 — SEOUL</span>
    </section>
  )
}
