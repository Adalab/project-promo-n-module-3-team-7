import Design from './Design';
import Fill from './Fill';
import Share from './Share';
const Form = (props) => {
  const handleSubmit =(ev)=>{
    ev.preventDefault(); 
  }

  return (
    <section className="section-options-responsive">
      <form className="js_form" onSubmit={handleSubmit}>
        <Design
          handlePalette={props.handlePalette}
          handleCollapsable={props.handleCollapsable}
          themeDesign={props.themeDesign}
          arrowDesign={props.arrowDesign}
        />
        <Fill
          handleReset={props.handleReset}
          handleCollapsable={props.handleCollapsable}
          handleInput={props.handleInput}
          themeFill={props.themeFill}
          arrowFill={props.arrowFill}
          handleImage={props.handleImage}
          photo={props.photo}
        />
        <Share
          handleCollapsable={props.handleCollapsable}
          themeShare={props.themeShare}
          arrowShare={props.arrowShare}
          data={props.data}
          handleError={props.handleError}
          handleSuccess={props.handleSuccess}
          success={props.success}
        />
      </form>
    </section>
  );
};
export default Form;
