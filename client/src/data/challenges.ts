import type { Challenge } from "@/types";

export const challenges: Challenge[] = [
  {
    id: "7-dias-sati",
    title: "7 dias de presença",
    days: 7,
    description:
      "Uma semana gentil para estabilizar a atenção e notar o corpo no cotidiano — sem pressa nem perfeição.",
    sequence: [
      { day: 1, title: "Chegar", focus: "Postura e respiração", practice: "Sente-se 5 minutos. Sinta o apoio do chão ou da cadeira. Conte 10 ciclos de respiração sem forçar.", durationMin: 5, moduleHint: "07" },
      { day: 2, title: "Corpo", focus: "Sensações físicas", practice: "Escaneie o corpo da cabeça aos pés por 6 minutos. Note tensão sem precisar eliminá-la.", durationMin: 6, moduleHint: "07" },
      { day: 3, title: "Fala", focus: "Uma conversa consciente", practice: "Em uma conversa, pause um segundo antes de responder. Observe tom e intenção.", durationMin: 5, moduleHint: "04" },
      { day: 4, title: "Mettā breve", focus: "Boa vontade", practice: "Repita em silêncio: que eu esteja seguro; que eu tenha paz. Depois ofereça a alguém seguro.", durationMin: 7, moduleHint: "08" },
      { day: 5, title: "Caminhada", focus: "Passos conscientes", practice: "Caminhe 6 minutos notando o contato dos pés. Quando a mente divagar, volte ao próximo passo.", durationMin: 6, moduleHint: "07" },
      { day: 6, title: "Obstáculo", focus: "Notar distração", practice: "Ao se distrair, nomeie suavemente: pensar, planejar, julgar. Retorne à respiração sem crítica.", durationMin: 8, moduleHint: "07" },
      { day: 7, title: "Integrar", focus: "Revisão gentil", practice: "Escreva 5 linhas: o que notou na semana? O que pode continuar amanhã, em escala menor?", durationMin: 10, moduleHint: "03" },
    ],
  },
  {
    id: "21-dias-caminho",
    title: "21 dias no caminho",
    days: 21,
    description:
      "Três semanas que alternam estudo breve, ética cotidiana e meditação — no ritmo de quem tem vida real.",
    sequence: [
      { day: 1, title: "Intenção", focus: "Por que praticar?", practice: "Escreva em uma frase o que você espera deste período. Medite 5 min na respiração.", durationMin: 8, moduleHint: "01" },
      { day: 2, title: "Refúgio", focus: "Três Joias", practice: "Leia a lição 02 (resumo). Reflita: o que seria uma comunidade saudável para você?", durationMin: 12, moduleHint: "02" },
      { day: 3, title: "Dukkha no dia", focus: "Observar irritação", practice: "Quando algo incomodar, anote: o que dói? O que estou segurando?", durationMin: 5, moduleHint: "03" },
      { day: 4, title: "Fala correta", focus: "Ética na conversa", practice: "Evite uma frase desnecessária ou dura hoje. Note o efeito no corpo.", durationMin: 5, moduleHint: "04" },
      { day: 5, title: "Respiração", focus: "Samatha breve", practice: "10 minutos de atenção à respiração. Distrações são parte do treino.", durationMin: 10, moduleHint: "07" },
      { day: 6, title: "Preceito", focus: "Um preceito", practice: "Escolha um preceito (ex.: fala verdadeira) e observe-o o dia inteiro.", durationMin: 5, moduleHint: "06" },
      { day: 7, title: "Pausa semanal", focus: "Descanso", practice: "Pratique só 5 min ou caminhe em silêncio. Revisar sem se cobrar.", durationMin: 5 },
      { day: 8, title: "Agregados", focus: "Não-eu leve", practice: "Observe sensação e pensamento como eventos que mudam por 8 min.", durationMin: 8, moduleHint: "05" },
      { day: 9, title: "Mettā", focus: "Boa vontade", practice: "Prática de mettā 7 min (si e alguém seguro).", durationMin: 7, moduleHint: "08" },
      { day: 10, title: "Meio de vida", focus: "Trabalho e cuidado", practice: "Note uma ação no trabalho ou estudo alinhada ao não-dano.", durationMin: 5, moduleHint: "04" },
      { day: 11, title: "Vipassanā leve", focus: "Surgir e passar", practice: "Com estabilidade, observe o início e o fim de sons ou pensamentos.", durationMin: 10, moduleHint: "07" },
      { day: 12, title: "Compaixão com limites", focus: "Karuṇā", practice: "Ajude alguém sem ultrapassar seu limite. Depois respire 5 min.", durationMin: 8, moduleHint: "08" },
      { day: 13, title: "Estudo Theravada", focus: "Texto curto", practice: "Abra um sutta curto da biblioteca e marque uma frase que ressoe.", durationMin: 12, moduleHint: "09" },
      { day: 14, title: "Meio caminho", focus: "Revisão", practice: "Releia suas anotações. Ajuste o ritmo se estiver forçando.", durationMin: 10 },
      { day: 15, title: "Vacuidade cautelosa", focus: "Duas verdades", practice: "Leia o resumo da lição 10. Explique em voz alta: vacuidade ≠ niilismo.", durationMin: 12, moduleHint: "10" },
      { day: 16, title: "Gratidão / muditā", focus: "Alegria pelo bem", practice: "Reconheça o bem de outra pessoa sem comparação. 5 min em silêncio.", durationMin: 5, moduleHint: "08" },
      { day: 17, title: "Tradições", focus: "Mapa", practice: "Leia o mapa das tradições. Anote o que atrai e o que exige cuidado.", durationMin: 15, moduleHint: "11" },
      { day: 18, title: "Sono consciente", focus: "Encerrar o dia", practice: "Prática de desaceleração 8–10 min antes de dormir.", durationMin: 10, moduleHint: "07" },
      { day: 19, title: "Ética digital", focus: "Fala online", practice: "Evite um comentário impulsivo. Observe o impulso e deixe passar.", durationMin: 5, moduleHint: "04" },
      { day: 20, title: "Sangha", focus: "Comunidade", practice: "Escreva critérios de um professor ou grupo seguro para você.", durationMin: 10, moduleHint: "02" },
      { day: 21, title: "Continuar", focus: "Próximo passo", practice: "Escolha uma prática mínima (5 min/dia) para as próximas duas semanas.", durationMin: 10 },
    ],
  },
];
