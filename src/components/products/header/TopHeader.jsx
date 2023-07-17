import * as RiIcon from "react-icons/ri";
import "./TopHeader.scss";
import { useProductDispatch } from "./../../../context/ProductProvider";
import { useState } from "react";

const TopHeader = () => {
  const dispatch = useProductDispatch();
  const [search, setSearch] = useState("");

  const searchItemHandler = (e) => {
    dispatch({ type: "SEARCH_ITEM", event: e });
    setSearch(e.target.value);
  };

  return (
    <section className="container top">
      <form className="top-form">
        <input
          type="text"
          placeholder="جستجو ..."
          value={search}
          onChange={searchItemHandler}
        />
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
