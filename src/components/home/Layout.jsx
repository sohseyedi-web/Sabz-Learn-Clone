import Footer from './footer/Footer'
import Header from './header/Header'
import ProductList from './productList/ProductList'
import Container from './../../container/Container';

const Layout = () => {
  return (
    <section>
        <Header/>
        <ProductList/>
        <Footer/>
    </section>
  )
}

export default Layout