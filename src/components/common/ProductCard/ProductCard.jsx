import "./ProductCard.scss";
import { Link, useNavigate } from "react-router-dom";
import * as RiIcon from "react-icons/ri";
import { toPersianNumbersWithComma } from "./../../../utils/toPersianNumber";
import {
  useProduct,
  useProductDispatch,
} from "./../../../context/ProductProvider";
import { toast } from "react-hot-toast";
import { checkInCart } from "./../../../utils/checkInCart";

const ProductCard = ({ item }) => {
  const dispatch = useProductDispatch();
  const navigate = useNavigate();
  const { products } = useProduct();

  const addItem = () => {
    if (checkInCart(products, item)) {
      navigate("/cart");
    } else {
      dispatch({ type: "ADD_ITEM", payload: item });
      toast.success("دوره به سبد خرید افزوده شد");
    }
  };

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
        <button
          onClick={addItem}
          className={
            checkInCart(products, item)
              ? "box-action__btn btn-cart"
              : "box-action__btn "
          }
        >
          {checkInCart(products, item) ? "ادامه سفارش" : "ثبت نام"}
        </button>
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
