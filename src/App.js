
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Cart from './components/Cart';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
