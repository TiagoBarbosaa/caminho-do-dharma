# Roteiros de áudio — meditações guiadas

Use estes textos para gravação em estúdio ou home studio (voz calma, pt-BR).  
Ritmo sugerido: **~110–130 palavras/minuto**, pausas de 2–4 s nos pontos marcados com `[pausa]`.

Tom: próximo, sem teatralidade; como alguém ao lado, não no púlpito.

---

## 1. Atenção à respiração (≈ 5 min)

**Arquivo sugerido:** `public/audio/respiracao.mp3`  
**ID no app:** `respiracao`

Bem-vindo.  
Reserve estes próximos minutos para simplesmente estar aqui.  
[pausa]

Encontre uma postura confortável — sentado ou apoiado.  
Deixe os ombros relaxarem.  
Sinta o corpo sendo sustentado pela cadeira ou pelo chão.  
[pausa]

Leve a atenção para a respiração.  
Não tente mudá-la.  
Observe o ar entrando… e o ar saindo.  
[pausa]

Talvez você perceba o movimento do peito ou da barriga.  
Escolha um lugar simples para acompanhar.  
[pausa]

Na próxima inspiração, saiba que está inspirando.  
Na próxima expiração, saiba que está expirando.  
Um ciclo de cada vez.  
[pausa longa]

Se a mente se distrair, isso não é uma falha.  
Reconheça com gentileza: pensando.  
E volte para a próxima respiração.  
[pausa]

Você não precisa expulsar pensamentos.  
Permita que estejam presentes enquanto mantém um fio de atenção na respiração.  
[pausa longa]

Inspire, percebendo o corpo inteiro.  
Expire, soltando um pouco do esforço.  
[pausa]

Por alguns momentos, não há nada para resolver.  
Apenas esta respiração, este corpo, este instante.  
[pausa longa]

Aos poucos, perceba os sons ao redor.  
Mova devagar os dedos das mãos e dos pés.  
Quando estiver pronto, deixe os olhos se abrirem.  
[pausa]

Obrigado por praticar.

---

## 2. Compaixão e gentileza (≈ 7 min)

**Arquivo sugerido:** `public/audio/compaixao.mp3`  
**ID:** `compaixao`

Encontre uma postura confortável e permita que a respiração seja natural.  
[pausa]

Perceba que você não precisa se consertar neste momento.  
Você pode simplesmente estar aqui.  
[pausa]

Em silêncio, repita — no seu ritmo:  
Que eu esteja seguro.  
Que eu tenha paz.  
Que eu encontre alívio para o que é difícil.  
[pausa longa]

Não force um sentimento.  
Deixe as palavras oferecerem apenas uma direção gentil.  
[pausa]

Agora, lembre-se de alguém que deseja genuinamente o seu bem.  
Repita:  
Que essa pessoa esteja segura.  
Que tenha paz.  
Que encontre apoio.  
[pausa longa]

Observe qualquer sensação — calor, neutralidade ou resistência — sem julgamento.  
[pausa]

Se quiser, expanda a intenção para as pessoas ao redor:  
Que todos encontrem condições para viver com mais clareza e menos sofrimento.  
[pausa]

Compaixão não significa carregar tudo.  
Também inclui limites, descanso e sabedoria.  
[pausa]

Respire.  
Permaneça por alguns instantes com essa boa vontade.  
[pausa longa]

Aos poucos, volte para o corpo e para a sala.  
Quando estiver pronto, abra os olhos.  
[pausa]

Que você leve cuidado para a próxima ação.

---

## 3. Presença em movimento (≈ 6 min)

**Arquivo sugerido:** `public/audio/caminhada.mp3`  
**ID:** `caminhada`

Fique em pé ou sente-se confortavelmente.  
Se for caminhar, escolha um espaço seguro e um ritmo lento.  
[pausa]

Sinta o contato dos pés com o chão.  
Perceba o peso mudando de um lado para o outro.  
[pausa]

Não há destino para alcançar agora.  
Apenas um passo… e depois outro.  
[pausa]

Ao levantar o pé, saiba que está levantando.  
Ao mover, saiba que está movendo.  
Ao pousar, saiba que está pousando.  
[pausa longa]

Se estiver sentado, acompanhe os pequenos movimentos da respiração e das mãos.  
[pausa]

Quando a mente criar histórias, reconheça: pensamento.  
E volte ao próximo contato.  
[pausa]

Observe sons, luz e temperatura sem precisar nomear tudo.  
[pausa]

Caminhar assim não torna o mundo perfeito.  
Torna este passo conhecido.  
[pausa longa]

Reduza o ritmo por alguns instantes.  
Sinta o corpo inteiro.  
[pausa]

Agradeça a possibilidade de estar presente.  
Finalize parando com cuidado e percebendo como você está agora.

---

## 4. Desacelerar para o sono (≈ 10 min)

**Arquivo sugerido:** `public/audio/sono.mp3`  
**ID:** `sono`  
**Nota de gravação:** volume um pouco mais baixo; pausas mais longas; sem música agitadora.

Deite-se de um modo confortável e permita que o corpo seja sustentado.  
[pausa]

Não é necessário dormir imediatamente.  
Apenas deixe a tarefa do dia terminar por alguns minutos.  
[pausa]

Perceba o peso dos calcanhares… das pernas… das mãos… e do rosto.  
[pausa]

A cada expiração, solte um pouco do esforço.  
[pausa longa]

Se pensamentos surgirem, não discuta com eles.  
Diga mentalmente: amanhã.  
E volte ao peso do corpo.  
[pausa longa]

Observe a mandíbula relaxando, os ombros descendo, a barriga se movendo sem comando.  
[pausa]

Não busque uma sensação especial.  
O descanso pode começar como uma simples permissão para não resolver nada agora.  
[pausa longa]

Sons distantes podem estar presentes.  
Deixe-os passar como ondas.  
[pausa]

Se uma preocupação voltar, reconheça que ela existe…  
e retorne ao apoio da cama.  
[pausa longa]

Permita que o ritmo fique lento.  
Você pode permanecer aqui, respirando naturalmente, até o sono chegar.  
[pausa]

Boa noite.

---

## Como ligar no app

Em `client/src/data/meditations.ts`, adicione por exemplo:

```ts
audioUrl: "/audio/respiracao.mp3",
```

O app usa o MP3 quando existir; senão, mantém a voz do sistema (TTS).

## Checklist de gravação

- [ ] Ruído de fundo baixo  
- [ ] Sem compressão agressiva  
- [ ] Fade-in / fade-out suaves (0,5–1 s)  
- [ ] Exportar mono ou stereo 128–192 kbps MP3  
- [ ] Ouvir de fones e de caixa pequena (celular)  
- [ ] Evitar promessas (“você vai se curar”, “esvazie a mente por completo”)  
