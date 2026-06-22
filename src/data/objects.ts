import type { SiteObject } from '../types/site'

export const siteObjects: SiteObject[] = [
  {
    id: 'classroom', eyebrow: 'LEARN / 01', title: '수업 둘러보기',
    description: '데이터와 AI를 탐구하는 교실입니다. 지금 진행 중인 수업과 커리큘럼을 만나보세요.',
    position: [-5, 0, -2], color: '#ff6b44', accent: '#fff0d7',
    linkText: '수업 자료 보기', linkUrl: '#classroom', icon: 'A', shape: 'classroom',
  },
  {
    id: 'notice', eyebrow: 'NEWS / 02', title: '새로운 소식',
    description: '이번 주 일정부터 중요한 안내까지. 캠퍼스에서 일어나는 모든 소식을 한눈에 확인하세요.',
    position: [0, 0, -6], color: '#ffd84d', accent: '#2c3f75',
    linkText: '공지사항 보기', linkUrl: '#notice', icon: '!', shape: 'notice',
  },
  {
    id: 'projects', eyebrow: 'MAKE / 03', title: '프로젝트 랩',
    description: '학생들이 만든 흥미로운 AI 프로젝트와 실험을 소개합니다. 아이디어가 결과물이 되는 공간입니다.',
    position: [5, 0, -2], color: '#78d9aa', accent: '#123f34',
    linkText: '프로젝트 구경하기', linkUrl: '#projects', icon: '✦', shape: 'projects',
  },
  {
    id: 'library', eyebrow: 'READ / 04', title: '디지털 도서관',
    description: '배움을 더 깊게 만드는 추천 자료와 아카이브를 모았습니다. 천천히 둘러보고 영감을 챙겨가세요.',
    position: [0, 0, 2], color: '#6d89d5', accent: '#f8f4e8',
    linkText: '자료실 둘러보기', linkUrl: '#library', icon: 'B', shape: 'library',
  },
]
