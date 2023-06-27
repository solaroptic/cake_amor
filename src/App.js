import "./App.css";
import Nav from "./directories/Nav";
import Home from "./directories/Home";
import { Route, Routes } from "react-router-dom";
import Menu from "./directories/Menu";
import Custom from "./pages/Custom";
import Keto from "./pages/Keto";
import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import Orders from "./directories/Orders";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/keto" element={<Keto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
