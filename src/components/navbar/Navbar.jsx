import "./navbar.scss";
import logo from "../../icons/logo.png";
const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navWrapper">
        <div className="navLeft">
          <img className="navLogo" src={logo} alt="logo" />
          <p className="navText">Conact Us</p>
          <p className="navText">About</p>
        </div>
        <div className="navRight">
          <a className="navText" href="https://www.google.com" target="_blank">
            Client Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
