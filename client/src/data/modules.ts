import type { Module } from "@/types";

export const modules: Module[] = [
  {
    number: "01",
    level: "Iniciante",
    title: "O que é o budismo: origem, linguagem e fontes",
    description: "Como nasceu esta família de tradições e como estudar suas fontes com cuidado.",
    duration: "15 min",
    status: "Comece aqui",
    color: "saffron",
    lesson: {
      intro:
        "O budismo surgiu no nordeste da Índia e se desenvolveu em muitas tradições. Começar bem é distinguir o Buda histórico, as narrativas devocionais, os textos e as interpretações posteriores.",
      sections: [
        {
          title: "Buda histórico e tradição",
          body: "A existência de Gautama é amplamente aceita, mas datas exatas e episódios biográficos permanecem incertos. Textos antigos foram transmitidos oralmente e registrados depois; por isso, história, autoridade religiosa e devoção devem ser distinguidas.",
        },
        {
          title: "Uma família, não uma fórmula única",
          body: "Theravada, Mahayana e Vajrayana são classificações úteis, mas não devem ser projetadas indistintamente sobre o próprio Gautama. Cada escola organiza textos, práticas e ideais de modo próprio.",
        },
        {
          title: "Como estudar",
          body: "Ao encontrar um ensinamento, pergunte: de qual texto vem? De qual tradição? Qual é o sentido original e qual é a interpretação moderna? Essa atitude protege contra simplificações.",
        },
      ],
      practice:
        "Monte uma pequena linha do tempo com o Buda histórico, a transmissão oral, a formação das coleções e o surgimento posterior das escolas.",
    },
  },
  {
    number: "02",
    level: "Iniciante",
    title: "As Três Joias, refúgio e comunidade",
    description: "Buda, Dharma e Sangha como orientação para estudo, prática e convivência.",
    duration: "15 min",
    status: "Próximo passo",
    color: "moss",
    lesson: {
      intro:
        "As Três Joias oferecem uma estrutura simples para caminhar: uma referência de despertar, um ensinamento a experimentar e uma comunidade que ajuda a não caminhar sozinho.",
      sections: [
        {
          title: "Buda",
          body: "Buda pode designar o mestre histórico e, em muitas tradições, qualquer ser que desperta plenamente. A referência não exige imaginar um deus criador: trata-se de um modelo de transformação e clareza.",
        },
        {
          title: "Dharma",
          body: "Dharma é ensinamento, prática e realidade apontada pelo ensinamento. Ele não é apenas um conjunto de ideias: deve ser investigado, praticado e observado na experiência.",
        },
        {
          title: "Sangha",
          body: "Sangha pode significar comunidade monástica, comunidade de praticantes ou discípulos nobres, conforme o contexto. Uma boa comunidade combina estudo, humildade, segurança e responsabilidade.",
        },
      ],
      practice:
        "Escreva o que você espera de um professor, de um ensinamento e de uma comunidade. Use isso para escolher ambientes de estudo responsáveis.",
    },
  },
  {
    number: "03",
    level: "Iniciante",
    title: "As Quatro Nobres Verdades e dukkha",
    description: "Um diagnóstico prático para compreender insatisfação, apego e liberdade.",
    duration: "18 min",
    status: "Próximo passo",
    color: "clay",
    lesson: {
      intro:
        "As Quatro Nobres Verdades não afirmam simplesmente que a vida é sofrimento. Elas oferecem um diagnóstico: reconhecer dukkha, investigar suas causas, perceber a cessação e praticar um caminho.",
      sections: [
        {
          title: "Dukkha",
          body: "Dukkha inclui dor, insatisfação, instabilidade e vulnerabilidade daquilo a que tentamos nos apegar. Experiências agradáveis também mudam; reconhecê-lo é honestidade, não pessimismo.",
        },
        {
          title: "Origem e cessação",
          body: "O ensinamento aponta para o anseio e o apego como condições importantes. Quando essas condições mudam, abre-se a possibilidade de cessação do sofrimento condicionado; nirvana não é simplesmente aniquilação.",
        },
        {
          title: "O caminho",
          body: "A quarta verdade é o Caminho Óctuplo: sabedoria, conduta ética e treinamento mental trabalhando em conjunto.",
        },
      ],
      practice:
        "Em uma situação incômoda, anote: o que dói? O que estou tentando segurar ou afastar? O que muda quando observo antes de reagir?",
    },
  },
  {
    number: "04",
    level: "Iniciante",
    title: "O Caminho Óctuplo",
    description: "Sabedoria, ética e concentração como um treinamento integrado.",
    duration: "22 min",
    status: "Próximo passo",
    color: "indigo",
    lesson: {
      intro:
        "O Caminho Óctuplo não é uma escada rígida nem oito mandamentos. É um conjunto de oito dimensões que se fortalecem mutuamente.",
      sections: [
        {
          title: "Sabedoria",
          body: "Visão e intenção corretas orientam a leitura da experiência e as escolhas para o não-dano, a renúncia ao excesso e a benevolência.",
        },
        {
          title: "Conduta",
          body: "Fala, ação e meio de vida corretos levam o caminho para os relacionamentos e o trabalho. Ética reduz conflito, culpa e agitação.",
        },
        {
          title: "Treinamento mental",
          body: "Esforço, atenção plena e concentração desenvolvem a capacidade de permanecer, retornar e ver com clareza.",
        },
      ],
      practice:
        "Escolha uma conversa hoje. Pratique falar com verdade, necessidade e cuidado, deixando de lado uma frase que só aumentaria o conflito.",
    },
  },
  {
    number: "05",
    level: "Intermediário",
    title: "Impermanência, agregados e não-eu",
    description: "Investigue como o budismo descreve a pessoa sem um eu permanente.",
    duration: "20 min",
    status: "Desbloqueia ao avançar",
    color: "moss",
    lesson: {
      intro:
        "Anicca aponta para a mudança dos fenômenos. Anatta não significa que nada existe, mas que os agregados não são um eu permanente, independente e soberano.",
      sections: [
        {
          title: "Os cinco agregados",
          body: "Forma, sensação, percepção, formações volitivas e consciência surgem em condições, mudam e não podem ser controlados como propriedade de um eu fixo.",
        },
        {
          title: "Não apropriar",
          body: "A fórmula prática é observar: isto é impermanente; não é inteiramente meu, não sou isto sozinho, não é um eu permanente.",
        },
        {
          title: "Origem dependente",
          body: "A experiência aparece em relações condicionais. A dependência não é uma cadeia com uma causa primeira, mas um convite a ver condições e possibilidades de mudança.",
        },
      ],
      practice:
        "Observe por dez minutos corpo, sensação, percepção, intenção e consciência como eventos que mudam. Evite concluir rapidamente que existe ou não existe uma alma.",
    },
  },
  {
    number: "06",
    level: "Intermediário",
    title: "Carma, renascimento e ética",
    description: "Intenção, consequência e os cinco preceitos sem confundir carma com destino.",
    duration: "25 min",
    status: "Desbloqueia ao avançar",
    color: "saffron",
    lesson: {
      intro:
        "Em um discurso budista importante, carma é definido como intenção. Isso não é destino nem uma contabilidade imediata de prêmios e castigos.",
      sections: [
        {
          title: "Intenção e ação",
          body: "A intenção se manifesta por corpo, fala e mente. O resultado pode surgir agora, mais tarde ou em vidas futuras, segundo a tradição; não é uma fórmula simples nem uma lei científica comprovada.",
        },
        {
          title: "Renascimento sem alma permanente",
          body: "O Budismo clássico fala em continuidade causal sem a migração de um eu eterno. Hinduísmo e Jainismo têm outras explicações; não trate as três famílias como uma mesma doutrina.",
        },
        {
          title: "Cinco preceitos",
          body: "Não matar, não tomar o que não foi dado, evitar má conduta sexual, fala falsa e intoxicantes que levam à negligência são treinamentos para leigos, não uma lista universal de todas as religiões.",
        },
      ],
      practice:
        "Escolha um preceito por semana e observe intenção, circunstância, efeito e possibilidade de reparação. Nunca use carma para culpar vítimas por doença, pobreza ou violência.",
    },
  },
  {
    number: "07",
    level: "Intermediário",
    title: "Atenção plena, samatha e vipassana",
    description: "Aprenda a estabilizar a mente e investigar a experiência com segurança.",
    duration: "25 min",
    status: "Desbloqueia ao avançar",
    color: "indigo",
    lesson: {
      intro:
        "Sati é lembrar-se de estar presente; samatha é tranquilidade e estabilidade; vipassana é insight. As três dimensões se apoiam, embora as escolas organizem os métodos de maneira diferente.",
      sections: [
        {
          title: "Atenção plena",
          body: "A prática observa corpo, sensações, mente e condições. Não é esvaziar a mente nem um sinônimo automático de mindfulness clínico.",
        },
        {
          title: "Calma e insight",
          body: "Use a respiração para reunir a atenção. Quando houver estabilidade, observe como sensações e pensamentos surgem, mudam e cessam, sem buscar experiências especiais.",
        },
        {
          title: "Segurança",
          body: "Pratique pouco e com reversibilidade. Trauma, dissociação, psicose, mania, depressão intensa e insônia podem exigir apoio profissional; meditação não substitui tratamento.",
        },
      ],
      practice:
        "Sente-se de 5 a 10 minutos. Note distrações e retorne. Se fechar os olhos incomodar, mantenha-os semicerrados ou pratique caminhando.",
    },
  },
  {
    number: "08",
    level: "Intermediário",
    title: "Mettā, karuṇā, brahmavihāra e bodhicitta",
    description: "Boa vontade e compaixão com limites, discernimento e ação.",
    duration: "23 min",
    status: "Desbloqueia ao avançar",
    color: "clay",
    lesson: {
      intro:
        "Mettā é boa vontade; karuṇā é compaixão; muditā é alegria pelo bem alheio; upekkhā é equanimidade. Bodhicitta é, no Mahayana, a aspiração ao despertar para o benefício de todos.",
      sections: [
        {
          title: "Compaixão não é pena",
          body: "Karuṇā deseja que o sofrimento cesse e procura uma resposta útil. Não exige absorver a dor alheia, salvar todos ou aceitar abuso.",
        },
        {
          title: "Bodhicitta",
          body: "A compaixão alimenta a bodhicitta, mas não é idêntica a ela. O elemento específico é a aspiração ao despertar completo para o benefício de todos os seres.",
        },
        {
          title: "Equanimidade e limites",
          body: "Boa vontade pode coexistir com distância, proteção e consequências. Uma prática responsável aumenta segurança, não culpa por não sentir amor universal.",
        },
      ],
      practice:
        "Repita uma frase de boa vontade para si e para alguém seguro. Depois identifique uma ação pequena que alivie um sofrimento real, sem ultrapassar limites.",
    },
  },
  {
    number: "09",
    level: "Intermediário avançado",
    title: "Theravada, Tipiṭaka e Abhidhamma",
    description: "Conheça a tradição Pali, seus textos e seu horizonte de libertação.",
    duration: "28 min",
    status: "Desbloqueia ao avançar",
    color: "moss",
    lesson: {
      intro:
        "Theravada preserva o Tipiṭaka em Pali e possui linhagens diversas. Não é sinônimo de todo o budismo antigo nem uma prática única.",
      sections: [
        {
          title: "Três cestos",
          body: "Vinaya organiza disciplina monástica, Sutta preserva discursos e Abhidhamma sistematiza a doutrina em análises técnicas. As coleções foram formadas historicamente, não transcritas como atas.",
        },
        {
          title: "Arahant e libertação",
          body: "Muitas apresentações destacam o arahant como ideal soteriológico, com ética, concentração, discernimento, não-eu e origem dependente. Linhagens e movimentos divergem em método.",
        },
        {
          title: "Ler com contexto",
          body: "Uma passagem de sutta, um comentário e um manual moderno têm funções diferentes. Identificar cada camada ajuda a estudar sem transformar uma interpretação em consenso universal.",
        },
      ],
      practice:
        "Leia um sutta curto e uma introdução ao Abhidhamma. Marque o que é discurso, sistematização posterior e comentário.",
    },
  },
  {
    number: "10",
    level: "Avançado",
    title: "Mahayana: bodhisattva, vacuidade e natureza de Buda",
    description: "Estude uma família ampla de textos e conceitos sem cair no niilismo.",
    duration: "32 min",
    status: "Desbloqueia ao avançar",
    color: "indigo",
    lesson: {
      intro:
        "Mahayana é uma família ampla de movimentos e escrituras. Vacuidade significa ausência de natureza inerente, não inexistência; natureza de Buda não é automaticamente uma alma.",
      sections: [
        {
          title: "Bodhisattva",
          body: "O ideal do bodhisattva articula compaixão, bodhicitta e aspiração ao despertar completo para o benefício de todos os seres.",
        },
        {
          title: "Vacuidade",
          body: "No Madhyamaka, fenômenos não têm existência independente e inerente. A distinção entre verdade convencional e última evita tanto eternalismo quanto niilismo.",
        },
        {
          title: "Natureza de Buda",
          body: "É uma linguagem variável sobre potencial ou condição de despertar. Deve ser lida junto da vacuidade e não traduzida automaticamente como atman ou eu superior.",
        },
      ],
      practice:
        "Compare uma passagem sobre os agregados com o Sutra do Coração: objeto da análise, linguagem e finalidade prática. Explique como vacuidade não elimina ética nem causalidade.",
    },
  },
  {
    number: "11",
    level: "Avançado",
    title: "Zen, Terra Pura e Vajrayana",
    description: "Compare famílias Mahayana em seus próprios contextos e limites.",
    duration: "35 min",
    status: "Desbloqueia ao avançar",
    color: "clay",
    lesson: {
      intro:
        "Zen e Terra Pura são correntes Mahayana do Leste Asiático; Vajrayana é o veículo tântrico, frequentemente integrado ao Mahayana. As categorias não têm a mesma escala.",
      sections: [
        {
          title: "Zen/Chan",
          body: "Valoriza realização direta, prática corporal, relação mestre-discípulo e expressão na vida diária. A fórmula fora das escrituras é uma retórica de imediaticidade, não rejeição da literatura.",
        },
        {
          title: "Terra Pura",
          body: "Sutras, votos e nembutsu recebem centralidade, mas Jōdo Shinshū, Jōdo-shū e outras linhagens divergem em fé, mérito, meditação e práticas adicionais.",
        },
        {
          title: "Vajrayana",
          body: "Mantras, mandalas, iniciações e visualização dependem de linhagem e contexto. Não são técnicas para improvisar sozinho; exigem professor qualificado e compromissos éticos.",
        },
      ],
      practice:
        "Escolha uma escola. Compare uma fonte institucional e uma acadêmica quanto a texto, prática, mestre, objetivo e interpretação de libertação. Não pratique técnicas esotéricas sem orientação.",
    },
  },
,
  {
    number: "12",
    level: "Intermediário",
    title: "Os cinco obstáculos e o retorno gentil",
    description: "Reconheça sonolência, agitação, dúvida e aversão sem transformar a prática em luta.",
    duration: "22 min",
    status: "Desbloqueia ao avançar",
    color: "saffron",
    lesson: {
      intro:
        "Os textos clássicos descrevem obstáculos comuns à concentração: desejo sensorial, aversão, torpor e sonolência, inquietação e preocupação, dúvida. Nomeá-los reduz a ideia de que 'você está falhando'.",
      sections: [
        {
          title: "O que são os obstáculos",
          body: "Não são pecados nem diagnósticos clínicos. São padrões mentais que obscurecem a clareza. Cada pessoa encontra combinações diferentes; o ponto é reconhecer, não eliminar à força.",
        },
        {
          title: "Estratégias leves",
          body: "Com sonolência: postura mais ereta, olhos semicerrados, caminhada. Com agitação: respiração mais longa na expiração, encurtar a sessão. Com aversão ou desejo: notar no corpo e rotular suavemente. Com dúvida: voltar a um objeto simples por poucos minutos.",
        },
        {
          title: "Quando pausar",
          body: "Se surgirem pânico, dissociação ou memórias traumáticas intensas, reduza ou pare e busque apoio adequado. Obstáculo de meditação não é o mesmo que crise de saúde mental.",
        },
      ],
      practice:
        "Na próxima sessão, quando se distrair, nomeie em silêncio o obstáculo mais próximo (sono, inquietação, dúvida…) e volte à respiração uma vez — sem julgamento.",
    },
  },
  {
    number: "13",
    level: "Intermediário",
    title: "Como escolher professor e comunidade",
    description: "Sinais de segurança, responsabilidade e alinhamento — para não caminhar às cegas.",
    duration: "20 min",
    status: "Desbloqueia ao avançar",
    color: "moss",
    lesson: {
      intro:
        "Uma boa orientação combina competência, ética e respeito à sua autonomia. Nem todo grupo com linguagem budista é um ambiente seguro.",
      sections: [
        {
          title: "Sinais de cuidado",
          body: "Transparência sobre linhagem e limites; incentivo a perguntas; respeito a 'não'; ausência de pressão financeira ou sexual; clareza de que meditação não substitui tratamento médico.",
        },
        {
          title: "Sinais de alerta",
          body: "Isolamento de outras fontes; promessas absolutas de cura ou despertar rápido; humilhação como 'método'; controle da vida íntima; uso de carma para culpar vítimas; exigências de segredo desproporcionais.",
        },
        {
          title: "Seu papel",
          body: "Você pode estudar sozinho com bons textos e, quando buscar comunidade, ir devagar. Confiança se constrói no tempo. Sair de um grupo inadequado é sabedoria, não fracasso.",
        },
      ],
      practice:
        "Escreva cinco critérios inegociáveis para um professor ou grupo. Use-os na próxima vez que avaliar um curso, retiro ou sangha.",
    },
  },

];
