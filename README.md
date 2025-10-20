# Gentil Site - Professional Resume

Landing page moderna e responsiva desenvolvida com Next.js 14, React e TailwindCSS para apresentar currículo profissional. O site possui suporte completo para **internacionalização (i18n)** com alternância entre português e inglês.

## ✨ Funcionalidades

- 🌐 **Internacionalização (i18n)** - Alternância entre português e inglês
- 📱 **Design Responsivo** - Interface adaptável para todos os dispositivos
- ⚡ **Performance Otimizada** - Utilizando Next.js 14 App Router
- 🎨 **Design Moderno** - Interface clean e profissional com TailwindCSS
- 🔍 **SEO Otimizado** - Metadata e Open Graph configurados

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **TailwindCSS** - Framework CSS utility-first
- **Google Fonts** - Inter (sans-serif) e JetBrains Mono (monospace)
- **Context API** - Gerenciamento de estado para internacionalização
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
│   ├── layout.tsx          # Layout principal com providers
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Estilos globais
│   ├── favicon.ico         # Favicon
│   └── icon.ico            # Ícone do site
├── components/
│   ├── sections/           # Componentes de seções da página
│   │   ├── Hero.tsx        # Seção de apresentação inicial
│   │   ├── About.tsx       # Seção sobre mim
│   │   ├── Experience.tsx  # Seção de experiência profissional
│   │   └── Footer.tsx      # Rodapé
│   ├── ui/
│   │   └── Section.tsx     # Componente wrapper reutilizável
│   └── LanguageToggle.tsx  # Botão de alternância de idioma
├── contexts/
│   └── LanguageContext.tsx # Contexto de internacionalização
├── locales/
│   ├── pt.ts               # Traduções em português
│   ├── en.ts               # Traduções em inglês
│   └── index.ts            # Exportações de locales
├── types/
│   └── index.ts            # Definições de tipos TypeScript
├── public/
│   ├── images/
│   │   └── profile.jpg     # Foto de perfil
│   └── apple-touch-icon.png # Ícone para dispositivos Apple
└── README.md
```

## 🎨 Personalização

### Informações Pessoais

As informações do site são gerenciadas através dos arquivos de tradução. Edite os arquivos em `locales/` para atualizar suas informações em ambos os idiomas:

#### Arquivos de Tradução
- **locales/pt.ts**: Traduções em português
- **locales/en.ts**: Traduções em inglês

#### Seções Disponíveis
- **hero**: Nome, saudação e descrição inicial
- **about**: Biografia e destaques pessoais
- **experience**: Histórico de experiência profissional
- **footer**: Informações do rodapé

Exemplo de atualização no arquivo de tradução:
```typescript
export const pt: Translations = {
  hero: {
    greeting: "Olá! Eu sou",
    name: 'Seu Nome',
    description: 'Sua descrição profissional...',
  },
  // ... outras seções
}
```

### Adicionar Nova Língua

Para adicionar um novo idioma:

1. Crie um novo arquivo em `locales/` (ex: `es.ts` para espanhol)
2. Implemente a interface `Translations` com todas as traduções
3. Atualize `contexts/LanguageContext.tsx` para incluir o novo idioma
4. Atualize o componente `LanguageToggle.tsx` para exibir a opção

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

### Adicionar/Atualizar Foto de Perfil

1. Adicione sua foto em `public/images/profile.jpg`
2. A foto já está configurada no componente `Hero.tsx` usando o componente `next/image`

## 🧪 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa o linter
- `npm run format` - Formata o código com Prettier

## 📝 Boas Práticas Implementadas

- ✅ **TypeScript** com tipagem forte e interfaces bem definidas
- ✅ **Componentes funcionais** e modulares
- ✅ **Design responsivo** mobile-first
- ✅ **Internacionalização (i18n)** com Context API
- ✅ **Detecção automática de idioma** do navegador
- ✅ **Persistência de preferências** com localStorage
- ✅ **Princípios SOLID** e Clean Code
- ✅ **Naming conventions** consistentes
- ✅ **SEO otimizado** com metadata e Open Graph
- ✅ **Performance otimizada** com Next.js 14 App Router
- ✅ **Fontes otimizadas** com next/font
- ✅ **Code formatting** com ESLint e Prettier

## 🌐 Internacionalização

O projeto possui suporte completo para múltiplos idiomas:

### Funcionalidades
- ✅ Alternância entre português e inglês
- ✅ Detecção automática do idioma do navegador
- ✅ Persistência da preferência do usuário
- ✅ Context API para gerenciamento de estado global
- ✅ Estrutura escalável para adicionar novos idiomas

### Como Funciona

O sistema de internacionalização usa React Context para gerenciar o estado do idioma:

1. **LanguageContext** - Gerencia o idioma atual e fornece as traduções
2. **LanguageProvider** - Envolve a aplicação e fornece acesso ao contexto
3. **useLanguage()** - Hook customizado para acessar traduções em qualquer componente

Exemplo de uso nos componentes:
```tsx
import { useLanguage } from '@/contexts/LanguageContext'

export default function MyComponent() {
  const { t, language, setLanguage } = useLanguage()
  
  return (
    <div>
      <h1>{t.hero.name}</h1>
      <button onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}>
        Alternar idioma
      </button>
    </div>
  )
}
```

## 📄 Licença

Este projeto é de uso pessoal.

## 👤 Autor

**Gabriel Gentil**

- LinkedIn: [linkedin.com/in/gabrielsantosgentil](https://linkedin.com/in/gabrielsantosgentil)

---

Desenvolvido com ❤️ usando Next.js e TailwindCSS

