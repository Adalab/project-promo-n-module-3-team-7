import logoHeader from '../images/logo-awesome-profile-cards.svg';

const Header = () => {
  return (
    <header className="header__profile-cards">
      <a href="index.html">
        <img
          src={logoHeader}
          alt="logo de awesome profile-cards"
          className="header__image--index"
        />
      </a>
    </header>
  );
};
export default Header;
