const Fill = (props) => {
    const handleChange = (ev) => {
        props.handleCollapsable(ev.currentTarget.dataset.id);
    };

    const handleChangeInput = (ev) => {
        return props.handleInput(ev.currentTarget.value);
    };
    return (
        <fieldset className="fill">
            <div className="page-wrapper">
                <div
                    className="js-collapsible collapsable__section--title js_collapsable_fill_button"
                    data-id="fill"
                    onClick={handleChange}
                >
                    <div className="title-icon">
                        <i className="far fa-keyboard"></i>
                        <h2 className="title-text">rellena</h2>
                    </div>
                    <i
                        className={`far fa-chevron-up js_arrow_fill ${props.arrowFill}`}
                    ></i>
                </div>
            </div>

            <div className="page-wrapper">
                <section
                    className={`fill__section--form js_collapsable_fill ${props.themeFill}`}
                >
                    <input
                        label="Nombre Completo "
                        id="name"
                        name="name"
                        placeholder="Ej: Sally Jill"
                        className="js_name"
                        value={props.inputValue}
                        
                    />

                    <input
                        label="Puesto"
                        id="job"
                        name="job"
                        placeholder="Ej: Front-end unicorn"
                        className=" js_job"
                        value={props.job}
                       
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

                    <input
                        label="Email"
                        id="Email"
                        name="Email"
                        placeholder="Ej: sally-hill@gmail.com"
                        className="js_email"
                        value={props.email}
                       
                    />

                    <input
                        label="phone"
                        id="phone"
                        name="phone"
                        placeholder="Ej: 555-55-55-55"
                        className="js_phone"
                        value={props.phone}
                        
                    />

                    <input
                        label="LinkedIn"
                        id="linkedin"
                        name="linkedin"
                        placeholder="Ej: linkedin.com/in/sally.hill"
                        className="js_linkedin"
                        value={props.linkedin}
                        
                    />

                    <input
                        label="GitHub"
                        id="github"
                        name="github"
                        placeholder="User Ej: sally-hill"
                        className="js_github"
                        value={props.github}
                        
                    />
                </section>
            </div>
        </fieldset>
    );
};

export default Fill;
