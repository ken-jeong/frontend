# Frontend Programming Archive

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000000)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=000000)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)

2025 프론트엔드 프로그래밍 과제 결과물을 모아 둔 저장소입니다. 루트 페이지에서 HTML/CSS, JavaScript, React 과제를 한 번에 탐색할 수 있습니다.

## 구성

| 경로 | 내용 |
| --- | --- |
| `index.html` | 전체 과제 아카이브 메인 페이지 |
| `main.css` | 루트 아카이브 페이지 스타일 |
| `hw01_250924/` | HTML/CSS 기반 개인 홈페이지 과제 |
| `hw02_251106/` | JavaScript 문제 풀이 과제 |
| `hw03_251203/` | Vite + React 기반 애플리케이션 과제 |

## 과제 개요

### HW01: 개인 홈페이지

- 소개, 관심사, 학습 내용을 정적 HTML 문서로 구성
- `iframe`을 활용한 페이지 전환 구조
- 공통 CSS를 통한 레이아웃과 스타일 적용

### HW02: JavaScript 문제 풀이

- 여러 문제 페이지를 메뉴로 탐색
- JavaScript 기본 문법과 DOM 조작 실습
- HTML/CSS 기반 페이지에 스크립트 기능 적용

### HW03: React 애플리케이션

- Vite 기반 React 프로젝트
- `react-router-dom`의 `HashRouter`를 사용한 라우팅
- 컴포넌트 기반 화면 구성
- `axios`를 활용한 API 요청
- 성적 분석, 영화 검색, 계산기, 시계 등 기능 포함

## 실행 방법

### 루트 정적 페이지

브라우저에서 루트의 `index.html` 파일을 열면 과제 아카이브 페이지를 확인할 수 있습니다.

### React 과제 개발 서버

```bash
cd hw03_251203
npm install
npm run dev
```

개발 서버 기본 주소는 다음과 같습니다.

```text
http://localhost:8080
```

## React 과제 빌드

```bash
cd hw03_251203
npm run build
```

빌드 결과는 `hw03_251203/dist/`에 생성됩니다. 루트 `index.html`의 HW03 링크는 이 빌드 결과 경로를 바라봅니다.

## 환경 변수

`hw03_251203` 프로젝트는 API 서버 주소를 환경 변수로 사용합니다.

```text
VITE_API_BASE_URL=http://localhost:8080
```

새 환경에서 실행할 때는 `hw03_251203/.env.example`을 참고해 `hw03_251203/.env` 파일을 준비하세요.

## 주요 명령어

`hw03_251203` 디렉터리에서 사용할 수 있는 명령어입니다.

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | Vite 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 생성 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run lint` | ESLint 검사 실행 |

## 사용 기술

- HTML
- CSS
- JavaScript
- React
- Vite
- React Router
- Axios

## 라이선스 및 출처

이미지 출처 정보는 `LICENSE.md`에 정리되어 있습니다.
