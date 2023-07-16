import * as RiIcon from "react-icons/ri";
import "./TopHeader.scss";

const TopHeader = () => {
  return (
    <section className="container top">
      <form className="top-form">
        <input type="text" placeholder="جستجو ..." />
        <span>
          <RiIcon.RiSearchLine size={25} />
        </span>
      </form>
      <div className="top-status">
        <label className="top-status__toggle">
          <input type="checkbox" />
          <div className="top-status__toggle-slider slider">
            <div className="top-status__toggle-slider__line line"></div>
          </div>
        </label>
        <div className="top-status__toggle-label">دوره های رایگان</div>
      </div>
    </section>
  );
};

export default TopHeader;
