import "./Empty.scss";
import imgEmpty from "../../../assets/emp.png";
import { Link } from "react-router-dom";

const Empty = ({ title }) => {
  return (
    <section className="empty">
      <img src={imgEmpty} alt="empty-list" />
      <h4>{title}</h4>
      <p>برای مشاهده محصولات به صفحه زیر بروید:</p>
      <Link to={"/"}>
        <button>صفحه اصلی</button>
      </Link>
    </section>
  );
};

export default Empty;
