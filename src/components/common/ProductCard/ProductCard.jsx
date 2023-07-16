import "./ProductCard.scss";
import { Link } from "react-router-dom";
import * as RiIcon from "react-icons/ri";
import { toPersianNumbersWithComma } from "./../../../utils/toPersianNumber";

const ProductCard = ({ item }) => {
  return (
    <div className="box" key={item.id}>
      <div className="box-icon">
        <img src={item.icon} />
      </div>
      <h5 className="box-title">{item.title}</h5>
      <div className="box-middle">
        <div className="box-middle__price">
          <span>قیمت</span> : {toPersianNumbersWithComma(item.price)}
        </div>
        <div className="box-middle__student">
          <RiIcon.RiUser3Line size={18} />
          <span>{toPersianNumbersWithComma(item.student)} نفر</span>
        </div>
      </div>
      <div className="box-action">
        <button className="box-action__btn">ثبت نام </button>
        <Link to={`/products/${item.id}`}>
          مشاهده دوره
          <span>
            <RiIcon.RiArrowDropLeftLine size={28} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
