import logo from "../assets/logo.png";
import "../styles/Layout.css";
import { useState } from "react";

import { Banner, Cart, Footer, ShoppingList } from "./container";

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison de la jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </>
  );
}

export default App;
