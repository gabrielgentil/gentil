# Gabriel Site - Professional Resume

Landing page moderna e responsiva desenvolvida com Next.js 14, React e TailwindCSS para apresentar currículo profissional.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **TailwindCSS** - Framework CSS utility-first
- **Google Fonts** - Inter (sans-serif) e JetBrains Mono (monospace)
- **ESLint & Prettier** - Ferramentas de linting e formatação

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd gabriel-site
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## 🏃 Executando o Projeto

### Modo de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção

```bash
npm run build
npm run start
# ou
yarn build
yarn start
```

## 📁 Estrutura do Projeto

```
gabriel-site/
├── app/
│   ├── layout.tsx          # Layout principal da aplicação
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── sections/           # Componentes de seções da página
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── ui/
│       └── Section.tsx     # Componente wrapper reutilizável
├── types/
│   └── index.ts            # Definições de tipos TypeScript
├── public/
│   └── images/             # Imagens e assets
└── README.md
```

## 🎨 Personalização

### Informações Pessoais

Edite os componentes em `components/sections/` para atualizar suas informações:

- **Hero.tsx**: Nome, título e introdução
- **About.tsx**: Biografia e destaques
- **Experience.tsx**: Experiência profissional
- **Skills.tsx**: Habilidades técnicas
- **Projects.tsx**: Projetos destacados
- **Education.tsx**: Formação acadêmica
- **Contact.tsx**: Informações de contato

### Cores e Tema

As cores podem ser personalizadas em `tailwind.config.ts`. O tema atual usa:

- **Primary**: Tons de azul para elementos principais
- **Secondary**: Tons de cinza para texto e backgrounds

### Fontes

O projeto usa duas fontes do Google Fonts otimizadas pelo Next.js:

- **Inter**: Fonte principal (sans-serif) - Use com `font-sans` ou por padrão
- **JetBrains Mono**: Fonte monospace para código - Use com `font-mono`

Exemplo de uso:
```tsx
<p className="font-sans">Texto normal com Inter</p>
<code className="font-mono">const code = 'JetBrains Mono';</code>
```

### Adicionar Foto de Perfil

1. Adicione sua foto em `public/images/profile.jpg`
2. Atualize o componente `Hero.tsx` para usar a imagem com o componente `next/image`

## 🧪 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa o linter
- `npm run format` - Formata o código com Prettier

## 📝 Boas Práticas Implementadas

- ✅ Código TypeScript com tipagem forte
- ✅ Componentes funcionais e modulares
- ✅ Design responsivo mobile-first
- ✅ Princípios SOLID e Clean Code
- ✅ Naming conventions consistentes
- ✅ SEO otimizado com metadata
- ✅ Performance otimizada com Next.js

## 📄 Licença

Este projeto é de uso pessoal.

## 👤 Autor

**Gabriel Gentil**

- LinkedIn: [linkedin.com/in/gabrielsantosgentil](www.linkedin.com/in/gabrielsantosgentil)

---

Desenvolvido com ❤️ usando Next.js e TailwindCSS

