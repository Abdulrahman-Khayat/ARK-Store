import './App.css';
import HomePage from './components/HomePage'
import {BrowserRouter, Route} from 'react-router-dom'
import Details from './components/Details'
import Cards from './components/Cards'
function App() {
    return (
      <BrowserRouter>
      <div className="App">
          {/* <HomePage /> */}

          <Route exact path="/" component={HomePage}></Route>
          <Route path="/details/:id" component={Details}></Route>
          <Route path="/cards" component={Cards}></Route>
      </div>
      </BrowserRouter>
    );
  }
export default App;
