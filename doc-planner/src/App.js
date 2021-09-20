// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import NavBar from './Components/NavBar';
import AboutUs from './Components/AboutUs';
import Career from './Components/Career';
function App() {
  return (
    // <div className="App">
    <div>
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path='/' component={AboutUs} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/career' component={Career} />
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
