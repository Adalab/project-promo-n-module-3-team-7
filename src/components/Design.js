import Palette from './Palette';
const Design = (props) => {
    const handleChange = (ev) => {

        props.handleCollapsable(ev.currentTarget.dataset.id);

    };
    return (
        <fieldset className="design">
            <div className="page-wrapper">
                <div
                    className="js-collapsible collapsable__section--title-1 js_collapsable_design_button"
                    data-id="design"
                    onClick={handleChange}
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
                className={`page-wrapper design__container selection js_collapsable_design ${props.themeDesign}`}
            >
                <legend className="design__title">Colores</legend>

                <div className="design__wrapper--pallets">
                    <Palette name="palette" value="1" id="palette-one" colorSpan="one" handleInput={props.handleInput} />
                    <Palette name="palette" value="2" id="palette-two" colorSpan="two" handleInput={props.handleInput} />
                    <Palette name="palette" value="3" id="palette-three"
                    colorSpan="three" handleInput={props.handleInput} />


                </div>
            </div>
        </fieldset>
    )
}

export default Design