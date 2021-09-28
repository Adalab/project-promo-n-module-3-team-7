const Design = () => {

    return (
        <fieldset className="design">
            <div className="page-wrapper">
                <div
                    className="js-collapsible collapsable__section--title-1 js_collapsable_design_button"
                    data-id="design"
                    onClick={props.handleChangeCollapsable}
                >
                    <div className="title-icon">
                        <i className="far fa-object-ungroup"></i>
                        <h2 className="title-text">diseña</h2>
                    </div>
                    <i
                        className={`far fa-chevron-up js_arrow_design ${props.arrowDesign}`}
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
                        <label htmlFor="palette" className="design__wrapper-palette">
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
                        <label htmlFor="palette" className="design__wrapper-palette">
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
                        <label htmlFor="palette1" className="design__wrapper-palette">
                            <span className="box-design design__palette--three-color-one"></span>
                            <span className="box-design design__palette--three-color-two"></span>
                            <span className="box-design design__palette--three-color-three"></span>
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
    )
}

export default Design