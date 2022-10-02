import React, { useState } from "react";
import "../styles/Cart.css";

function Cart() {
  const monsteraPrice = 8;
  const [cart, updateCart] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  return isOpened ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpened(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      <div>
        <li>Monstera : {monsteraPrice}€</li>
        <button
          onClick={() => {
            updateCart(cart + 1);
          }}
        >
          Ajouter
        </button>
      </div>
      <h3>Total : {monsteraPrice * cart} €</h3>
    </div>
  ) : (
    <button
      className="lmj-cart-toggle-button"
      onClick={() => setIsOpened(true)}
    >
      Ouvrir le panier
    </button>
  );
}

export default Cart;
