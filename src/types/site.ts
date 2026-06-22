export type SiteObject = {
  id: string
  eyebrow: string
  title: string
  description: string
  position: [number, number, number]
  color: string
  accent: string
  linkText: string
  linkUrl: string
  icon: string
  shape: 'classroom' | 'notice' | 'projects' | 'library'
}
