function navigateTo(url) {
    // Aplica uma classe CSS para ativar a transição de saída
    document.body.classList.add('page-transition');
  
    // Aguarda um pequeno intervalo de tempo para que a transição de saída seja exibida
    setTimeout(function() {
      // Redireciona para a nova página
      window.location.href = url;
    }, 500); // Tempo em milissegundos
  }
  