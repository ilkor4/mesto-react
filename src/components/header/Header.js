import logo from '../../logo.svg';

function Header() {
  return(
    <header className="header">
      <img src={logo} alt="Логотип платформы место" className="header__logo" />
    </header>
  );
}

export default Header;
