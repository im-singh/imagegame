import { Switch, Route } from "react-router-dom";

import "./app.css";

import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import RandomImage from "./RandomPage/RandomPage";
import ResultPage from "./ResultPage/ResultPage";

function App() {
  return (
    <div className="App" data-testid="app">
      <Header />
      <Switch>
        <Route path="/random-image" component={RandomImage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
