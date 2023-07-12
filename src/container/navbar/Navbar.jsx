import { Link } from "react-router-dom";
import Logo from "../../assets/logo-one.png";
import * as HiIcon from "react-icons/hi";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbars">
      <div className="navbars-content container">
        <div className="navbars-content">
          <div className="navbars-content__right">
            <Link to={"/"} className="navbars-content__right-logo">
              <img src={Logo} alt="sabzlearn" />
            </Link>
            <ul className="navbars-content__right-links">
              <li className="navbars-content__right-links__item">
                <Link to={"/products"}>همه دوره ها</Link>
              </li>
              <li className="navbars-content__right-links__item">
                <Link to={"/"}>مقالات</Link>
              </li>
              <li className="navbars-content__right-links__item">
                <Link to={"/"}>درباره ما</Link>
              </li>
              <li className="navbars-content__right-links__item">
                <Link to={"/"}> سرویس ها</Link>
              </li>
            </ul>
          </div>
          <div className="navbars-content__left">
            <Link to={"/"} className="navbars-content__left-btn">
              ورود / عضویت
            </Link>
            <Link to={"/"} className="navbars-content__left-cart">
              <HiIcon.HiOutlineShoppingBag size={26} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
