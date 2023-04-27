# NextJS로 블로그 만들기

## 시연 영상
![화면 기록 2023-04-09 오후 10 21 52](https://user-images.githubusercontent.com/57999419/234749874-ea4d2721-7fb0-4785-ab16-54c9fe4801fb.gif)

## 기술 스택
- `TypeScript` `Next.js` `Recoil`
- `tailwindCSS`

## 구현한 기능
- Recoil을 사용해 SideBar 구현 [(관련 포스팅 보러가기)](https://next-js-blog-ashen.vercel.app/posts/nextjs-sideBar)
- 다크모드 구현 [(관련 포스팅 보러가기)](https://next-js-blog-ashen.vercel.app/posts/darkmode)
- 블로그 전체 글 보여주기
- 카테고리
- 포스트 검색
- TOC 구현
- SEO 적용
- 검색기능에 debouncing 적용

## 파일 구조
```
📦 
├─ .env
├─ .eslintrc.json
├─ app 
│  ├─ category
│  │  └─ [category]
│  │     └─ page.tsx
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ posts
│  │  └─ [id]
│  │     └─ page.tsx
│  └─ search
│     └─ page.tsx
├─ components
│  ├─ MdxContent.tsx
│  ├─ Recoil.tsx
│  ├─ atoms
│  │  └─ Date.tsx
│  ├─ molecules
│  │  ├─ Banner.tsx
│  │  ├─ Categories.tsx
│  │  ├─ PostCard.tsx
│  │  ├─ Toc.tsx
│  │  └─ UserInfo.tsx
│  └─ organisms
│     ├─ FilterablePosts.tsx
│     ├─ Header.tsx
│     ├─ PostSearch.tsx
│     ├─ PostsGrid.tsx
│     └─ SideBar.tsx
├─ context
│  └─ DarkModeContext.tsx
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ posts
├─ public
│  ├─ favicon.ico
│  └─ images
├─ service
│  └─ post.ts
├─ state
│  └─ ClickedSideBarAtom.ts
├─ tailwind.config.js
├─ styles
│  ├─ globals.css
│  └─ prism-atom_dark.css
├─ tsconfig.json
└─ util
   └─ assertion.ts
```
