

// 1. Importar Express
const express = require('express');

// 2. Criar aplicação
const app = express();

// 3. Definir porta
const PORT = 3000;

// 4. Middleware para JSON
app.use(express.json());

let livros = [];
let id = 1;
app.get('/livros', (req, res) => {
  res.json(livros);
});
app.post('/livros', (req, res) => {
  const { titulo, autor, ano } = req.body;

  // validações
  if (!titulo) {
    return res.status(400).json({ erro: "Título é um campo obrigatório." });
  }

  if (!autor) {
    return res.status(400).json({ erro: "Autor é um campo obrigatório." });
  }

  if (typeof ano !== 'number') {
    return res.status(400).json({ erro: "Ano deve ser digitado com números inteiros" });
  }

  const novoLivro = {
    id: id++,
    titulo,
    autor,
    ano
  };

  livros.push(novoLivro);

  res.status(201).json(novoLivro);
});

app.post('/livros', (req, res) => {
  const { titulo, autor, ano } = req.body;

  // validações
  if (!titulo) {
    return res.status(400).json({ erro: "Título é um campo obrigatório" });
  }

  if (!autor) {
    return res.status(400).json({ erro: "Autor é um campo obrigatório" });
  }

  if (typeof ano !== 'number') {
    return res.status(400).json({ erro: "Ano deve ser um número inteiro!" });
  }

  const novoLivro = {
    id: id++,
    titulo,
    autor,
    ano
  };

  livros.push(novoLivro);

  res.status(201).json(novoLivro);
});

// 5. Criar primeiro endpoint
app.get('/', (req, res) => {
    res.json({
        mensagem: '🎉 Minha primeira API funcionando!',
        status: 'sucesso',
        timestamp: new Date().toISOString()
    });
});

// 6. Endpoint de informações
app.get('/info', (req, res) => {
    res.json({
        nome: 'Minha API REST',
        versao: '1.0.0',
        autor: 'Seu Nome'
    });
});

// 7. Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});