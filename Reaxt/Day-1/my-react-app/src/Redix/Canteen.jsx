import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./store/CartSlice";

function Canteen() {
  const menu = [
    { id: 1, name: "Burger" },
    { id: 2, name: "Fries" },
    { id: 3, name: "Coke" },
  ];

  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Canteen Order App</h1>

      <h3>Menu</h3>
      {menu.map((food) => (
        <div key={food.id}>
          {food.name}
          <button onClick={() => dispatch(addItem(food))}>Add +</button>
          <button onClick={() => dispatch(removeItem(food.id))}>
            Remove -
          </button>
        </div>
      ))}

      <h2> Cart: {total} items</h2>
      <ul>
        {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Canteen;