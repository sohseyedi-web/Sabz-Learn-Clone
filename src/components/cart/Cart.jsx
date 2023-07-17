import "./Cart.scss";
import Container from "./../../container/Container";
import Empty from "./../common/empty/Empty";
import { toPersianNumbersWithComma } from "./../../utils/toPersianNumber";
import { useProductDispatch, useProduct } from "../../context/ProductProvider";
import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";

const Cart = () => {
  const { products } = useProduct();
  const dispatch = useProductDispatch();
  const hasItems = products.length;

  const addItem = () => {
    dispatch({ type: "ADD_ITEM", payload: item });
    toast.success("دوره به سبد خرید افزوده شد");
  };
  const removeItem = () => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
    toast.success("دوره از سبد خرید کم شد");
  };

  const totalPrice = products.reduce(
    (price, total) => price + total.quantity * total.price,
    0
  );

  const totalCount = products.reduce(
    (quantity, total) => quantity + total.quantity,
    0
  );

  return (
    <Container>
      <section className="cart" dir="rtl">
        <div className="container">
          <div className="cart-container">
            {hasItems ? (
              <>
                <div className="cart-container__details">
                  {products.map((cart) => (
                    <div className="cart-container__details-box" key={cart.id}>
                      <div className="cart-container__details-box__right">
                        <img src={cart.cover} alt={cart.title} />
                        <div className="cart-container__details-box__right-product">
                          <div className="cart-container__details-box__right-product__title">
                            {cart.title}
                          </div>
                          <div className="cart-container__details-box__right-product__price">
                            {toPersianNumbersWithComma(cart.price)} تومان
                          </div>
                        </div>
                      </div>
                      <div className="cart-container__details-box__left">
                        <button onClick={() => addItem(cart)}>
                          <RiIcon.RiAddLine />
                        </button>
                        <span className="cart-container__details-box__left-quantity">
                          {cart.quantity}
                        </span>
                        <button onClick={() => removeItem(cart)}>
                          <RiIcon.RiSubtractFill />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-container__factor">
                  <div className="cart-container__factor-total">
                    <span>جمع خرید</span>
                    <span>{toPersianNumbersWithComma(totalPrice)}</span>
                  </div>
                  <div className="cart-container__factor-count">
                    <span>تعداد سفارشات</span>
                    <span>{toPersianNumbersWithComma(totalCount)}</span>
                  </div>
                  <div className="cart-container__factor-offprice">
                    <span>تخفیفات</span>
                    <span>{0}</span>
                  </div>
                  <div className="cart-container__factor-finall">
                    <span>جمع نهایی</span>
                    <span>{toPersianNumbersWithComma(totalPrice)}</span>
                  </div>
                  <button className="cart-container__factor-btn">
                    ثبت سفارش
                  </button>
                </div>
              </>
            ) : (
              <Empty title={"سبد خرید خالی است"} />
            )}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Cart;
