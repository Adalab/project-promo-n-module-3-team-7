import Input from "./Input";

const Fill = (props) => {
    const handleChange = (ev) => {
        props.handleCollapsable(ev.currentTarget.dataset.id);
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
                    <Input
                        htmlFor="name"
                        label="Nombre Completo "
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ej: Sally Jill"
                        className="name"
                        handleInput={props.handleInput}
                        handleReset={props.handleReset}
                    />

                   <Input
                        htmlFor="position"
                        label="Puesto"
                        type="text"
                        id="job"
                        name="job"
                        placeholder="Ej: Front-end unicorn"
                        className="job"
                        handleInput={props.handleInput}
                    />

                    {/*<label name="img-selector">Imagen de perfil</label>
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
                        </div>*/}

                    <Input
                        htmlFor="email"
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ej: sally-hill@gmail.com"
                        handleInput={props.handleInput}
                    />

                    <Input
                        htmlFor="phone"
                        label="Teléfono"
                        id="phone"
                        name="phone"
                        placeholder="Ej: 555-55-55-55"
                        handleInput={props.handleInput}
                    />

                    <Input
                        htmlFor="linkedin"
                        label="LinkedIn"
                        id="linkedin"
                        name="linkedin"
                        placeholder="Ej: linkedin.com/in/sally.hill"
                        handleInput={props.handleInput}
                    />

                    <Input
                        htmlFor="github"
                        label="GitHub"
                        id="github"
                        name="github"
                        placeholder="User Ej: sally-hill"
                        handleInput={props.handleInput}
                   />
                </section>
            </div>
        </fieldset>
    );
};

export default Fill;
