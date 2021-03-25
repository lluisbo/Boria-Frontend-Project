import { BrowserRouter, Route, Switch } from "react-router-dom";
import TourDates from '../src/pages/tourDates'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path= '/tourdates'>
            <TourDates />
              </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
