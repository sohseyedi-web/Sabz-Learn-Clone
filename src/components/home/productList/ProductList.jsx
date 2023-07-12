import "./ProductList.scss";
import dataItem from "./../../../data/dataItem";
import ProductCard from "../../common/ProductCard/ProductCard";

const ProductList = () => {
  return (
    <section className="lists">
      <h4 className="lists-title">دوره های آموزشی</h4>
      <div className="lists-container container">
        {dataItem.map((item) => (
          <ProductCard item={item} key={item.id}/>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
