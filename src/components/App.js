// Fichero src/components/App.js

import '../styles/App.scss';
import Header from './Header';
import Footer from './Footer';
import Preview from './Preview';
import Form from './Form';
import { useState } from 'react';


function App() {

  const [data, setData] = useState({
    palette: '',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  });

  let nameToDisplay;
  if (data.name === '') {
    nameToDisplay = 'Nombre Apellido';
  } else {
    nameToDisplay = data.name;
  }

  let jobToDisplay;
  if (data.job === '') {
    jobToDisplay = 'Front-end developer';
  } else {
    jobToDisplay = data.job;
  }

  //const styles = `page-wrapper design__container selection js_collapsable_design ${theme}`;

  return (
    <>
      <Header />

      <Preview
        name={nameToDisplay}
        job={jobToDisplay}
        phone={data.phone}
        email={data.email}
        linkedin={data.linkedin}
        github={data.github}

      />
      <Form />
      <Footer />
    </>
  );
}

export default App;
