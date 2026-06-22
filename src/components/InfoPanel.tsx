import type { SiteObject } from '../types/site'

type Props = { selected: SiteObject | null; onClose: () => void }

export function InfoPanel({ selected, onClose }: Props) {
  return (
    <aside className={`info-panel ${selected ? 'is-open' : ''}`} aria-hidden={!selected}>
      {selected && (
        <>
          <button className="close-button" onClick={onClose} aria-label="정보 패널 닫기">×</button>
          <div className="panel-number" style={{ color: selected.color }}>{selected.icon}</div>
          <p className="eyebrow">{selected.eyebrow}</p>
          <h2>{selected.title}</h2>
          <p className="panel-description">{selected.description}</p>
          <a className="panel-link" href={selected.linkUrl}>
            {selected.linkText}<span>↗</span>
          </a>
          <p className="panel-note">현재는 데모 링크입니다.</p>
        </>
      )}
    </aside>
  )
}
