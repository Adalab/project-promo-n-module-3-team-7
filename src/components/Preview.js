import imagePreview from '../images/img_girl.jpg';
import '../styles/App.scss';

const Preview = (props) => {
<<<<<<< HEAD
=======
  const avatar = () => {
    if (props.photo === '') {
      return (imagePreview)
    } else {
      return (props.photo)
    }

  }
>>>>>>> 3e7c3e3410f8715ebff26afd0c33e69178fa6866
  return (
    <section className="preview section-prewiew-responsive">
      <div className="preview-container">
        <div
          className="preview__button js-preview__button"
          onClick={props.handleReset}
        >
          <i className="far fa-trash-alt"></i>
          <p className="preview__button--reset ">Reset</p>
        </div>

        <div className="preview__card">
          <div className="preview__card--description">
            <div
              className={`preview__card--bullet js_bullet ${props.bulletColor}`}
            ></div>
            <div className="preview__card--title js_title">
              <h2
                className={`preview__card--name js_preview_name ${props.textColor}`}
              >
                {props.name}
              </h2>
              <h3
                className={`preview__card--job js_preview_job ${props.textColor}`}
              >
                {props.job}
              </h3>
            </div>
          </div>
          <div
            className="js__profile-image preview__photo"
            style={{ backgroundImage: `url(${avatar()})` }}
          ></div>
          <ul className="preview__rrss">
            <li
              className={`preview__rrss--phone preview__rrss--item js_item ${props.itemColor}`}
            >
              <a
                href={`tel: ${props.phone}`}
                className="preview__rrss--link js_preview_phone"
              >
                <i
                  className={`fas fa-mobile-alt js_icon ${props.iconsColor}`}
                ></i>
              </a>
            </li>
            <li
              className={`preview__rrss--item preview__rrss--email js_item ${props.itemColor}`}
            >
              <a
                href={`mailto: ${props.email}`}
                className="preview__rrss--link js_preview_email"
              >
                <i
                  className={`far fa-envelope js_icon ${props.iconsColor}`}
                ></i>
              </a>
            </li>
            <li
              className={`preview__rrss--item preview__rrss--linkdin js_item ${props.itemColor}`}
            >
              <a
                href={`https://www.linkedin.com/in/${props.linkedin}`}
                className="preview__rrss--link js_preview_linkedin"
                target="_blank"
              >
                <i
                  className={`fab fa-linkedin-in js_icon ${props.iconsColor}`}
                ></i>
              </a>
            </li>
            <li
              className={`preview__rrss--item preview__rrss--github js_item ${props.itemColor}`}
            >
              <a
                href={`https://github.com/${props.github}`}
                className="preview__rrss--link js_preview_github"
                target="_blank"
              >
                <i
                  className={`fab fa-github-alt js_icon ${props.iconsColor}`}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Preview;
