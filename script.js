class Personagem {
    constructor(nome, descricao, imagem) {
      this.nome = nome;
      this.descricao = descricao;
      this.imagem = imagem;
      this.pontuacao = 0;
    }
    adicionarPontos(pontos) {
      this.pontuacao += pontos;
    }
    resetar() {
      this.pontuacao = 0;
    }
  }

  const personagens = [
    new Personagem("Mario", "Corajoso e sempre pronto para salvar o dia!", "mario.png"),
    new Personagem("Luigi", "Leal, gentil e um verdadeiro irmão!", "luigi.png"),
    new Personagem("Bowser", "Poderoso, determinado e um pouco teimoso.", "bowser.png")
  ];

  const perguntas = [
    {
      pergunta: "Qual seu passatempo favorito?",
      opcoes: [
        { texto: "Explorar castelos", pontos: [3, 2, 1] },
        { texto: "Caçar moedas", pontos: [2, 3, 1] },
        { texto: "Dominar o mundo", pontos: [1, 1, 3] }
      ]
    },
    {
      pergunta: "Você prefere trabalhar:",
      opcoes: [
        { texto: "Sozinho", pontos: [1, 2, 3] },
        { texto: "Em equipe", pontos: [3, 3, 1] },
        { texto: "Com meu irmão", pontos: [2, 3, 1] }
      ]
    },
    {
      pergunta: "Como você resolve problemas?",
      opcoes: [
        { texto: "Com calma e lógica", pontos: [2, 3, 1] },
        { texto: "Na base da coragem", pontos: [3, 2, 1] },
        { texto: "Na força bruta", pontos: [1, 1, 3] }
      ]
    },
    {
      pergunta: "Qual seu tipo de jogo favorito?",
      opcoes: [
        { texto: "Aventura", pontos: [3, 2, 1] },
        { texto: "Plataforma", pontos: [2, 3, 1] },
        { texto: "Estratégia", pontos: [1, 1, 3] }
      ]
    },
    {
      pergunta: "Você é mais...",
      opcoes: [
        { texto: "Líder", pontos: [3, 2, 1] },
        { texto: "Apoio", pontos: [1, 3, 2] },
        { texto: "Mandão", pontos: [1, 1, 3] }
      ]
    },
    {
      pergunta: "Qual cor você mais gosta?",
      opcoes: [
        { texto: "Vermelho", pontos: [3, 1, 1] },
        { texto: "Verde", pontos: [1, 3, 1] },
        { texto: "Preto", pontos: [1, 1, 3] }
      ]
    },
    {
      pergunta: "Se você fosse um power-up, seria:",
      opcoes: [
        { texto: "Cogumelo", pontos: [3, 2, 1] },
        { texto: "Flor de fogo", pontos: [2, 3, 1] },
        { texto: "Casco gigante", pontos: [1, 1, 3] }
      ]
    },
    {
      pergunta: "Você acorda cedo porque:",
      opcoes: [
        { texto: "Tem aventuras te esperando!", pontos: [3, 2, 1] },
        { texto: "Tem que ajudar os outros", pontos: [2, 3, 1] },
        { texto: "Quer destruir o Mario", pontos: [1, 1, 3] }
      ]
    },
    {
      pergunta: "Seu maior medo é:",
      opcoes: [
        { texto: "Falhar com seus amigos", pontos: [3, 3, 1] },
        { texto: "Não conseguir se provar", pontos: [2, 3, 1] },
        { texto: "Perder para o Mario", pontos: [1, 1, 3] }
      ]
    },
    {
      pergunta: "Você prefere...",
      opcoes: [
        { texto: "Salvar a princesa", pontos: [3, 2, 1] },
        { texto: "Ficar na sua e ajudar se necessário", pontos: [2, 3, 1] },
        { texto: "Capturar a princesa", pontos: [1, 1, 3] }
      ]
    }
  ];

  let perguntaAtual = 0;

  function iniciar() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    mostrarPergunta();
  }

  function mostrarPergunta() {
    const container = document.getElementById("quiz");
    const pergunta = perguntas[perguntaAtual];
    container.innerHTML = `<h2>${pergunta.pergunta}</h2>`;

    pergunta.opcoes.forEach((opcao, index) => {
      const btn = document.createElement("button");
      btn.innerText = opcao.texto;
      btn.onclick = () => selecionarOpcao(opcao.pontos);
      container.appendChild(btn);
    });
  }

  function selecionarOpcao(pontos) {
    personagens.forEach((p, i) => p.adicionarPontos(pontos[i]));
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  }

  function mostrarResultado() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    const vencedor = personagens.reduce((a, b) => a.pontuacao > b.pontuacao ? a : b);
    const container = document.getElementById("resultado");

    container.innerHTML = `
      <h2>Você é: ${vencedor.nome}</h2>
      <img src="${vencedor.imagem}" alt="${vencedor.nome}" />
      <p>${vencedor.descricao}</p>
      <p>Pontuação: ${vencedor.pontuacao}</p>
      <button onclick="recomecar()">Tentar novamente</button>
    `;
  }

  function recomecar() {
    personagens.forEach(p => p.resetar());
    perguntaAtual = 0;
    document.getElementById("resultado").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    mostrarPergunta();
  }