# 🚀 Portal LFS

## 📖 Visão Geral
Site oficial do Laboratório Fábrica de Software, funcionando como portal institucional para apresentar quem somos, nossa missão e os projetos desenvolvidos pelo laboratório. O site oferece uma visão geral do trabalho realizado, tecnologias utilizadas e facilita o acesso às informações sobre nossas iniciativas, colaboradores e recrutamento.

## 📋 Funcionalidades Principais
- ✅ Visualizar projetos 
- ✅ Enviar e-mails.

## 🛠️ Tecnologias Utilizadas
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📦 Bibliotecas Principais  
- [Motion](https://motion.dev) → descrição de utilidade  

## 📂 Estrutura do Projeto
```bash

├───docs # Informações do projeto
├───public # Imagens do projeto
└───src # Pasta raiz
    ├───app # Criação de rotas no FrontEnd
    │   ├───(home) # Rota principal
    │   ├───api # Conexão com API Route 
    │   └───projects # Rota para projetos
    ├───components 
    │   ├───common # Componentes reincidentes
    │   └───ui # Componentes filhos
    ├───constants # Dados estáticos
    ├───containers # Chama UI e aplica lógica
    ├───lib # Busca de dados
    ├───sections # Envia UI para container
    └───types # Tipagem estática

```

## ⚙️ Instalação e Uso

### 1. Clone o repositório
```bash

git clone "https://github.com/Lab-Fabrica-de-Software/site-LFS-frontend.git"

```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto
```bash
npm run dev
```

> O servidor será iniciado em: [http://localhost:3000](http://localhost:3000)

## 🧪 Testes
Rodar a suíte de testes:
```bash
npm run test
```
Lab-Fábrica de Software • 2025