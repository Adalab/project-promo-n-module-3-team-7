const Share = (props) => {
    const handleChange = (ev) => {
        props.handleCollapsable(ev.currentTarget.dataset.id);
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
                    <button className="share__section--create__button js_share--btn">
                        <i className="icon2 far fa-address-card"></i> &nbsp;Crear tarjeta
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
    );
};

export default Share;
