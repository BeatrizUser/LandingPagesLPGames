document.getElementById('gerarAposta').addEventListener('click', function() {
  var barraAzul = document.querySelector('.progress-bar.bg-info');
  var barraVermelha = document.querySelector('.progress-bar.bg-danger');

  var valorAleatorio = Math.floor(Math.random() * (93 - 28) + 28); // Gera um número aleatório entre 28 e 93
  var valorComplementar = 100 - valorAleatorio; // Calcula o valor complementar

  var shapeVermelho = document.querySelector('.shapevermelho');
  var shapeAzul = document.querySelector('.shapeazul');
  var shapeAmarelo = document.querySelector('.shapeempate');

  if (valorAleatorio > 50) {
    shapeAzul.style.transform = "scale(1.1)";
    shapeVermelho.style.transform = "scale(1)";
    shapeAmarelo.style.transform = "scale(1)";
  } else if (valorAleatorio < 50) {
    shapeVermelho.style.transform = "scale(1.1)";
    shapeAzul.style.transform = "scale(1)";
    shapeAmarelo.style.transform = "scale(1)";
  } else {
    shapeAmarelo.style.transform = "scale(1.1)";
    shapeAzul.style.transform = "scale(1)";
    shapeVermelho.style.transform = "scale(1)";
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
});
