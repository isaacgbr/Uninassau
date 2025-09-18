// 1. Importa o Express
const express = require('express');
const app = express();
const port = 3000;

// 2. Permite que o servidor receba JSON
app.use(express.json());

// 3. Rota POST para receber o nome e retornar a saudação
app.post('/saudacao', (req, res) => {
  const nome = req.body.nome || 'Visitante';
  res.json({ mensagem: `Olá, ${nome}! Seja bem-vindo(a)!` });
});

// 4. Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
