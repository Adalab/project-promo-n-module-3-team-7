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
  const handleInput = (ev) => {
    const whichInput = ev.currentTarget.name;
    if (whichInput === 'name') {
      setData({
        ...data,
        name: ev.currentTarget.value,
      });
    } else if (whichInput === 'job') {
      setData({
        ...data,
        job: ev.currentTarget.value,
      });
    } else if (whichInput === 'phone') {
      setData({
        ...data,
        phone: ev.currentTarget.value,
      });
    } else if (whichInput === 'email') {
      setData({
        ...data,
        email: ev.currentTarget.value,
      });
    } else if (whichInput === 'linkedin') {
      setData({
        ...data,
        linkedin: ev.currentTarget.value,
      });
    } else {
      setData({
        ...data,
        github: ev.currentTarget.value,
      });
    }
  };
  const handleCollapsable = (ev) => {
    let clickedElement = ev.currentTarget.dataset.id;
    console.log(ev.currentTarget);
    if (clickedElement === 'design') {
      setThemeDesign('');
      setThemeFill('hide');
      setThemeShare('hide');
      setArrowDesign('arrow');
      setArrowFill('');
      setArrowShare('');
    } else if (clickedElement === 'fill') {
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
        handleChangeCollabsable={handleCollapsable} />
      <Footer />
    </>
  );
}

export default App;
