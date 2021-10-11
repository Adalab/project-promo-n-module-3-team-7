const express = require('express');
const cors = require('cors');
//1 Crear servidor
const server = express();
//2 Configurar servidor
server.use(cors());
//datos en formato JSON
server.use(express.json());
//3 Arrancar servidor
const serverPort = 3001;
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);
server.get('/card', (req, res) => {
    const response = {
      success: true,
      data: {
        palette: '',
        name: '',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        photo: '',
      }
    };
    res.json(response);
  });
