# Campus 404 — Three.js Game Homepage

3D 학교 공간을 직접 이동하며 수업, 공지, 프로젝트, 자료실을 탐색하는 인터랙티브 홈페이지입니다.

## 주요 기능

- WASD 및 방향키를 이용한 3D 공간 이동
- 마우스 드래그 시점 조작
- 4개의 인터랙티브 오브젝트와 정보 패널
- 데스크톱·모바일 반응형 UI
- GitHub Pages, Vercel, Netlify에 배포 가능한 Vite 정적 빌드

## 실행 방법

```bash
npm install
npm run dev
```

프로덕션 빌드는 `npm run build`, 로컬 확인은 `npm run preview`를 사용합니다.

## 조작법

- 이동: `W` `A` `S` `D` 또는 방향키
- 시점: 화면을 누른 채 마우스 드래그
- 정보 보기: 오브젝트 클릭

## 배포

- 빌드 명령: `npm run build`
- 출력 폴더: `dist`
- Node.js 20.19 이상 권장

Vite의 상대 경로 설정을 적용해 GitHub Pages의 프로젝트 하위 경로에서도 정적 자산이 정상 로드됩니다.

`main` 브랜치에 변경 사항이 올라오면 `.github/workflows/deploy-pages.yml`이 자동으로 빌드하고 GitHub Pages에 배포합니다. 저장소의 **Settings → Pages → Build and deployment → Source**는 **GitHub Actions**로 설정해야 합니다.
