import Container from "../../container/Container";
import { useProduct } from "../../context/ProductProvider";
import ProductCard from "../common/ProductCard/ProductCard";
import TopHeader from "./header/TopHeader";
import "./Products.scss";

const Products = () => {
  const { data } = useProduct();

  return (
    <Container>
      <section className="products ">
        <TopHeader />
        <div className="products-container container">
          {data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Products;
