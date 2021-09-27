import logo from '../images/logo-adalab.png';

const Footer = () => {
  return (
    <footer className="footer__container position ">
      <small className="copy"> awesome profile-cards &copy; 2021 </small>

      <div className="logo">
        <a href="https://adalab.es/" title="Visit Adalab">
          <img src={logo} alt="logo-adalab" className="logo__image" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
