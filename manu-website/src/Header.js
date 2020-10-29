import mainImage from "./images/manu.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-name">
        <h1 className="header-name-content">Manu Nair</h1>
      </div>
      <div className="header-image-container">
        <img className="header-image-content" src={mainImage} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
