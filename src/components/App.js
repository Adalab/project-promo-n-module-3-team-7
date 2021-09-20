// Fichero src/components/App.js

import '../styles/App.scss';
import logoHeader from '../images/logo-awesome-profile-cards.svg';
import logo from '../images/logo-adalab.png';
import imagePreview from '../images/img_girl.jpg';
import { useState } from 'react';

function App() {
  const [themeDesign, setThemeDesign] = useState('hide');
  const [themeFill, setThemeFill] = useState('hide');
  const [themeShare, setThemeShare] = useState('hide');
  const [arrowDesign, setArrowDesign] = useState('');
  const [arrowFill, setArrowFill] = useState('');
  const [arrowShare, setArrowShare] = useState('');

  const handleCollapsable = (ev) => {
    let clickedElement = ev.currentTarget.dataset.id;
    const collapsableElement = console.log(ev.target);
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
      <header className="header__profile-cards">
        <a href="index.html">
          <img
            src={logoHeader}
            alt="logo de awesome profile-cards"
            className="header__image--index"
          />
        </a>
      </header>

      <main className="profile-cards__main">
        <div className="main-responsive">
          <section className="preview section-prewiew-responsive">
            <div className="preview-container">
              <div className="preview__button js-preview__button">
                <i className="far fa-trash-alt"></i>
                <p className="preview__button--reset ">Reset</p>
              </div>

              <div className="preview__card">
                <div className="preview__card--description">
                  <div className="preview__card--bullet js_bullet"></div>
                  <div className="preview__card--title js_title">
                    <h2 className="preview__card--name js_preview_name">
                      Nombre Apellido
                    </h2>
                    <h3 className="preview__card--job js_preview_job">
                      Front-end developer
                    </h3>
                  </div>
                </div>
                <div
                  className="js__profile-image preview__photo"
                  style={{ backgroundImage: `url(${imagePreview})` }}
                ></div>
                <ul className="preview__rrss">
                  <li className="preview__rrss--phone preview__rrss--item js_item">
                    <a href="" className="preview__rrss--link js_preview_phone">
                      <i className="fas fa-mobile-alt js_icon"></i>
                    </a>
                  </li>
                  <li className="preview__rrss--item preview__rrss--email js_item">
                    <a href="" className="preview__rrss--link js_preview_email">
                      <i className="far fa-envelope js_icon"></i>
                    </a>
                  </li>
                  <li className="preview__rrss--item preview__rrss--linkdin js_item">
                    <a
                      href=""
                      className="preview__rrss--link js_preview_linkedin"
                    >
                      <i className="fab fa-linkedin-in js_icon"></i>
                    </a>
                  </li>
                  <li className="preview__rrss--item preview__rrss--github js_item">
                    <a
                      href=""
                      className="preview__rrss--link js_preview_github"
                      target="_blank"
                    >
                      <i className="fab fa-github-alt js_icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section-options-responsive">
            <form className="js_form">
              <fieldset className="design">
                <div className="page-wrapper">
                  <div
                    className="js-collapsible collapsable__section--title-1 js_collapsable_design_button"
                    data-id="design"
                    onClick={handleCollapsable}
                  >
                    <div className="title-icon">
                      <i className="far fa-object-ungroup"></i>
                      <h2 className="title-text">diseña</h2>
                    </div>
                    <i
                      className={`far fa-chevron-up js_arrow_design ${arrowDesign}`}
                    ></i>
                  </div>
                </div>

                <div
                  className={`page-wrapper design__container selection js_collapsable_design ${themeDesign}`}
                >
                  <legend className="design__title">Colores</legend>

                  <div className="design__wrapper--pallets">
                    <div className="design__palette design__palette--one">
                      <div className="design__palette--input">
                        <input
                          className="design__input js_palette js_palette_one"
                          id="palette-one"
                          type="radio"
                          value="1"
                          name="palette"
                        />
                      </div>
                      <label
                        htmlFor="palette"
                        className="design__wrapper-palette"
                      >
                        <span className="box-design design__palette--one-color-one"></span>
                        <span className="box-design design__palette--one-color-two"></span>
                        <span className="box-design design__palette--one-color-three"></span>
                      </label>
                    </div>

                    <div className="design__palette design__palette--two">
                      <div className="design__palette--input">
                        <input
                          className="design__input js_palette js_palette_two"
                          id="palette-two"
                          type="radio"
                          value="2"
                          name="palette"
                        />
                      </div>
                      <label
                        htmlFor="palette"
                        className="design__wrapper-palette"
                      >
                        <span className="box-design design__palette--two-color-one"></span>
                        <span className="box-design design__palette--two-color-two"></span>
                        <span className="box-design design__palette--two-color-three"></span>
                      </label>
                    </div>

                    <div className="design__palette design__palette--three">
                      <div className="design__palette--input">
                        <input
                          className="design__input js_palette js_palette_three"
                          id="palette-three"
                          type="radio"
                          value="3"
                          name="palette"
                        />
                      </div>
                      <label
                        htmlFor="palette1"
                        className="design__wrapper-palette"
                      >
                        <span className="box-design design__palette--three-color-one"></span>
                        <span className="box-design design__palette--three-color-two"></span>
                        <span className="box-design design__palette--three-color-three"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="fill">
                <div className="page-wrapper">
                  <div
                    className="js-collapsible collapsable__section--title js_collapsable_fill_button"
                    data-id="fill"
                    onClick={handleCollapsable}
                  >
                    <div className="title-icon">
                      <i className="far fa-keyboard"></i>
                      <h2 className="title-text">rellena</h2>
                    </div>
                    <i
                      className={`far fa-chevron-up js_arrow_fill ${arrowFill}`}
                    ></i>
                  </div>
                </div>

                <div className="page-wrapper">
                  <section
                    className={`fill__section--form js_collapsable_fill ${themeFill}`}
                  >
                    <label htmlFor="name">Nombre completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ej: Sally Jill"
                      className="name js_name"
                    />

                    <label htmlFor="position">Puesto</label>
                    <input
                      type="text"
                      id="job"
                      name="job"
                      placeholder="Ej: Front-end unicorn"
                    />

                    <label name="img-selector">Imagen de perfil</label>
                    <div className="action">
                      <label
                        className="action__upload-btn"
                        htmlFor="img-selector"
                      >
                        Añadir imagen
                      </label>
                      <input
                        type="file"
                        name="photo"
                        id="img-selector"
                        className="action__hiddenField js__profile-upload-btn"
                      />
                      <div className="profile__preview js__profile-preview"></div>
                    </div>

                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Ej: sally-hill@gmail.com"
                      className="js_email"
                    />

                    <label htmlFor="phone">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Ej: 555-55-55-55"
                      className="js_phone"
                    />

                    <label htmlFor="linkedin">LinkedIn</label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      placeholder="Ej: linkedin.com/in/sally.hill"
                      className="js_linkedin"
                    />

                    <label htmlFor="github">GitHub</label>
                    <input
                      type="text"
                      id="github"
                      name="github"
                      placeholder="User Ej: sally-hill"
                      className="js_github"
                    />
                  </section>
                </div>
              </fieldset>
              <fieldset className="share ">
                <div className="page-wrapper">
                  <div
                    className="js-collapsible collapsable__section--title js_collapsable_share_button"
                    data-id="share"
                    onClick={handleCollapsable}
                  >
                    <div className="title-icon">
                      <i
                        className={`far icon1 fas fa-share-alt ${arrowShare}`}
                      ></i>
                      <h2 className="title-text">comparte</h2>
                    </div>
                    <i className="far fa-chevron-up js_arrow_share"></i>
                  </div>
                </div>

                <div className="page-wrapper">
                  <div
                    className={`share__section--create js_collapsable_share ${themeShare}`}
                  >
                    <button className="share__section--create__button js_share--btn">
                      <i className="icon2 far fa-address-card"></i> &nbsp;Crear
                      tarjeta
                    </button>

                    <div className="share__section--done js_card--done hidden">
                      <h2 className="share__section--done__text js_undone">
                        La tarjeta ha sido creada:
                      </h2>
                      <a
                        className="share__section--done__link js_url"
                        href="#"
                        target="_blank"
                      >
                        https://awesome-profile-card.com?id=A456DF0001
                      </a>

                      <button className="share__section--done__button js_undone2">
                        <a
                          className="share__section--done__button--link js_twitter_link"
                          href=""
                          target="_blank"
                        >
                          <i className="icon3 fab fa-twitter"></i> &nbsp;
                          Compartir en twitter
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </main>

      <footer className="footer__container position ">
        <small className="copy"> awesome profile-cards &copy; 2021 </small>

        <div className="logo">
          <a href="https://adalab.es/" title="Visit Adalab">
            <img src={logo} alt="logo-adalab" className="logo__image" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
