import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
