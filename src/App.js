import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './Components/Projects/Projects';
import Navigation from './Components/Home/Navigation/Navigation';
import AboutMe from './Components/AboutMe/AboutMe';
import Blogs from './Components/Blogs/Blogs';
function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>
          <Route path="/work"><Projects></Projects></Route>
          <Route path="/about"><AboutMe></AboutMe></Route>
          <Route path="/blog"><Blogs></Blogs></Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
