import "./Products.scss";
import dataItem from "../../data/dataItem";
import ProductCard from "../common/ProductCard/ProductCard";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "../../container/navbar/Navbar";

const Products = () => {
  return (
    <>
      <Navbar />
      <section className="products">
        <Sidebar />
        <div className="products-lists">
          {dataItem.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
