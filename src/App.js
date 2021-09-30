
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';
import ContactMe from './Pages/ContactMe';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path ='/' component={Home} exact/>
          <Route path ='/AboutMe' component={AboutMe} />
          <Route path ='/Portfolio' component={Portfolio} />
          <Route path ='/ContactMe' component={ContactMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
