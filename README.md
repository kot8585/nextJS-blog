# NextJS로 블로그 만들기

## 시연 영상

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