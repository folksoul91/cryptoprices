// This will help us define the client side route
////////////////////////////////////////////////////////////////
import { Route } from "react-router-dom";
////////////////////////////////////////////////////////////////
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route path="/">
        <Main />
      </Route>
      <Route path="/currencies">
        <Currencies />
      </Route>
      <Route path="/price/:symbol">
        <Price />
      </Route>
    </div>
  );
};

export default App;
