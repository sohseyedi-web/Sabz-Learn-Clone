import { Link } from "react-router-dom";
import Logo from "../../assets/logo-one.png";
import * as HiIcon from "react-icons/hi";
import "./Navbar.scss";
import { useState } from "react";
import { useProduct } from "../../context/ProductProvider";
import { toPersianNumbers } from "./../../utils/toPersianNumber";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { products } = useProduct();

  return (
    <nav className="navbars">
      <div className="navbars-content container">
        <div className="navbars-content__right">
          <span
            className="navbars-content__right-icon"
            onClick={() => setActive(!active)}
          >
            <HiIcon.HiMenu size={28} />
          </span>
          <Link to={"/"} className="navbars-content__right-logo">
            <img src={Logo} alt="sabzlearn" />
          </Link>
          <ul
            className={
              active
                ? "navbars-content__right-links active-link"
                : "navbars-content__right-links"
            }
          >
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
          <Link to={"/auth"} className="navbars-content__left-btn">
            ورود / عضویت
          </Link>
          <Link to={"/"} className="navbars-content__left-cart">
            <HiIcon.HiOutlineShoppingBag size={26} />
            <span className="navbars-content__left-cart__number">
              {toPersianNumbers(products.length)}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
