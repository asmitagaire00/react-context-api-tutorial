import { useContext } from "react";
import { CartContext } from "../../Context";
import "./SingleProduct.css";

export default function SingleProduct({ prod }) {
  const handleAddItem = (e) => {
    e.preventDefault();
    setCart([...cart, prod]);
    console.log("prodname", prod);
  };

  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="singleproduct">
      <div className="singleproduct-wrapper">
        <div className="image-wrapper">
          <img src={prod.image} alt="productImage" className="product-image" />
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
          <button className="singleproduct-button" onClick={handleAddItem}>
            Add item
          </button>
          <button className="singleproduct-button">Delete item</button>
        </div>
      </div>
    </div>
  );
}
