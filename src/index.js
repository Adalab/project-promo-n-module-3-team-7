const express = require('express');
const cors = require('cors');
//1 Crear servidor
const server = express();
const Database = require('better-sqlite3');

//2 Configurar servidor
server.use(cors());
//datos en formato JSON
server.use(
  express.json({
    limit: '50mb',
  })
);
server.set('view engine', 'ejs');

//3 Arrancar servidor
//const serverPort = 3001;
const serverPort = process.env.PORT || 3001;
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);

//4 database
const db = new Database('./src/db/cards.db', { verbose: console.log });
//enviar datos al motor de plantilla
server.get('/card/:id', (req, res) => {
  //definir un objeto lleno directamente aquí o rellenar la base de datos
  //crear la tabla en base datos
  const id = req.params.id;
  //nos devuleve el id de la card
  const query = db.prepare(`SELECT * FROM card WHERE id=?`);
  const data = query.get(id);
  //se renderiza la plantilla con los datos de db
  res.render('viewcard', data);
});

server.post('/card', (req, res) => {
  let cardURL = '';
  let error = '';
  console.log(req.body.name);
  if (req.body.name === '') {
    error = 'name';
  } else if (req.body.job === '') {
    error = 'job';
  } else if (req.body.photo === '') {
    error = 'photo';
  } else if (req.body.email === '') {
    error = 'email';
  } else if (req.body.phone === '') {
    error = 'phone';
  } else if (req.body.linkedin === '') {
    error = 'linkedin';
  } else if (req.body.github === '') {
    error = 'github';
  } else if (req.body.palette === '') {
    error = 'palette';
  } else {
    const query = db.prepare(
      'INSERT INTO card(palette,name,job,phone,email,linkedin,github,photo) values(?,?,?,?,?,?,?,?)'
    );
    const result = query.run(
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.phone,
      req.body.email,
      req.body.linkedin,
      req.body.github,
      req.body.photo
    );
    console.log(result);
    //   cardURL = `http://localhost:3001/card/${result.lastInsertRowid}`;
    cardURL = `https:/awsome-profile-cards.herokuapp.com/card/${result.lastInsertRowid}`;
  }
  if (cardURL !== '') {
    const response = {
      success: true,
      cardURL: cardURL,
    };
    res.json(response);
  } else {
    const response = {
      success: false,
      error: error,
    };
    res.json(response);
  }
});

server.get('/previewcard/:name', (req, res) => {
  console.log(req.params.name);
  const requestCard = req.params.name;
  //const requestPostData = posts.find (post =>post.slug === requestPostSlug);
  //console.log(requestPostData);
  //requestPostData.catList= requestPostData.categories.split(',');

  //pasarsela a la plantilla
  res.render('viewcard');
  //busca en la carpeta de views cual es la plantilla que se llama views
});

const serverStaticPath = './public';
server.use(express.static(serverStaticPath));
