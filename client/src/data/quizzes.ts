import type { QuizQuestion } from "@/types";

/** Quizzes leves por número do módulo — reforço, não avaliação. */
export const moduleQuizzes: Record<string, QuizQuestion[]> = {
  "01": [
    {
      question: "Qual atitude ajuda a estudar o budismo com mais cuidado?",
      options: [
        "Tratar todas as narrativas biográficas como fatos históricos comprovados",
        "Distinguir texto, tradição, interpretação moderna e devoção",
        "Assumir que Theravada, Mahayana e Vajrayana dizem a mesma coisa",
        "Ignorar a história oral e ler só manuais contemporâneos",
      ],
      correctIndex: 1,
      explanation:
        "Fontes, tradições e interpretações têm funções diferentes. Distingui-las reduz simplificações e misturas indevidas.",
    },
    {
      question: "Theravada, Mahayana e Vajrayana são melhor entendidas como…",
      options: [
        "Três fórmulas idênticas do Buda histórico",
        "Classificações úteis de famílias de tradições, com textos e ideais próprios",
        "Estágios obrigatórios que todos devem percorrer na mesma ordem",
        "Sinônimos de hinduísmo, jainismo e budismo",
      ],
      correctIndex: 1,
      explanation:
        "São famílias amplas e historicamente diversas — não uma escada única nem cópias literais do Gautama histórico.",
    },
    {
      question: "Por que a transmissão oral importa ao ler suttas antigos?",
      options: [
        "Porque os textos foram ditados palavra por palavra em uma assembleia filmada",
        "Porque coleções foram formadas ao longo do tempo; história e autoridade religiosa não são a mesma coisa",
        "Porque só existe uma versão oficial em português",
        "Porque a oralidade prova que nada mudou em 25 séculos",
      ],
      correctIndex: 1,
      explanation:
        "A formação das coleções é histórica. Isso não invalida a prática; pede só honestidade sobre o que sabemos e o que interpretamos.",
    },
  ],
  "02": [
    {
      question: "As Três Joias apontam principalmente para…",
      options: [
        "Um deus criador, um livro sagrado e um templo",
        "Referência de despertar, ensinamento a experimentar e comunidade de prática",
        "Riqueza, poder e longevidade",
        "Apenas a ordem monástica antiga",
      ],
      correctIndex: 1,
      explanation:
        "Buda, Dharma e Sangha orientam estudo, prática e convivência — com sentidos que variam conforme o contexto.",
    },
    {
      question: "O que caracteriza uma Sangha (comunidade) saudável, neste guia?",
      options: [
        "Obediência cega e isolamento de outras fontes",
        "Estudo, humildade, segurança emocional e responsabilidade",
        "Promessas de resultados milagrosos em poucos dias",
        "Exigência de doações altas como prova de fé",
      ],
      correctIndex: 1,
      explanation:
        "Comunidade boa combina apoio e discernimento. Pressão, medo e isolamento são sinais de alerta.",
    },
  ],
  "03": [
    {
      question: "Dukkha, nas Quatro Nobres Verdades, é melhor lido como…",
      options: [
        "A afirmação de que a vida inteira é só sofrimento",
        "Insatisfação, instabilidade e vulnerabilidade ligadas ao apego",
        "Uma punição por erros de vidas passadas",
        "Sinônimo de depressão clínica",
      ],
      correctIndex: 1,
      explanation:
        "O diagnóstico inclui dor e a instabilidade do agradável. Não é pessimismo total nem diagnóstico médico.",
    },
    {
      question: "Nirvāṇa, neste contexto introdutório, não deve ser reduzido a…",
      options: [
        "Cessação do sofrimento condicionado",
        "Simples aniquilação ou 'não existir mais'",
        "Liberdade em relação ao apego",
        "Um horizonte soteriológico das tradições",
      ],
      correctIndex: 1,
      explanation:
        "Tradições falam de cessação e liberdade; 'aniquilação' é uma leitura problemática e simplificada.",
    },
    {
      question: "A quarta nobre verdade aponta para…",
      options: [
        "Um único ritual obrigatório",
        "O Caminho Óctuplo: sabedoria, ética e treinamento mental em conjunto",
        "Apenas recitar um mantra",
        "Abandonar todos os relacionamentos",
      ],
      correctIndex: 1,
      explanation:
        "O caminho é prático e multidimensional — não se resume a um gesto isolado.",
    },
  ],
  "04": [
    {
      question: "O Caminho Óctuplo é melhor descrito como…",
      options: [
        "Oito mandamentos fixos e independentes",
        "Oito dimensões (sabedoria, ética, mente) que se reforçam",
        "Uma escada em que só se avança um degrau por vez",
        "Apenas meditação sentada",
      ],
      correctIndex: 1,
      explanation:
        "Visão, intenção, fala, ação, meio de vida, esforço, atenção e concentração trabalham juntas.",
    },
    {
      question: "Fala correta, neste treinamento, inclui…",
      options: [
        "Dizer tudo o que se pensa, sempre",
        "Verdade, necessidade e cuidado — evitando o que só aumenta conflito",
        "Silêncio absoluto em todas as situações",
        "Concordar com o grupo para manter a paz",
      ],
      correctIndex: 1,
      explanation:
        "Ética da fala não é rudeza 'sincera' nem submissão: é responsabilidade pelo impacto das palavras.",
    },
  ],
  "05": [
    {
      question: "Anatta (não-eu) significa, com cuidado…",
      options: [
        "Que nada existe",
        "Que os agregados não são um eu permanente, independente e soberano",
        "Que a pessoa não tem continuidade causal",
        "Que ética e responsabilidade deixam de fazer sentido",
      ],
      correctIndex: 1,
      explanation:
        "Não-eu não é niilismo: aponta a ausência de um self fixo nos agregados condicionados.",
    },
    {
      question: "Os cinco agregados incluem…",
      options: [
        "Apenas o corpo físico",
        "Forma, sensação, percepção, formações volitivas e consciência",
        "Passado, presente e futuro como substâncias",
        "Três deuses e dois demônios",
      ],
      correctIndex: 1,
      explanation:
        "A análise dos agregados é uma ferramenta para observar a experiência sem apegar-se a um 'eu' sólido.",
    },
  ],
  "06": [
    {
      question: "Em um discurso clássico, carma é definido principalmente como…",
      options: [
        "Destino inevitável",
        "Intenção que se expressa em corpo, fala e mente",
        "Prêmio e castigo imediatos e mensuráveis",
        "Uma lei física comprovada em laboratório",
      ],
      correctIndex: 1,
      explanation:
        "A ênfase na intenção evita confusão com fatalismo ou contabilidade mágica.",
    },
    {
      question: "Os cinco preceitos para leigos incluem…",
      options: [
        "Obrigação de se tornar monge",
        "Não matar, não tomar o que não foi dado, conduta sexual responsável, fala verdadeira, cuidado com intoxicantes",
        "Votos tántricos avançados",
        "Rejeição de toda ciência moderna",
      ],
      correctIndex: 1,
      explanation:
        "São treinamentos éticos amplamente apresentados para a vida leiga — não uma lista de todas as religiões.",
    },
    {
      question: "Usar 'carma' para culpar vítimas de violência ou doença é…",
      options: [
        "Uma aplicação fiel dos suttas",
        "Uma distorção ética que este guia rejeita",
        "Obrigatório no Theravada",
        "Comprovado pela ciência",
      ],
      correctIndex: 1,
      explanation:
        "Intenção e condição não autorizam justificar o sofrimento alheio como 'merecido'.",
    },
  ],
  "07": [
    {
      question: "Atenção plena (sati), samatha e vipassanā…",
      options: [
        "São exatamente o mesmo que mindfulness clínico",
        "Podem se apoiar: presença, estabilidade e insight",
        "Exigem sempre fechar os olhos e esvaziar a mente",
        "Substituem tratamento de trauma ou psicose",
      ],
      correctIndex: 1,
      explanation:
        "São dimensões relacionadas, mas não idênticas ao mindfulness clínico. Segurança e limites importam.",
    },
    {
      question: "Se durante a meditação surgem sintomas intensos de trauma ou pânico, o caminho prudente é…",
      options: [
        "Forçar mais tempo sentado até passar",
        "Reduzir, adaptar (olhos abertos, caminhada) e buscar apoio profissional se necessário",
        "Interpretar tudo como 'purificação' e ignorar o corpo",
        "Abandonar qualquer forma de cuidado médico",
      ],
      correctIndex: 1,
      explanation:
        "Meditação não substitui cuidado em saúde mental. Prática responsável é reversível e compassiva.",
    },
  ],
  "08": [
    {
      question: "Karuṇā (compaixão) responsável inclui…",
      options: [
        "Absorver toda a dor alheia e ignorar limites",
        "Desejar o fim do sofrimento com discernimento, ação útil e limites",
        "Aceitar abuso em nome do amor universal",
        "Sentir culpa por não amar todas as pessoas o tempo todo",
      ],
      correctIndex: 1,
      explanation:
        "Compaixão não é pena nem autoanulação; equanimidade e limites fazem parte.",
    },
    {
      question: "Bodhicitta, no contexto Mahayana, refere-se a…",
      options: [
        "Qualquer sentimento momentâneo de simpatia",
        "A aspiração ao despertar completo em benefício de todos os seres",
        "A obrigação de salvar todos imediatamente sozinho",
        "Um sinônimo exato de mettā",
      ],
      correctIndex: 1,
      explanation:
        "Compaixão alimenta a bodhicitta, mas o elemento específico é a aspiração ao despertar para o bem de todos.",
    },
  ],
  "09": [
    {
      question: "O Tipiṭaka organiza principalmente…",
      options: [
        "Apenas poemas chineses",
        "Vinaya (disciplina), Sutta (discursos) e Abhidhamma (sistematização)",
        "Só o Sutra do Coração",
        "Manuais de tantra sem iniciação",
      ],
      correctIndex: 1,
      explanation:
        "Os três cestos estruturam a coleção Pali; cada um tem função distinta e história de formação.",
    },
    {
      question: "Ao ler um sutta, um comentário e um manual moderno, o ideal é…",
      options: [
        "Tratar os três como se fossem o mesmo tipo de autoridade",
        "Identificar a camada de cada texto para não confundir discurso, sistematização e interpretação",
        "Confiar só no manual mais recente",
        "Rejeitar qualquer comentário",
      ],
      correctIndex: 1,
      explanation:
        "Camadas diferentes têm papéis diferentes. Nomeá-las protege contra anacronismos.",
    },
  ],
  "10": [
    {
      question: "Vacuidade (śūnyatā), no Madhyamaka, aponta para…",
      options: [
        "Que nada existe de modo algum",
        "Ausência de natureza inerente e independente, sem negar a verdade convencional",
        "Uma alma permanente chamada natureza de Buda",
        "O fim de qualquer ética",
      ],
      correctIndex: 1,
      explanation:
        "As duas verdades evitam eternalismo e niilismo; ética e causalidade permanecem no nível convencional.",
    },
    {
      question: "Natureza de Buda, neste guia, deve ser lida com o cuidado de…",
      options: [
        "Traduzi-la automaticamente como ātman ou eu superior eterno",
        "Vê-la como linguagem variável sobre potencial ou condição de despertar, junto da vacuidade",
        "Ignorá-la por completo em qualquer tradição",
        "Usá-la para justificar qualquer conduta",
      ],
      correctIndex: 1,
      explanation:
        "É linguagem Mahayana diversa — não um atalho para reintroduzir um self permanente sem nuance.",
    },
  ],
  "11": [
    {
      question: "Práticas Vajrayana (mantra, iniciação, visualização)…",
      options: [
        "Podem ser improvisadas sozinho com segurança total",
        "Dependem de linhagem, professor qualificado e compromissos éticos",
        "São idênticas a qualquer meditação de respiração",
        "São o único caminho legítimo do budismo",
      ],
      correctIndex: 1,
      explanation:
        "Contexto, iniciação e ética não são opcionais nesse veículo.",
    },
    {
      question: "Zen/Chan e Terra Pura…",
      options: [
        "São a mesma escola com nomes diferentes",
        "São correntes Mahayana do Leste Asiático, com ênfases e práticas distintas",
        "Rejeitam qualquer texto escrito",
        "Existem apenas no Ocidente contemporâneo",
      ],
      correctIndex: 1,
      explanation:
        "Ambas são famílias ricas e internas (várias linhagens). Compará-las exige fontes próprias de cada uma.",
    },
  ],
,
  "12": [
    {
      question: "Os cinco obstáculos, neste guia, são melhor entendidos como…",
      options: [
        "Pecados que invalidam a prática para sempre",
        "Padrões mentais comuns que obscurecem a clareza e podem ser reconhecidos com gentileza",
        "Prova de que você não tem aptidão para meditar",
        "Diagnósticos clínicos obrigatórios",
      ],
      correctIndex: 1,
      explanation:
        "Nomear sonolência, agitação, dúvida etc. reduz a narrativa de fracasso pessoal.",
    },
    {
      question: "Se a prática dispara pânico ou trauma intenso, o caminho prudente é…",
      options: [
        "Aumentar o tempo sentado até 'passar'",
        "Reduzir ou pausar e buscar apoio adequado — meditação não substitui cuidado em saúde",
        "Interpretar tudo como purificação avançada e ignorar o corpo",
        "Abandonar qualquer forma de ajuda profissional",
      ],
      correctIndex: 1,
      explanation:
        "Obstáculo clássico de concentração não é o mesmo que crise de saúde mental.",
    },
  ],
  "13": [
    {
      question: "Qual combinação indica um ambiente de prática mais seguro?",
      options: [
        "Promessas de despertar em semanas e pressão por doações altas",
        "Transparência, respeito ao 'não', ética clara e ausência de humilhação como método",
        "Segredo absoluto sobre tudo o que acontece no grupo",
        "Isolamento de livros e de outras tradições",
      ],
      correctIndex: 1,
      explanation:
        "Autonomia, limites e ética são critérios centrais — não carisma isolado.",
    },
    {
      question: "Sair de um grupo que não respeita seus limites é…",
      options: [
        "Sempre um fracasso espiritual",
        "Uma forma de sabedoria e autocuidado",
        "Proibido em todas as tradições budistas",
        "Prova de que carma 'não está maduro'",
      ],
      correctIndex: 1,
      explanation:
        "Confiança se constrói no tempo; interromper o que faz mal não é traição ao caminho.",
    },
  ],

};
