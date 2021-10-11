const Share = (props) => {
  const handleChange = (ev) => {
    props.handleCollapsable(ev.currentTarget.dataset.id);
  };
  const handleCreate = () => {
    console.log(props.data);
    fetch('http://localhost:3000/card', {
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
     const renderResponse = () => {
       if(props.success && props.error===''){
         return ( 
           <>
         <h2 className="share__section--done__text js_undone">
         La tarjeta ha sido creada:
       </h2>
       <a
         className="share__section--done__link js_url"
         href={`${props.success}`}
         target="_blank"
         rel="noreferrer"
       >{props.success}
       </a>
       <button className="share__section--done__button js_undone2">
              <a
                className="share__section--done__button--link js_twitter_link"
                href={`https://twitter.com/intent/tweet?url=${props.success}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="icon3 fab fa-twitter"></i> &nbsp; Compartir en
                twitter
              </a>
            </button>
       </>);
       }else if(props.success==='' && props.error){
       if (props.error.includes('name')) {
        return 'Ups❕ 😓, debes rellenar tu nombre';
      } else if (props.error.includes('job')) {
        return 'Ups❕ 😓, debes rellenar tu profesión';
      } else if  (props.error.includes('photo')){
       return 'Ups❕ 😓, debes rellenar tu foto';
     } else if  (props.error.includes('email')){
        return 'Ups❕ 😓, debes rellenar tu email';
     } else if (props.error.includes('phone')){
       return 'Ups❕ 😓, debes rellenar tu móvil';
     } else if (props.error.includes('linkedin')) {
       return 'Ups❕ 😓, debes rellenar tu linkedin';
     } else if (props.error.includes('github')) {
       return 'Ups❕ 😓, debes rellenar tu github';
     } else{
       return'Ups❕ 😓, debes escoger una paleta de colores 🌈';
    }}
  };

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
           {renderResponse()}

          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default Share;
