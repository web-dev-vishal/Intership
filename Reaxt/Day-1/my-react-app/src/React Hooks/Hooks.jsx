import { useState, useEffect, useMemo } from "react";

export default function Hooks() {
  const [itemCount, setItemCount] = useState(1);
  const [price, setPrice] = useState(100);
  const totalCount = useMemo(() => {
    return itemCount * price;
  }, [itemCount, price]);

  useEffect(() => {
    document.title = `Items: ${itemCount}`;
  }, [itemCount]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <p>Item Count: {itemCount}</p>
      <p>Price: {price}</p>
      <p>Total Count: {totalCount}</p>

      <button onClick={() => setItemCount((c) => c + 1)}> + Increase Count</button>
      <button onClick={() => setItemCount((c) => (c > 1 ? c - 1 : 1))}> - Remove Count</button>
      <button onClick={() => setPrice((p) => p + 50)}> + Increase Price</button>
    </div>
  );
}
