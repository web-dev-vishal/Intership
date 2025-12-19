import { useContext, useState, createContext } from "react";

function BurgerCounter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ border: "2px solid purple", padding: "10px", margin: "10px" }}>
      <h1> Burger Counter (useState)</h1>
      <p>Burger in plate: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add Burger</button>
    </div>
  );
}

function ParentComponent() {
  const [money, setMoney] = useState(100);

  return (
    <div
      style={{ border: "2px solid orange", padding: "10px", margin: "10px" }}>
      <h1> Props Drilling Example (useState)</h1>
      <ChildA money={money} setMoney={setMoney}></ChildA>
    </div>
  );
}

function ChildA({ money, setMoney }) {
  return <ChildB money={money} setMoney={setMoney} />;
}

function ChildB({ money, setMoney }) {
  return (
    <div style={{ border: "1px dashed orange", padding: 5 }}>
      <p> 💵 Money in pocket: ₹{money}</p>
      <button onClick={() => setMoney(money - 10)}>Buy Chips - ₹10</button>
    </div>
  );
}

const CartContext = createContext();

function CartProvider() {
  const [items, setItems] = useState([]);

  const addItem = () => setItems([...items, "🥤 Coke"]);

  return (
    <CartContext.Provider value={{ items, addItem }}>
      <CartMenu />
      <CartNavbar />
    </CartContext.Provider>
  );
}

function CartMenu() {
  const { addItem } = useContext(CartContext);

  return (
    <div style={{ border: "2px solid green", padding: "10px", marginTop: 10 }}>
      <h3> 📔 Menu (context API)</h3>
      <button onClick={addItem}>Additems</button>
    </div>
  );
}

function CartNavbar() {
  const { items } = useContext(CartContext);

  return (
    <div style={{ background: "#191818ff", padding: 10 }}>
      Cart Items: {items.length}
    </div>
  );
}

export default function BurgerCounterPage() {
  return (
    <div>
      <h2> State Management Approaches in React </h2>
      <BurgerCounter />
      <ParentComponent />
      <CartProvider />
    </div>
  );
}
