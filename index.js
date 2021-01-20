const express = require('express');
const app = express();
let port = 3000;

app.use(express.json());

app.use('/*', (req,res, next) => {
  if (req.headers['x-forwarded-proto'] == 'https') {
    return next();
  } else {
    return res.redirect('https://' + req.headers.host + req.headers.originalUrl);
  }
})

app.get('/', (req, res) => {
  return res.json({ pagina: 'este e o meu site HTTPS'})
});

app.get('/:id', (req, res) => {
  const { id } = req.params;
  return res.json({pagina: id})
})

app.listen(port, () => console.log('SERVER STARTED!'));
