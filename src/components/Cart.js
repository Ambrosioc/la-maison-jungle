import React from "react";

function Cart() {
  const monstera = 8;
  const lierre = 10;
  const bouquetDeFleurs = 15;
  const total = monstera + lierre + bouquetDeFleurs;
  return (
    <div>
      <ul>
        <li>Monstera : {monstera}€</li>
        <li> Lierre : {lierre} €</li>
        <li>Bouquet de fleurs : {bouquetDeFleurs} €</li>
      </ul>
      <p>Total : {total} €</p>
    </div>
  );
}

export default Cart;
