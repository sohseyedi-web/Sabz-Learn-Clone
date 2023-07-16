import Container from "../../container/Container";
import dataItem from "../../data/dataItem";
import ProductCard from "../common/ProductCard/ProductCard";
import TopHeader from "./header/TopHeader";
import "./Products.scss";

const Products = () => {
  return (
    <Container>
      <section className="products ">
        <TopHeader />
        <div className="products-container container">
          {dataItem.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Products;
