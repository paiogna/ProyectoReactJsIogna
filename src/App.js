import NavBar from "./components/Navbar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import Footer from "./components/Footer/Footer"
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Home from "./views/Home/Home"
import ProductDetail from "./views/ProductDetail/ProductDetail"
import Products from "./views/Products/Products"
import Category from "./views/Category/Category"
import Cart from "./views/Cart/Cart"

function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
          <Route exact path="/category/:categoryId" element={<Category />} />
          <Route exact path="/Cart" element={<Cart/>} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;

