const games = [
    {
        nome: "Fortune Tiger",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma pagando mais: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
    },
    {
        nome: "Fortune Rabbit",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma pagando mais: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/128249.png",
    },
    {
        nome: "Fortune Ganesha",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma pagando mais: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/ganesha.jpg",
    },
    {
        nome: "Fortune Ox",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma pagando mais: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/07/fortune-ox-thumbnail.jpg",
    },
    
    {
        nome: "Ninja Crash",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma pagando mais: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-09-28-at-12.09.11.jpeg",
    },
    {
        nome: "Fortune Mouse",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma pagando mais: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-MOUSE.png",
    },
    {
        nome: "The Great IceScape",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma pagando mais: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/ice.png",
    },
    {
        nome: "Gates of Olympus",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma pagando mais: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/07/6.webp",
    },
    {
        nome: "Aviator",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma pagando mais: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/06/avi2.jpeg",
    },
    {
        nome: "Spaceman",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma pagando mais: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/06/Logo.webp",
    },
    {
        nome: "Piggy Gold",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma pagando mais: Hacker ON",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/piggygold.jpg",
    },
    {
        nome: "Mines",
        url: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
        minuto: "> MINUTO PAGANTE: 6",
        hacker: "Plataforma pagando mais: Hacker ON",
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
      const barraProgresso = quadradinho.querySelector('.progresso');
  
      // Obtendo um valor aleatório entre 12% e 100%
      const progressoAtual = Math.floor(Math.random() * (100 - 24 + 1)) + 24;      
  
      // Atualizando o estilo da barra de progresso
      barraProgresso.style.width = progressoAtual + '%';
  
      // Atualizando o valor da porcentagem ao centro da barra de progresso
      const porcentagemTexto = quadradinho.querySelector('.porcentagem');
      porcentagemTexto.textContent = progressoAtual + '%';

      quadradinho.classList.add('quadradinho');
      
      games.minuto = "MINUTO PAGANTE: " + Math.floor(Math.random() * (8 - 1 + 1));
      const minutoTag = quadradinho.querySelector('.minuto');
      minutoTag.textContent = games.minuto;

      // Definindo cores da barra de acordo com o progresso
      if (progressoAtual < 30) {
        barraProgresso.style.backgroundColor = 'red';
      } else if (progressoAtual < 70) {
        barraProgresso.style.backgroundColor = 'yellow';
      } else {
        barraProgresso.style.backgroundColor = 'green';
      }
    });
    
  }
  
  // Chamando a função de atualização a cada 5 minutos
  const atualizar = atualizarProgresso()
  setInterval(atualizarProgresso, 1 * 60 * 1000);
  
  // Iterando sobre os jogos para criar os quadradinhos
  games.forEach(game => {
    // Criando o elemento de quadradinho
    const quadradinho = document.createElement('div');
    quadradinho.classList.add('quadradinho');
  
    // Criando a imagem
    const imagem = document.createElement('img');
    imagem.src = game.imagem;
    quadradinho.appendChild(imagem);
  
    // Criando o título
    const titulo = document.createElement('h5');
    titulo.textContent = game.nome;
    quadradinho.appendChild(titulo);
  
    // Criando o minuto pagante
    const minuto = document.createElement('p');
    minuto.classList.add('minuto');
    minuto.textContent = games.minuto;
    quadradinho.appendChild(minuto);
  
    // Criando o Hacker ON
    const hacker = document.createElement('p');
    hacker.textContent = game.hacker;
    quadradinho.appendChild(hacker);
  
    // Criando a barra de progresso
    const barraProgresso = document.createElement('div');
    barraProgresso.classList.add('progresso');
    barraProgresso.style.width = '100%'; // Inicialmente, a barra de progresso começa com 0%
    barraProgresso.style.height = '30px';
    barraProgresso.style.marginTop = '5px';
    barraProgresso.style.border_radius = '15px';
    quadradinho.appendChild(barraProgresso);
  
    // Criando o elemento de texto para a porcentagem
    const porcentagemTexto = document.createElement('span');
    porcentagemTexto.classList.add('porcentagem');
    porcentagemTexto.textContent = 'Carregando...';
    porcentagemTexto.style.position = 'absolute';
    porcentagemTexto.style.top = '50%';
    porcentagemTexto.style.left = '50%';
    porcentagemTexto.style.transform = 'translate(-50%, -50%)';
    porcentagemTexto.style.color = 'black';
    barraProgresso.appendChild(porcentagemTexto);
  
    // Adicionando o quadradinho ao grid
    grid.appendChild(quadradinho);
  });
  