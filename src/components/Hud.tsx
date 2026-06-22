export function Hud() {
  return (
    <header className="hud">
      <a className="brand" href="#top" aria-label="Campus 404 홈">
        <span className="brand-mark">C4</span>
        <span>CAMPUS<br />404</span>
      </a>
      <div className="hud-guide">
        <span><kbd>WASD</kbd> 이동</span>
        <span><span className="mouse-icon" /> 드래그하여 둘러보기</span>
        <span className="status"><i /> 캠퍼스 오픈</span>
      </div>
    </header>
  )
}
