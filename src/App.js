import "./App.css";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basename="cat_api_project">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <Listing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
