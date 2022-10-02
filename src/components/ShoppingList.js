import { plantList } from "../data/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";

function ShoppingList({ cart, updateCart }) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div className="lmj-shopping-list">
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(
          ({ id, cover, name, water, light, isSpecialOffer, isBestSale }) => (
            <div>
              <PlantItem
                id={id}
                cover={cover}
                name={name}
                water={water}
                light={light}
                isSpecialOffer={isSpecialOffer}
                isBestSale={isBestSale}
              />
              <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
            </div>
          )
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
