import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './pages/home/home'
import { Bio } from './pages/bio/bio'
import { TourDates } from './pages/tourdates/tourDates'
import { LayOut } from '../src/pages/layout'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path= '/home'>
            <Home />
               </Route>
          <Route exact path= '/bio'>
            <Bio />
              </Route>
          <Route exact path= '/tourdates'>
            <TourDates />
              </Route>
              <LayOut />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
