import Banner from "./Banner";
import logo from "../assets/logo.png";
// import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison de la jungle</h1>
      </Banner>
      {/* <Cart /> */}
      <ShoppingList />
      <Footer />
    </>
  );
}

export default App;
