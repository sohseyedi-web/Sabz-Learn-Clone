import "./Single.scss";
import Container from "./../../container/Container";
import { Link, useParams } from "react-router-dom";
import { toPersianNumbersWithComma } from "./../../utils/toPersianNumber";
import { checkInCart } from "./../../utils/checkInCart";
import {
  useProduct,
  useProductDispatch,
} from "./../../context/ProductProvider";
import { toast } from "react-hot-toast";
import Comments from "./comments/Comments";

const Single = () => {
  const { id } = useParams();
  const { data, products } = useProduct();
  const dispatch = useProductDispatch();

  const addItem = (item, cart) => {
    if (checkInCart(products, cart)) {
      navigate("/cart");
    } else {
      dispatch({ type: "ADD_ITEM", payload: item });
      toast.success("دوره به سبد خرید افزوده شد");
    }
  };

  return (
    <Container>
      <section className="single">
        <div className="container single-container">
          <div className="single-container__cover">
            <img src={data[id].cover} alt={data[id].title} />
          </div>
          <div className="single-container__details">
            <div className="single-container__details-title">
              نام دوره : <span>{data[id].title}</span>
            </div>
            <div className="single-container__details-price">
              قیمت : <span>{toPersianNumbersWithComma(data[id].price)}</span>{" "}
              تومان
            </div>
            <div className="single-container__details-price">
              مدرس : <span>سبزلرن </span>
            </div>
            <p className="single-container__details-desc">
              تعداد <span>{toPersianNumbersWithComma(data[id].student)}</span>{" "}
              نفر این دوره را خریداری کردند.
            </p>
            <div className="single-container__details-buttons">
              <Link to={"/products"}>مشاهده دروس</Link>
              <button
                onClick={() => addItem(data[id], data[id])}
                className={
                  checkInCart(products, data[id])
                    ? "single-container__details-buttons__cart btn-cart"
                    : "single-container__details-buttons__cart"
                }
              >
                {checkInCart(products, data[id]) ? "ادامه سفارش" : "ثبت نام"}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Comments/>
    </Container>
  );
};

export default Single;
