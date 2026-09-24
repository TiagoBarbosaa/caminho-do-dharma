# Melhorias aplicadas — Caminho do Dharma

## 1. Arquitetura e organização

- **Home.tsx** reduzido de ~370 linhas monolíticas para **85 linhas** orquestrando componentes.
- Dados extraídos para:
  - `data/modules.ts`
  - `data/meditations.ts`
  - `data/resources.ts`
- Tipos centralizados em `types/index.ts`.
- Componentes por domínio:
  - `layout/` — Header, Hero, Footer
  - `modules/` — ModuleGrid, ModuleCard, LessonView, ProgressRing
  - `practice/` — PracticeSection
  - `library/` — Library
- Hooks dedicados:
  - `useProgress` — progresso + localStorage versionado (`dharma-v1-*`)
  - `useMeditation` — timer, TTS, seleção
  - `useAmbientSound` — Web Audio com cleanup seguro
  - `useJournal` — diário + prompts

## 2. Dependências

Removidas (não usadas pela aplicação):
- `framer-motion`
- `recharts`
- `axios`
- `streamdown`
- `add` (dev)

## 3. UX

- **Hero**: ilustração CSS (sol + colinas + névoa) no lugar da imagem quebrada `/manus-storage/...`.
- **ProgressRing**: anel SVG real que reflete o percentual de conclusão.
- **Timer da meditação**: mostra duração selecionada (não mais “05:00” fixo).
- **Dark mode**: toggle no header + estilos completos para tema escuro.
- **Biblioteca**: expandida de 3 para 9 recursos (SuttaCentral, Access to Insight, Stanford Encyclopedia, NCCIH).
- **Prompts do diário**: de 3 para 6.
- **Acessibilidade**: labels ARIA nos controles de voz/ambiente/menu.

## 4. Robustez da meditação

- Tratamento de erro no TTS (`onerror`).
- Cleanup de `AudioContext` e `speechSynthesis` no unmount.
- Pausa/retomada de áudio ambiente junto com a fala.
- Migração automática de chaves antigas do localStorage.

## Como rodar

```bash
pnpm install   # ou npm install
pnpm dev
```

## Próximos passos opcionais

- PWA (manifest + service worker)
- Quizzes curtos ao final das lições
- Exportar diário/progresso
- Áudios mp3 reais como alternativa ao TTS

## 5. Progressive Web App (PWA)

- `manifest.webmanifest` — nome, cores, atalhos (Trilha / Prática)
- Ícones 192 / 512 / maskable + favicon + Apple touch icon
- Service Worker (`sw.js`) com cache do app shell e fallback offline
- Meta tags mobile / installável (standalone)
- Registro do SW apenas em produção

### Como instalar

1. Abra o app no Chrome/Edge (desktop) ou Safari/Chrome (mobile)
2. Use **Instalar app** / **Adicionar à tela inicial**
3. O app abre em janela própria, sem barra do navegador

## 6. Fases A–D (estudo mais completo)

### A — Quiz, glossário, fontes
- Quiz leve por módulo (`data/quizzes.ts`) ao final da lição
- Glossário com “o que não significa” (`data/glossary.ts`)
- Fontes por lição (`data/sources.ts`) com links SuttaCentral / Stanford / etc.

### B — Diário, prática do dia, lembrete
- Histórico de entradas do diário + exportação Markdown
- Bloco “Prática de hoje” (trilha ativa ou meditação rotativa)
- Lembrete diário opcional (Notification API + horário)

### C — Áudio e offline
- Suporte a `audioUrl` nas meditações (MP3 em `/public/audio/`) com fallback TTS
- Service Worker v2: stale-while-revalidate para assets; shell offline

### D — Trilhas e mapa
- Desafios de 7 e 21 dias com progresso local
- Mapa das tradições (Theravada, Mahayana, Zen, Terra Pura, Vajrayana)

## 7. Polimento de conteúdo (sem fase E)

- Quizzes expandidos: 2–3 perguntas por módulo, alinhadas às research-notes
- Roteiros de estúdio com marcações de pausa: `docs/roteiros-audio-meditacao.md`
- Meditações preparadas para `audioUrl` (comentários prontos para descomentar)
- Prompts de diário ampliados (8)

## 8. Polimento final (onboarding, hábito, áudio sincronizado)

- Onboarding na primeira visita
- Página Sobre / Fontes / Limites
- Modo leitura nas lições + resumo de 30s
- Histórico de práticas + streak gentil + atalho de 2 min
- Módulos 12 (obstáculos) e 13 (professor/comunidade)
- Áudios reprocessados para duração exata (5 / 7 / 6 / 10 min), mono 64 kbps
- Guia de publicação: `docs/PUBLICAR.md`
