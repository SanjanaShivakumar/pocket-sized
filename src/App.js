import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CarouselPage from './Components/Carousel';
import Search from './Components/Search';
import Categories from './Components/Categories';
import Settings from './Components/Settings'
import Article from './Components/Article'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CarouselPage} />
          <Route path="/categories" component={Categories} />
          <Route path="/search" component={Search} />
          <Route path="/settings" component={Settings} />
          <Route path="/article" component={Article} />
      
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
