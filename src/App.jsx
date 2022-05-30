import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

import "./App.css";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home cart={cart} setCart={setCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} setCart={setCart} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
