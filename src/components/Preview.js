import imagePreview from '../images/img_girl.jpg';
import '../styles/App.scss';

const Preview = (props) => {
  return (
    <section className="preview section-prewiew-responsive">
      <div className="preview-container">
        <div className="preview__button js-preview__button">
          <i className="far fa-trash-alt"></i>
          <p className="preview__button--reset ">Reset</p>
        </div>

        <div className="preview__card">
          <div className="preview__card--description">
            <div className="preview__card--bullet js_bullet"></div>
            <div className="preview__card--title js_title">
              <h2 className="preview__card--name js_preview_name">
                {props.name}
              </h2>
              <h3 className="preview__card--job js_preview_job">{props.job}</h3>
            </div>
          </div>
          <div
            className="js__profile-image preview__photo"
            style={{ backgroundImage: `url(${imagePreview})` }}
          ></div>
          <ul className="preview__rrss">
            <li className="preview__rrss--phone preview__rrss--item js_item">
              <a
                href={`tel: ${props.phone}`}
                className="preview__rrss--link js_preview_phone"
              >
                <i className="fas fa-mobile-alt js_icon"></i>
              </a>
            </li>
            <li className="preview__rrss--item preview__rrss--email js_item">
              <a
                href={`mailto: ${props.email}`}
                className="preview__rrss--link js_preview_email"
              >
                <i className="far fa-envelope js_icon"></i>
              </a>
            </li>
            <li className="preview__rrss--item preview__rrss--linkdin js_item">
              <a
                href={`https://www.linkedin.com/in/${props.linkedin}`}
                className="preview__rrss--link js_preview_linkedin"
                target="_blank"
              >
                <i className="fab fa-linkedin-in js_icon"></i>
              </a>
            </li>
            <li className="preview__rrss--item preview__rrss--github js_item">
              <a
                href={`https://github.com/${props.github}`}
                className="preview__rrss--link js_preview_github"
                target="_blank"
              >
                <i className="fab fa-github-alt js_icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Preview;
