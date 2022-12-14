import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout  from './components/Checkout';
import Login from './components/Login';
function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
        <Route path="/login"
        >
          <Login/>
        </Route>
        <Route path="/checkout">
        <Header/>
          <Checkout/>
        </Route>
        
        <Route path="/">
        <Header/>
          <Home/>
        </Route>

      </Switch>
      
    
    </div>
    </Router>
  );
}

export default App;
