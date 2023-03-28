import './App.css';
import { Landing, Form, Home , Contacto, Acerca} from './views';
import {Route} from "react-router-dom"


function App() {
  // const location= useLocation();
  return (
    <div className="App">
      {/* {location.pathname !== "/" && <NavBar/>} */}
  
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/create" component={Form}/>
      <Route exact path="/acerca" component={Acerca} />
      <Route exact path="/contacto" component={Contacto} />
    </div>
  );
}

export default App;
