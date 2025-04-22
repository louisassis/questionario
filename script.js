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
  new Personagem("Bowser", "Poderoso, determinado e um pouco teimoso.", "bowser.png"),
  new Personagem("Yoshi", "Ágil, fiel e sempre pronto para ajudar!", "yoshi.png"),
  new Personagem("Toad", "Pequeno, energético e muito confiável!", "toad.png"),
  new Personagem("Donkey Kong", "Forte, brincalhão e um pouco impulsivo!", "donkeykong.png"),
  new Personagem("Peach", "Amorosa, delicada e sempre elegante!", "peach.png")
];

const perguntas = [
  {
    pergunta: "Qual seu hobby favorito?",
    opcoes: [
      { texto: "Sair com os amigos", pontos: [4, 4, 1, 3, 5, 2, 4] },
      { texto: "Lutar", pontos: [3, 1, 5, 2, 1, 4, 1] },
      { texto: "Praticar esportes", pontos: [3, 2, 4, 5, 3, 5, 4] },
      { texto: "Fofocar", pontos: [2, 2, 1, 2, 3, 1, 5] },
      { texto: "Comer", pontos: [4, 3, 2, 5, 2, 4, 2] }
    ]
  },
  {
    pergunta: "Onde você gostaria de morar",
    opcoes: [
      { texto: "Castelo", pontos: [3, 2, 4, 2, 4, 2, 4] },
      { texto: "Fazenda", pontos: [2, 3, 2, 5, 3, 2, 3] },
      { texto: "Vulcão", pontos: [1, 1, 5, 1, 1, 2, 1] },
      { texto: "Mansão", pontos: [3, 4, 1, 2, 5, 1, 5] },
      { texto: "Casa na árvore", pontos: [1, 1, 1, 3, 2, 2, 3] }
    ]
  },
  {
    pergunta: "Se pudesse escolher um superpoder, qual seria:",
    opcoes: [
      { texto: "Velocidade", pontos: [2, 3, 1, 2, 3, 1, 3] },
      { texto: "Super-Força", pontos: [3, 2, 1, 2, 2, 2, 2] },
      { texto: "Voar", pontos: [1, 1, 3, 1, 1, 3, 1] },
      { texto: "Controlar o fogo", pontos: [1, 3, 1, 2, 2, 1, 1] },
      { texto: "Ler mentes", pontos: [3, 2, 2, 2, 3, 1, 2] }
    ]
  },
  {
    pergunta: "Qual seu jogo favorito?",
    opcoes: [
      { texto: "Roblox", pontos: [3, 2, 1, 3, 2, 2, 2] },
      { texto: "Mortal Kombat", pontos: [2, 3, 1, 2, 3, 1, 3] },
      { texto: "Minecraft", pontos: [1, 1, 3, 1, 1, 2, 2] },
      { texto: "Counter Strike", pontos: [2, 2, 1, 2, 2, 2, 3] },
      { texto: "GTA 5", pontos: [2, 3, 1, 2, 3, 1, 2] }
    ]
  },
  {
    pergunta: "Sua principal característica",
    opcoes: [
      { texto: "Líder", pontos: [3, 2, 1, 2, 1, 3, 3] },
      { texto: "Carismático", pontos: [1, 3, 2, 3, 3, 1, 2] },
      { texto: "Gentil", pontos: [1, 1, 3, 1, 1, 2, 1] },
      { texto: "Dominador", pontos: [2, 2, 1, 2, 2, 1, 3] },
      { texto: "Inteligente", pontos: [2, 3, 1, 2, 2, 1, 2] }
    ]
  },
  {
    pergunta: "Qual sua cor favorita?",
    opcoes: [
      { texto: "Vermelho", pontos: [3, 1, 1, 1, 1, 1, 1] },
      { texto: "Verde", pontos: [1, 3, 1, 3, 1, 1, 1] },
      { texto: "Rosa", pontos: [1, 1, 1, 1, 1, 1, 3] },
      { texto: "Branco", pontos: [2, 2, 1, 2, 3, 2, 2] },
      { texto: "Preto", pontos: [1, 1, 5, 2, 2, 3, 1] }
    ]
  },
  {
    pergunta: "Se você fosse um animal, seria:",
    opcoes: [
      { texto: "Cachorro", pontos: [3, 2, 1, 3, 3, 2, 2] },
      { texto: "Leão", pontos: [2, 3, 1, 2, 2, 2, 3] },
      { texto: "Bicho-preguiça", pontos: [1, 1, 3, 1, 1, 3, 1] },
      { texto: "Golfinho", pontos: [3, 2, 1, 3, 2, 3, 3] },
      { texto: "Urso Polar", pontos: [2, 2, 1, 3, 2, 1, 2] }
    ]
  },
  {
    pergunta: "Qual seu estilo de música favorito:",
    opcoes: [
      { texto: "Pagode", pontos: [3, 2, 1, 3, 2, 2, 2] },
      { texto: "Funk", pontos: [2, 3, 1, 2, 3, 1, 3] },
      { texto: "Rock", pontos: [1, 1, 3, 1, 1, 2, 1] },
      { texto: "Eclético", pontos: [3, 2, 1, 3, 2, 1, 3] },
      { texto: "Sertanejo", pontos: [1, 2, 2, 2, 1, 3, 2] }
    ]
  },
  {
    pergunta: "Quem você seria na Marvel",
    opcoes: [
      { texto: "Homem aranha", pontos: [3, 3, 1, 3, 3, 1, 3] },
      { texto: "Viúva Negra", pontos: [2, 3, 1, 2, 2, 3, 2] },
      { texto: "Homem de ferro", pontos: [1, 1, 3, 1, 1, 2, 1] },
      { texto: "Hulk", pontos: [2, 2, 1, 2, 3, 2, 3] },
      { texto: "Capitão Ámerica", pontos: [2, 3, 1, 2, 2, 1, 2] }
    ]
  },
  {
    pergunta: "Você trocaria seu melhor amigo por 2 milhões de reais?",
    opcoes: [
      { texto: "Com certeza", pontos: [3, 2, 1, 3, 2, 1, 3] },
      { texto: "Nunca", pontos: [2, 3, 1, 3, 3, 2, 2] },
      { texto: "Talvez...", pontos: [1, 1, 3, 1, 1, 2, 1] }
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

  pergunta.opcoes.forEach((opcao) => {
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
