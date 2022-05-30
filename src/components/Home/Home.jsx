import SingleProduct from "../SingleProduct/SingleProduct";
import "./Home.css";
const { faker } = require("@faker-js/faker");

export default function Home() {
  faker.seed(100);
  const productsArray = [...Array(10)].map((p) => ({
    id: faker.random.numeric(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(),
  }));

  return (
    <div className="home">
      {productsArray.map((prod) => {
        return <SingleProduct prod={prod} key={prod.price + prod.id} />;
      })}
    </div>
  );
}
