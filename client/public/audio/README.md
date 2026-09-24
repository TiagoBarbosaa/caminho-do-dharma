# Áudios de meditação

Arquivos gerados (voz "Ara", pt):

| Arquivo | Prática | ~tamanho |
|---------|---------|----------|
| `respiracao.mp3` | Atenção à respiração | ~1.1 MB |
| `compaixao.mp3` | Compaixão e gentileza | ~1.0 MB |
| `caminhada.mp3` | Presença em movimento | ~0.9 MB |
| `sono.mp3` | Desacelerar para o sono | ~0.9 MB |

Referenciados em `client/src/data/meditations.ts` via `audioUrl`.
Se o arquivo falhar ao carregar, o app volta automaticamente para TTS.
