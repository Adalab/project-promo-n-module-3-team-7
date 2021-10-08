const Share = (props) => {
  const handleChange = (ev) => {
    props.handleCollapsable(ev.currentTarget.dataset.id);
  };
  const handleCreate = () => {
    console.log(props.data);
    fetch('https://awesome-profile-cards.herokuapp.com/card', {
      method: 'POST',
      body: JSON.stringify(props.data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);

        // if (response.success === false) {
        //   props.handleError(response.error);
        //   props.handleSuccess('');
        // } else if (response.success === true) {
        //   props.handleSuccess(response.cardURL);
        //   props.handleError('');
        // }

        if (response.success === true) {
          props.handleSuccess(response.cardURL);
          props.handleError('');
        } else if (response.success === false) {
          props.handleError(response.error);
          props.handleSuccess('');
        }
      });
  };
  //   const renderError = (props) => {
  //     if (props.data.error.includes('name')) {
  //       return 'Ups❕ 😓, debes rellenar tu nombre';
  //     } else if (props.error === 'Mandatory fields: job') {
  //       return 'Ups❕ 😓, debes rellenar tu profesión';
  //     } else {
  //       return 'Ups❕ 😓, debes rellenar tu foto';
  // } else {
  //     return 'Ups❕ 😓, debes rellenar tu email';
  //   } else if (response.error === 'Mandatory fields: name') {
  //     return;
  //     ('Ups❕ 😓, debes rellenar correctamente tu email, falta un @ o algo más 😉');
  //   } else if (error.phone === '') {
  //     return 'Ups❕ 😓, debes rellenar tu móvil';
  //   } else if (!validatePhone(error.phone)) {
  //     return;
  //     ('Ups❕ 😓, debes rellenar completo tu móvil, falta algo 😉');
  //   } else if (error.linkedin === '') {
  //     return 'Ups❕ 😓, debes rellenar tu linkedin';
  //   } else if (error.github === '') {
  //     return 'Ups❕ 😓, debes rellenar tu github';
  //   } else if (error.palette === '') {
  //     return;
  //     ('Ups❕ 😓, debes escojer una paleta de colores 🌈');
  //  }
  //};

  return (
    <fieldset className="share ">
      <div className="page-wrapper">
        <div
          className="js-collapsible collapsable__section--title js_collapsable_share_button"
          data-id="share"
          onClick={handleChange}
        >
          <div className="title-icon">
            <i className={`far icon1 fas fa-share-alt ${props.arrowShare}`}></i>
            <h2 className="title-text">comparte</h2>
          </div>
          <i className="far fa-chevron-up js_arrow_share"></i>
        </div>
      </div>

      <div className="page-wrapper">
        <div
          className={`share__section--create js_collapsable_share ${props.themeShare}`}
        >
          <button
            onClick={handleCreate}
            className="share__section--create__button js_share--btn"
          >
            <i className="icon2 far fa-address-card"></i> &nbsp;Crear tarjeta
          </button>

          <div className="share__section--done js_card--done">
            <h2 className="share__section--done__text js_undone">
              La tarjeta ha sido creada:
            </h2>
            <a
              className="share__section--done__link js_url"
              href="#"
              target="_blank"
            >
              {props.success}
              {/*{renderError()}*/}
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
  );
};

export default Share;
