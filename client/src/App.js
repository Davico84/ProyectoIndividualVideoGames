import './App.css';
import { Landing, Form, Home , Contacto, Acerca, Detail} from './views';
import NavBar from './components/NavBar/NavBar';
import {Route} from "react-router-dom"
// import {Route,useLocaion} from "react-router-dom"

function App() {
  // const location= useLocation();
  return (
    <div className="App">
      {/* {location.pathname !== "/" && <NavBar/>} */}
      <NavBar/>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/create" component={Form}/>
      <Route exact path="/acerca" component={Acerca} />
      <Route exact path="/contacto" component={Contacto} />
      <Route exact path="/detail" component={Detail} />
    </div>
  );
}

export default App;
