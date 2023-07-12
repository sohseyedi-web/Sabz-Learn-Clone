import "./ProductCard.scss";
import { Link } from "react-router-dom";
import * as RiIcon from "react-icons/ri";
import { toPersianNumbersWithComma } from "./../../../utils/toPersianNumber";

const ProductCard = ({ item }) => {
  return (
    <div className="box" key={item.id}>
      <Link to={`/${item.id}`}>
        <img src={item.cover} alt={item.title} />
      </Link>
      <h5 className="box-title">{item.title}</h5>
      <div className="box-middle">
        <div className="box-middle__price">
          <span>قیمت</span> : {toPersianNumbersWithComma(item.price)}
        </div>
        <div className="box-middle__student">
          <span>دانشجو</span> : {toPersianNumbersWithComma(item.student)}
        </div>
      </div>
      <div className="box-action">
        <button className="box-action__btn">ثبت نام دوره</button>
        <div className="box-action__left">
          <span>
            <RiIcon.RiBookmarkLine size={26} />
          </span>
          <span>
            <RiIcon.RiHeart3Line size={26} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
