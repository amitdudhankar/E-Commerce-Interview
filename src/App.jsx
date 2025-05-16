import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Header from "./components/Header";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import MyOrders from "./Pages/MyOrders";
import MyAccount from "./Pages/MyAccount";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/account" element={<MyAccount />} />

      </Routes>
    </Router>
  );
}

export default App;
