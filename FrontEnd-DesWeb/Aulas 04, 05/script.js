// Selecionando elementos
const btn = document.getElementById("btnSaudar");
const inputNome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");

// Função para exibir saudação
function saudar() {
  const nome = inputNome.value.trim();
  if(nome) {
    mensagem.textContent = `Olá, ${nome}! Seja bem-vindo(a)!`;
  } else {
    mensagem.textContent = "Por favor, digite seu nome.";
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
