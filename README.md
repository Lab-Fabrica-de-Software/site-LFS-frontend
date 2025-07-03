## Landing Page Laboratório Fábrica de Software

Vamos começar clonando o projeto

```bash
git clone https://github.com/Lab-Fabrica-de-Software/LandingPage-LFS.git
```

Após isso, instale as dependências do projeto:

```bash
npm install
# ou
pnpm install
```

Agora, rode o projeto no seu terminal utilizando:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

---

## 📁 Estrutura de Pastas - Next.js (App Router)

### /public
Arquivos públicos acessíveis diretamente via URL.
- Ex: imagens, favicon, robots.txt, etc.
- URL direta: `/favicon.ico`

### /src
Contém todo o código-fonte da aplicação.

### 📁 app/
Onde ficam as rotas, páginas e o layout principal (App Router).
- `layout.tsx`: layout base (Navbar, Footer, Toasts, etc)
- `page.tsx`: landing page principal
- Pode ter subpastas para outras rotas, ex: `/sobre/page.tsx`

### 📁 components/
Componentes reutilizáveis, atômicos ou estruturais.
- Ex: `Button`, `Navbar`, `Input`, `Footer`
- Organizado por pastas (`common/`, `ui/`, etc)

### 📁 hooks/
Hooks personalizados em React.
- Ex: `useScroll`, `useForm`, `useMediaQuery`
- Reutilizáveis entre páginas e componentes

### 📁 lib/
Bibliotecas, serviços e funções auxiliares.
- Ex: funções de formatação, chamada de API, autenticação, analytics

### 📁 sections/
Seções da landing page (Hero, Features, FAQ, etc).
- Blocos visuais e semânticos
- Cada um corresponde a uma `<section>` do HTML

### 📁 types/
Tipos e interfaces TypeScript.
- Ex: `User`, `Service`, `Testimonial`, etc
- Facilita tipagem em componentes, hooks e lib

---

## 1. O que é Next.js?

- Framework React para construir sites e apps web.
- Suporta SSR (Server Side Rendering), SSG (Static Site Generation), API Routes e muito mais.
- Organiza rotas baseado em arquivos/folders.

---

## 2. Como usar o use client do Next.js?
- Usando "use client", você habilita o componente para rodar no navegador, liberando o poder dos hooks do React, como useState, que gerenciam o estado local de forma intuitiva e eficiente.

```tsx
"use client";

import React, { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Incrementar
      </button>
  );
}
```
- Note que o nome do componente é Contador, ou seja, ele será importado em outro arquivo (normalmente, para estruturação do layout da página).

```tsx
import Contador from '@/components/contador-button'

export default function Page() {
    return (
        <Contador/> //componente importado
    )
}

- Use "use client" só onde precisa mesmo de interatividade, estado ou efeitos React. Em páginas que só importam componentes já client, não é necessário repetir. Assim, seu app fica mais leve e rápido.