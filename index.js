const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ pagina: 'este e o meu site HTTPS'})
});

app.get('/:id', (req, res) => {
  const { id } = req.params;
  return res.json({pagina: id})
})

app.listen(3000, () => console.log('SERVER STARTED!'));
