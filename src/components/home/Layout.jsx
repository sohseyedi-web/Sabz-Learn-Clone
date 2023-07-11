import Footer from './footer/Footer'
import Header from './header/Header'
import ProductList from './productList/ProductList'
import Container from './../../container/Container';

const Layout = () => {
  return (
    <Container>
        <Header/>
        <ProductList/>
        <Footer/>
    </Container>
  )
}

export default Layout