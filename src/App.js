
import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import SideBar from './Components/Sidebar'
import {data} from '../src/Utils/resumeData';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';
import ContactMe from './Pages/ContactMe';

const aboutMeData = {name: data.name,title: data.title,birth: data.birthdate,email: data.email,location: data.location}
const  socialData = { data: data.social }
const  professionalExperienceData = { data: data.professionalExperience }
const  educationTraningData = { data: data.educationTraning }
const  serivcesData = { data: data.serivces }
const  portefolioData = { data: data.portefolio }

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Router>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
        <Switch>
          <Route path ='/' component={Home} exact/>
          <Route path ='/AboutMe' component={AboutMe} />
          <Route path ='/Portfolio' component={Portfolio} />
          <Route path ='/ContactMe' component={ContactMe} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
