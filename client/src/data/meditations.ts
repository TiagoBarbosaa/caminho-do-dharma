import type { AmbientOption, MeditationOption } from "@/types";

/**
 * Meditações guiadas.
 * Para voz gravada: coloque MP3 em public/audio/ e defina audioUrl (ex: "/audio/respiracao.mp3").
 * Sem audioUrl, o app usa a voz do sistema (TTS).
 * Roteiros detalhados para estúdio: docs/roteiros-audio-meditacao.md
 */
export const meditationOptions: MeditationOption[] = [
  {
    id: "respiracao",
    title: "Atenção à respiração",
    duration: "05 min",
    durationSeconds: 300,
    description: "Volte ao corpo e ao ritmo natural do ar.",
    audioUrl: "/audio/respiracao.mp3",
    script:
      "Bem-vindo. Reserve estes próximos minutos para simplesmente estar aqui. Encontre uma postura confortável. Deixe os ombros relaxarem e sinta o corpo sendo sustentado pela cadeira ou pelo chão. Leve a atenção para a respiração. Não tente mudá-la. Observe o ar entrando e observe o ar saindo. Talvez você perceba o movimento do peito ou da barriga. Escolha um lugar simples para acompanhar. Na próxima inspiração, saiba que está inspirando. Na próxima expiração, saiba que está expirando. Um ciclo de cada vez. Se a mente se distrair, isso não é uma falha. Reconheça com gentileza: pensando. E volte para a próxima respiração. Você não precisa expulsar pensamentos. Permita que estejam presentes enquanto mantém um fio de atenção na respiração. Inspire, percebendo o corpo inteiro. Expire, soltando um pouco do esforço. Por alguns momentos, não há nada para resolver. Apenas esta respiração, este corpo, este instante. Aos poucos, perceba os sons ao redor. Mova devagar os dedos das mãos e dos pés. Quando estiver pronto, deixe os olhos se abrirem. Obrigado por praticar.",
  },
  {
    id: "compaixao",
    title: "Compaixão e gentileza",
    duration: "07 min",
    durationSeconds: 420,
    description: "Cultive boa vontade por si e por alguém seguro.",
    audioUrl: "/audio/compaixao.mp3",
    script:
      "Encontre uma postura confortável e permita que a respiração seja natural. Perceba que você não precisa se consertar neste momento. Você pode simplesmente estar aqui. Em silêncio, repita: que eu esteja seguro. Que eu tenha paz. Que eu encontre alívio para o que é difícil. Não force sentimento. Deixe as palavras oferecerem uma direção gentil. Agora, lembre-se de alguém que deseja genuinamente o seu bem. Repita: que essa pessoa esteja segura. Que tenha paz. Que encontre apoio. Observe qualquer sensação de calor, neutralidade ou resistência, sem julgamento. Se quiser, expanda a intenção para as pessoas ao redor: que todos encontrem condições para viver com mais clareza e menos sofrimento. Compaixão não significa carregar tudo. Também inclui limites, descanso e sabedoria. Respire. Permaneça por alguns instantes com essa boa vontade. Aos poucos, volte para o corpo e para a sala. Quando estiver pronto, abra os olhos. Que você leve cuidado para a próxima ação.",
  },
  {
    id: "caminhada",
    title: "Presença em movimento",
    duration: "06 min",
    durationSeconds: 360,
    description: "Uma prática curta para caminhar com atenção.",
    audioUrl: "/audio/caminhada.mp3",
    script:
      "Fique em pé ou sente-se confortavelmente. Se for caminhar, escolha um espaço seguro e lento. Sinta o contato dos pés com o chão. Perceba o peso mudando de um lado para o outro. Não há destino para alcançar agora. Apenas um passo, e depois outro. Ao levantar o pé, saiba que está levantando. Ao mover, saiba que está movendo. Ao pousar, saiba que está pousando. Se estiver sentado, acompanhe os pequenos movimentos da respiração e das mãos. Quando a mente criar histórias, reconheça pensamento e volte ao próximo contato. Observe sons, luz e temperatura sem precisar nomear tudo. Caminhar assim não torna o mundo perfeito; torna este passo conhecido. Reduza o ritmo por alguns instantes. Sinta o corpo inteiro. Agradeça a possibilidade de estar presente. Finalize parando com cuidado e percebendo como você está agora.",
  },
  {
    id: "sono",
    title: "Desacelerar para o sono",
    duration: "10 min",
    durationSeconds: 600,
    description: "Solte o esforço e deixe o corpo encontrar repouso.",
    audioUrl: "/audio/sono.mp3",
    script:
      "Deite-se de um modo confortável e permita que o corpo seja sustentado. Não é necessário dormir imediatamente. Apenas deixe a tarefa do dia terminar por alguns minutos. Perceba o peso dos calcanhares, das pernas, das mãos e do rosto. A cada expiração, solte um pouco do esforço. Se pensamentos surgirem, não discuta com eles. Diga mentalmente: amanhã. E volte ao peso do corpo. Observe a mandíbula relaxando, os ombros descendo e a barriga se movendo sem comando. Não busque uma sensação especial. O descanso pode começar como uma simples permissão para não resolver nada agora. Sons distantes podem estar presentes. Deixe-os passar como ondas. Se uma preocupação voltar, reconheça que ela existe e retorne ao apoio da cama. Permita que o ritmo fique lento. Você pode permanecer aqui, respirando naturalmente, até o sono chegar. Boa noite.",
  },
];

export const ambientOptions: AmbientOption[] = [
  { id: "silencio", title: "Silêncio", icon: "◌" },
  { id: "chuva", title: "Chuva suave", icon: "⌁" },
  { id: "floresta", title: "Floresta", icon: "❧" },
  { id: "mar", title: "Mar calmo", icon: "≈" },
];

export const journalPrompts = [
  "O que estou tentando segurar com força hoje?",
  "Que sensação mudou enquanto eu a observava?",
  "Onde encontrei um pequeno espaço entre estímulo e resposta?",
  "O que eu posso soltar sem precisar resolver agora?",
  "Qual intenção gentil quero levar para o resto do dia?",
  "Onde o corpo pede mais cuidado nesta semana?",
  "O que a prática de hoje me mostrou, mesmo que pequeno?",
  "Há alguém a quem posso oferecer uma ação simples de cuidado?",
];
