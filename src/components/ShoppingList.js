import { plantList } from "../data/plantList";
import CareScale from "./CareScale";
import "../styles/ShoppingList.css";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((e) => (
          <li key={e.id} className="lmj-plant-item">
            {e.name}
            {e.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
            {e.isBestSale && <div>Meilleur vente 🔥 </div>}
            <CareScale careType="light" scaleValue={e.light} />
            <CareScale careType="water" scaleValue={e.water} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
