/*
Armo el server para que escuche en un puerto determinado...
*/
const express = require('express');
const app = express();
const puerto = 3000; // Acceder al navegador desde: http://localhost:3000/

const path = require('path');
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

// app.listen(puerto, () =>
//   console.log('El servidor está corriendo en el puerto: ' + puerto)
// );

app.listen(process.env.PORT || 3000, function () {
  console.log('El servidor está corriendo en el puerto: 3000');
});

/*
Ahora defino los endpoints...
*/
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './views/login.html'));
});
