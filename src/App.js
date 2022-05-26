import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./Header/Header"
import Home from "./Home/Home"
import Cart from "./Cart/Cart"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <div className="app">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
