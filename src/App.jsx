import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
// import ProductDetail from './pages/ProductDetail'
// import Cart from './pages/Cart'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Checkout from './pages/Checkout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
    </Router>
  )
}

export default App
