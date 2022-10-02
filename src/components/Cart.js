import React, { useState } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
  const monsteraPrice = 8;
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
      <button onClick={() => updateCart(0)}>Supprimer le panier</button>
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
