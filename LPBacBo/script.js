document.getElementById('gerarAposta').addEventListener('click', function() {
  // Exibir o loading por 5 segundos
  exibirLoading();

  setTimeout(function() {
    // Remover o loading após 5 segundos e executar o restante das operações
    var barraAzul = document.querySelector('.progress-bar.bg-info');
    var barraVermelha = document.querySelector('.progress-bar.bg-danger');

    var valorAleatorio = Math.floor(Math.random() * (93 - 28) + 28); // Gera um número aleatório entre 28 e 93
    var valorComplementar = 100 - valorAleatorio; // Calcula o valor complementar

    var shapeVermelho = document.querySelector('.shapevermelho');
    var shapeAzul = document.querySelector('.shapeazul');
    var shapeAmarelo = document.querySelector('.shapeempate');

    if (valorAleatorio > 50) {
      //Azul
      shapeAzul.style.transform = "scale(1.1)";
      shapeAzul.style.boxShadow = "0px 0px 15px blue"
      //Vermelho
      shapeVermelho.style.transform = "scale(1)";
      shapeVermelho.style.boxShadow = "none"
      //Amarelo
      shapeAmarelo.style.transform = "scale(1)";
      shapeAmarelo.style.boxShadow = "none"
    } else if (valorAleatorio < 50) {
      //Vermelho
      shapeVermelho.style.transform = "scale(1.1)";
      shapeVermelho.style.boxShadow = "0px 0px 15px red"
      //Azul
      shapeAzul.style.transform = "scale(1)";
      shapeAzul.style.boxShadow = "none"
      //Amarelo
      shapeAmarelo.style.transform = "scale(1)";
      shapeAmarelo.style.boxShadow = "none"
    } else {
      //Amarelo
      shapeAmarelo.style.transform = "scale(1.1)";
      shapeAmarelo.style.boxShadow = "0px 0px 15px yellow"
      //Azul
      shapeAzul.style.transform = "scale(1)";
      shapeAzul.style.boxShadow = "none"
      //Vermelho
      shapeVermelho.style.transform = "scale(1)";
      shapeVermelho.style.boxShadow = "none"
    }

    // Altera a largura das barras de progresso
    barraAzul.style.width = valorAleatorio + '%';
    barraAzul.setAttribute('aria-valuenow', valorAleatorio);
    barraAzul.textContent = valorAleatorio + '%';

    barraVermelha.style.width = valorComplementar + '%';
    barraVermelha.setAttribute('aria-valuenow', valorComplementar);
    barraVermelha.textContent = valorComplementar + '%';

    // Altera a cor do botão de acordo com o resultado
    var botao = document.getElementById('gerarAposta');
    if (resultadoTexto === 'Azul') {
      botao.classList.remove('btn-danger'); // Remove a classe de cor vermelha
      botao.classList.add('btn-info'); // Adiciona a classe de cor azul
    } else if (resultadoTexto === 'Vermelho') {
      botao.classList.remove('btn-info'); // Remove a classe de cor azul
      botao.classList.add('btn-danger'); // Adiciona a classe de cor vermelha
    }
  }, 5000); // Aguarda 5 segundos antes de executar o restante das operações

  // Bloquear o botão por 25 segundos
  bloquearBotaoPor25Segundos();
});

function exibirLoading() {
  var loadingElement = document.getElementById('loading');
  // loadingElement.innerHTML = '<div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>';
  loadingElement.innerHTML = '<img src="/LPBacBo/Imagens/dadinhos.gif" alt="" srcset="">'
  setTimeout(function() {
    loadingElement.innerHTML = ''; // Remove o conteúdo do elemento de loading
  }, 5000);
}

function bloquearBotaoPor25Segundos() {
  var botao = document.getElementById('gerarAposta');
  botao.disabled = true; // Desabilitar o botão

  setTimeout(function() {
    botao.disabled = false; // Habilitar o botão após 25 segundos
  }, 25000);
}
