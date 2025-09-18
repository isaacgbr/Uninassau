// Seleciona os elementos
const btn = document.getElementById("btnSaudar");
const inputNome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");

// Função
function saudar() {
  const nome = inputNome.value.trim();

  if(!nome) {
    mensagem.textContent = "Por favor, digite seu nome.";
    return;
  }
}

// Evento de clique
btn.addEventListener("click", saudar);

// Extra: mudar cor de fundo ao passar o mouse sobre o botão
btn.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "#d0e7ff";
});

btn.addEventListener("mouseout", () => {
  document.body.style.backgroundColor = "#f0f0f0";
});

// Fetch para enviar ao servidor
  fetch('http://localhost:3000/saudacao', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome: nome })
  })
  .then(response => response.json())
  .then(data => {
    mensagem.textContent = data.mensagem; // mensagem do servidor
  })
  .catch(error => {
    console.error('Erro:', error);
    mensagem.textContent = "Ocorreu um erro ao se conectar com o servidor.";
  });
}


  

