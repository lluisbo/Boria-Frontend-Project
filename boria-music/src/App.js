import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './pages/home/home'
import { Bio } from './pages/bio/bio'
import { TourDates } from './pages/tourdates/tourDates'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path= '/'>
            <Home />
               </Route>
          <Route exact path= '/bio'>
            <Bio />
              </Route>
          <Route exact path= '/tourdates'>
            <TourDates />
              </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
