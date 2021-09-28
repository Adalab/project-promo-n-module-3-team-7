import { useState } from 'react';
import Design from './Design';
// const [themeDesign, setThemeDesign] = useState('hide');
// const [themeFill, setThemeFill] = useState('hide');
// const [themeShare, setThemeShare] = useState('hide');
// const [arrowDesign, setArrowDesign] = useState('');
// const [arrowFill, setArrowFill] = useState('');
// const [arrowShare, setArrowShare] = useState('');
// const [data, setData] = useState({
//   palette: '',
//   name: '',
//   job: '',
//   phone: '',
//   email: '',
//   linkedin: '',
//   github: '',
//   photo: '',
// });
const Form = (props) => {

  return (

    <section className="section-options-responsive">
      <form className="js_form">


        <Design />

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
              <i className={`far fa-chevron-up js_arrow_fill ${arrowFill}`}></i>
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
                onChange={handleInput}
                value={data.name}
              />

              <label htmlFor="position">Puesto</label>
              <input
                type="text"
                id="job"
                name="job"
                placeholder="Ej: Front-end unicorn"
                onChange={handleInput}
                value={data.job}
              />

              <label name="img-selector">Imagen de perfil</label>
              <div className="action">
                <label className="action__upload-btn" htmlFor="img-selector">
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
                value={data.email}
                placeholder="Ej: sally-hill@gmail.com"
                className="js_email"
                onChange={handleInput}
              />

              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ej: 555-55-55-55"
                className="js_phone"
                value={data.phone}
                onChange={handleInput}
              />

              <label htmlFor="linkedin">LinkedIn</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                placeholder="Ej: linkedin.com/in/sally.hill"
                className="js_linkedin"
                value={data.linkedin}
                onChange={handleInput}
              />

              <label htmlFor="github">GitHub</label>
              <input
                type="text"
                id="github"
                name="github"
                value={data.github}
                placeholder="User Ej: sally-hill"
                className="js_github"
                onChange={handleInput}
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
                <i className={`far icon1 fas fa-share-alt ${arrowShare}`}></i>
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
                    <i className="icon3 fab fa-twitter"></i> &nbsp; Compartir en
                    twitter
                  </a>
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};
export default Form;
