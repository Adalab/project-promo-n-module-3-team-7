const express = require('express');
const cors = require('cors');
//1 Crear servidor
const server = express();
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
const serverPort = 3001;
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);
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
    cardURL = 'este va a ser el enlace';
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

server.get("/previewcard/:name", (req,res) =>{
  console.log(req.params.name);
  const requestCard = req.params.name;
  //const requestPostData = posts.find (post =>post.slug === requestPostSlug);
  //console.log(requestPostData);
  //requestPostData.catList= requestPostData.categories.split(',');
  
  //pasarsela a la plantilla
  res.render('viewcard');
  //busca en la carpeta de views cual es la plantilla que se llama views
})

const serverStaticPath = './public';
server.use(express.static(serverStaticPath));
