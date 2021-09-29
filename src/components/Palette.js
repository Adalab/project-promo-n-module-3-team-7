const Palette = (props) => {
    const handleInput = (ev) => {
        props.handleInput(ev.target.value, ev.target.name);
    };
    return(
        <div className={`design__palette design__palette--${props.colorSpan}`}>
                        <div className="design__palette--input">
                            <input
                                className="design__input js_palette js_palette_one"
                                id={props.id}
                                type="radio"
                                value={props.value}
                                name={props.name}
                                onChange={handleInput}
                            />
                        </div>
                        <label htmlFor="palette" className="design__wrapper-palette">
                            <span className={`box-design design__palette--${props.colorSpan}-color-one`}></span>
                            <span className={`box-design design__palette--${props.colorSpan}-color-two`}></span>
                            <span className={`box-design design__palette--${props.colorSpan}-color-three`}></span>
                        </label>
                    </div>
    )
}
export default Palette;