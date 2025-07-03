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

# Aviso Importante

Por favor, **não façam commits diretamente na branch `master`**.

### Como contribuir corretamente:

1. Criem uma **branch nova** para sua feature ou correção, com nome descritivo.  
   Exemplo: `feature/nova-funcionalidade/seu-nome` ou `fix/bug-login/seu-nome`.

2. Realizem seus commits e push nessa branch criada.

3. Enviem um **Pull Request** (PR) da sua branch para a `master`.

---

Assim mantemos o repositório organizado, evitamos conflitos e garantimos a qualidade do código na branch principal.
  
Obrigado pela colaboração! 🚀

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
import Contador from "@/components/contador-button";

export default function Page() {
  return (
    <Contador /> //componente importado na estrutura principal
  );
}
```

- Use "use client" só onde precisa mesmo de interatividade, estado ou efeitos React. Em páginas que só importam componentes já client, não é necessário repetir. Assim, seu app fica mais leve e rápido.

---

## Componentização no React

### O que é componentização?
- **Dividir a interface em pequenas partes reutilizáveis** chamadas **componentes**.
- Cada componente é responsável por uma parte específica da UI.
- Facilita manutenção, reaproveitamento e organização do código.

### Benefícios
- Reutilização: evita duplicar código.
- Manutenção: mudanças em um lugar afetam todos que usam o componente.
- Organização: código mais limpo e fácil de entender.
- Testabilidade: componentes pequenos são mais fáceis de testar.

### Como criar um componente simples

```tsx
// components/Button.tsx
import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick} className="bg-blue-600 text-white p-2 rounded">
      {children}
    </button>
  );
}

// na prática fica assim:

// app/page.tsx
import React from "react";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <div>
      <h1>Minha página</h1>
      <Button onClick={() => alert("Clicou!")}>Clique aqui</Button>
    </div>
  );
}
```



---

## Usando o `tailwind-merge` em componentes

### 1. O que é o `tailwind-merge`?

- Biblioteca que ajuda a **combinar e gerenciar classes Tailwind** que se repetem ou conflitam.
- Exemplo: `bg-red-500` e `bg-blue-500` juntas — ele mantém a última, eliminando conflito.
- Muito útil quando você concatena classes dinamicamente (condicionais, props, etc).

#### Exemplo prático

```tsx
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "p-1.5 bg-gray-600 text-[#6f9De2] rounded-xl hover:bg-blue-500 transition-colors duration-300 hover:text-white",
        className
      )}
    />
  );
}

export default IconButton;
```

- Cria um botão estilizado para ícones (IconButton).
- Usa TypeScript para estender as props padrão de um botão HTML (ComponentProps<"button">), ou seja, aceita todas as props nativas de <button> (ex: onClick, type, aria-\*, etc).
- Além disso, exige uma prop children (conteúdo interno, geralmente o ícone).
- Usa o twMerge para combinar classes Tailwind CSS fixas com as que podem ser passadas via className (props).

### Por que usar twMerge aqui?

- O componente tem classes Tailwind padrão (ex: bg-gray-600, rounded-xl).

- Se alguém passar uma className para customizar o botão, por exemplo bg-red-500, o twMerge remove conflitos e mantém apenas a última classe válida de cor de fundo (bg-red-500), evitando que duas classes de cor coexistam e causem erro visual.

- Isso torna o componente flexível e seguro para customização sem quebrar estilos.

### Uso prático

```tsx
import IconButton from "./IconButton";
import { Search } from "lucide-react";

export default function Page() {
  return (
    <IconButton onClick={() => alert("clicou")} className="bg-red-600">
      <Search size={20} />
    </IconButton>
  );
```