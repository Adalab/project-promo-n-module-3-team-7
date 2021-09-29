import { useState } from "react";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
const Form = (props) => {
  return (
    <section className="section-options-responsive">
      <form className="js_form">

        <Design
          handleCollapsable={props.handleCollapsable}
          themeDesign={props.themeDesign}
          arrowDesign={props.arrowDesign}
        />
        <Fill
          handleCollapsable={props.handleCollapsable}
          themeFill={props.themeFill}
          arrowFill={props.arrowFill}
          handleInput={props.handleInput}
          inputValue={props.inputValue}

        />
        <Share
          handleCollapsable={props.handleCollapsable}
          themeShare={props.themeShare}
          arrowShare={props.arrowShare}
        />
      </form>
    </section>
  );
};
export default Form;
