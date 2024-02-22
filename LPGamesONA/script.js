const games = [
    {
        nome: "Fortune Tiger",
        url: "https://onabet.com/casino/game/2527279?bta=44409&nci=5341",
        minuto: "> MINUTO PAGANTE: -",
        hacker: "Plataforma: Hacker",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-TIGER.png",
    },
    {
        nome: "Fortune Rabbit",
        url: "https://onabet.com/casino/game/2533956?bta=44409&nci=5341",
        minuto: "> MINUTO PAGANTE: -",
        hacker: "Plataforma: Hacker",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/128249.png",
    },
    {
        nome: "Fortune Ganesha",
        url: "https://onabet.com/casino/game/2527260?bta=44409&nci=5341",
        minuto: "> MINUTO PAGANTE: -",
        hacker: "Plataforma: Hacker",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/ganesha.jpg",
    },
    {
        nome: "Fortune Ox",
        url: "https://onabet.com/casino/game/2527248?bta=44409&nci=5341",
        minuto: "> MINUTO PAGANTE: -",
        hacker: "Plataforma: Hacker",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/07/fortune-ox-thumbnail.jpg",
    },
    
    {
        nome: "Ninja Crash",
        url: "https://onabet.com/casino/game/2636765?bta=44409&nci=5341",
        minuto: "> MINUTO PAGANTE: -",
        hacker: "Plataforma: Hacker",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-09-28-at-12.09.11.jpeg",
    },
    {
        nome: "Fortune Mouse",
        url: "https://onabet.com/casino/game/2527320?bta=44409&nci=5341",
        minuto: "> MINUTO PAGANTE: -",
        hacker: "Plataforma: Hacker",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/CAPA-FORTUNE-MOUSE.png",
    },
    {
        nome: "The Great IceScape",
        url: "https://onabet.com/casino/game/2527287?bta=44409&nci=5341",
        minuto: "> MINUTO PAGANTE: -",
        hacker: "Plataforma: Hacker",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/ice.png",
    },
    {
        nome: "Gates of Olympus",
        url: "https://onabet.com/casino/game/2245112?bta=44409&nci=5341",
        minuto: "> MINUTO PAGANTE: -",
        hacker: "Plataforma: Hacker",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/07/6.webp",
    },
    {
        nome: "Aviator",
        url: "https://onabet.com/casino/game/2241819?bta=44409&nci=5341",
        minuto: "> MINUTO PAGANTE: -",
        hacker: "Plataforma: Hacker",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/06/avi2.jpeg",
    },
    {
        nome: "Spaceman",
        url: "https://onabet.com/casino/game/2245169?bta=44409&nci=5341",
        minuto: "> MINUTO PAGANTE: -",
        hacker: "Plataforma: Hacker",
        imagem: "https://hackspragmatic.com/wp-content/uploads/2023/06/Logo.webp",
    },
    {
      nome: "Piggy Gold",
      url: "https://onabet.com/casino/game/2527286?bta=44409&nci=5341",
      minuto: "> MINUTO PAGANTE: -",
      hacker: "Plataforma: Hacker",
      imagem: "https://hackspragmatic.com/wp-content/uploads/2023/08/piggygold.jpg",
    },
    {
      nome: "Mines",
      url: "https://onabet.com/casino/game/2241845?bta=44409&nci=5341",
      minuto: "> MINUTO PAGANTE: -",
      hacker: "Plataforma: Hacker",
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
      const hacktxt = quadradinho.querySelector('.hacktxt')
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
        hacktxt.innerHTML = '<span style="display: inline-block; margin-right: 5px;">Hacker:</span><i class="fa fa-toggle-off" aria-hidden="true" style="color: red;"></i>'
      } else if (progressoAtual < 60) {
        barraProgresso.classList.remove('bg-success');
        barraProgresso.classList.remove('bg-danger'); // Remover classe de perigo, se existir
        barraProgresso.classList.add('bg-warning');
        hacktxt.innerHTML = '<span style="display: inline-block; margin-right: 5px;">Hacker:</span><i class="fa fa-toggle-on" aria-hidden="true" style="color: green;"></i>'
      } else {
        barraProgresso.classList.remove('bg-danger');
        barraProgresso.classList.remove('bg-warning'); // Remover classe de aviso, se existir
        barraProgresso.classList.add('bg-success');
        hacktxt.innerHTML = '<span style="display: inline-block; margin-right: 5px;">Hacker:</span><i class="fa fa-toggle-on" aria-hidden="true" style="color: green;"></i>'
      }
    });

    
  }
  
  // Chamando a função de atualização a cada 5 minutos
  const atualizar = atualizarProgresso()
  setInterval(atualizarProgresso, 0.35 * 60 * 1000);

  function abrirSite(url) {
    // Mostra o iframe e carrega o site dentro dele
    var iframe = document.getElementById('iframeSite');
    iframe.style.display = 'block';
    iframe.src = url;
    return false; // Retorna falso para cancelar a ação padrão do link
}

  games.forEach(game => {
    // Criando o elemento de quadradinho
    const quadradinho = document.createElement('div');
    quadradinho.classList.add('quadradinho', 'col-lg-3', 'col-md-6', 'mb-4');

    // Criando o contêiner para a imagem e o botão
    const container = document.createElement('div');
    container.style.position = 'relative'; // Define o posicionamento relativo para permitir o posicionamento absoluto do botão
    quadradinho.appendChild(container);

    // Criando a imagem
    const imagem = document.createElement('img');
    imagem.src = game.imagem;
    imagem.style.cursor = 'pointer'; // Adicionando estilo para mostrar que é clicável
    imagem.style.width = '100%'; // Garante que a imagem ocupe todo o espaço disponível no contêiner
    imagem.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)'; // Aumenta a imagem em 1.1x ao passar o mouse sobre ela
    });
    imagem.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)'; // Retorna ao tamanho normal ao retirar o mouse
    });
    container.appendChild(imagem);

    // Criando o botão "Jogar"
    const botaoJogar = document.createElement('a');
    botaoJogar.classList.add("btn","btn-success","btn-lg")
    botaoJogar.onclick = function() {
      return abrirSite(game.url); // Chama a função abrirSite e retorna seu valor para cancelar a ação padrão do link
    };  
    botaoJogar.textContent = 'JOGAR';
    botaoJogar.style.fontWeight = "bold";
    botaoJogar.style.position = 'absolute'; // Define o posicionamento absoluto para o botão
    botaoJogar.style.top = '50%'; // Centraliza verticalmente o botão no contêiner
    botaoJogar.style.left = '50%'; // Centraliza horizontalmente o botão no contêiner
    botaoJogar.style.transform = 'translate(-50%, -50%)'; // Ajusta o botão para que fique perfeitamente centralizado
     // Adiciona o cursor de apontar ao botão
    botaoJogar.style.opacity = '0'; // Define a opacidade como 0 inicialmente para ocultar o botão
    botaoJogar.style.transition = 'opacity 1s ease'; // Adiciona uma transição suave para a opacidade
    container.appendChild(botaoJogar);

    // Adicionando o evento de mostrar o botão "Jogar" ao passar o mouse sobre o contêiner
    container.addEventListener('mouseover', function() {
        botaoJogar.style.opacity = '1'; // Torna o botão visível ao passar o mouse sobre o contêiner
    });
    // Adicionando o evento de ocultar o botão "Jogar" ao retirar o mouse do contêiner
    container.addEventListener('mouseout', function() {
        botaoJogar.style.opacity = '0'; // Oculta o botão ao retirar o mouse do contêiner
    });

     // Criando a barra de progresso do Bootstrap
    const progressoBootstrap = document.createElement('div');
    progressoBootstrap.classList.add('progress', 'mt-1');
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

    // Criando o minuto pagante
    const minuto = document.createElement('h5');
    minuto.classList.add('minuto');
    minuto.textContent = game.minuto;
    
    // Criando o Hacker
    const hacker = document.createElement('h6');
    hacker.textContent = "Plataforma pagando mais:"
    const hackerTXT = document.createElement('h6');
    hackerTXT.textContent = "Ativando Hacker"
    hackerTXT.classList = ("hacktxt")
    
    
    progressoBootstrap.appendChild(barraProgresso);
    quadradinho.appendChild(progressoBootstrap);
    quadradinho.appendChild(minuto);
    quadradinho.appendChild(hacker);
    quadradinho.appendChild(hackerTXT);

    // Adicionando o quadradinho ao grid
    grid.appendChild(quadradinho);

})
