import React, { useEffect, useState } from "react";
import "../../../styles/Cart.css";

function Cart({ cart, updateCart }) {
  const [isOpened, setIsOpened] = useState(false);
  const items = Object.keys(cart);
  const total = items.reduce(
    (acc, item) => acc + cart[item].amount * cart[item].price,
    0
  );

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);

  return isOpened ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpened(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total : {total} €</h3>
          <button onClick={() => updateCart([])}>Supprimer le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide !</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpened(true)}
      >
        Ouvrir le panier
      </button>
    </div>
  );
}

export default Cart;
