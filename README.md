# 🚀 렌더링 방식 정복하기 (CSR vs SSR)

이 프로젝트는 **Next.js의 핵심 렌더링 방식인 CSR과 SSR의 차이**를 시각적으로 이해하고 직접 구현해보는<br>
코테이토 12기 프론트엔드 파트별 네트워킹 세션 실습용 레포지토리입니다.

## 📅 세션 목표
- **CSR(Client-Side Rendering)**: 브라우저가 데이터를 가져올 때의 `지연`과 `로딩 상태(Skeleton UI)`를 관찰합니다.
- **SSR(Server-Side Rendering)**: 서버에서 이미 완성된 HTML을 받아올 때의 `즉각성`을 체감하고 직접 구현합니다.
<br><br>
---

## 🛠️ 실습 환경 준비

본 실습은 `pnpm` 패키지 매니저를 사용합니다.

```
1. 레포지토리 클론

2. 프로젝트 폴더 이동

3. 의존성 설치

4. 로컬 서버 실행
pnpm dev
```

<br>

## 🎯 실습 내용: SSRCard 완성하기
실습 파일 위치: `src/components/SSRCard.tsx`

위 파일을 열어 주석으로 표시된 3가지 TODO를 해결하시면 됩니다!

1. **[TODO 1]**: `fetch`를 이용해 서버에 데이터를 요청하세요.

2. **[TODO 2]**: 응답받은 데이터를 JSON 형식으로 변환하세요.

3. **[TODO 3]**: 가져온 데이터를 `CardLayout` 컴포넌트에 `spread` 연산자로 전달하세요.

<br>

## 🧐 이번 실습의 주요 관전 포인트

| 비교 항목 | Client-Side Rendering (CSR) | Server-Side Rendering (SSR) |
| :--- | :--- | :--- |
| **📦 데이터 로딩** | 브라우저 실행 후 (`useEffect`) | 서버에서 렌더링 시 **이미 완료** |
| **✨ 사용자 경험** | 로딩 스켈레톤 보임 | 데이터가 박힌 채로 **한 번에 등장** |
| **🌐 네트워크 주체** | **브라우저** (Browser) | **서버**  |
| **🔍 SEO (검색 최적화)** | 상대적으로 불리 | **매우 유리** |

<br>

## 📂 프로젝트 구조
```
src/
├── app/
│   ├── api/data/       # Mock 데이터를 제공하는 API 루팅
│   └── page.tsx        # 메인 레이아웃
├── components/
│   ├── layout/         # Header, Grid 등 공통 레이아웃 컴포넌트
│   ├── CSRCard.tsx     # 완성된 CSR 예시 코드
│   └── SSRCard.tsx     # ⭐ TODO
└── fonts/              # Pretendard 폰트 적용
``
