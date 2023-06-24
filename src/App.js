import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";

const App = () => {
function App() {
  return (
    <><>
      <h1>BloomTech Eats</h1>
      <p>You can remove this code and create your own header</p>
    </><div className="App">
        <Navigation />
        <Switch>
          <Route path="/order/pizza/" component={PizzaForm} />
          <Route path="/" component={Home} />
        </Switch>
      </div></>
  );
};
}

export default App;