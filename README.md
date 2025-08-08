# 💰 Poupey

<img width="1865" height="963" alt="image" src="https://github.com/user-attachments/assets/04eb73b4-3898-4567-aac8-2790ee895767" />

Um sistema de controle financeiro pessoal moderno e intuitivo, desenvolvido com Next.js 15 e tecnologias de ponta.

## ✨ Funcionalidades

- **📊 Dashboard Financeiro**: Visualização completa das suas finanças com resumos mensais
- **💸 Gestão de Transações**: Adicione, edite e delete receitas e despesas
- **🏷️ Categorização**: Organize suas transações por categorias (Alimentação, Saúde, Educação, Casa, Lazer, etc.)
- **📅 Filtros Avançados**: Filtre transações por mês e ano
- **📈 Resumo Financeiro**: Cards com total de receitas, despesas e saldo
- **📤 Exportação Excel**: Exporte seus dados financeiros para planilhas

## 🚀 Tecnologias Utilizadas

### Frontend
- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos acessíveis
- **[Lucide React](https://lucide.dev/)** - Ícones SVG modernos

### Backend & Banco de Dados
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript-first
- **[SQLite](https://www.sqlite.org/)** - Banco de dados local
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Migrations e introspection

### Formulários & Validação
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript
- **[Next Safe Action](https://next-safe-action.dev/)** - Server Actions tipadas e seguras

### Utilitários
- **[dayjs](https://day.js.org/)** - Manipulação de datas
- **[CUID2](https://github.com/paralleldrive/cuid2)** - Gerador de IDs únicos
- **[nuqs](https://nuqs.47ng.com/)** - Gerenciamento de query parameters
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[XLSX](https://sheetjs.com/)** - Exportação para Excel

### Ferramentas de Desenvolvimento
- **[Biome](https://biomejs.dev/)** - Linter e formatter
- **[Turbopack](https://turbo.build/pack)** - Bundler ultra-rápido

## 📋 Pré-requisitos

- Node.js 18+ 
- npm, yarn ou pnpm

## 🛠️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/ClodoaldoDantas/poupey.git
cd poupey
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure as variáveis de ambiente
Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:

### 4. Configure o banco de dados
```bash
# Gera as migrações do Drizzle
npx drizzle-kit generate

# Aplica as migrações (cria o banco SQLite)
npx drizzle-kit migrate
```

### 5. (Opcional) Popule o banco com dados de exemplo
```bash
# Execute o script de seed
npx tsx src/db/seed.ts
```

### 6. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Scripts Disponíveis

```bash
npm run dev              # Inicia o servidor de desenvolvimento
npm run build            # Gera o build de produção
npm run start            # Inicia o servidor de produção
npm run lint             # Executa o linter

# Scripts do Drizzle ORM
npx drizzle-kit generate # Gera migrations do Drizzle
npx drizzle-kit migrate  # Executa migrations
npx drizzle-kit studio   # Abre o Drizzle Studio (GUI)
npx tsx src/db/seed.ts   # Popula banco com dados de exemplo
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por [Clodoaldo Dantas](https://github.com/ClodoaldoDantas)
