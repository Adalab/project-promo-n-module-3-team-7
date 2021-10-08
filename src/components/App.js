// Fichero src/components/App.js

import '../styles/App.scss';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import ls from '../services/localStorage';
import { useEffect, useState } from 'react';

function App() {
  const [themeDesign, setThemeDesign] = useState('hide');
  const [themeFill, setThemeFill] = useState('hide');
  const [themeShare, setThemeShare] = useState('hide');
  const [arrowDesign, setArrowDesign] = useState('');
  const [arrowFill, setArrowFill] = useState('');
  const [arrowShare, setArrowShare] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [data, setData] = useState(
    ls.get('data', {
      palette: '',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    })
  );
  const [palette, setPalette] = useState({
    textColor: '',
    bulletColor: '',
    iconsColor: '',
    itemColor: '',
  });

  useEffect(() => {
    // Guardamos el nombre y el email en el local storage
    ls.set('data', {
      palette: data.palette,
      name: data.name,
      job: data.job,
      phone: data.phone,
      email: data.email,
      linkedin: data.linkedin,
      github: data.github,
      photo: '',
    });
    // Este useEffect solo se ejecutará cuando cambie el nombre o el email
    console.log(data);
  }, [data]);

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

  //funcion de reset de datos del formulario, hay que hacer que borre localstorage tambien

  const handleReset = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  //funcion que controla las paletas, va con ev.target.value. Mandamos por props la funcion handlePalette a Palette y nos sube a /////app el valor de ev.target.value. props van de app a form a design y a palette, y la misma funcion sube los datos a App (vlue)

  const handlePalette = (value) => {
    const clickedPalette = value;
    setData({
      ...data,
      palette: clickedPalette,
    });
    if (clickedPalette === '1') {
      setPalette({
        textColor: 'palette_1_text_color',
        bulletColor: 'palette_1_bullet_color',
        iconsColor: 'palette_1_icons_color',
        itemColor: 'palette_1_item_color',
      });
    } else if (clickedPalette === '2') {
      setPalette({
        textColor: 'palette_2_text_color',
        bulletColor: 'palette_2_bullet_color',
        iconsColor: 'palette_2_icons_color',
        itemColor: 'palette_2_item_color',
      });
    } else {
      setPalette({
        textColor: 'palette_3_text_color',
        bulletColor: 'palette_3_bullet_color',
        iconsColor: 'palette_3_icons_color',
        itemColor: 'palette_3_item_color',
      });
    }
  };

  //funcion que controla los inputs, va con el ev.target.value para recoger el valor en el objeto y mandarlo a la api y mandarlo
  // a preview y que se pinte en preview, y con el name para identificar el input en el que estamos escribiendo. Bajamos a input la
  //funcion handleInput por props y desde input nos sube los valores de ev.target.value y ev target.name (props van de app a form a fill y a input y  la misma funcion sube por la misma ruta los datos a App (value y name)

  const handleInput = (value, name) => {
    const whichInput = name;
    if (whichInput === 'name') {
      setData({
        ...data,
        name: value,
      });
    } else if (whichInput === 'job') {
      setData({
        ...data,
        job: value,
      });
    } else if (whichInput === 'phone') {
      setData({
        ...data,
        phone: value,
      });
    } else if (whichInput === 'email') {
      setData({
        ...data,
        email: value,
      });
    } else if (whichInput === 'linkedin') {
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
  const handleImage = (file) => {
    setData({ ...data, photo: file });
    console.log('hola aqui foto ');
    console.log(data);
  };

  const handleError = (value) => {
    setError(value);
  };

  const handleSuccess = (value) => {
    setSuccess(value);
  };

  return (
    <>
      <Header />
      <main className="profile-cards__main">
        <div className="main-responsive">
          <Preview
            name={nameToDisplay}
            job={jobToDisplay}
            phone={data.phone}
            photo={data.photo}
            email={data.email}
            linkedin={data.linkedin}
            github={data.github}
            textColor={palette.textColor}
            bulletColor={palette.bulletColor}
            iconsColor={palette.iconsColor}
            itemColor={palette.itemColor}
            handleReset={handleReset}
          />
          <Form
            handlePalette={handlePalette}
            handleInput={handleInput}
            handleCollapsable={handleCollapsable}
            themeDesign={themeDesign}
            arrowDesign={arrowDesign}
            themeFill={themeFill}
            arrowFill={arrowFill}
            themeShare={themeShare}
            arrowShare={arrowShare}
            handleImage={handleImage}
            photo={data.photo}
            data={data}
            success = {success}
            handleError={handleError}
            handleSuccess={handleSuccess}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
