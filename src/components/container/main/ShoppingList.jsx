import { useState } from "react";
import { plantList } from "../../../data/plantList";
import "../../../styles/ShoppingList.css";
import Categories from "./Categories";
import PlantItem from "./PlantItem";

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");

  const categories = plantList.reduce(
    // On crée un tableau avec les catégories
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ul className="lmj-plant-list">
        {plantList
          .filter((cat) => {
            if (activeCategory === "") {
              return true;
            } else {
              return cat.category === activeCategory;
            }
          })
          .map(
            ({
              id,
              cover,
              name,
              water,
              light,
              isSpecialOffer,
              isBestSale,
              price,
            }) => (
              <div>
                <PlantItem
                  id={id}
                  cover={cover}
                  name={name}
                  water={water}
                  light={light}
                  isSpecialOffer={isSpecialOffer}
                  isBestSale={isBestSale}
                  price={price}
                />
                <button onClick={() => addToCart(name, price)}>Ajouter</button>
              </div>
            )
          )}
      </ul>
    </div>
  );
}

export default ShoppingList;
