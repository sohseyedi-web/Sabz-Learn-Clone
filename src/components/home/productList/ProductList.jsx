import "./ProductList.scss";
import dataItem from "./../../../data/dataItem";
import { Link } from "react-router-dom";
import * as RiIcon from "react-icons/ri";
import { toPersianNumbersWithComma } from "./../../../utils/toPersianNumber";

const ProductList = () => {
  return (
    <section className="lists">
      <h4 className="lists-title">دوره های آموزشی</h4>
      <div className="lists-container container">
        {dataItem.map((item) => (
          <div className="lists-container__box" key={item.id}>
            <Link to={`/${item.id}`}>
              <img src={item.cover} alt={item.title} />
            </Link>
            <h5 className="lists-container__box-title">{item.title}</h5>
            <div className="lists-container__box-middle">
              <div className="lists-container__box-middle__price">
                <span>قیمت</span> : {toPersianNumbersWithComma(item.price)}
              </div>
              <div className="lists-container__box-middle__student">
                <span>دانشجو</span> : {toPersianNumbersWithComma(item.student)}
              </div>
            </div>
            <div className="lists-container__box-action">
              <button className="lists-container__box-action__btn">
                ثبت نام دوره
              </button>
              <div className="lists-container__box-action__left">
                <span>
                  <RiIcon.RiBookmarkLine size={26} />
                </span>
                <span>
                  <RiIcon.RiHeart3Line size={26} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
