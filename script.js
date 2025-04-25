// Classe que representa um personagem do quiz
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
    this.pontuacao = 0;  // Pontuação acumulada pelas respostas do usuário
  }
}

// Lista com todos os personagens do quiz
const personagens = [
  new Personagem("Mario",  "Corajoso • Otimista • Líder nato",           "mario.png"),
  new Personagem("Luigi", "Leal • Atrapalhado • Coração enorme",         "imagens/luigi.png"),
  new Personagem("Bowser","Ambicioso • Impetuoso • Orgulhoso",          "imagens/bowser.png"),
  new Personagem("Yoshi", "Ágil • Companheiro • Comilão",                "imagens/yoshi.png"),
  new Personagem("Toad",  "Valente • Prestativo • Inteligente",           "imagens/toad.png"),
  new Personagem("Donkey Kong","Atleta • Brincalhão • Forte",       "imagens/donkeykong.png"),
  new Personagem("Peach", "Doce • Determinada • Líder",                  "peach.png")
];

// Perguntas e opções com os pontos atribuídos a cada personagem
const perguntas = [
  {
    pergunta: "Qual seu hobby favorito:",
    opcoes: [
      { texto: "Sair com os amigos", pontos: [8, 9, 1, 6, 8, 3, 5] },
      { texto: "Lutar", pontos: [6, 2, 10, 6, 2, 8, 3] },
      { texto: "Praticar esportes", pontos: [8, 3, 6, 9, 3, 10, 2] },
      { texto: "Fofocar", pontos: [2, 5, 1, 2, 7, 1, 10] },
      { texto: "Comer", pontos: [6, 6, 5, 9, 4, 8, 5] }
    ]
  },
  {
    pergunta: "Onde você gostaria de morar:",
    opcoes: [
      { texto: "Castelo", pontos: [6, 7, 3, 3, 9, 2, 7] },
      { texto: "Fazenda", pontos: [4, 5, 2, 9, 5, 10, 6] },
      { texto: "Vulcão", pontos: [1, 1, 10, 1, 1, 2, 1] },
      { texto: "Mansão", pontos: [7, 7, 1, 2, 8, 2, 10] },
      { texto: "Casa na árvore", pontos: [5, 6, 1, 8, 7, 10, 7] }
    ]
  },
  {
    pergunta: "Se pudesse escolher um superpoder, qual seria:",
    opcoes: [
      { texto: "Velocidade", pontos: [6, 5, 1, 10, 3, 7, 4] },
      { texto: "Super-Força", pontos: [7, 2, 10, 2, 1, 8, 4] },
      { texto: "Voar", pontos: [3, 7, 5, 7, 1, 3, 5] },
      { texto: "Controlar o fogo", pontos: [8, 2, 10, 2, 2, 4, 1] },
      { texto: "Ler mentes", pontos: [3, 6, 3, 2, 7, 2, 10] }
    ]
  },
  {
    pergunta: "Qual seu estilo de jogo favorito:",
    opcoes: [
      { texto: "Corrida", pontos: [9, 2, 3, 10, 6, 7, 4] },
      { texto: "Luta", pontos: [3, 1, 10, 2, 1, 8, 3] },
      { texto: "Sandbox", pontos: [3, 7, 1, 2, 8, 2, 9] },
      { texto: "FPS", pontos: [8, 2, 9, 2, 2, 9, 3] },
      { texto: "Esportes", pontos: [6, 2, 3, 9, 2, 10, 5] }
    ]
  },
  {
    pergunta: "Para onde viajaria:",
    opcoes: [
      { texto: "Italia", pontos: [10, 10, 1, 4, 5, 2, 9] },
      { texto: "Suíça", pontos: [8, 6, 1, 2, 5, 1, 7] },
      { texto: "Amapá", pontos: [1, 1, 5, 8, 1, 7, 1] },
      { texto: "EUA", pontos: [8, 9, 2, 3, 7, 5, 4] },
      { texto: "Alemanha", pontos: [4, 3, 9, 2, 2, 5, 2] }
    ]
  },
  {
    pergunta: "Qual sua cor favorita:",
    opcoes: [
      { texto: "Vermelho", pontos: [10, 1, 1, 1, 9, 1, 3] },
      { texto: "Verde", pontos: [3, 10, 1, 10, 2, 1, 1] },
      { texto: "Rosa", pontos: [1, 2, 1, 1, 2, 1, 10] },
      { texto: "Branco", pontos: [2, 5, 1, 2, 5, 2, 4] },
      { texto: "Preto", pontos: [1, 1, 10, 2, 2, 3, 1] }
    ]
  },
  {
    pergunta: "Se você fosse um animal, seria:",
    opcoes: [
      { texto: "Dinossauro", pontos: [3, 2, 10, 5, 3, 6, 2] },
      { texto: "Panda", pontos: [2, 6, 1, 2, 7, 2, 4] },
      { texto: "Gato", pontos: [1, 5, 2, 5, 6, 3, 5] },
      { texto: "Cachorro", pontos: [3, 7, 1, 8, 6, 3, 9] },
      { texto: "Urso", pontos: [8, 3, 7, 3, 1, 8, 4] }
    ]
  },
  {
    pergunta: "Qual seu esporte favorito:",
    opcoes: [
      { texto: "Futebol", pontos: [7, 6, 1, 8, 2, 8, 3] },
      { texto: "Futebol Americano", pontos: [2, 3, 6, 4, 3, 9, 1] },
      { texto: "Basquete", pontos: [5, 1, 7, 3, 1, 10, 2] },
      { texto: "Volei", pontos: [3, 4, 1, 5, 8, 7, 4] },
      { texto: "Nenhum", pontos: [1, 8, 2, 2, 9, 3, 6] }
    ]
  },
  {
    pergunta: "Qual super-herói seria:",
    opcoes: [
      { texto: "Homem-aranha", pontos: [9, 6, 1, 3, 6, 3, 4] },
      { texto: "Superman", pontos: [2, 3, 8, 2, 2, 7, 4] },
      { texto: "Homem de ferro", pontos: [6, 5, 2, 1, 8, 2, 3] },
      { texto: "Hulk", pontos: [8, 2, 10, 4, 3, 9, 1] },
      { texto: "Batman", pontos: [5, 3, 10, 2, 2, 1, 2] }
    ]
  },
  {
    pergunta: "O que você prefere:",
    opcoes: [
      { texto: "Dominar o mundo sozinho", pontos: [1, 1, 8, 1, 1, 8, 1] },
      { texto: "Casar com uma princesa", pontos: [10, 8, 9, 4, 8, 3, 10] }
    ]
  }
];

let perguntaAtual = 0; // Controla qual pergunta está sendo exibida


// Mostra a pergunta atual e as opções de resposta
function iniciar() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  mostrarPergunta();
}

function mostrarPergunta() {
  const container = document.getElementById("quiz");
  const pergunta = perguntas[perguntaAtual];
  container.innerHTML = `<h2>${pergunta.pergunta}</h2>`;

    // Cria um botão para cada opção de resposta
  pergunta.opcoes.forEach((opcao) => {
    const btn = document.createElement("button");
    btn.className = "quiz-btn";
    btn.innerText = opcao.texto;
    btn.onclick = () => selecionarOpcao(opcao.pontos);  // Ao clicar, chama a função para processar os pontos
    container.appendChild(btn);
  });
}

// Soma os pontos da opção escolhida para cada personagem
function selecionarOpcao(pontos) {
  personagens.forEach((p, i) => p.adicionarPontos(pontos[i]));
  perguntaAtual++;

  // Se ainda houver perguntas, continua o quiz; senão, mostra o resultado final
  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

// Mostra o resultado com o personagem mais compatível
function mostrarResultado() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("resultado").style.display = "block";

  let vencedor = personagens[0]; 

for (let i = 1; i < personagens.length; i++) {
  if (personagens[i].pontuacao > vencedor.pontuacao) {
    vencedor = personagens[i]; // Se o personagem atual tiver mais pontos, ele vira o novo vencedor
  }
}
  const container = document.getElementById("resultado");

  container.innerHTML = `
    <h2>${vencedor.nome}</h2>
    <img src="${vencedor.imagem}" alt="${vencedor.nome}" />
    <p>${vencedor.descricao}</p>
    <button class = "restart-btn" onclick="recomecar()">Tentar novamente</button>
    `;
}


// Reinicia o quiz
function recomecar() {
  personagens.forEach(p => p.resetar()); // Zera a pontuação dos personagens
  perguntaAtual = 0; // Reinicia o contador de perguntas
  document.getElementById("resultado").style.display = "none"; // Esconde o resultado
  document.getElementById("quiz").style.display = "block"; // Exibe o quiz na tela
  mostrarPergunta(); // Recomeça o quiz
} 
