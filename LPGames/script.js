const games = [
    {
        nome: "Fortune Tiger",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
    },
    {
        nome: "Fortune Rabbit",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/128249.png",
    },
    {
        nome: "Fortune Ganesha",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/ganesha.jpg",
    },
    {
        nome: "Fortune Ox",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/07/fortune-ox-thumbnail.jpg",
    },
    
    {
        nome: "Ninja Crash",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-09-28-at-12.09.11.jpeg",
    },
    {
        nome: "Fortune Mouse",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-MOUSE.png",
    },
    {
        nome: "The Great IceScape",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/ice.png",
    },
    {
        nome: "Gates of Olympus",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/07/6.webp",
    },
    {
        nome: "Aviator",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/06/avi2.jpeg",
    },
    {
        nome: "Spaceman",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/06/Logo.webp",
    },
    {
        nome: "Piggy Gold",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/piggygold.jpg",
    },
    {
        nome: "Mines",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/06/mines-logo.webp",
    },
  ];
  
  // Selecionando o elemento grid
  const grid = document.getElementById('grid');
  
  // Função para atualizar a barra de progresso
  function atualizarProgresso() {
    // Iterando sobre os quadradinhos já criados
    grid.querySelectorAll('.quadradinho').forEach(quadradinho => {
      // Selecionando a barra de progresso dentro do quadradinho
      const barraProgresso = quadradinho.querySelector('.progress-bar');
  
      // Obtendo um valor aleatório entre 12% e 100%
      const progressoAtual = Math.floor(Math.random() * (100 - 24 + 1)) + 24;      
  
      // Atualizando o estilo da barra de progresso
      barraProgresso.style.width = progressoAtual + '%';
      // Atualizando o valor da porcentagem ao centro da barra de progresso
      barraProgresso.textContent = progressoAtual + '%';

      quadradinho.classList.add('quadradinho');
      
      games.minuto = "MINUTO PAGANTE: " + Math.floor(Math.random() * 9 + 1);
      const minutoTag = quadradinho.querySelector('.minuto');
      minutoTag.textContent = games.minuto;

      // Definindo cores da barra de acordo com o progresso
      if (progressoAtual < 40) {
        barraProgresso.classList.remove('bg-success');
        barraProgresso.classList.remove('bg-warning'); // Remover classe de aviso, se existir
        barraProgresso.classList.add('bg-danger');
      } else if (progressoAtual < 60) {
        barraProgresso.classList.remove('bg-success');
        barraProgresso.classList.remove('bg-danger'); // Remover classe de perigo, se existir
        barraProgresso.classList.add('bg-warning');
      } else {
        barraProgresso.classList.remove('bg-danger');
        barraProgresso.classList.remove('bg-warning'); // Remover classe de aviso, se existir
        barraProgresso.classList.add('bg-success');
      }
    });
    
  }
  
  // Chamando a função de atualização a cada 5 minutos
  const atualizar = atualizarProgresso()
  setInterval(atualizarProgresso, 0.02 * 60 * 1000);
  
  // Iterando sobre os jogos para criar os quadradinhos
games.forEach(game => {
  // Criando o elemento de quadradinho
  const quadradinho = document.createElement('div');
  quadradinho.classList.add('quadradinho', "col-lg-3", "col-md-6", "mb-4");

  // Criando a imagem
  const imagem = document.createElement('img');
  imagem.src = game.imagem;
  quadradinho.appendChild(imagem);

  // Criando o título
  const titulo = document.createElement('h6');
  titulo.textContent = game.nome;
  quadradinho.appendChild(titulo);

  // Criando o minuto pagante
  const minuto = document.createElement('p');
  minuto.classList.add('minuto');
  minuto.textContent = "MINUTO PAGANTE: " + Math.floor(Math.random() * (8 - 1 + 1)); // Modificado aqui
  quadradinho.appendChild(minuto);

  // Criando o Hacker ON
  const hacker = document.createElement('p');
  hacker.textContent = game.hacker;
  quadradinho.appendChild(hacker);

  // Criando a barra de progresso do Bootstrap
  const progressoBootstrap = document.createElement('div');
  progressoBootstrap.classList.add('progress');
  progressoBootstrap.style.height = '30px';

  const barraProgresso = document.createElement('div');
  barraProgresso.classList.add('progress-bar', 'progress-bar-striped', 'progress-bar-animated', 'bg-success');
  barraProgresso.style.width = '100%'; // Inicialmente, a barra de progresso começa com 100%
  barraProgresso.style.height = '30px';
  barraProgresso.style.fontSize = '150%';
  barraProgresso.style.fontWeight = 'bold';
  barraProgresso.textContent = "Carregando..."
  barraProgresso.setAttribute('role', 'progressbar');
  barraProgresso.setAttribute('aria-valuenow', '100');
  barraProgresso.setAttribute('aria-valuemin', '0');
  barraProgresso.setAttribute('aria-valuemax', '100');
  progressoBootstrap.appendChild(barraProgresso);

  quadradinho.appendChild(progressoBootstrap);
  // Adicionando o quadradinho ao grid
  grid.appendChild(quadradinho);
});

  