import Items from "./components/Items";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Items name="MacBook" price={1000} />
      <Items name="Laptop" price={500} />
      <Items name="Mobile" price={300} />
      <Cart />
    </>
  );
}

export default App;
