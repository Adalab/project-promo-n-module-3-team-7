// Fichero src/components/App.js

import '../styles/App.scss';
import Header from './Header';
import Footer from './Footer';
import Preview from './Preview';
import Form from './Form';
import { useState } from 'react';


function App() {
  const [themeDesign, setThemeDesign] = useState('hide');
  const [themeFill, setThemeFill] = useState('hide');
  const [themeShare, setThemeShare] = useState('hide');
  const [arrowDesign, setArrowDesign] = useState('');
  const [arrowFill, setArrowFill] = useState('');
  const [arrowShare, setArrowShare] = useState('');
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
  const handleInput = (value) => {

    if (value === 'name') {
      setData({
        ...data,
        name: value,
      });
    } else if (value === 'job') {
      setData({
        ...data,
        job: value,
      });
    } else if (value === 'phone') {
      setData({
        ...data,
        phone: value,
      });
    } else if (value === 'email') {
      setData({
        ...data,
        email: value,
      });
    } else if (value === 'linkedin') {
      setData({
        ...data,
        linkedin: value,
      });
    } else {
      setData({
        ...data,
        github: value,
      });
    }
  };
  const handleCollapsable = (id) => {

    if (id === 'design') {
      setThemeDesign('');
      setThemeFill('hide');
      setThemeShare('hide');
      setArrowDesign('arrow');
      setArrowFill('');
      setArrowShare('');
    } else if (id === 'fill') {
      setThemeDesign('hide');
      setThemeFill('');
      setThemeShare('hide');
      setArrowDesign('');
      setArrowFill('arrow');
      setArrowShare('');
    } else {
      setThemeDesign('hide');
      setThemeFill('hide');
      setThemeShare('');
      setArrowDesign('');
      setArrowFill('');
      setArrowShare('arrow');
    }
  };

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
      <Form
        handleInput={handleInput}
        handleCollapsable={handleCollapsable}
        //job={data.job}
        themeDesign={themeDesign}
        arrowDesign={arrowDesign}
        themeFill={themeFill}
        arrowFill={arrowFill}
        themeShare={themeShare}
        arrowShare={arrowShare}

      />
      <Footer />
    </>
  );
}

export default App;
