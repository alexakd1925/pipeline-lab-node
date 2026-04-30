const express = require('express');
const app = express();
const port = 3000;

app.get('/descuento', (req, res) => {
  const precio = req.query.precio || 100;
  const resultado = precio * 0.9; // 10% de descuento
  res.json({ original: precio, conDescuento: resultado });
});

app.listen(port, () => console.log('Servidor listo'));