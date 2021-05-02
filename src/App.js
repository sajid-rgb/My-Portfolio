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
import { createContext, useState } from 'react';
import ContactMe from './Components/Home/ContactMe/ContactMe';
import Footer from './Components/Home/Footer/Footer';
export const ContactContext = createContext()
function App() {
  const [isSubmit,setIsSubmit] = useState({})
  return (
    <div className="App">
      <ContactContext.Provider value={[isSubmit,setIsSubmit]}>
      <Router>
        
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>
          <Route path="/work"><Projects></Projects></Route>
          <Route path="/about"><AboutMe></AboutMe></Route>
          <Route path="/blog"><Blogs></Blogs></Route>
          <Route path="/contact">
            <Navigation></Navigation>
            <ContactMe></ContactMe>
            {/* <Footer></Footer> */}
            </Route>
        </Switch>
      </Router>
      
      </ContactContext.Provider>
    </div>
  );
}

export default App;
