import { useEffect, useState } from "react";
import "./Cart.css";

export default function Cart({ cart, setCart }) {
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (previousValue, currentValue) =>
          previousValue + Number(currentValue.price),
        0
      )
    );
  }, [cart]);

  return (
    <div>
      <div className="cart-container">
        {cart.map((prod) => {
          return (
            <div className="singleproduct-wrapper" key={prod.price + prod.id}>
              <div className="image-wrapper">
                <img
                  src={prod.image}
                  alt="productImage"
                  className="product-image"
                />
              </div>
              <div className="product-details">
                <div>
                  <span>{prod.name}</span>
                </div>
                <div>
                  <span>${prod.price}</span>
                </div>
              </div>
              <div className="singleproduct-button">
                <button
                  className="singleproduct-button"
                  onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
                >
                  Delete item
                </button>
              </div>
            </div>
          );
        })}
        <div>Total item: {cart.length}</div>
        <span>Total:{total}</span>
      </div>
    </div>
  );
}
