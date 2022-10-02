import React from "react";
import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function handleClick(planName) {
  alert(`Vous voulez acheter 1 plante ${planName}? Très bon choix 🌱✨`);
}

function PlantItem({ cover, name, water, light, isSpecialOffer, isBestSale }) {
  return (
    <li
      className="lmj-plant-item"
      onClick={() => {
        handleClick(name);
      }}
    >
      {isSpecialOffer && <div className="lmj-sales">Solde</div>}
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      {isBestSale && <div>Meilleur vente 🔥🔥</div>}
      <div>
        <CareScale careType="light" scaleValue={light} />
        <CareScale careType="water" scaleValue={water} />
      </div>
    </li>
  );
}

export default PlantItem;
